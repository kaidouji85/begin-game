import {Enemy} from "../sprite/enemy/index";
import {isOverlap} from "../overlap/is-overlap";

/** 敵を集めたもの */
export class EnemyContainer {
  constructor() {
    this._enemyList = [
      new Enemy(window.innerWidth + 512, 128, this._getDelay()),
      new Enemy(window.innerWidth + 512 * 2 , 128 * 2, this._getDelay()),
      new Enemy(window.innerWidth + 512 * 3 , 128 * 3, this._getDelay())
    ];
  }

  isOverlap(player) {
    return this._enemyList.some(enemy => isOverlap(player, enemy));
  }

  gameLoop(time) {
    this._enemyList.forEach(enemy => {
      enemy.gameLoop(time);
    });
  }

  _getDelay() {
    return Math.random() * 3000;
  }
}