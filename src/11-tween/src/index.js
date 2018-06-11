// ベクトル関係
import {Player} from "./sprite/player/index.js";
import {TouchInfo} from "./touch/touch-info";
import {EnemyContainer} from "./enemy-container/enemy-container";
import {GameOverLabel} from "./sprite/game-over-label/index";

const player = new Player();
const enemyContainer = new EnemyContainer();
const gameOverLabel = new GameOverLabel();
let isTouch = false;

document.addEventListener('mousedown', e => {
  isTouch = true;
  player.move(e.clientX, e.clientY);
});

document.addEventListener('mousemove', e => {
  if (isTouch) {
    player.move(e.clientX, e.clientY);
  }
});

document.addEventListener('mouseup', e => {
  isTouch = false;
  player.stop();
});

// ゲームループ
function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  if (!player.isDeath && enemyContainer.isOverlap(player)) {
    player.isDeath = true;
    player.death();
    gameOverLabel.visible();
  }

  player.gameLoop(time);
  enemyContainer.gameLoop(time);
  gameOverLabel.gameLoop(time);
}
requestAnimationFrame(gameLoop);