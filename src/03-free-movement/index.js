// プレイヤー関連
let playerPos = {x: 0, y: 128};

function setPlayerPosition({x, y}) {
  const playerImg = document.querySelector('.player');
  const transform = `translate(${x}px, ${y}px)`;
  playerImg.style.setProperty('transform', transform);
}

function move(tx, ty) {
  const speed = 16;
  const vx = tx - playerPos.x;
  const vy = ty - playerPos.y;
  const scala = Math.sqrt(vx ** 2 + vy ** 2);

  if (scala <= 8) {
    return;
  }

  playerPos.x += vx / scala * speed;
  playerPos.y += vy / scala * speed;
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
}
requestAnimationFrame(gameLoop);