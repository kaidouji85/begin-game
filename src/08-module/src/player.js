import {getScala} from "./vector/scala";

export const PLAYER_SPEED = 8;

/** プレイヤー */
export class Player {
  constructor() {
    this.x = 128;
    this.y = 128;
    this.isDeath = false;
  }

  gameLoop(touchInfo) {
    if (!this.isDeath && touchInfo.isTouch) {
      this._move(touchInfo.event.clientX, touchInfo.event.clientY);
    }

    this._engage();
  }

  _engage() {
    const playerImg = document.querySelector('.player');
    const px = this.x - playerImg.clientWidth / 2;
    const py = this.y - playerImg.clientHeight / 2;
    const transform = `translate(${px}px, ${py}px)`;
    const visibility = this.isDeath ? 'hidden' : 'visible';

    playerImg.style.setProperty('transform', transform);
    playerImg.style.setProperty('visibility', visibility);
  }

  _move(tx, ty) {
    const vx = tx - this.x;
    const vy = ty - this.y;
    const scala = getScala(vx, vy);

    if (scala <= 0) {
      return;
    }

    const speed = scala < PLAYER_SPEED ? scala : PLAYER_SPEED;
    this.x += vx / scala * speed;
    this.y += vy / scala * speed;
  }
}