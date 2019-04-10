import React from 'react';
import delay from 'delay';
import { shallow, mount } from 'enzyme';
import PopoverPositioner from '../popover-positioner';

describe('PopoverPositioner', () => {
  let props;
  let mockScrollableParents;
  let mockGetScrollableParents;
  let mockWindow;
  let mockGetWindow;
  let mockScrollListener;
  let mockCreateScrollListener;
  let mockPopoverPosition;
  let mockCalculatePosition;
  let mockAnchorElement;
  let mockGetAnchorElement;

  beforeEach(() => {
    mockScrollableParents = ['mockScrollableParentA', 'mockScrollableParentB'];
    mockGetScrollableParents = jest.fn(() => mockScrollableParents);
    mockWindow = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    };
    mockGetWindow = jest.fn(() => mockWindow);
    mockScrollListener = {
      start: jest.fn(),
      stop: jest.fn()
    };
    mockCreateScrollListener = jest.fn(() => mockScrollListener);
    mockPopoverPosition = {
      bodyPositioningStyle: {
        height: '999px',
        width: '999px'
      },
      pointerPositioningStyle: {
        height: '666px',
        width: '666px'
      }
    };
    mockCalculatePosition = jest.fn(() => mockPopoverPosition);
    mockAnchorElement = {};
    mockGetAnchorElement = jest.fn(() => mockAnchorElement);

    props = {
      children: <span>children</span>,
      getAnchorElement: mockGetAnchorElement,
      calculatePosition: mockCalculatePosition,
      getScrollableParents: mockGetScrollableParents,
      createScrollListener: mockCreateScrollListener,
      zIndex: 3,
      getWindow: mockGetWindow
    };
  });

  test('renders initially with everything hidden', () => {
    const wrapper = shallow(<PopoverPositioner.WrappedComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('on mount adds listeners', () => {
    const wrapper = mount(<PopoverPositioner.WrappedComponent {...props} />);
    expect(mockGetAnchorElement).toHaveBeenCalledTimes(1);
    expect(mockGetScrollableParents).toHaveBeenCalledTimes(1);
    expect(mockGetScrollableParents).toHaveBeenCalledWith(mockAnchorElement);
    expect(mockWindow.addEventListener).toHaveBeenCalledTimes(1);
    expect(mockWindow.addEventListener).toHaveBeenCalledWith(
      'resize',
      wrapper.instance().handleResize // validated below
    );
    expect(mockCreateScrollListener).toHaveBeenCalledTimes(2);
    expect(mockCreateScrollListener).toHaveBeenCalledWith(
      'mockScrollableParentA',
      wrapper.instance().setPosition // validated below
    );
    expect(mockCreateScrollListener).toHaveBeenCalledWith(
      'mockScrollableParentB',
      wrapper.instance().setPosition // validated below
    );
  });

  test('on unmount removes listeners', () => {
    const wrapper = mount(<PopoverPositioner.WrappedComponent {...props} />);
    const handleResize = wrapper.instance().handleResize;
    wrapper.unmount();
    expect(mockWindow.removeEventListener).toHaveBeenCalledTimes(1);
    expect(mockWindow.removeEventListener).toHaveBeenCalledWith(
      'resize',
      handleResize
    );
    expect(mockScrollListener.stop).toHaveBeenCalledTimes(2);
  });

  test('bodyElement and pointerElement are correct', () => {
    const wrapper = mount(<PopoverPositioner.WrappedComponent {...props} />);
    expect(wrapper.instance().bodyElement.getAttribute('data-test')).toBe(
      'popover-body'
    );
    expect(wrapper.instance().pointerElement.getAttribute('data-test')).toBe(
      'popover-pointer'
    );
  });

  test('on mount calculates position', () => {
    const wrapper = mount(<PopoverPositioner.WrappedComponent {...props} />);
    expect(mockCalculatePosition).toHaveBeenCalledTimes(1);
    expect(mockCalculatePosition).toHaveBeenCalledWith({
      getScrollableParentElement: wrapper.instance().getScrollableParentElement,
      getPopoverElement: wrapper.instance().getPopoverElement,
      getAnchorElement: mockGetAnchorElement,
      placement: undefined,
      alignment: undefined,
      offsetFromAnchor: undefined,
      pointerBase: undefined,
      pointerAltitude: undefined,
      pointerColor: undefined,
      hideWhenAnchorIsOffscreen: undefined,
      allowPlacementAxisChange: undefined,
      containWithinViewport: undefined,
      getContainingElement: undefined
    });

    // Test a couple of props
    expect(wrapper.instance().getScrollableParentElement()).toBe(
      'mockScrollableParentA'
    );
    expect(wrapper.instance().getPopoverElement()).toBe(
      wrapper.instance().bodyElement
    );
  });

  test('passes additional props into position calculation', () => {
    const extraProps = {
      placement: 'bottom',
      alignment: 'left',
      offsetFromAnchor: 10,
      pointerBase: 12,
      pointerAltitude: 3,
      pointerColor: '#000',
      hasPointer: false,
      hideWhenAnchorIsOffscreen: true,
      allowPlacementAxisChange: false,
      containWithinViewport: false,
      getContainingElement: () => {}
    };
    const wrapper = mount(
      <PopoverPositioner.WrappedComponent {...props} {...extraProps} />
    );
    expect(mockCalculatePosition).toHaveBeenCalledTimes(1);
    expect(mockCalculatePosition).toHaveBeenCalledWith({
      getScrollableParentElement: wrapper.instance().getScrollableParentElement,
      getPopoverElement: wrapper.instance().getPopoverElement,
      getAnchorElement: mockGetAnchorElement,
      placement: extraProps.placement,
      alignment: extraProps.alignment,
      hasPointer: extraProps.hasPointer,
      offsetFromAnchor: extraProps.offsetFromAnchor,
      pointerBase: extraProps.pointerBase,
      pointerAltitude: extraProps.pointerAltitude,
      pointerColor: extraProps.pointerColor,
      hideWhenAnchorIsOffscreen: extraProps.hideWhenAnchorIsOffscreen,
      allowPlacementAxisChange: extraProps.allowPlacementAxisChange,
      containWithinViewport: extraProps.containWithinViewport,
      getContainingElement: extraProps.getContainingElement
    });

    // Test a couple of props
    expect(wrapper.instance().getScrollableParentElement()).toBe(
      'mockScrollableParentA'
    );
    expect(wrapper.instance().getPopoverElement()).toBe(
      wrapper.instance().bodyElement
    );
  });

  test('handleResize recalculates size', () => {
    const wrapper = mount(<PopoverPositioner.WrappedComponent {...props} />);
    wrapper.instance().handleResize();
    return delay(500).then(() => {
      expect(mockCalculatePosition).toHaveBeenCalledTimes(2);
    });
  });

  test('setPosition recalculates size', () => {
    const wrapper = mount(<PopoverPositioner.WrappedComponent {...props} />);
    wrapper.instance().setPosition();
    return delay(500).then(() => {
      expect(mockCalculatePosition).toHaveBeenCalledTimes(2);
    });
  });

  test('on mount updates popover and pointer styles', () => {
    const wrapper = mount(<PopoverPositioner.WrappedComponent {...props} />);
    expect(wrapper.instance().bodyElement.style.visibility).toBe('visible');
    expect(wrapper.instance().bodyElement.style.height).toBe('999px');
    expect(wrapper.instance().bodyElement.style.width).toBe('999px');
    expect(wrapper.instance().pointerElement.style.visibility).toBe('visible');
    expect(wrapper.instance().pointerElement.style.height).toBe('666px');
    expect(wrapper.instance().pointerElement.style.width).toBe('666px');
  });

  test('checks position on update', () => {
    const wrapper = mount(<PopoverPositioner.WrappedComponent {...props} />);
    expect(mockCalculatePosition).toHaveBeenCalledTimes(1);
    wrapper.setProps({ children: <span>horses</span> });
    expect(wrapper.instance().bodyElement.style.zIndex).toBe('3');
    expect(mockCalculatePosition).toHaveBeenCalledTimes(2);
  });

  test('recalculate positions forces position recalc', () => {
    mount(<PopoverPositioner.WrappedComponent {...props} />);
    expect(mockCalculatePosition).toHaveBeenCalledTimes(1);
    PopoverPositioner.recalculatePositions();
    expect(mockCalculatePosition).toHaveBeenCalledTimes(2);
  });
});
