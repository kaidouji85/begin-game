import TWEEN from '@tweenjs/tween.js';
import PlayerImagePath from './player.png';

export class Player {
  constructor() {
    this.img = document.createElement('img');
    this.img.setAttribute('src', PlayerImagePath);
    this.tweenGroup = new TWEEN.Group();
    this.model = {
      pos: {x: 0, y: 0},
      scale: {x: -1, y: 1}
    };
  }

  getDomList() {
    return [this.img];
  }

  gameLoop(time) {
    this.tweenGroup.update(time);
    const translate = `translate(${this.model.pos.x}px, ${this.model.pos.y}px)`;
    const scale = `scale(${this.model.scale.x}, ${this.model.scale.y})`;
    this.img.style.setProperty('transform', `${translate} ${scale}`);
    this.img.style.setProperty('width', '256px');
    this.img.style.setProperty('height', '256px');
  }

  move() {
    return new TWEEN.Tween(this.model.pos, this.tweenGroup)
      .to({x: 300}, 1000);
  }

  stop() {
    this.tweenGroup.removeAll();
  }
}