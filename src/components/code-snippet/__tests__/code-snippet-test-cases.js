import hljs from 'highlight.js';
import CodeSnippet from '../code-snippet';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

const snippetA = `dependencies {
  compile('com.mapbox.mapboxsdk:mapbox-android-sdk:5.0.2@aar') {
    transitive=true
  }
}`;

testCases.notHighlighted = {
  description: 'not highlighted',
  component: CodeSnippet,
  props: {
    code: snippetA
  }
};

testCases.highlighted = {
  description: 'highlighted',
  component: CodeSnippet,
  props: {
    code: snippetA,
    highlightedCode: hljs.highlightAuto(snippetA).value
  }
};

testCases.highlightedNoRangesWithCallback = {
  description: 'highlighted, no ranges, with onCopy callback',
  component: CodeSnippet,
  props: {
    code: snippetA,
    highlightedCode: hljs.highlightAuto(snippetA).value,
    onCopy: safeSpy()
  }
};

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

testCases.copyRanges = {
  description: 'copy ranges',
  component: CodeSnippet,
  props: {
    code: snippetB,
    highlightedCode: hljs.highlightAuto(snippetB).value,
    copyRanges: [
      [1, 1],
      [7, 11]
    ]
  }
};

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
    onCopy: safeSpy()
  }
};

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

export { testCases };
