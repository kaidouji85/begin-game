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
    this.onDeathAnimationTweenUpdated = null;

    this.view = new PlayerView();
  }

  gameLoop(time) {
    this.moveTween.update(time);
    this.onMoveTweenUpdated && this.onMoveTweenUpdated();
    this.onMoveTweenUpdated = null;

    this.deathAnimationTween.update(time);
    this.onDeathAnimationTweenUpdated && this.onDeathAnimationTweenUpdated();
    this.onDeathAnimationTweenUpdated = null;

    this.view.engage(this);
  }

  move(targetX, targetY) {
    this.onMoveTweenUpdated = () => {
      this.moveTween.removeAll();
      this.moveAnimation(targetX, targetY).start();
    };
  }

  stop() {
    this.onMoveTweenUpdated = () => {
      this.moveTween.removeAll();
    };
  }

  death() {
    this.onDeathAnimationTweenUpdated = () => {
      this.deathAnimation().start();
    }
  }

  deathAnimation() {
    return death(this, this.deathAnimationTween);
  }

  moveAnimation(targetX, targetY) {
    return move(this, this.moveTween, targetX, targetY);
  }
}