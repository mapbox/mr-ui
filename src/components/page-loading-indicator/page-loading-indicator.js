const BASE_CLASSNAME =
  'page-loading-indicator h6 fixed top left opacity50 round-full';
const ENTER_CLASSNAME = 'page-loading-indicator-enter';
const LEAVE_CLASSNAME = 'page-loading-indicator-leave';
let el;
let canEnd;
let mounted = false;

function createElement() {
  el = document.createElement('div');
  el.setAttribute('data-test', 'page-loading-indicator');
  el.className = BASE_CLASSNAME;
}

function start() {
  if (mounted) {
    return;
  }
  mounted = true;
  if (!el) {
    createElement();
  }
  document.body.appendChild(el);
  // Next-tick delay to allow the node to be added and ready for a transition.
  canEnd = new Promise((resolve) => {
    setTimeout(() => {
      el.className += ' ' + ENTER_CLASSNAME;
      setTimeout(resolve, 300);
    }, 0);
  });
  return el;
}

function end() {
  if (!mounted) {
    return Promise.resolve();
  }
  return (canEnd || Promise.resolve()).then(() => {
    new Promise((resolve) => {
      el.classList.remove(ENTER_CLASSNAME);
      el.classList.add(LEAVE_CLASSNAME);
      setTimeout(() => {
        mounted = false;
        canEnd = null;
        if (el.parentNode) el.parentNode.removeChild(el);
        el.className = BASE_CLASSNAME;
        resolve();
      }, 300);
    });
  });
}

// For tests
function _reset() {
  el = null;
  canEnd = null;
  mounted = false;
}

export default { start, end, _reset };
