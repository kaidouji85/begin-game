// ベクトル関係
import {getScala} from "./vector/scala";
import {Player} from "./player";

const player = new Player();

// 敵関連
const ENEMY_SPEED = 4;
let enemyPos = {x: window.innerWidth - 256, y: 128};

function setEnemyPos({x, y}) {
  const enemyImg = document.querySelector('.enemy');
  const ex = x - enemyImg.clientWidth / 2;
  const ey = y - enemyImg.clientHeight / 2;
  const transform = `translate(${ex}px, ${ey}px)`;
  enemyImg.style.setProperty('transform', transform);
}

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

  if (!player.isDeath && isOverlap(player, enemyPos)) {
    player.isDeath = true;
    alert('ゲームオーバー');
  }

  player.gameLoop(touchInfo);

  enemyPos.x -= ENEMY_SPEED;
  setEnemyPos(enemyPos);
}
requestAnimationFrame(gameLoop);