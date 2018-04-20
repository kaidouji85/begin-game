let playerPos = {x: 0, y: 128};

function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  playerPos.x += 4;
  setPlayerPosition(playerPos);
}
requestAnimationFrame(gameLoop);

function setPlayerPosition({x, y}) {
  const playerImg = document.querySelector('.player');
  const transform = `translate(${x}px, ${y}px)`;
  playerImg.style.setProperty('transform', transform);
}
