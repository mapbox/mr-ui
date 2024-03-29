import React from 'react';
import Accordion from './accordion';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Accordion', () => {
  describe('basic', () => {
    const mockedToggle = jest.fn();
    const props = {
      onToggle: mockedToggle,
      items: [
        { id: 'one', header: () => <span>one</span>, body: 'First body' },
        { id: 'two', header: () => <span>two</span>, body: 'Second body' },
        { id: 'three', header: () => <span>three</span>, body: 'Third body' }
      ]
    };

    test('renders', () => {
      const { baseElement } = render(<Accordion {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('onToggle is called', () => {
      render(<Accordion {...props} />);
      const item = screen.getByTestId('accordion-trigger-three');
      fireEvent.click(item);
      expect(mockedToggle).toHaveBeenCalledWith('three');
      fireEvent.click(item);
      expect(mockedToggle).toHaveBeenCalledWith('');
      expect(mockedToggle).toHaveBeenCalledTimes(2);
    });
  });

  describe('disabled', () => {
    const mockedToggle = jest.fn();
    const props = {
      onToggle: mockedToggle,
      items: [
        { id: 'one', header: () => <span>one</span>, body: 'First body' },
        { id: 'two', header: () => <span>two</span>, body: 'Second body' },
        { id: 'three', header: () => <span>three</span>, body: 'Third body', disabled: true }
      ]
    };

    test('renders', () => {
      const { baseElement } = render(<Accordion {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('onToggle is not called', () => {
      render(<Accordion {...props} />);
      const item = screen.getByTestId('accordion-trigger-three');
      fireEvent.click(item);
      expect(mockedToggle).not.toHaveBeenCalled();
    });
  });

  describe('all options', () => {
    const mockedToggle = jest.fn();
    const props = {
      onToggle: mockedToggle,
      items: [
        {
          id: 'one',
          header: (active) => {
            return (
              <div>
                one
                {active && <span className="ml6 txt-normal">I am active</span>}
              </div>
            );
          },
          body: 'First body'
        },
        {
          id: 'two',
          header: (active) => {
            return (
              <div>
                two
                {active && <span className="ml6 txt-normal">I am active</span>}
              </div>
            );
          },
          body: 'Second body'
        },
        {
          id: 'third',
          header: (active) => {
            return (
              <div>
                third
                {active && <span className="ml6 txt-normal">I am active</span>}
              </div>
            );
          },
          body: 'Third body'
        }
      ],
      activeItem: 'one',
      themeItem: 'bg-red-faint border-b border--red-dark',
      themeItemHeader:
        'bg-red txt-l txt-bold link link--white bg-red-dark-on-hover px6 py6',
      themeItemBody: 'py6 px6 txt-l bg-red-light'
    };

    test('renders', () => {
      const { baseElement } = render(<Accordion {...props} />);
      expect(baseElement).toMatchSnapshot();
    });
  });
});
