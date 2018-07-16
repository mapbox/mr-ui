import xtend from 'xtend';
import calculatePositionContext from './calculate-position-context';
import calculatePlacementAlignment from './calculate-placement-alignment';
import calculateBodyStyle from './calculate-body-style';
import calculatePointerStyle from './calculate-pointer-style';
import adjustStylesForAnchorVisibility from './adjust-styles-for-anchor-visibility';

// Not currently designed to deal with
// - iframes
// - more than one level of sub-document scrolling
// - horizontal scrolling

/**
 * @typedef {Object} PopoverPositionData
 * @property {string} placement
 * @property {string} alignment
 * @property {Object} pointerPositioningStyle
 * @property {Object} bodyPositioningStyle
 */

/**
 * Calculate positioning for a popover. Returns PopoverPositionData.
 *
 * @param {Object} options
 * @param {'top' | 'bottom' | 'left' | 'right'} options.placement
 * @param {'top' | 'bottom' | 'left' | 'right' | 'center' } options.alignment
 * @param {Function} options.getAnchorElement - Returns anchor element.
 * @param {Function} options.getPopoverElement - Returns popover element.
 * @param {Function} [options.getContainingElement] - Returns containing element.
 * @param {number} [options.offsetFromAnchor=5]
 * @param {number} [options.offsetFromEdge]
 * @param {boolean} [options.containWithinViewport=false]
 * @param {Function} [options.getScrollableParentElement] - Returns scrollable parent element.
 * @param {boolean} [options.allowPlacementAxisChange=true]
 * @param {boolean} [options.hasPointer=true]
 * @param {number} [options.pointerBase=12]
 * @param {number} [options.pointerAltitude=6]
 * @param {string} [options.pointerColor='#fff']
 * @param {boolean} [options.hideWhenAnchorIsOffscreen=false]
 * @return {PopoverPositionData}
 */
export default function calculatePopoverPosition(options) {
  const defaultedOptions = xtend(options);
  defaultedOptions.offsetFromAnchor = def(options.offsetFromAnchor, 5);
  defaultedOptions.containWithinViewport = def(
    options.containWithinViewport,
    false
  );
  defaultedOptions.allowPlacementAxisChange = def(
    options.allowPlacementAxisChange,
    true
  );
  defaultedOptions.hasPointer = def(options.hasPointer, true);
  defaultedOptions.pointerAltitude = def(options.pointerAltitude, 6);
  defaultedOptions.pointerBase = def(options.pointerBase, 12);
  defaultedOptions.pointerColor = def(options.pointerColor, '#fff');
  defaultedOptions.hideWhenAnchorIsOffscreen = def(
    options.hideWhenAnchorIsOffscreen,
    false
  );
  if (!defaultedOptions.hasPointer) {
    defaultedOptions.pointerAltitude = 0;
    defaultedOptions.pointerBase = 0;
  }

  const context = calculatePositionContext(defaultedOptions);

  const { placement, alignment } = calculatePlacementAlignment(
    defaultedOptions,
    context
  );

  const baseBodyStyle = calculateBodyStyle(
    placement,
    alignment,
    defaultedOptions,
    context
  );

  const basePointerStyle = calculatePointerStyle(
    placement,
    defaultedOptions,
    context
  );

  const { bodyStyle, pointerStyle } = adjustStylesForAnchorVisibility(
    basePointerStyle,
    baseBodyStyle,
    placement,
    defaultedOptions,
    context
  );

  return {
    placement,
    alignment,
    pointerPositioningStyle: pointerStyle,
    bodyPositioningStyle: bodyStyle
  };
}

function def(a, b) {
  return a === undefined ? b : a;
}
