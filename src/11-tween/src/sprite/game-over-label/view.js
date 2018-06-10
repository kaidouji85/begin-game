export class GameOverLabelView {
  constructor() {
    this.gameOverLabel = document.createElement('div');
    this.gameOverLabel.setAttribute('class', 'game-over');
    document.body.appendChild(this.gameOverLabel);
  }

  engage({opacity}) {
    this.gameOverLabel.style.setProperty('opacity', opacity);
  }
}