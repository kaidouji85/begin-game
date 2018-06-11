import {Tween, Easing} from "@tweenjs/tween.js/src/Tween";

export function move(enemy, group) {
  const start = new Tween({}, group);
  start
    .to({}, 0)
    .chain(xAxis(enemy, group), yAxis(enemy, group));
  return start;
}

function xAxis(enemy, group) {
  const first = new Tween(enemy, group);
  first.to({x: '-300'}, 1500)
    .repeat(Infinity);

  return first;
}

function yAxis(enemy, group) {
  const first = new Tween(enemy, group);
  const second = new Tween(enemy, group);

  first.to({y: '+400'}, 1500)
    .chain(second)
    .easing(Easing.Quintic.InOut);
  second.to({y: '-400'}, 1500)
    .chain(first)
    .easing(Easing.Quadratic.InOut);

  return first;
}