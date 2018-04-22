// プレイヤー関連
let playerPos = {x: 0, y: 128};

function setPlayerPosition({x, y}) {
  const playerImg = document.querySelector('.player');
  const transform = `translate(${x}px, ${y}px)`;
  playerImg.style.setProperty('transform', transform);
}

// ゲームループ関連
function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  playerPos.x += 4;
  setPlayerPosition(playerPos);
}
requestAnimationFrame(gameLoop);