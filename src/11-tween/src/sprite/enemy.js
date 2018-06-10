export const ENEMY_SPEED = 4;

/** 敵 */
export class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.element = document.createElement('div');
    this.element.setAttribute('class', 'enemy');
    document.body.appendChild(this.element);
  }

  gameLoop() {
    this.x -= ENEMY_SPEED;
    this._engage();
  }

  _engage() {
    const enemyImg = this.element;
    const ex = this.x - enemyImg.clientWidth / 2;
    const ey = this.y - enemyImg.clientHeight / 2;
    const transform = `translate(${ex}px, ${ey}px)`;
    enemyImg.style.setProperty('transform', transform);
  }
}