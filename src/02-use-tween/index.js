import TWEEN from '@tweenjs/tween.js';

const playerPos = {x: 0, y: 128};
const tween = new TWEEN.Tween(playerPos)
  .to({x: '+240'}, 1000)
  .repeat(Infinity)
  .start();

function gameLoop(time) {
  requestAnimationFrame(gameLoop)
  TWEEN.update(time);
  setPlayerPosition(playerPos);
}
requestAnimationFrame(gameLoop);

function setPlayerPosition({x, y}) {
  const playerImg = document.querySelector('.player');
  const transform = `translate(${x}px, ${y}px)`;
  playerImg.style.setProperty('transform', transform);
}
