import xtend from 'xtend';
import getWindow from '../utils/get-window';
import {
  PLACEMENT_TOP,
  PLACEMENT_BOTTOM,
  PLACEMENT_LEFT,
  PLACEMENT_RIGHT
} from './constants';

const hideStyles = {
  visibility: 'hidden',
  zIndex: -1
};

const showStyles = {
  visibility: 'visible',
  zIndex: 1
};

/**
 * @param {Object} pointerStyle
 * @param {Object} bodyStyle
 * @param {string} placement
 * @param {Object} options - See definition in calculatePosition
 * @param {PopoverPositionContext} context - See definition in calculatePositionContext
 * @return {{ pointerStyle: Object, bodyStyle: Object }}
 */
export default function adjustStylesForAnchorVisibility(
  pointerStyle,
  bodyStyle,
  placement,
  options,
  context
) {
  const hideThings = () => {
    const newPointerStyle = xtend(pointerStyle, hideStyles);
    const newBodyStyle = options.hideWhenAnchorIsOffscreen
      ? xtend(bodyStyle, hideStyles)
      : bodyStyle;
    return { pointerStyle: newPointerStyle, bodyStyle: newBodyStyle };
  };

  const showThings = () => {
    const newPointerStyle = xtend(pointerStyle, showStyles);
    const newBodyStyle = options.hideWhenAnchorIsOffscreen
      ? xtend(bodyStyle, showStyles)
      : bodyStyle;
    return { pointerStyle: newPointerStyle, bodyStyle: newBodyStyle };
  };

  const win = getWindow();
  const scrollableParent =
    options.getScrollableParentElement !== undefined
      ? options.getScrollableParentElement()
      : null;

  if (!scrollableParent) {
    return { pointerStyle, bodyStyle };
  }

  const scrollY = win.pageYOffset;
  let scrollableParentTop;
  let scrollableParentBottom;
  if (scrollableParent === win) {
    scrollableParentTop = options.containWithinViewport ? scrollY : 0;
    scrollableParentBottom = options.containWithinViewport
      ? scrollY + win.innerHeight
      : context.availableHeight;
  } else {
    const scrollableParentRect = scrollableParent.getBoundingClientRect();
    scrollableParentTop = scrollableParentRect.top + scrollY;
    scrollableParentBottom = scrollableParentRect.bottom + scrollY;
  }

  const offsetFromScrollableParentTopEdge =
    Math.round(context.anchorVerticalCenter - options.pointerBase / 2) - 2;
  const offsetFromScrollableParentBottomEdge =
    Math.round(context.anchorVerticalCenter + options.pointerBase / 2) + 2;
  const onLeftOrRight =
    placement === PLACEMENT_LEFT || placement === PLACEMENT_RIGHT;

  if (
    (placement === PLACEMENT_TOP &&
      scrollableParentTop > context.anchorAbsoluteTop) ||
    (placement === PLACEMENT_BOTTOM &&
      scrollableParentBottom < context.anchorAbsoluteTop) ||
    (!onLeftOrRight && scrollableParentBottom < context.anchorAbsoluteTop) ||
    (!onLeftOrRight && scrollableParentTop > context.anchorAbsoluteBottom) ||
    (onLeftOrRight &&
      // Offset the allowed top/bottom to prevent the pointer triangle from appearing
      // beyond the border curves
      (scrollableParentTop + options.pointerBase / 2 + 1 >
        offsetFromScrollableParentTopEdge ||
        scrollableParentBottom - options.pointerBase / 2 - 1 <
          offsetFromScrollableParentBottomEdge))
  ) {
    return hideThings();
  } else {
    return showThings();
  }
}
