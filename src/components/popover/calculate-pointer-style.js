import prefix from 'prefix';

const PLACEMENT_TOP = 'top';
const PLACEMENT_BOTTOM = 'bottom';
const PLACEMENT_LEFT = 'left';
const PLACEMENT_RIGHT = 'right';
const POINTER_DIRECTION_DOWNWARD = 'downward';
const POINTER_DIRECTION_UPWARD = 'upward';
const POINTER_DIRECTION_LEFTWARD = 'leftward';
const POINTER_DIRECTION_RIGHTWARD = 'rightward';

const mapPlacementToPointerDirection = {};
mapPlacementToPointerDirection[PLACEMENT_TOP] = POINTER_DIRECTION_DOWNWARD;
mapPlacementToPointerDirection[PLACEMENT_BOTTOM] = POINTER_DIRECTION_UPWARD;
mapPlacementToPointerDirection[PLACEMENT_LEFT] = POINTER_DIRECTION_RIGHTWARD;
mapPlacementToPointerDirection[PLACEMENT_RIGHT] = POINTER_DIRECTION_LEFTWARD;

/**
 * @param {string} placement
 * @param {Object} options - See definition in calculatePosition
 * @param {PopoverPositionContext} context - See definition in calculatePositionContext
 * @return {Object}
 */
export default function calculatePointerStyle(placement, options, context) {
  const verticalPointerLeftOffset = Math.round(
    context.anchorHorizontalCenter - options.pointerBase / 2
  );
  const horizontalPointerTopOffset = Math.round(
    context.anchorVerticalCenter - options.pointerBase / 2
  );
  const helperBorder = `${options.pointerBase / 2}px solid transparent`;
  const coloredBorder = `${options.pointerAltitude}px solid ${options.pointerColor}`;
  const pointerDirection = mapPlacementToPointerDirection[placement];
  const prefixedTransform = prefix.dash('transform');

  if (options.hasPointer === false) {
    return { display: 'none' };
  }

  if (pointerDirection === POINTER_DIRECTION_UPWARD) {
    return {
      [prefixedTransform]: `translate3d(${verticalPointerLeftOffset}px, ${Math.round(
        context.anchorAbsoluteTop +
          context.anchorRect.height +
          options.offsetFromAnchor -
          context.documentTopOffset
      )}px, 0)`,
      'border-top': 0,
      'border-bottom': coloredBorder,
      'border-left': helperBorder,
      'border-right': helperBorder
    };
  }
  if (pointerDirection === POINTER_DIRECTION_DOWNWARD) {
    return {
      [prefixedTransform]: `translate3d(${verticalPointerLeftOffset}px, ${Math.round(
        context.anchorAbsoluteTop -
          options.offsetFromAnchor -
          options.pointerAltitude -
          context.documentTopOffset
      )}px, 0)`,
      'border-top': coloredBorder,
      'border-bottom': 0,
      'border-left': helperBorder,
      'border-right': helperBorder
    };
  }
  if (pointerDirection === POINTER_DIRECTION_LEFTWARD) {
    return {
      [prefixedTransform]: `translate3d(${Math.round(
        context.anchorRect.right + options.offsetFromAnchor
      )}px, ${horizontalPointerTopOffset - context.documentTopOffset}px, 0)`,
      'border-top': helperBorder,
      'border-bottom': helperBorder,
      'border-left': 0,
      'border-right': coloredBorder
    };
  }
  return {
    [prefixedTransform]: `translate3d(${Math.round(
      context.anchorRect.left -
        options.offsetFromAnchor -
        options.pointerAltitude
    )}px, ${horizontalPointerTopOffset - context.documentTopOffset}px, 0)`,
    'border-top': helperBorder,
    'border-bottom': helperBorder,
    'border-left': coloredBorder,
    'border-right': 0
  };
}
