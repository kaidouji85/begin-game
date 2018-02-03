import TWEEN from '@tweenjs/tween.js';
import {PlayerView} from './view/player-view';
import {PlayerModel} from "./model/player-model";
import {move} from './model/move';

export class Player {
  constructor() {
    this._model = new PlayerModel();
    this._view = new PlayerView();
    this._tweenGroup = new TWEEN.Group();
  }

  getDOMList() {
    return this._view.getDOMList();
  }

  gameLoop(time) {
    this._tweenGroup.update(time);
    this._view.engage(this._model);
  }

  move() {
    return move(this._model, this._tweenGroup);
  }

  stop() {
    this._tweenGroup.removeAll();
  }
}