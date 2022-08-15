import React from 'react';
import hljs from 'highlight.js';
import { screen, render, fireEvent } from '@testing-library/react';
import CodeSnippet from './code-snippet';
import CopyButton from '../copy-button';

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
    };

    test('renders as expected', () => {
      const { baseElement } = render(<CodeSnippet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('highlighted', () => {
    const props = {
      code: snippetB,
      highlightedCode: hljs.highlightAuto(snippetA).value
    };

    test('renders as expected', () => {
      const { baseElement } = render(<CodeSnippet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('highlighted, no ranges, with onCopy callback', () => {
    beforeEach(() => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
    });

    const onCopyMock = jest.fn();
    const props = {
      code: snippetA,
      highlightedCode: hljs.highlightAuto(snippetA).value,
      onCopy: onCopyMock
    };

    test('renders as expected', () => {
      const { baseElement } = render(<CodeSnippet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onCopy works', () => {
      render(<CodeSnippet {...props} />)
      fireEvent.click(screen.getByTestId('copy-button'));
      expect(onCopyMock).toHaveBeenCalledTimes(1);
      expect(onCopyMock).toHaveBeenCalledWith(snippetA);
    });
  });

  describe('isCopySupported=false does not render copy-button', () => {
    const onCopyMock = jest.fn();
    const props = {
      code: snippetA,
      highlightedCode: hljs.highlightAuto(snippetA).value,
      onCopy: onCopyMock
    };

    test('copy-button is not rendered', () => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => false);
      render(<CodeSnippet {...props} />)
      expect(screen.queryAllByTestId('copy-button').length).toBe(0);
    });
  });

  describe('copy ranges', () => {
    const onCopyMock = jest.fn();
    const props = {
      code: snippetB,
      highlightedCode: hljs.highlightAuto(snippetB).value,
      onCopy: onCopyMock,
      copyRanges: [
        [1, 1],
        [7, 11]
      ]
    };

    beforeEach(() => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
    });

    test('renders as expected', () => {
      const { baseElement } = render(<CodeSnippet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onCopy callback first range works', () => {
      render(<CodeSnippet {...props} />)
      const copyButtons = screen.queryAllByTestId('copy-button');

      fireEvent.click(copyButtons[0]);
      expect(onCopyMock).toHaveBeenCalledWith(`import Mapbox
`, 0);
    });

    test('onCopy callbacks second range works', () => {
      render(<CodeSnippet {...props} />)
      const copyButtons = screen.queryAllByTestId('copy-button');

      fireEvent.click(copyButtons[1]);
      expect(onCopyMock).toHaveBeenCalledWith(`    let url = URL(string: \"mapbox://styles/mapbox/streets-v9\")
    let mapView = MGLMapView(frame: view.bounds, styleURL: url)
    mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    mapView.setCenter(CLLocationCoordinate2D(latitude: 59.31, longitude: 18.06), zoomLevel: 9, animated: false)
    view.addSubview(mapView)
`, 1);
    });
  });

  describe('isCopySupported=false does not render copy-button', () => {
    const onCopyMock = jest.fn();
    const props = {
      code: snippetB,
      highlightedCode: hljs.highlightAuto(snippetB).value,
      onCopy: onCopyMock,
      copyRanges: [
        [1, 1],
        [7, 11]
      ]
    };

    test('copy-button is not rendered', () => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => false);
      render(<CodeSnippet {...props} />)
      expect(screen.queryAllByTestId('copy-button').length).toBe(0);
    });
  });

  describe('maximum height', () => {
    const props = {
      code: snippetA,
      highlightedCode: hljs.highlightAuto(snippetA).value,
      maxHeight: 120
    };

    test('adds resize listener on mount', () => {
      jest.spyOn(window, 'addEventListener');
      jest.spyOn(window, 'removeEventListener');
      const { unmount } = render(<CodeSnippet {...props} />)
      expect(window.addEventListener).toHaveBeenCalled();
      unmount();
      expect(window.removeEventListener).toHaveBeenCalled();
    });
  });
});
