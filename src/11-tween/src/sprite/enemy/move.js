import {Tween} from "@tweenjs/tween.js/src/Tween";

export const ENEMY_SPEED = 4;

export function move(enemy, group) {
  const tween = new Tween(enemy, group);
  tween.to({x: '-300'}, 1500)
    .repeat(Infinity);
  return tween;
}