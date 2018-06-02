export const ENEMY_SPEED = 4;

/** 敵 */
export class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  gameLoop() {
    this.x -= ENEMY_SPEED;
    this._engage();
  }

  _engage() {
    const enemyImg = document.querySelector('.enemy');
    const ex = this.x - enemyImg.clientWidth / 2;
    const ey = this.y - enemyImg.clientHeight / 2;
    const transform = `translate(${ex}px, ${ey}px)`;
    enemyImg.style.setProperty('transform', transform);
  }
}