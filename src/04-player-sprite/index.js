import {Player} from './player/player';

window.onload = function() {
  const playerSprite = new Player();
  playerSprite
    .getDOMList()
    .forEach(v => document.body.appendChild(v));
  //console.log(playerSprite.getDOMList())
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