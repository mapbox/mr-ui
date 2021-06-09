import React from 'react';
import { mount, shallow } from 'enzyme';
import { testCases } from './minimum-duration-loader-test-cases';

describe('MinimumDurationLoader', () => {
  let testCase;
  let wrapper;

  describe(testCases.defaultPropsNotLoaded.description, () => {
    beforeEach(() => {
      jest.useFakeTimers();
      testCase = testCases.defaultPropsNotLoaded;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("renders the loading indicator and doesn't render the content", () => {
      wrapper.update();
      expect(wrapper.find('[data-test-loader]').length).toEqual(1);
      expect(wrapper.find('[data-test-content]').length).toEqual(0);
    });

    it('renders the content 1s after isLoaded prop changes', () => {
      wrapper.setProps({ isLoaded: true });
      wrapper.update();
      expect(wrapper.find('[data-test-loader]').length).toEqual(1);
      expect(wrapper.find('[data-test-content]').length).toEqual(0);
      jest.runTimersToTime(1000);
      wrapper.update();
      expect(wrapper.find('[data-test-loader]').length).toEqual(0);
      expect(wrapper.find('[data-test-content]').length).toEqual(1);
    });

    it('does not render the content if isLoaded becomes `false` after having been `true`', () => {
      const contentHtml = '<span data-test-content="true">Content</span>';
      const loaderHtml = '<div class="loading" data-test-loader="true"></div>';

      wrapper.setProps({ isLoaded: true });
      expect(wrapper.html()).toEqual(loaderHtml);
      jest.runTimersToTime(1000);
      wrapper.update();
      expect(wrapper.html()).toEqual(contentHtml);
      wrapper.setProps({ isLoaded: false });
      expect(wrapper.html()).toEqual(loaderHtml);
      wrapper.setProps({ isLoaded: true });
      expect(wrapper.html()).toEqual(loaderHtml);
      jest.runTimersToTime(1000);
      wrapper.update();
      expect(wrapper.html()).toEqual(contentHtml);
    });

    it('calls onContentRender after the content is rendered', () => {
      const onContentRender = jest.fn();
      wrapper.setProps({ onContentRender, isLoaded: true });
      expect(onContentRender).not.toHaveBeenCalled();
      jest.runTimersToTime(1000);
      expect(onContentRender).toHaveBeenCalled();
    });
  });

  describe(testCases.defaultPropsLoaded.description, () => {
    beforeEach(() => {
      jest.useFakeTimers();
      testCase = testCases.defaultPropsLoaded;
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('renders the content immediately when isLoaded is true on mount', () => {
      wrapper = mount(React.createElement(testCase.component, testCase.props));
      expect(wrapper.find('[data-test-loader]').length).toEqual(0);
      expect(wrapper.find('[data-test-content]').length).toEqual(1);
    });

    it('calls onContentRender on mount when isLoaded is true on mount', () => {
      const onContentRender = jest.fn();
      wrapper = mount(
        React.createElement(
          testCase.component,
          Object.assign({ onContentRender }, testCase.props)
        )
      );
      expect(onContentRender).toHaveBeenCalled();
    });
  });

  describe(testCases.customDuration.description, () => {
    beforeEach(() => {
      jest.useFakeTimers();
      testCase = testCases.customDuration;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("renders the loading indicator and doesn't render the content", () => {
      expect(wrapper.find('[data-test-loader]').length).toEqual(1);
      expect(wrapper.find('[data-test-content]').length).toEqual(0);
    });

    it('renders the content 5s after isLoaded prop changes', () => {
      wrapper.setProps({ isLoaded: true });
      wrapper.update();
      // Loader should exist
      expect(wrapper.find('[data-test-loader]').length).toEqual(1);
      expect(wrapper.find('[data-test-content]').length).toEqual(0);
      jest.runTimersToTime(1000);
      wrapper.update();
      // Loader should still exist because we exceeded the minimum duration
      expect(wrapper.find('[data-test-loader]').length).toEqual(1);
      expect(wrapper.find('[data-test-content]').length).toEqual(0);
      jest.runTimersToTime(4000);
      wrapper.update();
      // We've exceeded the minimum duration, so the loader should not exist
      expect(wrapper.find('[data-test-loader]').length).toEqual(0);
      expect(wrapper.find('[data-test-content]').length).toEqual(1);
    });
  });

  describe(testCases.minimumLoaderLoadedWithDefaultLoader.description, () => {
    beforeEach(() => {
      testCase = testCases.minimumLoaderLoadedWithDefaultLoader;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    it('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(
    testCases.minimumLoaderNotLoadedWithDefaultLoader.description,
    () => {
      beforeEach(() => {
        testCase = testCases.minimumLoaderNotLoadedWithDefaultLoader;
        wrapper = shallow(
          React.createElement(testCase.component, testCase.props)
        );
      });

      it('renders', () => {
        expect(wrapper).toMatchSnapshot();
      });
    }
  );

  describe(testCases.minimumLoaderLoadedWithCustomLoader.description, () => {
    beforeEach(() => {
      testCase = testCases.minimumLoaderLoadedWithCustomLoader;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    it('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.minimumLoaderNotLoadedWithCustomLoader.description, () => {
    beforeEach(() => {
      testCase = testCases.minimumLoaderNotLoadedWithCustomLoader;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    it('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
