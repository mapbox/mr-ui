/**
 * Create a scroll listener debounced by requestAnimationFrame.
 *
 * @param {HTMLElement} element
 * @param {Function} callback
 * @return {Object} An object with `start()` and `stop()` functions.
 */
export default function createScrollListener(element, callback) {
  let ticking = false;

  function update() {
    ticking = false;
    callback();
  }

  function onScroll() {
    if (!ticking) requestAnimationFrame(update);
    ticking = true;
  }

  return {
    start() {
      element.addEventListener('scroll', onScroll);
    },
    stop() {
      element.removeEventListener('scroll', onScroll);
    }
  };
}
