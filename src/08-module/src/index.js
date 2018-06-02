// ベクトル関係
import {Player} from "./sprite/player";
import {Enemy} from './sprite/enemy';
import {TouchInfo} from "./touch/touch-info";
import {isOverlap} from "./overlap/is-overlap";

const player = new Player();
const enemy = new Enemy(window.innerWidth - 256, 128);
const touchInfo = new TouchInfo();

// ゲームループ
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