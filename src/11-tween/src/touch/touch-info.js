/** タッチ情報 */
export class TouchInfo {
  constructor() {
    this.isTouch = false;
    this.event = null;

    document.addEventListener('mousedown', e => {
      this.isTouch = true;
      this.event = e;
    });

    document.addEventListener('mousemove', e => {
      this.event = e;
    });

    document.addEventListener('mouseup', e => {
      this.isTouch = false;
      this.event = e;
    });
  }
}