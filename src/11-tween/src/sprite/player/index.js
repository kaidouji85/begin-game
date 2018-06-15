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

  gameLoop(time) {
    this.moveTween.update(time);
    this.deathAnimationTween.update(time);
    this.view.engage(this);
  }

  move(targetX, targetY) {
    this.moveTween.update();
    this.moveTween.removeAll();
    this.moveAnimation(targetX, targetY).start();
  }

  stop() {
    this.moveTween.update();
    this.moveTween.removeAll();
  }

  death() {
    this.deathAnimationTween.update();
    this.deathAnimationTween.removeAll();
    this.deathAnimation().start();
  }

  deathAnimation() {
    return death(this, this.deathAnimationTween);
  }

  moveAnimation(targetX, targetY) {
    return move(this, this.moveTween, targetX, targetY);
  }
}