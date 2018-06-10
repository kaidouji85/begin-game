import {Tween} from "@tweenjs/tween.js/src/Tween";

export function death(player, group) {
  const tween = new Tween(player, group);
  tween.to({opacity: 0}, 300);
  return tween;
}