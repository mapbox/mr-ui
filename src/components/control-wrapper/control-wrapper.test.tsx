import React from 'react';
import ControlWrapper from './control-wrapper';
import { render } from '@testing-library/react';

describe('ControlWrapper', () => {
  describe('basic', () => {
    const props = {
      id: 'control-wrapper',
      children: <span>fake input</span>
    };

    test('renders', () => {
      const { baseElement } = render(<ControlWrapper {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('basic with error', () => {
    const props = {
      id: 'control-wrapper',
      validationError: 'There was an error',
      children: <span>fake input</span>,
      themeLabel: 'bg-red'
    };

    test('renders', () => {
      const { baseElement } = render(<ControlWrapper {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('jsx error', () => {
    const props = {
      id: 'control-wrapper',
      validationError: (
        <div>
          <div className="txt-bold mb3">Something went wrong!</div>
          <div>You made a huge mistake</div>
        </div>
      ),
      children: <span>fake input</span>,
      themeLabel: 'bg-red'
    };

    test('renders', () => {
      const { baseElement } = render(<ControlWrapper {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
