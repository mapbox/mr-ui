import React from 'react';
import ModalActions from './modal-actions';
import { render, screen, fireEvent } from '@testing-library/react';

describe('ModalActions', () => {
  describe('primary only', () => {
    test('renders as expected', () => {
      const { baseElement } = render(
        <ModalActions
          primaryAction={{ text: 'Okay', callback: jest.fn() }}
        />
      );
      
      expect(baseElement).toMatchSnapshot();
    });

    test('click triggers callback', () => {
      const mockedCallback = jest.fn();
      render(
        <ModalActions
          primaryAction={{ text: 'Okay', callback: mockedCallback }}
        />
      );
      fireEvent.click(screen.getByRole('button'));
      expect(mockedCallback).toHaveBeenCalledTimes(1);
    });
  });

  describe('primary and secondary', () => {
    test('renders as expected', () => {
      const { baseElement } = render(
        <ModalActions
          primaryAction={{ text: 'Okay', callback: jest.fn() }}
          secondaryAction={{ text: 'Cancel', callback: jest.fn }}
        />
      );
      
      expect(baseElement).toMatchSnapshot();
    });

    test('fires callbacks', () => {
      const mockedPrimaryCallback = jest.fn();
      const mockedSecondaryCallback = jest.fn();
      render(
        <ModalActions
          primaryAction={{ text: 'Okay', callback: mockedPrimaryCallback }}
          secondaryAction={{ text: 'Cancel', callback: mockedSecondaryCallback }}
        />
      );

      const actions = screen.queryAllByRole('button');

      fireEvent.click(actions[0]);
      expect(mockedPrimaryCallback).toHaveBeenCalledTimes(1);

      fireEvent.click(actions[1]);
      expect(mockedSecondaryCallback).toHaveBeenCalledTimes(1);
    });
  });

  describe('primary, secondary and tertiary', () => {
    test('renders as expected', () => {
      const { baseElement } = render(
        <ModalActions
          primaryAction={{ text: 'Okay', callback: jest.fn() }}
          secondaryAction={{ text: 'Cancel', callback: jest.fn }}
          tertiaryAction={{ text: 'Cancel', callback: jest.fn }}
        />
      );
      
      expect(baseElement).toMatchSnapshot();
    });

    test('fires callbacks', () => {
      const mockedPrimaryCallback = jest.fn();
      const mockedSecondaryCallback = jest.fn();
      const mockedTertiaryCallback = jest.fn();
      render(
        <ModalActions
          primaryAction={{ text: 'Okay', callback: mockedPrimaryCallback }}
          secondaryAction={{ text: 'Cancel', callback: mockedSecondaryCallback }}
          tertiaryAction={{ text: 'Exit', callback: mockedTertiaryCallback }}
        />
      );

      const actions = screen.queryAllByRole('button');

      fireEvent.click(actions[0]);
      expect(mockedPrimaryCallback).toHaveBeenCalledTimes(1);

      fireEvent.click(actions[1]);
      expect(mockedSecondaryCallback).toHaveBeenCalledTimes(1);

      fireEvent.click(actions[2]);
      expect(mockedTertiaryCallback).toHaveBeenCalledTimes(1);
    });

    test('disabled callbacks', () => {
      const mockedPrimaryCallback = jest.fn();
      const mockedSecondaryCallback = jest.fn();
      const mockedTertiaryCallback = jest.fn();
      render(
        <ModalActions
          primaryAction={{ text: 'Okay', disabled: true, callback: mockedPrimaryCallback }}
          secondaryAction={{ text: 'Cancel', disabled: true, callback: mockedSecondaryCallback }}
          tertiaryAction={{ text: 'Exit', disabled: true, callback: mockedTertiaryCallback }}
        />
      );

      const actions = screen.queryAllByRole('button');

      fireEvent.click(actions[0]);
      expect(mockedPrimaryCallback).not.toHaveBeenCalled();

      fireEvent.click(actions[1]);
      expect(mockedSecondaryCallback).not.toHaveBeenCalled();

      fireEvent.click(actions[2]);
      expect(mockedTertiaryCallback).not.toHaveBeenCalled();
    });
  });

  describe('primary and tertiary', () => {
    test('renders as expected', () => {
      const { baseElement } = render(
        <ModalActions
          primaryAction={{ text: 'Okay', callback: jest.fn() }}
          tertiaryAction={{ text: 'Cancel', callback: jest.fn }}
        />
      );
      
      expect(baseElement).toMatchSnapshot();
    });

    test('only renders primary', () => {
      const mockedPrimaryCallback = jest.fn();
      const mockedTertiaryCallback = jest.fn();
      render(
        <ModalActions
          primaryAction={{ text: 'Okay', callback: mockedPrimaryCallback }}
          tertiaryAction={{ text: 'Exit', callback: mockedTertiaryCallback }}
        />
      );

      const actions = screen.queryAllByRole('button');
      expect(actions.length).toEqual(1);
    });
  });
});
