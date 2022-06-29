import getWindow from '../utils/get-window';
import {
  PLACEMENT_TOP,
  PLACEMENT_BOTTOM,
  PLACEMENT_LEFT,
  PLACEMENT_RIGHT,
  POINTER_DIRECTION_DOWNWARD,
  POINTER_DIRECTION_UPWARD,
  POINTER_DIRECTION_LEFTWARD,
  POINTER_DIRECTION_RIGHTWARD
} from './constants';

const mapPlacementToPointerDirection = {};
mapPlacementToPointerDirection[PLACEMENT_TOP] = POINTER_DIRECTION_DOWNWARD;
mapPlacementToPointerDirection[PLACEMENT_BOTTOM] = POINTER_DIRECTION_UPWARD;
mapPlacementToPointerDirection[PLACEMENT_LEFT] = POINTER_DIRECTION_RIGHTWARD;
mapPlacementToPointerDirection[PLACEMENT_RIGHT] = POINTER_DIRECTION_LEFTWARD;

/**
 * @typedef {Object} PopoverPositionContext
 * @property {number} offsetFromEdge
 * @property {number} offsetFromAnchor
 * @property {number} availableWidth
 * @property {number} availableHeight
 * @property {number} documentTopOffset
 * @property {number} topBoundary
 * @property {number} bottomBoundary
 * @property {number} anchorRect
 * @property {number} bodyElementRect
 * @property {number} bodyElementWidthWithoutPadding
 * @property {number} bodyElementHeightWithoutPadding
 * @property {number} anchorAbsoluteTop
 * @property {number} anchorAbsoluteBottom
 * @property {number} anchorHorizontalCenter
 * @property {number} anchorVerticalCenter
 * @property {number} maxLeftOffset
 * @property {number} maxWidth
 * @property {number} maxHeight
 */

/**
 * @param {Object} options - See definition in calculatePosition.
 * @return {PopoverPositionContext}
 */
export default function calculatePositionContext(options) {
  const context = {};
  const win = getWindow();
  const docEl = win.document.documentElement;
  context.scrollY = win.pageYOffset;

  const anchor = options.getAnchorElement();
  if (!anchor) throw new Error('No anchor element provided');
  const containingElementRect = options.getContainingElement
    ? options.getContainingElement().getBoundingClientRect()
    : null;
  context.offsetFromEdge =
    options.offsetFromEdge !== undefined
      ? options.offsetFromEdge
      : containingElementRect
      ? 0
      : 5;
  context.bodyOffsetFromAnchor =
    options.offsetFromAnchor + options.pointerAltitude;
  context.availableWidth = docEl.scrollWidth;

  // If the document element's top position has been manipulated, we'll need to adjust accordingly
  context.documentTopOffset = 0;
  const documentPosition = docEl.style.position;
  if (documentPosition === 'fixed' || documentPosition === 'absolute') {
    context.documentTopOffset = parseFloat(docEl.style.top);
  }

  context.availableHeight;
  if (options.containWithinViewport) {
    context.availableHeight = win.innerHeight;
  } else {
    context.availableHeight = docEl.scrollHeight;
  }

  context.topBoundary;
  if (containingElementRect) {
    context.topBoundary =
      containingElementRect.top + context.scrollY + context.offsetFromEdge;
  } else if (options.containWithinViewport === true) {
    context.topBoundary = context.scrollY + context.offsetFromEdge;
  } else {
    context.topBoundary = context.offsetFromEdge;
  }

  context.bottomBoundary;
  if (containingElementRect) {
    context.bottomBoundary =
      containingElementRect.bottom + context.scrollY - context.offsetFromEdge;
  } else if (options.containWithinViewport === true) {
    context.bottomBoundary =
      context.scrollY + context.availableHeight - context.offsetFromEdge;
  } else {
    context.bottomBoundary = context.availableHeight - context.offsetFromEdge;
  }

  context.anchorRect = anchor.getBoundingClientRect();
  const bodyElement = options.getPopoverElement();
  if (!bodyElement) throw new Error('No body element provided');
  context.bodyElementRect = bodyElement.getBoundingClientRect();
  context.bodyElementWidthWithoutPadding =
    context.bodyElementRect.width -
    parseInt(bodyElement.style.paddingLeft || 0) -
    parseInt(bodyElement.style.paddingRight || 0);
  context.bodyElementHeightWithoutPadding =
    context.bodyElementRect.height -
    parseInt(bodyElement.style.paddingTop || 0) -
    parseInt(bodyElement.style.paddingBottom || 0);
  context.anchorAbsoluteTop = context.anchorRect.top + context.scrollY;
  context.anchorAbsoluteBottom = context.anchorRect.bottom + context.scrollY;
  context.anchorHorizontalCenter =
    context.anchorRect.left + context.anchorRect.width / 2;
  context.anchorVerticalCenter =
    context.anchorAbsoluteTop + context.anchorRect.height / 2;
  context.maxLeftOffset = Math.max(
    context.availableWidth -
      context.offsetFromEdge -
      context.bodyElementRect.width,
    context.offsetFromEdge
  );
  context.maxWidth = context.availableWidth - 2 * context.offsetFromEdge;
  context.maxHeight = context.availableHeight - 2 * context.offsetFromEdge;

  return Object.freeze(context);
}
