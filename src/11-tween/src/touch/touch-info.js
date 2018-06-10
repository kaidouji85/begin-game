/** タッチ情報 */
export class TouchInfo {
  constructor() {
    this.isTouch = false;
    this.target = {x: 0, y: 0};

    document.addEventListener('mousedown', e => {
      this.isTouch = true;
      this.target = {x: e.clientX, y: e.clientY};
    });

    document.addEventListener('mousemove', e => {
      this.target = {x: e.clientX, y: e.clientY};
    });

    document.addEventListener('mouseup', e => {
      this.isTouch = false;
      this.target = {x: e.clientX, y: e.clientY};
    });
  }
}