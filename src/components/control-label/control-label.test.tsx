import React from 'react';
import { render } from '@testing-library/react';
import ControlLabel from './control-label';

describe('ControlLabel', () => {

  describe('basic', () => {
    const props = {
      text: 'basic label',
      id: 'label-id'
    };

    test('renders', () => {
      const { baseElement } = render(<ControlLabel {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('basic with aside', () => {
    const props = {
      text: 'basic label',
      id: 'label-id',
      aside: <span>Aside text</span>
    };

    test('renders', () => {
      const { baseElement } = render(<ControlLabel {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('basic with optional', () => {
    const props = {
      text: 'basic label',
      id: 'label-id',
      aside: 'This is an aside',
      optional: true,
      themeLabel: 'color-red'
    };

    test('renders', () => {
      const { baseElement } = render(<ControlLabel {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
