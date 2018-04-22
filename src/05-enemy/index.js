// プレイヤー関連
const PLAYER_SPEED = 8;
let playerPos = {x: 128, y: 128};

function setPlayerPosition({x, y}) {
  const playerImg = document.querySelector('.player');
  const px = x - playerImg.clientWidth / 2;
  const py = y - playerImg.clientHeight / 2;
  const transform = `translate(${px}px, ${py}px)`;
  playerImg.style.setProperty('transform', transform);
}

function move(tx, ty) {
  const vx = tx - playerPos.x;
  const vy = ty - playerPos.y;
  const scala = Math.sqrt(vx ** 2 + vy ** 2);

  if (scala <= 0) {
    return;
  }

  const speed = scala < PLAYER_SPEED ? scala : PLAYER_SPEED;
  playerPos.x += vx / scala * speed;
  playerPos.y += vy / scala * speed;
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

  if (touchInfo.isTouch) {
    move(touchInfo.event.clientX, touchInfo.event.clientY);
  }
  setPlayerPosition(playerPos);

  enemyPos.x -= ENEMY_SPEED;
  setEnemyPos(enemyPos);
}
requestAnimationFrame(gameLoop);