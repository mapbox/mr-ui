/* globals global */
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
