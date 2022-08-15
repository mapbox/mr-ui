import React from 'react';
//import delay from 'delay';
import CopyButton from './copy-button';
import { render } from '@testing-library/react';

describe('CopyButton', () => {

  describe('basic', () => {
    const props = {
      text: 'Copied by the default test case'
    };

    test('renders as expected', () => {
      const { baseElement } = render(<CopyButton {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

/*
    test('onChange is called with input id and value', async () => {
      render(<ControlText {...props} />)
      await userEvent.type(screen.getByTestId('testinput-input'), 'f');

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledTimes(1);
      });

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledWith('f', 'testinput');
      });
    });
*/
  });
});

/*
  describe(testCases.defaults.description, () => {
    test('changes state on click', () => {
      const destroySpy = jest.spyOn(wrapper.instance(), 'destroyClipboard');
      const setClipboardSpy = jest.spyOn(wrapper.instance(), 'setClipboard');
      wrapper.find('button').prop('onClick')({
        target: wrapper.find('button')
      });
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(destroySpy).toHaveBeenCalled();
      expect(setClipboardSpy).toHaveBeenCalled();
      return delay(820).then(() => {
        wrapper.update();
        expect(wrapper).toMatchSnapshot();
      });
    });

    test('focusTrapPaused false/undefined updates container element when setting clipboard', () => {
      wrapper.instance().setClipboard('cool container');

      expect(Clipboard).toHaveBeenCalledWith('cool container', {
        container: 'cool container'
      });
    });
  });

testCases.allProps = {
  description: 'all props',
  component: CopyButton,
  props: {
    text: 'more copiable text',
    onCopy: jest.fn(),
    className: 'px6 py6 btn btn--purple btn--stroke',
    focusTrapPaused: true,
    passthroughProps: {
      'data-testid': 'copy-button'
    }
  }
};

  describe(testCases.allProps.description, () => {
    beforeEach(() => {
      testCase = testCases.allProps;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    // Extra classes need to carry over to both states
    test('changes state on click', () => {
      const destroySpy = jest.spyOn(wrapper.instance(), 'destroyClipboard');
      const setClipboardSpy = jest.spyOn(wrapper.instance(), 'setClipboard');
      wrapper.find('button').prop('onClick')({
        target: wrapper.find('button')
      });
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(destroySpy).toHaveBeenCalled();
      expect(setClipboardSpy).toHaveBeenCalled();
      return delay(820).then(() => {
        wrapper.update();
        expect(wrapper).toMatchSnapshot();
      });
    });

    test('calls onCopy callback', () => {
      wrapper.find('button').prop('onClick')();
      expect(testCase.props.onCopy).toHaveBeenCalledTimes(1);
      expect(testCase.props.onCopy).toHaveBeenCalledWith(testCase.props.text);
    });

    test('focusTrapPaused true does not update container element when setting clipboard', () => {
      wrapper.instance().setClipboard('cool container');

      expect(Clipboard).toHaveBeenCalledWith('cool container', {});
    });
  });
});
*/
