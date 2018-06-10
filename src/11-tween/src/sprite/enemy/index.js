import {Tween, Group} from '@tweenjs/tween.js';
import {EnemyView} from "./view";
import {move} from './move';

export const ENEMY_SPEED = 4;

/** 敵 */
export class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.moveTween = new Group();
    this.view = new EnemyView();

    const tween = move(this, this.moveTween);
    tween.start();
  }

  gameLoop(time) {
    this.moveTween.update(time);
    this.view.engage(this);
  }
}