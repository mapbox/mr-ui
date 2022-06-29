import {
  PLACEMENT_TOP,
  PLACEMENT_BOTTOM,
  PLACEMENT_LEFT,
  PLACEMENT_RIGHT,
  ALIGNMENT_CENTER
} from './constants';

/**
 * @param {Object} options - See definition in calculatePosition
 * @param {PopoverPositionContext} context - See definition in calculatePositionContext
 * @return {{ placement: string, alignment: string }}
 */
export default function calculatePlacementAlignment(options, context) {
  const desiredPlacement = options.placement;
  const desiredAlignment = options.alignment;
  const allowPlacementAxisChange =
    options.allowPlacementAxisChange === undefined
      ? true
      : options.allowPlacementAxisChange;
  let placement = desiredPlacement;
  let alignment = desiredAlignment;

  const spaceLeftOfAnchor = context.anchorRect.left - context.offsetFromEdge;
  const spaceRightOfAnchor =
    context.availableWidth - context.anchorRect.right - context.offsetFromEdge;
  const spaceAboveAnchor = context.anchorRect.top - context.offsetFromEdge;
  const spaceBelowAnchor =
    context.availableHeight -
    context.anchorRect.bottom -
    context.offsetFromEdge;
  const sufficientSpaceIfPlacedOnLeft =
    context.bodyElementWidthWithoutPadding + context.bodyOffsetFromAnchor <=
    spaceLeftOfAnchor;
  const sufficientSpaceIfPlacedOnRight =
    context.bodyElementWidthWithoutPadding + context.bodyOffsetFromAnchor <=
    spaceRightOfAnchor;
  const sufficientSpaceIfPlacedAbove =
    context.bodyElementHeightWithoutPadding + context.bodyOffsetFromAnchor <=
    spaceAboveAnchor;
  const sufficientSpaceIfPlacedBelow =
    context.bodyElementHeightWithoutPadding + context.bodyOffsetFromAnchor <=
    spaceBelowAnchor;

  if (
    desiredPlacement === PLACEMENT_TOP ||
    desiredPlacement === PLACEMENT_BOTTOM
  ) {
    if (
      desiredPlacement === PLACEMENT_BOTTOM &&
      !sufficientSpaceIfPlacedBelow
    ) {
      if (sufficientSpaceIfPlacedAbove) {
        return { placement: PLACEMENT_TOP, alignment };
      }
      if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnLeft) {
        return { placement: PLACEMENT_LEFT, alignment: ALIGNMENT_CENTER };
      }
      if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnRight) {
        return { placement: PLACEMENT_RIGHT, alignment: ALIGNMENT_CENTER };
      }
      if (spaceAboveAnchor > spaceBelowAnchor) {
        return { placement: PLACEMENT_TOP, alignment };
      }
    }

    if (desiredPlacement === PLACEMENT_TOP && !sufficientSpaceIfPlacedAbove) {
      if (sufficientSpaceIfPlacedBelow) {
        return { placement: PLACEMENT_BOTTOM, alignment };
      }
      if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnLeft) {
        return { placement: PLACEMENT_LEFT, alignment: ALIGNMENT_CENTER };
      }
      if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnRight) {
        return { placement: PLACEMENT_RIGHT, alignment: ALIGNMENT_CENTER };
      }
      if (spaceBelowAnchor > spaceAboveAnchor) {
        return { placement: PLACEMENT_BOTTOM, alignment };
      }
    }
  }

  if (
    desiredPlacement === PLACEMENT_LEFT ||
    desiredPlacement === PLACEMENT_RIGHT
  ) {
    if (desiredPlacement === PLACEMENT_LEFT && !sufficientSpaceIfPlacedOnLeft) {
      if (sufficientSpaceIfPlacedOnRight) {
        return { placement: PLACEMENT_RIGHT, alignment };
      }
      if (
        allowPlacementAxisChange &&
        !sufficientSpaceIfPlacedBelow &&
        sufficientSpaceIfPlacedAbove
      ) {
        return { placement: PLACEMENT_TOP, alignment: ALIGNMENT_CENTER };
      }
      if (allowPlacementAxisChange) {
        return { placement: PLACEMENT_BOTTOM, alignment: ALIGNMENT_CENTER };
      }
      if (spaceRightOfAnchor > spaceLeftOfAnchor) {
        return { placement: PLACEMENT_RIGHT, alignment };
      }
    }

    if (
      desiredPlacement === PLACEMENT_RIGHT &&
      !sufficientSpaceIfPlacedOnRight
    ) {
      if (sufficientSpaceIfPlacedOnLeft) {
        return { placement: PLACEMENT_LEFT, alignment };
      }
      if (
        allowPlacementAxisChange &&
        !sufficientSpaceIfPlacedBelow &&
        sufficientSpaceIfPlacedAbove
      ) {
        return { placement: PLACEMENT_TOP, alignment: ALIGNMENT_CENTER };
      }
      if (allowPlacementAxisChange) {
        return { placement: PLACEMENT_BOTTOM, alignment: ALIGNMENT_CENTER };
      }
      if (spaceLeftOfAnchor > spaceRightOfAnchor) {
        return { placement: PLACEMENT_LEFT, alignment };
      }
    }
  }

  return { placement, alignment };
}
