window.onload = () => {
  const playerPos = {x: 64, y: 128};
  const playerImg = document.querySelector('.player');
  playerImg.style.setProperty('transform', `translate(${playerPos.x}px, ${playerPos.y}px)`);
};