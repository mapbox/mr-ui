import React from 'react';
import hljs from 'highlight.js';
import { screen, render, fireEvent } from '@testing-library/react';
import CodeSnippet from './code-snippet';

const snippetA = `dependencies {
  compile('com.mapbox.mapboxsdk:mapbox-android-sdk:5.0.2@aar') {
    transitive=true
  }
}`;

const snippetB = `import Mapbox

  class ViewController: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()

    let url = URL(string: "mapbox://styles/mapbox/streets-v9")
    let mapView = MGLMapView(frame: view.bounds, styleURL: url)
    mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    mapView.setCenter(CLLocationCoordinate2D(latitude: 59.31, longitude: 18.06), zoomLevel: 9, animated: false)
    view.addSubview(mapView)
  }
}`;

describe('CodeSnippet', () => {
  // Almost all of the logic in CodeSnippet is about determining element rendering,
  // and snapshots cover that
  describe('non highlighted', () => {
    const props = {
      code: snippetA
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<CodeSnippet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('highlighted', () => {
    const props = {
      code: snippetB,
      highlightedCode: hljs.highlightAuto(snippetA).value
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<CodeSnippet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('highlighted, no ranges, with onCopy callback', () => {
    const onCopyMock = jest.fn();
    const props = {
      code: snippetA,
      highlightedCode: hljs.highlightAuto(snippetA).value,
      onCopy: onCopyMock
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<CodeSnippet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onCopy works', () => {
      render(<CodeSnippet {...props} />)
      fireEvent.click(screen.getByTestId('copy-button'));
      expect(onCopyMock).toHaveBeenCalledTimes(1);

      /*
      await waitFor(() => {
        expect(screen.getByTestId('firstName-error')).toBeInTheDocument();
      });
      */
    });
  });

  describe('copy ranges', () => {
    const props = {
      code: snippetB,
      highlightedCode: hljs.highlightAuto(snippetB).value,
      copyRanges: [
        [1, 1],
        [7, 11]
      ]
    };

    test('renders as expected', () => {
      const { baseElement } = render(<CodeSnippet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});

/*
testCases.copyRangesWithCallback = {
  description: 'copy ranges, with onCopy callback',
  component: CodeSnippet,
  props: {
    code: snippetB,
    highlightedCode: hljs.highlightAuto(snippetB).value,
    copyRanges: [
      [1, 1],
      [7, 11]
    ],
    onCopy: jest.fn()
  }
};

  describe(testCases.copyRangesWithCallback.description, () => {
    beforeEach(() => {
      testCase = testCases.copyRangesWithCallback;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props),
        { disableLifecycleMethods: true }
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('onCopy works', () => {
      wrapper.find('CopyButton').get(0).props.onCopy();
      expect(testCase.props.onCopy).toHaveBeenCalledTimes(1);
      expect(testCase.props.onCopy).toHaveBeenCalledWith(0);
    });

    test('onCopy works again, providing correct index', () => {
      wrapper.find('CopyButton').get(1).props.onCopy();
      expect(testCase.props.onCopy).toHaveBeenCalledTimes(1);
      expect(testCase.props.onCopy).toHaveBeenCalledWith(1);
    });
  });

testCases.maxHeight = {
  description: 'maximum height',
  component: CodeSnippet,
  props: {
    code: snippetB,
    highlightedCode: hljs.highlightAuto(snippetB).value,
    copyRanges: [
      [1, 1],
      [7, 11]
    ],
    maxHeight: 120
  }
};

  describe(testCases.maxHeight.description, () => {
    beforeEach(() => {
      testCase = testCases.maxHeight;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props),
        { disableLifecycleMethods: true }
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('adjusts copy blocks on resize', () => {
    let mockWindow;

    beforeEach(() => {
      testCase = testCases.copyRanges;
      mockWindow = _.assign({}, window, {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn()
      });
      getWindow.mockReturnValue(mockWindow);
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    test('adds resize listener on mount, with adjustPositions callback', () => {
      expect(mockWindow.addEventListener).toHaveBeenCalledTimes(1);
      expect(mockWindow.addEventListener).toHaveBeenCalledWith(
        'resize',
        wrapper.instance().adjustPositions
      );
    });

    test('removes resize listener on unmount', () => {
      const adjustPositions = wrapper.instance().adjustPositions;
      wrapper.unmount();
      expect(mockWindow.removeEventListener).toHaveBeenCalledTimes(1);
      expect(mockWindow.removeEventListener).toHaveBeenCalledWith(
        'resize',
        adjustPositions
      );
    });
  });
});
*/
