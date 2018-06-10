import {getScala} from "../../vector/scala";
import {Tween} from "@tweenjs/tween.js/src/Tween";

export const PLAYER_SPEED = 2;

export function move(player, group, targetX, targetY) {
  const scala = getScala(player.x - targetX, player.y - targetY);
  const duration = scala * PLAYER_SPEED;
  const tween = new Tween(player, group);
  tween.to({x: targetX, y: targetY}, duration);
  return tween;
}