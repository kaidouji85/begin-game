// ベクトル関係
import {getScala} from "./vector/scala";
import {Player} from "./sprite/player";
import {Enemy} from './sprite/enemy';
import {TouchInfo} from "./touch/touch-info";

const player = new Player();
const enemy = new Enemy(window.innerWidth - 256, 128);
const touchInfo = new TouchInfo();

// 当たり判定関連
function isOverlap(player, enemy) {
  const vx = player.x - enemy.x;
  const vy = player.y - enemy.y;
  const distance = getScala(vx, vy);

  return distance <= 126;
}

// ゲームループ関連
function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  if (!player.isDeath && isOverlap(player, enemy)) {
    player.isDeath = true;
    alert('ゲームオーバー');
  }

  player.gameLoop(touchInfo);
  enemy.gameLoop();
}
requestAnimationFrame(gameLoop);