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
    this.onMoveTweenUpdated = null;
    this.deathAnimationTween = new Group();

    this.view = new PlayerView();
  }

  gameLoop(time, touchInfo) {
    this.moveTween.update(time);
    this.onMoveTweenUpdated && this.onMoveTweenUpdated();
    this.onMoveTweenUpdated = null;

    this.deathAnimationTween.update(time);
    this.view.engage(this);
  }

  move(targetX, targetY) {
    this.onMoveTweenUpdated = () => {
      this.moveTween.removeAll();
      this.moveAnimation(targetX, targetY);
    };
  }

  stop() {
    this.onMoveTweenUpdated = () => {
      this.moveTween.removeAll();
    };
  }

  deathAnimation() {
    const tween = death(this, this.deathAnimationTween);
    tween.start();
  }

  moveAnimation(targetX, targetY) {
    const tween = move(this, this.moveTween, targetX, targetY);
    tween.start();
  }
}