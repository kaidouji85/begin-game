import {distinctUntilChanged, filter, map} from "rxjs/operators/index";
import {Subject} from "rxjs/index";

export class StopChecker {
  constructor({shouldStop}) {
    this.stopSubject = new Subject();
    this.stopSubject.pipe(
      map(v => v.isTouch),
      distinctUntilChanged(),
      filter(v => !v)
    ).subscribe(() => {
      shouldStop();
    });
  }

  gameLoop(touchInfo) {
    this.stopSubject.next(touchInfo);
  }
}