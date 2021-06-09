import React from 'react';
import PropTypes from 'prop-types';
import displace from 'react-displace';
import debounce from 'debounce';
import calculatePosition from './calculate-position';
import getScrollableParents from './get-scrollable-parents';
import createScrollListener from './create-scroll-listener';
import getWindow from '../utils/get-window';

let popoverPositionerList = [];

/**
 * Secretly mounts a popover and its pointer, calculates their positions, then repositions and exposes them.
 *
 * @param {ReactNode} children
 * @param {Function} getAnchorElement - Function that returns the popover's anchor element.
 * @param {'top' | 'bottom' | 'left' | 'right' } [placement] - See options for calculatePosition.
 * @param { 'top' | 'bottom' | 'left' | 'right' | 'center' } [alignment] - See options for calculatePosition.
 * @param {boolean} [hasPointer] - See options for calculatePosition.
 * @param {number} [pointerBase] - See options for calculatePosition.
 * @param {number} [pointerAltitude] - See options for calculatePosition.
 * @param {string} [pointerColor] - See options for calculatePosition.
 * @param {number} [offsetFromAnchor] - See options for calculatePosition.
 * @param {boolean} [hideWhenAnchorIsOffscreen] - See options for calculatePosition.
 * @param {boolean} [allowPlacementAxisChange] - See options for calculatePosition.
 * @param {boolean} [containWithinViewport] - See options for calculatePosition.
 * @param {Function} [getContainingElement] - See options for calculatePosition.
 * @param {Function} [onElement] - A function that receives the containing element.
 * @param {number} [zIndex] - z-index for body element.
 */
class PopoverPositioner extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    getAnchorElement: PropTypes.func.isRequired,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    alignment: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'center']),
    pointerBase: PropTypes.number,
    hasPointer: PropTypes.bool,
    pointerAltitude: PropTypes.number,
    pointerColor: PropTypes.string,
    offsetFromAnchor: PropTypes.number,
    hideWhenAnchorIsOffscreen: PropTypes.bool,
    allowPlacementAxisChange: PropTypes.bool,
    containWithinViewport: PropTypes.bool,
    getContainingElement: PropTypes.func,
    onElement: PropTypes.func,
    zIndex: PropTypes.number,
    // For mockery
    calculatePosition: PropTypes.func,
    getScrollableParents: PropTypes.func,
    createScrollListener: PropTypes.func,
    getWindow: PropTypes.func
  };

  static defaultProps = {
    calculatePosition: calculatePosition,
    getScrollableParents: getScrollableParents,
    createScrollListener: createScrollListener,
    getWindow: getWindow
  };

  componentDidMount() {
    popoverPositionerList.push(this.setPosition);
    this.scrollableParents = this.props.getScrollableParents(
      this.props.getAnchorElement()
    );
    this.handleResize = debounce(this.setPosition, 200);
    this.props.getWindow().addEventListener('resize', this.handleResize);
    this.scrollListeners = this.scrollableParents.map((scrollableParent) => {
      const scrollListener = this.props.createScrollListener(
        scrollableParent,
        this.setPosition
      );
      scrollListener.start();
      return scrollListener;
    }, this);
    this.setPosition();
  }

  componentDidUpdate() {
    this.setPosition();
  }

  componentWillUnmount() {
    this.props.getWindow().removeEventListener('resize', this.handleResize);
    this.scrollListeners.forEach((scrollListener) => {
      scrollListener.stop();
    });
    popoverPositionerList.splice(
      popoverPositionerList.indexOf(this.setPosition),
      1
    );
  }

  getScrollableParentElement = () => {
    return this.scrollableParents[0];
  };

  setPosition = () => {
    const { props } = this;

    const positionData = this.props.calculatePosition({
      getScrollableParentElement: this.getScrollableParentElement,
      getPopoverElement: this.getPopoverElement,
      getAnchorElement: props.getAnchorElement,
      placement: props.placement,
      alignment: props.alignment,
      hasPointer: props.hasPointer,
      offsetFromAnchor: props.offsetFromAnchor,
      pointerBase: props.pointerBase,
      pointerAltitude: props.pointerAltitude,
      pointerColor: props.pointerColor,
      hideWhenAnchorIsOffscreen: props.hideWhenAnchorIsOffscreen,
      allowPlacementAxisChange: props.allowPlacementAxisChange,
      containWithinViewport: props.containWithinViewport,
      getContainingElement: props.getContainingElement
    });

    const bodyElement = this.bodyElement;
    if (bodyElement) {
      bodyElement.style.setProperty('visibility', 'visible');
      for (let key in positionData.bodyPositioningStyle) {
        bodyElement.style.setProperty(
          key,
          positionData.bodyPositioningStyle[key]
        );
      }
    }

    const pointerElement = this.pointerElement;
    if (pointerElement) {
      pointerElement.style.setProperty('visibility', 'visible');
      for (let key in positionData.pointerPositioningStyle) {
        pointerElement.style.setProperty(
          key,
          positionData.pointerPositioningStyle[key]
        );
      }
    }
  };

  setBodyElement = (element) => {
    this.bodyElement = element;
  };

  setContainerElement = (element) => {
    this.containerElement = element;
    if (this.props.onElement) this.props.onElement(element);
  };

  getPopoverElement = () => {
    return this.bodyElement;
  };

  setPointerElement = (element) => {
    this.pointerElement = element;
  };

  render() {
    const basicStyle = {
      position: 'absolute',
      zIndex: this.props.zIndex,
      top: 0,
      left: 0,
      visibility: 'hidden'
    };

    return (
      <div ref={this.setContainerElement}>
        <div
          data-test="popover-body"
          ref={this.setBodyElement}
          style={basicStyle}
        >
          {this.props.children}
        </div>
        <div
          data-test="popover-pointer"
          ref={this.setPointerElement}
          style={basicStyle}
        />
      </div>
    );
  }
}

const displaced = displace(PopoverPositioner);
displaced.recalculatePositions = () => {
  popoverPositionerList.forEach((recalcFn) => {
    recalcFn();
  });
};

export default displaced;
