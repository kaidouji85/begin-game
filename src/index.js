const playerPos = {x: 0, y: 0};

function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  playerPos.x += 8;
  const playerImg = document.querySelector('.player');
  playerImg.style.setProperty('transform', `translate(${playerPos.x}px, ${playerPos.y}px)`);
}
requestAnimationFrame(gameLoop);