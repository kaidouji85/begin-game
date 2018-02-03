import TWEEN from '@tweenjs/tween.js';

export function move(model, tweenGroup) {
  return new TWEEN.Tween(model.pos, tweenGroup)
    .to({x: 300}, 1000);
}