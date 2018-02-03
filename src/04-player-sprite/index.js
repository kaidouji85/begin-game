import {Player} from './player';

window.onload = function() {
  const playerSprite = new Player();
  playerSprite
    .getDomList()
    .forEach(v => document.body.appendChild(v));
  playerSprite
    .move()
    .start();

  function gameLoop(time) {
    requestAnimationFrame(gameLoop);
    playerSprite.gameLoop(time);
  }
  requestAnimationFrame(gameLoop);

  document.onclick = () => {
    playerSprite.stop();
  }
};