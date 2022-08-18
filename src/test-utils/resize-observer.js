global.ResizeObserver = class ResizeObserver {
  constructor(resizeFn) {
    this.resizeFn = resizeFn;
  }

  observe() {
    // noop
  }

  unobserve() {
    // noop
  }
};
