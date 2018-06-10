import {Tween, Group} from "@tweenjs/tween.js";
import {PlayerView} from "./view";
import {move} from './move';
import {death} from "./death";
import {Subject} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

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

    this.touchInfoSubject = new Subject();
    this.touchInfoSubject.pipe(
      map(v => ({isTouch: v.isTouch, x: v.target.x, y: v.target.y})),
      distinctUntilChanged((a, b) =>
        a.isTouch === b.isTouch
        && a.x === b.x
        && a.y === b.y
      )
    ).subscribe(touchInfo => {
      this.moveTween.removeAll();
      if (touchInfo.isTouch) {
        this._move(touchInfo.x, touchInfo.y);
      }
    });
  }

  gameLoop(time, touchInfo) {
    this.moveTween.update(time);
    this.deathAnimationTween.update(time);

    if (!this.isDeath) {
      this.touchInfoSubject.next(touchInfo)
    }

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