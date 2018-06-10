import {Tween, Group} from "@tweenjs/tween.js";
import {PlayerView} from "./view";
import {move} from './move';
import {death} from "./death";
import {MoveChecker} from "./move-chekcer";
import {StopChecker} from "./stop-checker";

/** プレイヤー */
export class Player {
  constructor() {
    this.x = 128;
    this.y = 128;
    this.opacity = 1;
    this.isDeath = false;
    this.moveTween = new Group();
    this.deathAnimationTween = new Group();
    this.view = new PlayerView();

     this.moveCheker = new MoveChecker({
       shouldMove: (x, y) => {
         this.moveTween.removeAll();
         this.move(x, y);
       }
     });

    this.stopChecker = new StopChecker({
      shouldStop: () => this.moveTween.removeAll()
    });
  }

  gameLoop(time, touchInfo) {
    this.moveTween.update(time);
    this.deathAnimationTween.update(time);

    this.moveCheker.gameLoop(touchInfo);
    this.stopChecker.gameLoop(touchInfo);

    this.view.engage(this);
  }

  deathAnimation() {
    const tween = death(this, this.deathAnimationTween);
    tween.start();
  }

  move(targetX, targetY) {
    const tween = move(this, this.moveTween, targetX, targetY);
    tween.start();
  }
}