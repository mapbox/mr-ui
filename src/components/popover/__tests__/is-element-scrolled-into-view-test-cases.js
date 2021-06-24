import React from 'react';
import _ from 'lodash';
import createScrollListener from '../create-scroll-listener';
import isElementScrolledIntoView from '../is-element-scrolled-into-view';

const testCases = {};

// Also tests createScrollListener!
class WindowTest extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.updateList();
    this.scrollListener = createScrollListener(window, this.updateList);
    window.addEventListener('resize', this.updateList);
    this.scrollListener.start();
  }

  componentWillUnmount() {
    this.scrollListener.stop();
    window.removeEventListener('resize', this.updateList);
  }

  updateList = () => {
    let nextList = [];
    _.forEach(document.querySelectorAll('[data-test]'), (el) => {
      const testId = el.getAttribute('data-test');
      if (!/^window-el-/.test(testId)) return;
      if (isElementScrolledIntoView(el)) {
        nextList.push(el.textContent);
      }
    });
    this.setState({ list: nextList.sort() });
  };

  render() {
    return (
      <div>
        <div
          data-test="window-list"
          className="fixed bottom right p24 border bg-white"
        >
          {this.state.list.join(', ')}
        </div>
        <div data-test="window-el-A" className="mt240 bg-gray-light">
          A
        </div>
        <div data-test="window-el-B" className="mt240 bg-gray-light">
          B
        </div>
        <div data-test="window-el-C" className="mt240 bg-gray-light">
          C
        </div>
        <div data-test="window-el-D" className="mt240 bg-gray-light">
          D
        </div>
      </div>
    );
  }
}

testCases.windowTest = {
  description: 'window test',
  element: <WindowTest />
};

class ParentTest extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.updateList();
    this.scrollListenerA = createScrollListener(window, this.updateList);
    this.scrollListenerB = createScrollListener(
      this.refs.parent,
      this.updateList
    );
    window.addEventListener('resize', this.updateList);
    this.scrollListenerA.start();
    this.scrollListenerB.start();
  }

  componentWillUnmount() {
    this.scrollListenerA.stop();
    this.scrollListenerB.stop();
    window.removeEventListener('resize', this.updateList);
  }

  updateList = () => {
    let nextList = [];
    _.forEach(document.querySelectorAll('[data-test]'), (el) => {
      const testId = el.getAttribute('data-test');
      if (!/^parent-el-/.test(testId)) return;
      if (isElementScrolledIntoView(el)) {
        nextList.push(el.textContent);
      }
    });
    this.setState({ list: nextList.sort() });
  };

  render() {
    return (
      <div>
        <div data-test="parent-list">{this.state.list.join(', ')}</div>
        <div
          className="border h240 overflow-auto"
          data-test="parent-container"
          ref="parent"
        >
          <div data-test="parent-el-A" className="mt120 bg-gray-light">
            A
          </div>
          <div data-test="parent-el-B" className="mt120 bg-gray-light">
            B
          </div>
          <div data-test="parent-el-C" className="mt120 bg-gray-light">
            C
          </div>
          <div data-test="parent-el-D" className="mt120 bg-gray-light">
            D
          </div>
        </div>
      </div>
    );
  }
}

testCases.parentTest = {
  description: 'parent test',
  element: <ParentTest />
};

export { testCases };
