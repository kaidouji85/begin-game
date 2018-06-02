// ベクトル関係
import {getScala} from "./vector/scala";
import {Player} from "./player";
import {Enemy} from './enemy';

const player = new Player();
const enemy = new Enemy(window.innerWidth - 256, 128);

// 当たり判定関連
function isOverlap(player, enemy) {
  const vx = player.x - enemy.x;
  const vy = player.y - enemy.y;
  const distance = getScala(vx, vy);

  return distance <= 126;
}

// タッチ関連
let touchInfo = {
  isTouch: false,
  event: null
};

document.addEventListener('mousedown', e => {
  touchInfo.isTouch = true;
  touchInfo.event = e;
});

document.addEventListener('mousemove', e => {
  touchInfo.event = e;
});

document.addEventListener('mouseup', e => {
  touchInfo.isTouch = false;
  touchInfo.event = e;
});

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