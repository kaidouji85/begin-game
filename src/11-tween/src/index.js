// ベクトル関係
import {Player} from "./sprite/player/index.js";
import {TouchInfo} from "./touch/touch-info";
import {EnemyContainer} from "./enemy-container/enemy-container";

const player = new Player();
const enemyContainer = new EnemyContainer();
const touchInfo = new TouchInfo();

// ゲームループ
function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  if (!player.isDeath && enemyContainer.isOverlap(player)) {
    player.isDeath = true;
    player.deathAnimation();
  }

  player.gameLoop(time, touchInfo);
  enemyContainer.gameLoop(time);
}
requestAnimationFrame(gameLoop);