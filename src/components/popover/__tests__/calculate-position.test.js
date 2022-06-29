import calculatePosition from '../calculate-position';
import getWindow from '../../utils/get-window';

jest.mock('../../utils/get-window', () => {
  return jest.fn();
});

const topTriangle = {
  'border-bottom': 0,
  'border-left': '6px solid transparent',
  'border-right': '6px solid transparent',
  'border-top': '6px solid #fff'
};

const bottomTriangle = {
  'border-bottom': '6px solid #fff',
  'border-left': '6px solid transparent',
  'border-right': '6px solid transparent',
  'border-top': 0
};

const rightTriangle = {
  'border-bottom': '6px solid transparent',
  'border-left': 0,
  'border-right': '6px solid #fff',
  'border-top': '6px solid transparent'
};

const leftTriangle = {
  'border-bottom': '6px solid transparent',
  'border-left': '6px solid #fff',
  'border-right': 0,
  'border-top': '6px solid transparent'
};

describe('calculatePosition', () => {
  let mockAnchorElementRect;
  let getMockAnchorElement;
  let mockPopoverElementRect;
  let getMockPopoverElement;
  let mockWindow;

  beforeEach(() => {
    // Mock objects are reset before each tests, so tests can
    // mutate them with impunity.
    mockAnchorElementRect = {
      height: 50,
      width: 50,
      top: 125,
      bottom: 175,
      left: 125,
      right: 125
    };
    getMockAnchorElement = () => ({
      getBoundingClientRect: () => mockAnchorElementRect
    });
    mockPopoverElementRect = {
      width: 100,
      height: 100
    };
    getMockPopoverElement = () => ({
      getBoundingClientRect: () => mockPopoverElementRect,
      style: {}
    });
    mockWindow = {
      document: {
        documentElement: {
          scrollHeight: 900,
          scrollWidth: 300,
          style: {}
        }
      },
      innerHeight: 300,
      pageYOffset: 0
    };
    getWindow.mockReturnValue(mockWindow);
  });

  test('top-left with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'top',
      alignment: 'left',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'top',
      alignment: 'left',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(125px, 20px, 0)'
      }
    });
  });

  test('top-left with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'top',
      alignment: 'left',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'top',
      alignment: 'left',
      pointerPositioningStyle: Object.assign({}, topTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor top - offsetFromAnchor - pointer altitude
        transform: 'translate3d(144px, 114px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(125px, 14px, 0)'
      }
    });
  });

  test('top-center with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'top',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'top',
      alignment: 'center',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(100px, 20px, 0)'
      }
    });
  });

  test('top-center with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'top',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'top',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, topTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor top - offsetFromAnchor - pointer altitude
        transform: 'translate3d(144px, 114px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(100px, 14px, 0)'
      }
    });
  });

  test('top-right with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'top',
      alignment: 'right',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'top',
      alignment: 'right',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(25px, 20px, 0)'
      }
    });
  });

  test('top-right with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'top',
      alignment: 'right',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'top',
      alignment: 'right',
      pointerPositioningStyle: Object.assign({}, topTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor top - offsetFromAnchor - pointer altitude
        transform: 'translate3d(144px, 114px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(25px, 14px, 0)'
      }
    });
  });

  test('bottom-left with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'bottom',
      alignment: 'left',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'left',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(125px, 180px, 0)'
      }
    });
  });

  test('bottom-left with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'bottom',
      alignment: 'left',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'left',
      pointerPositioningStyle: Object.assign({}, bottomTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor bottom + offsetFromAnchor + pointer altitude
        transform: 'translate3d(144px, 180px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(125px, 186px, 0)'
      }
    });
  });

  test('bottom-center with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'bottom',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'center',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(100px, 180px, 0)'
      }
    });
  });

  test('bottom-center with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'bottom',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, bottomTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor bottom + offsetFromAnchor + pointer altitude
        transform: 'translate3d(144px, 180px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(100px, 186px, 0)'
      }
    });
  });

  test('bottom-right with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'bottom',
      alignment: 'right',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'right',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(25px, 180px, 0)'
      }
    });
  });

  test('bottom-right with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'bottom',
      alignment: 'right',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'right',
      pointerPositioningStyle: Object.assign({}, bottomTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor bottom + offsetFromAnchor + pointer altitude
        transform: 'translate3d(144px, 180px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(25px, 186px, 0)'
      }
    });
  });

  test('left-top with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'left',
      alignment: 'top',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'top',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(20px, 125px, 0)'
      }
    });
  });

  test('left-top with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'left',
      alignment: 'top',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'top',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 125px, 0)'
      }
    });
  });

  test('left-center with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'left',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'center',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(20px, 100px, 0)'
      }
    });
  });

  test('left-center with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'left',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 100px, 0)'
      }
    });
  });

  test('left-bottom with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'left',
      alignment: 'bottom',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'bottom',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(20px, 75px, 0)'
      }
    });
  });

  test('left-bottom with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'left',
      alignment: 'bottom',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'bottom',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 75px, 0)'
      }
    });
  });

  test('right-top with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'right',
      alignment: 'top',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'right',
      alignment: 'top',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(130px, 125px, 0)'
      }
    });
  });

  test('right-top with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'right',
      alignment: 'top',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'right',
      alignment: 'top',
      pointerPositioningStyle: Object.assign({}, rightTriangle, {
        // x = anchor right + offsetFromAnchor
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(130px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(136px, 125px, 0)'
      }
    });
  });

  test('right-center with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'right',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'right',
      alignment: 'center',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(130px, 100px, 0)'
      }
    });
  });

  test('right-center with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'right',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'right',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, rightTriangle, {
        // x = anchor right + offsetFromAnchor
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(130px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(136px, 100px, 0)'
      }
    });
  });

  test('right-bottom with sufficient space, without pointer', () => {
    const actual = calculatePosition({
      hasPointer: false,
      placement: 'right',
      alignment: 'bottom',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'right',
      alignment: 'bottom',
      pointerPositioningStyle: { display: 'none' },
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(130px, 75px, 0)'
      }
    });
  });

  test('right-bottom with sufficient space, with pointer', () => {
    const actual = calculatePosition({
      placement: 'right',
      alignment: 'bottom',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'right',
      alignment: 'bottom',
      pointerPositioningStyle: Object.assign({}, rightTriangle, {
        // x = anchor right + offsetFromAnchor
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(130px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(136px, 75px, 0)'
      }
    });
  });

  test('top-left with insufficient space on top becomes bottom-left', () => {
    mockAnchorElementRect = {
      height: 100,
      width: 50,
      top: 75,
      bottom: 175,
      left: 125,
      right: 175
    };

    const actual = calculatePosition({
      placement: 'top',
      alignment: 'left',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'left',
      pointerPositioningStyle: Object.assign({}, bottomTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor bottom + offsetFromAnchor + pointer altitude
        transform: 'translate3d(144px, 180px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(125px, 186px, 0)'
      }
    });
  });

  test('top-center with insufficient space on top becomes bottom-center', () => {
    mockAnchorElementRect = {
      height: 100,
      width: 50,
      top: 75,
      bottom: 175,
      left: 125,
      right: 175
    };

    const actual = calculatePosition({
      placement: 'top',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, bottomTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor bottom + offsetFromAnchor + pointer altitude
        transform: 'translate3d(144px, 180px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(100px, 186px, 0)'
      }
    });
  });

  test('top-right with insufficient space on top becomes bottom-right', () => {
    mockAnchorElementRect = {
      height: 100,
      width: 50,
      top: 75,
      bottom: 175,
      left: 125,
      right: 175
    };

    const actual = calculatePosition({
      placement: 'top',
      alignment: 'right',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'right',
      pointerPositioningStyle: Object.assign({}, bottomTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor bottom + offsetFromAnchor + pointer altitude
        transform: 'translate3d(144px, 180px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(75px, 186px, 0)'
      }
    });
  });

  test('bottom-left with insufficient space on bottom becomes top-left', () => {
    mockWindow.document.documentElement.scrollHeight = 200;

    const actual = calculatePosition({
      placement: 'bottom',
      alignment: 'left',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'top',
      alignment: 'left',
      pointerPositioningStyle: Object.assign({}, topTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor top - offsetFromAnchor - pointer altitude
        transform: 'translate3d(144px, 114px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '190px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(125px, 14px, 0)'
      }
    });
  });

  test('bottom-center with insufficient space on bottom becomes top-center', () => {
    mockWindow.document.documentElement.scrollHeight = 200;

    const actual = calculatePosition({
      placement: 'bottom',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'top',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, topTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor top - offsetFromAnchor - pointer altitude
        transform: 'translate3d(144px, 114px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '190px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(100px, 14px, 0)'
      }
    });
  });

  test('bottom-right with insufficient space on bottom becomes top-right', () => {
    mockWindow.document.documentElement.scrollHeight = 200;

    const actual = calculatePosition({
      placement: 'bottom',
      alignment: 'right',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'top',
      alignment: 'right',
      pointerPositioningStyle: Object.assign({}, topTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor top - offsetFromAnchor - pointer altitude
        transform: 'translate3d(144px, 114px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '190px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(25px, 14px, 0)'
      }
    });
  });

  test('top-left with insufficient space on top or bottom, sufficient space on left, becomes left-center', () => {
    mockAnchorElementRect = {
      height: 100,
      width: 50,
      top: 75,
      bottom: 175,
      left: 125,
      right: 175
    };
    mockWindow.document.documentElement.scrollHeight = 250;

    const actual = calculatePosition({
      placement: 'top',
      alignment: 'left',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 119px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '240px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 75px, 0)'
      }
    });
  });

  test('top-left with insufficient space on top, bottom, or left, sufficient space on right, becomes right-center', () => {
    mockAnchorElementRect = {
      height: 100,
      width: 75,
      top: 75,
      bottom: 175,
      left: 50,
      right: 125
    };
    mockWindow.document.documentElement.scrollHeight = 250;

    const actual = calculatePosition({
      placement: 'top',
      alignment: 'left',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'right',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, rightTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(130px, 119px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '240px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(136px, 75px, 0)'
      }
    });
  });

  test('top-center with insufficient space on top or bottom becomes left-center', () => {
    mockAnchorElementRect = {
      height: 100,
      width: 50,
      top: 75,
      bottom: 175,
      left: 125,
      right: 175
    };
    mockWindow.document.documentElement.scrollHeight = 250;

    const actual = calculatePosition({
      placement: 'top',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 119px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '240px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 75px, 0)'
      }
    });
  });

  test('bottom-left with insufficient space on bottom or top becomes left-center', () => {
    mockAnchorElementRect = {
      height: 100,
      width: 50,
      top: 75,
      bottom: 175,
      left: 125,
      right: 175
    };
    mockWindow.document.documentElement.scrollHeight = 250;

    const actual = calculatePosition({
      placement: 'bottom',
      alignment: 'left',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 119px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '240px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 75px, 0)'
      }
    });
  });

  test('left-top with insufficient space on left, sufficient space on right, becomes right-top', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 75,
      top: 125,
      bottom: 175,
      left: 50,
      right: 125
    };

    const actual = calculatePosition({
      placement: 'left',
      alignment: 'top',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'right',
      alignment: 'top',
      pointerPositioningStyle: Object.assign({}, rightTriangle, {
        // x = anchor right + offsetFromAnchor
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(130px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(136px, 125px, 0)'
      }
    });
  });

  test('left-center with insufficient space on left, sufficient space on right, becomes right-center', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 75,
      top: 125,
      bottom: 175,
      left: 50,
      right: 125
    };

    const actual = calculatePosition({
      placement: 'left',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'right',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, rightTriangle, {
        // x = anchor right + offsetFromAnchor
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(130px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(136px, 100px, 0)'
      }
    });
  });

  test('left-bottom with insufficient space on left, sufficient space on right, becomes right-bottom', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 75,
      top: 125,
      bottom: 175,
      left: 50,
      right: 125
    };

    const actual = calculatePosition({
      placement: 'left',
      alignment: 'bottom',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'right',
      alignment: 'bottom',
      pointerPositioningStyle: Object.assign({}, rightTriangle, {
        // x = anchor right + offsetFromAnchor
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(130px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(136px, 75px, 0)'
      }
    });
  });

  test('right-top with insufficient space on right, sufficient space on left, becomes left-top', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 75,
      top: 125,
      bottom: 175,
      left: 125,
      right: 200
    };

    const actual = calculatePosition({
      placement: 'right',
      alignment: 'top',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'top',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 125px, 0)'
      }
    });
  });

  test('right-center with insufficient space on right, sufficient space on left, becomes left-center', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 75,
      top: 125,
      bottom: 175,
      left: 125,
      right: 200
    };

    const actual = calculatePosition({
      placement: 'right',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 100px, 0)'
      }
    });
  });

  test('right-bottom with insufficient space on right, sufficient space on left, becomes left-bottom', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 75,
      top: 125,
      bottom: 175,
      left: 125,
      right: 200
    };

    const actual = calculatePosition({
      placement: 'right',
      alignment: 'bottom',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'bottom',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 144px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 75px, 0)'
      }
    });
  });

  test('left-top with insufficient space on left or right becomes bottom-center', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 125,
      top: 125,
      bottom: 175,
      left: 50,
      right: 200
    };

    const actual = calculatePosition({
      placement: 'left',
      alignment: 'top',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, bottomTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor bottom + offsetFromAnchor + pointer altitude
        transform: 'translate3d(107px, 180px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(63px, 186px, 0)'
      }
    });
  });

  test('left-center with insufficient space on left or right becomes bottom-center', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 125,
      top: 125,
      bottom: 175,
      left: 50,
      right: 200
    };

    const actual = calculatePosition({
      placement: 'left',
      alignment: 'center',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, bottomTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor bottom + offsetFromAnchor + pointer altitude
        transform: 'translate3d(107px, 180px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(63px, 186px, 0)'
      }
    });
  });

  test('right-top with insufficient space on right or left becomes bottom-center', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 125,
      top: 125,
      bottom: 175,
      left: 50,
      right: 200
    };

    const actual = calculatePosition({
      placement: 'right',
      alignment: 'top',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, bottomTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor bottom + offsetFromAnchor + pointer altitude
        transform: 'translate3d(107px, 180px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(63px, 186px, 0)'
      }
    });
  });

  test.skip('right-bottom with insufficient space on right or left becomes bottom-center', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 125,
      top: 125,
      bottom: 175,
      left: 50,
      right: 200
    };

    const actual = calculatePosition({
      placement: 'right',
      alignment: 'bottom',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'bottom',
      alignment: 'center',
      pointerPositioningStyle: Object.assign({}, bottomTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor bottom + offsetFromAnchor + pointer altitude
        transform: 'translate3d(107px, 180px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(63px, 186px, 0)'
      }
    });
  });

  test('left-bottom with encroaching body top adjusts', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 50,
      top: 30,
      bottom: 80,
      left: 125,
      right: 125
    };

    const actual = calculatePosition({
      placement: 'left',
      alignment: 'bottom',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'bottom',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 49px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 5px, 0)'
      }
    });
  });

  test('left-top with encroaching viewport bottom and containWithinViewport: false', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 50,
      top: 200,
      bottom: 250,
      left: 125,
      right: 125
    };

    const actual = calculatePosition({
      placement: 'left',
      alignment: 'top',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'top',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 219px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 200px, 0)'
      }
    });
  });

  test('left-top with encroaching viewport bottom containWithinViewport: true', () => {
    mockAnchorElementRect = {
      height: 50,
      width: 50,
      top: 200,
      bottom: 250,
      left: 125,
      right: 125
    };

    const actual = calculatePosition({
      placement: 'left',
      alignment: 'top',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement,
      containWithinViewport: true
    });
    expect(actual).toEqual({
      placement: 'left',
      alignment: 'top',
      pointerPositioningStyle: Object.assign({}, leftTriangle, {
        // x = anchor left - offsetFromAnchor - pointer altitude
        // y = anchor vertical center - 1/2 pointer base, rounded
        transform: 'translate3d(114px, 219px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '290px', // Body height - offsetFromEdge * 2
        'max-width': '290px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(14px, 195px, 0)'
      }
    });
  });

  test('top-left with insufficient space on right slides left', () => {
    mockWindow.document.documentElement.scrollWidth = 200;

    const actual = calculatePosition({
      placement: 'top',
      alignment: 'left',
      getAnchorElement: getMockAnchorElement,
      getPopoverElement: getMockPopoverElement
    });
    expect(actual).toEqual({
      placement: 'top',
      alignment: 'left',
      pointerPositioningStyle: Object.assign({}, topTriangle, {
        // x = anchor horizontal center - 1/2 pointer base, rounded
        // y = anchor top - offsetFromAnchor - pointer altitude
        transform: 'translate3d(144px, 114px, 0)'
      }),
      bodyPositioningStyle: {
        'max-height': '890px', // Body height - offsetFromEdge * 2
        'max-width': '190px', // Body width - offsetFromEdge * 2
        transform: 'translate3d(95px, 14px, 0)'
      }
    });
  });

  test.skip('top hidden by partly out-of-body anchor', () => {});
  test.skip('top hidden by partly out-of-containing-element anchor', () => {});
  test.skip('bottom hidden by partly out-of-body anchor', () => {});
  test.skip('bottom hidden by partly out-of-containing-element anchor', () => {});
  test.skip('left hidden by partly out-of-body anchor', () => {});
  test.skip('left hidden by partly out-of-containing-element anchor', () => {});
  test.skip('right hidden by partly out-of-body anchor', () => {});
  test.skip('right hidden by partly out-of-containing-element anchor', () => {});

  test.skip('top fixed by partly out-of-body anchor', () => {});
  test.skip('top fixed by partly out-of-containing-element anchor', () => {});
  test.skip('bottom fixed by partly out-of-body anchor', () => {});
  test.skip('bottom fixed by partly out-of-containing-element anchor', () => {});
  test.skip('left fixed by partly out-of-body anchor', () => {});
  test.skip('left fixed by partly out-of-containing-element anchor', () => {});
  test.skip('right fixed by partly out-of-body anchor', () => {});
  test.skip('right fixed by partly out-of-containing-element anchor', () => {});

  test.skip('popover height constrained by body height', () => {});
  test.skip('popover height constrained by containing element height', () => {});
  test.skip('popover height constrained by viewport height', () => {});
  test.skip('popover width constrained by containing element width', () => {});
  test.skip('popover width constrained by viewport width', () => {});
});
