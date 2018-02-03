const playerPos = {x: 0, y: 128};

function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  playerPos.x += 4;
  const playerImg = document.querySelector('.player');
  const transform = `translate(${playerPos.x}px, ${playerPos.y}px) scale(-1, 1)`;
  playerImg.style.setProperty('transform', transform);
}
requestAnimationFrame(gameLoop);
