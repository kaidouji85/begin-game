import {Tween, Group} from "@tweenjs/tween.js";
import {PlayerView} from "./view";
import {move} from './move';
import {death} from "./death";
import {Subject} from 'rxjs';
import {distinctUntilChanged, map, filter} from 'rxjs/operators';

/** プレイヤー */
export class Player {
  constructor() {
    this.x = 128;
    this.y = 128;
    this.opacity = 1;
    this.isDeath = false;
    this.moveTween = new Group();
    this.deathAnimationTween = new Group();
    this.view = new PlayerView();

    this.moveSubject = new Subject();
    this.moveSubject.pipe(
      filter(v => v.isTouch),
      map(v => ({x: v.target.x, y: v.target.y})),
      distinctUntilChanged((a, b) => a.x === b.x && a.y === b.y)
    ).subscribe(v => {
      this.moveTween.removeAll();
      this._move(v.x, v.y);
    });

    this.stopSubject = new Subject();
    this.stopSubject.pipe(
      map(v => v.isTouch),
      distinctUntilChanged(),
      filter(v => !v)
    ).subscribe(() => {
      this.moveTween.removeAll();
    });
  }

  gameLoop(time, touchInfo) {
    this.moveTween.update(time);
    this.deathAnimationTween.update(time);

    this.moveSubject.next(touchInfo);
    this.stopSubject.next(touchInfo);

    this.view.engage(this);
  }

  deathAnimation() {
    const tween = death(this, this.deathAnimationTween);
    tween.start();
  }

  _move(targetX, targetY) {
    const tween = move(this, this.moveTween, targetX, targetY);
    tween.start();
  }
}