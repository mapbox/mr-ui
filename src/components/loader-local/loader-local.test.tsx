import React from 'react';
import { render } from '@testing-library/react';
import LoaderLocal from './loader-local';

describe('LoaderFull', () => {
  describe('basic', () => {
    test('renders', () => {
      const { baseElement } = render(<LoaderLocal />)
      expect(baseElement).toMatchSnapshot();
    });
  });
  describe('themeLoader', () => {
    test('renders', () => {
      const { baseElement } = render(<LoaderLocal themeLoader="bg-red" />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
