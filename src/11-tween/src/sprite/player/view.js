export class PlayerView {
  constructor() {
    this.playerImg = document.createElement('div');
    this.playerImg.setAttribute('class', 'player');
    document.body.appendChild(this.playerImg);
  }

  engage({x, y, opacity}) {
    const playerX = x - this.playerImg.clientWidth / 2;
    const playerY = y - this.playerImg.clientHeight / 2;
    const transform = `translate(${playerX}px, ${playerY}px)`;

    this.playerImg.style.setProperty('transform', transform);
    this.playerImg.style.setProperty('opacity', opacity);
  }
}