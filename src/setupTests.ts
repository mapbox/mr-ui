// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// https://stackoverflow.com/questions/71521976
global.DOMRect = class DOMRect {
  top:number = 0;
  bottom:number = 0;
  left:number = 0;
  right:number = 0;

  constructor (
    public x = 0,
    public y = 0,
    public width = 0,
    public height = 0
  ) {};

  static fromRect(other?: DOMRectInit): DOMRect {
    return new DOMRect(other.x, other.y, other.width, other.height);
  }

  toJSON() {
    return JSON.stringify(this);
  }
}

global.ResizeObserver = class ResizeObserver {
  [x: string]: any;
  constructor(cb: any) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  unobserve() {}
  disconnect() {}
};
