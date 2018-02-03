import PlayerImagePath from '../../player.png';

export class PlayerView {
  constructor() {
    this._img = document.createElement('img');
    this._img.setAttribute('src', PlayerImagePath);
  }

  engage(model) {
    const translate = `translate(${model.pos.x}px, ${model.pos.y}px)`;
    const scale = `scale(${model.scale.x}, ${model.scale.y})`;
    this._img.style.setProperty('transform', `${translate} ${scale}`);
    this._img.style.setProperty('width', '256px');
    this._img.style.setProperty('height', '256px');
  }

  getDOMList() {
    return [this._img];
  }
}