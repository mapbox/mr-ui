import prefix from 'prefix';
import {
  PLACEMENT_TOP,
  PLACEMENT_BOTTOM,
  PLACEMENT_LEFT,
  PLACEMENT_RIGHT,
  ALIGNMENT_TOP,
  ALIGNMENT_BOTTOM,
  ALIGNMENT_LEFT,
  ALIGNMENT_RIGHT
} from './constants';

/**
 * @param {string} placement
 * @param {string} alignment
 * @param {Object} options - See definition in calculatePosition
 * @param {PopoverPositionContext} context - See definition in calculatePositionContext
 * @return {Object}
 */
export default function calculateBodyStyle(
  placement,
  alignment,
  options,
  context
) {
  let topOffset;
  let leftOffset;
  if (placement === PLACEMENT_TOP) {
    topOffset =
      context.anchorAbsoluteTop -
      context.bodyElementHeightWithoutPadding -
      context.bodyOffsetFromAnchor;
  } else if (placement === PLACEMENT_BOTTOM) {
    topOffset = context.anchorAbsoluteBottom + context.bodyOffsetFromAnchor;
  } else if (alignment === ALIGNMENT_TOP) {
    topOffset = context.anchorAbsoluteTop;
  } else if (alignment === ALIGNMENT_BOTTOM) {
    topOffset =
      context.anchorAbsoluteBottom - context.bodyElementHeightWithoutPadding;
  } else {
    // Only situation left is left/right placed with alignment center
    topOffset =
      context.anchorAbsoluteTop +
      context.anchorRect.height / 2 -
      context.bodyElementHeightWithoutPadding / 2;
  }
  topOffset = Math.max(context.offsetFromEdge, Math.round(topOffset));
  // topOffset = Math.min(maxTopOffset, topOffset);
  if (topOffset < context.topBoundary) topOffset = context.topBoundary;
  if (
    topOffset + context.bodyElementHeightWithoutPadding >
    context.bottomBoundary
  )
    topOffset =
      context.bottomBoundary - context.bodyElementHeightWithoutPadding;
  topOffset -= context.documentTopOffset;

  if (placement === PLACEMENT_LEFT) {
    leftOffset =
      context.anchorRect.left -
      context.bodyElementWidthWithoutPadding -
      context.bodyOffsetFromAnchor;
  } else if (placement === PLACEMENT_RIGHT) {
    leftOffset = context.anchorRect.right + context.bodyOffsetFromAnchor;
  } else if (alignment === ALIGNMENT_LEFT) {
    leftOffset = context.anchorRect.left;
  } else if (alignment === ALIGNMENT_RIGHT) {
    leftOffset =
      context.anchorRect.right - context.bodyElementWidthWithoutPadding;
  } else {
    // Only situation left is top/bottom placed with alignment center
    leftOffset =
      context.anchorRect.left +
      context.anchorRect.width / 2 -
      context.bodyElementWidthWithoutPadding / 2;
  }
  leftOffset = Math.max(context.offsetFromEdge, Math.round(leftOffset));
  leftOffset = Math.min(context.maxLeftOffset, leftOffset);

  const prefixedTransform = prefix.dash('transform');

  const style = {
    [prefixedTransform]: `translate3d(${leftOffset}px, ${topOffset}px, 0)`,
    'max-width': `${context.maxWidth}px`,
    'max-height': `${context.maxHeight}px`
  };

  return style;
}
