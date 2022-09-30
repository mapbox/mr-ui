import React from 'react';
import { render } from '@testing-library/react';
import IconText from './icon-text';
import Icon from '../icon';

describe('IconText', () => {
  describe('icon before', () => {
    const props = {
      children: 'Copy',
      iconBefore: 'clipboard'
    };

    test('renders', () => {
      const { baseElement } = render(<IconText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('icon after', () => {
    const props = {
      children: 'Next',
      iconAfter: 'chevron-right'
    };

    test('renders', () => {
      const { baseElement } = render(<IconText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('both icons', () => {
    const props = {
      children: 'What',
      iconBefore: 'check',
      iconAfter: <Icon name="github" />
    };

    test('renders', () => {
      const { baseElement } = render(<IconText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('inline flex parent', () => {
    const props = {
      children: <span>Inline</span>,
      iconBefore: 'polyline',
      inline: true
    };

    test('renders', () => {
      const { baseElement } = render(<IconText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

});
