import {Tween, Group} from '@tweenjs/tween.js';
import {EnemyView} from "./view";

export const ENEMY_SPEED = 4;

/** 敵 */
export class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.moveTween = new Group();
    this.view = new EnemyView();
  }

  gameLoop(time) {
    this.moveTween.update(time);
    this.view.engage(this);
  }

  _move() {
    const tween = new Tween(this, this.moveTween);
    tween.to({x: '+300'}, 1000)
      .repeat(Infinity)
      .start();
  }
}