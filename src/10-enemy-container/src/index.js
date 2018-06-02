// ベクトル関係
import {Player} from "./sprite/player";
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
    alert('ゲームオーバー');
  }

  player.gameLoop(touchInfo);
  enemyContainer.gameLoop();
}
requestAnimationFrame(gameLoop);