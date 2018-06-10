import {Tween} from "@tweenjs/tween.js/src/Tween";

export function visible(gameOverLabel, group) {
  const tween = new Tween(gameOverLabel, group);
  tween.to({opacity: 1}, 3000)
    .delay(500);
  return tween;
}