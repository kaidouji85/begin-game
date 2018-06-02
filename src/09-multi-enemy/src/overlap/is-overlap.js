import {getScala} from "../vector/scala";

/** 当たり判定 */
export function isOverlap(player, enemy) {
  const vx = player.x - enemy.x;
  const vy = player.y - enemy.y;
  const distance = getScala(vx, vy);

  return distance <= 126;
}