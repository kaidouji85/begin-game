// ベクトル関係
import {Player} from "./sprite/player";
import {Enemy} from './sprite/enemy';
import {TouchInfo} from "./touch/touch-info";
import {isOverlap} from "./overlap/is-overlap";

const player = new Player();
const enemy1 = new Enemy(window.innerWidth - 256, 128);
const enemy2 = new Enemy(window.innerWidth - 256 + 512 * 1 , 128 + 128 * 1);
const enemy3 = new Enemy(window.innerWidth - 256 + 512 * 2 , 128 + 128 * 2);
const touchInfo = new TouchInfo();

// ゲームループ
function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  const isPlayerOverlap = isOverlap(player, enemy1) || isOverlap(player, enemy2) || isOverlap(player, enemy3);

  if (!player.isDeath && isPlayerOverlap) {
    player.isDeath = true;
    alert('ゲームオーバー');
  }

  player.gameLoop(touchInfo);
  enemy1.gameLoop();
  enemy2.gameLoop();
  enemy3.gameLoop();
}
requestAnimationFrame(gameLoop);