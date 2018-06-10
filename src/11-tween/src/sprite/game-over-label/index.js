import {Group, Tween} from '@tweenjs/tween.js';
import {GameOverLabelView} from './view';

export class GameOverLabel {
  constructor() {
    this.opacity = 0;
    this.tweenGroup = new Group();
    this.view = new GameOverLabelView();
  }

  gameLoop(time) {
    this.tweenGroup.update(time);
    this.view.engage(this);
  }

  visible() {
    const tween = new Tween(this, this.tweenGroup);
    tween.to({opacity: 1}, 3000)
      .delay(1000);
    tween.start();
  }
}