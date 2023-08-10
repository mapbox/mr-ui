import React from 'react';
import ControlFile from './control-file';
import { screen, render  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ControlFile', () => {
  describe('basic', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput-1',
      onChange: mockOnChange
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlFile {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('calls onchange handler on upload', async () => {
      render(<ControlFile {...props} />)
      const file = new File(['bonjovi'], 'bon jovi.mp3');
      await userEvent.upload(screen.getByTestId('testinput-1-input'), file);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith(
        [file],
        props.id
      );
    });
  });

  describe('multiple', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput-1',
      onChange: mockOnChange,
      multiple: true
    } as const;

    test('calls onchange handler on upload', async () => {
      render(<ControlFile {...props} />)

      const file1 = new File(['bonjovi'], 'bon jovi.mp3');
      const file2 = new File(['aerosmith'], 'aerosmith.mp3');
      const files = [ file1, file2 ]

      await userEvent.upload(screen.getByTestId('testinput-1-input'), files);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith([
          file1,
          file2
        ],
        props.id
      );
    });
  });

  describe('disabled', () => {
    const props = {
      id: 'testinput-1',
      onChange: jest.fn(),
      disabled: true
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlFile {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('all options', () => {
    const props = {
      id: 'testinput-3',
      themeControlFile: 'bg-red-faint py6 px12 round-full link--red txt-s',
      themeControlWrapper: 'bg-red-light',
      displayValue: 'Select an image',
      validationError: 'oh no!',
      optional: true,
      accept: '.jpg, .jpeg, .png',
      multiple: true,
      autoFocus: true,
      onChange: jest.fn()
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlFile {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('extra props works', () => {
      render(<ControlFile {...props} />)
      expect(screen.getByTestId('testinput-3-input')).toHaveProperty('multiple', true);
    });
  });

  describe('child element', () => {
    const props = {
      id: 'testinput-4',
      onChange: jest.fn()
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlFile {...props}>Hello!</ControlFile>)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
