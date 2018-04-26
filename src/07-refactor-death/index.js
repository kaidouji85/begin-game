// ベクトル関係
function getScala(vx, vy) {
  return Math.sqrt(vx ** 2 + vy ** 2);
}

// プレイヤー関連
const PLAYER_SPEED = 8;
let playerInfo = {
  x: 128,
  y: 128,
  isDeath: false
};

function playerGameLoop() {
  if (!playerInfo.isDeath && touchInfo.isTouch) {
    move(touchInfo.event.clientX, touchInfo.event.clientY);
  }

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

function move(tx, ty) {
  const vx = tx - playerInfo.x;
  const vy = ty - playerInfo.y;
  const scala = getScala(vx, vy);

  if (scala <= 0) {
    return;
  }

  const speed = scala < PLAYER_SPEED ? scala : PLAYER_SPEED;
  playerInfo.x += vx / scala * speed;
  playerInfo.y += vy / scala * speed;
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

  if (!playerInfo.isDeath && isOverlap(playerInfo, enemyPos)) {
    playerInfo.isDeath = true;
    alert('ゲームオーバー');
  }

  playerGameLoop();

  enemyPos.x -= ENEMY_SPEED;
  setEnemyPos(enemyPos);
}
requestAnimationFrame(gameLoop);