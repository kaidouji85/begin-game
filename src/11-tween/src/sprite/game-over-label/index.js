import {Group, Tween} from '@tweenjs/tween.js';
import {GameOverLabelView} from './view';
import {visible} from "./visible";

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
    const tween = visible(this, this.tweenGroup);
    tween.start();
  }
}