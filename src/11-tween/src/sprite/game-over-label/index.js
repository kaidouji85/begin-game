import {Group, Tween} from '@tweenjs/tween.js';

export class GameOverLabel {
  constructor() {
    this.opacity = 0;
    this.tweenGroup = new Group();
    this.gameOverLabel = document.createElement('div');
    this.gameOverLabel.setAttribute('class', 'game-over');
    document.body.appendChild(this.gameOverLabel);
  }

  gameLoop(time) {
    this.tweenGroup.update(time);
    this.engage();
  }

  engage() {
    this.gameOverLabel.style.setProperty('opacity', this.opacity);
  }

  visible() {
    const tween = new Tween(this, this.tweenGroup);
    tween.to({opacity: 1}, 3000)
      .delay(1000);
    tween.start();
  }
}