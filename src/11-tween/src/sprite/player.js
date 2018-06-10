import {Tween, Group} from "@tweenjs/tween.js";
import {getScala} from '../vector/scala';

export const PLAYER_SPEED = 2;

/** プレイヤー */
export class Player {
  constructor() {
    this.x = 128;
    this.y = 128;
    this.opacity = 1;
    this.isDeath = false;
    this.moveTween = new Group();
    this.deathAnimationTween = new Group();

    this.element = document.createElement('div');
    this.element.setAttribute('class', 'player');
    document.body.appendChild(this.element);
  }

  gameLoop(time, touchInfo) {
    this.moveTween.update(time);
    this.moveTween.removeAll();
    this.deathAnimationTween.update(time);

    if (!this.isDeath && touchInfo.isTouch) {
      this._move(touchInfo.event.clientX, touchInfo.event.clientY);
    }

    this._engage();
  }

  deathAnimation() {
    const tween = new Tween(this, this.deathAnimationTween);
    tween.to({opacity: 0}, 300);
    tween.start();
  }

  _engage() {
    const playerImg = this.element;
    const px = this.x - playerImg.clientWidth / 2;
    const py = this.y - playerImg.clientHeight / 2;
    const transform = `translate(${px}px, ${py}px)`;

    playerImg.style.setProperty('transform', transform);
    playerImg.style.setProperty('opacity', this.opacity);
  }

  _move(targetX, targetY) {
    const scala = getScala(this.x - targetX, this.y - targetY);
    const duration = scala * PLAYER_SPEED;
    const tween = new Tween(this, this.moveTween);
    tween.to({x: targetX, y: targetY}, duration);
    tween.start();
  }
}