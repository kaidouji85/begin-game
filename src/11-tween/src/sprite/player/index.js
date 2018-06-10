import {Tween, Group} from "@tweenjs/tween.js";
import {PlayerView} from "./view";
import {move} from './move';
import {death} from "./death";

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
  }

  gameLoop(time, touchInfo) {
    this.moveTween.update(time);
    this.moveTween.removeAll();
    this.deathAnimationTween.update(time);

    if (!this.isDeath && touchInfo.isTouch) {
      this._move(touchInfo.event.clientX, touchInfo.event.clientY);
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