import TWEEN from '@tweenjs/tween.js';

const playerPos = {x: 0, y: 128};
const tween = new TWEEN.Tween(playerPos)
  .to({x: 300}, 1000)
  .start();

function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  TWEEN.update(time);
  const playerImg = document.querySelector('.player');
  const transform = `translate(${playerPos.x}px, ${playerPos.y}px) scale(-1, 1)`;
  playerImg.style.setProperty('transform', transform);
}
requestAnimationFrame(gameLoop);
