import T from '@tweenjs/tween.js';

// ベクトル関係
function getScala(vx, vy) {
  return Math.sqrt(vx ** 2 + vy ** 2);
}

// プレイヤー関連
const PLAYER_SPEED = 0.5;
let playerInfo = {
  x: 128,
  y: 128,
  isDeath: false
};
const PlayerTweenGroup = new T.Group();

function playerGameLoop() {
  engagePlayerInfo();
}

function engagePlayerInfo() {
  const playerImg = document.querySelector('.player');
  const px = playerInfo.x - playerImg.clientWidth / 2;
  const py = playerInfo.y - playerImg.clientHeight / 2;
  const transform = `translate(${px}px, ${py}px)`;
  const visibility = playerInfo.isDeath ? 'hidden' : 'visible';

  playerImg.style.setProperty('transform', transform);
  playerImg.style.setProperty('visibility', visibility);
}

function moveTo(tx, ty) {
  const vx = tx - playerInfo.x;
  const vy = ty - playerInfo.y;
  const scala = getScala(vx, vy);
  const duration = scala * PLAYER_SPEED;

  new T.Tween(playerInfo, PlayerTweenGroup).to({x: tx, y: ty}, duration)
    .start();
}

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
  isTouchStart: false,
  isMoved: false,
  event: null
};

document.addEventListener('mousedown', e => {
  touchInfo.isTouchStart = true;
  touchInfo.event = e;
});

document.addEventListener('mousemove', e => {
  touchInfo.event = e;
  touchInfo.isMoved = true;
});

document.addEventListener('mouseup', e => {
  touchInfo.event = e;
});

// ゲームループ関連
function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  T.update(time);
  PlayerTweenGroup.update(time);

  if (!playerInfo.isDeath && isOverlap(playerInfo, enemyPos)) {
    playerInfo.isDeath = true;
    alert('ゲームオーバー');
  }

  if (touchInfo.isTouchStart || touchInfo.isMoved) {
    PlayerTweenGroup.removeAll();
    moveTo(touchInfo.event.clientX, touchInfo.event.clientY);
  }

  playerGameLoop();

  enemyPos.x -= ENEMY_SPEED;
  setEnemyPos(enemyPos);

  touchInfo.isTouchStart = false;
  touchInfo.isMoved = false;
}
requestAnimationFrame(gameLoop);