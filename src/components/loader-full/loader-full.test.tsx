import React from 'react';
import { render } from '@testing-library/react';
import LoaderFull from './loader-full';

describe('LoaderFull', () => {
  describe('basic', () => {
    test('renders', () => {
      const { baseElement } = render(<LoaderFull />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('opaque', () => {
    test('renders', () => {
      const { baseElement } = render(<LoaderFull opaque={true} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
