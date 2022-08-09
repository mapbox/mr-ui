import React from 'react';
import { render } from '@testing-library/react';
import ChevronousText from './chevronous-text';

describe('ChevronousText', () => {
  describe('basic', () => {
    const props = {
      text: 'Explore Mapbox'
    };

    test('renders as expected', () => {
      const { baseElement } = render(<ChevronousText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('one long unwrappable word text', () => {
    const props = {
      text: 'Pneumonoultramicroscopicsilicovolcanoconiosis'
    };

    test('renders as expected', () => {
      const { baseElement } = render(<ChevronousText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('multiline text', () => {
    const props = {
      text: '"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us..." - A Tale of Two Cities'
    };

    test('renders as expected', () => {
      const { baseElement } = render(<ChevronousText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('sized icon', () => {
    const props = {
      iconSize: 10,
      text: 'Cheers!'
    };

    test('renders as expected', () => {
      const { baseElement } = render(<ChevronousText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('chevron before one long unwrappable word text', () => {
    const props = {
      iconBefore: true,
      text: 'Lopadotemachoselachogaleokranioleipsanodrimhypotrimmatosilphioparaomelitokatakechymenokichlepikossyphophattoperisteralektryonoptekephalliokigklopeleiolagoiosiraiobaphetraganopterygon'
    };

    test('renders as expected', () => {
      const { baseElement } = render(<ChevronousText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('chevron before multiline text', () => {
    const props = {
      iconBefore: true,
      text: '"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us..." - A Tale of Two Cities'
    };

    test('renders as expected', () => {
      const { baseElement } = render(<ChevronousText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('sized icon before text', () => {
    const props = {
      iconBefore: true,
      iconSize: '1.7em',
      text: 'Cheers!'
    };

    test('renders as expected', () => {
      const { baseElement } = render(<ChevronousText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
