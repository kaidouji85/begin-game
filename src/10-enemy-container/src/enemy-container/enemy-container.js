import {Enemy} from "../sprite/enemy";
import {isOverlap} from "../overlap/is-overlap";

/** 敵を集めたもの */
export class EnemyContainer {
  constructor() {
    this._enemyList = [
      new Enemy(window.innerWidth - 256, 128),
      new Enemy(window.innerWidth - 256 + 512 * 1 , 128 + 128 * 1),
      new Enemy(window.innerWidth - 256 + 512 * 2 , 128 + 128 * 2)
    ];
  }

  isOverlap(player) {
    return this._enemyList.some(enemy => isOverlap(player, enemy));
  }

  gameLoop() {
    this._enemyList.forEach(enemy => {
      enemy.gameLoop();
    });
  }
}