import {distinctUntilChanged, filter, map} from "rxjs/operators/index";
import {Subject} from "rxjs/index";

export class MoveChecker {
  constructor({shouldMove}) {
    this.moveSubject = new Subject();
    this.moveSubject.pipe(
      filter(v => v.isTouch),
      map(v => ({x: v.target.x, y: v.target.y})),
      distinctUntilChanged((a, b) => a.x === b.x && a.y === b.y)
    ).subscribe(v => {
      shouldMove(v.x, v.y);
    });
  }

  gameLoop(touchInfo) {
    this.moveSubject.next(touchInfo);
  }
}