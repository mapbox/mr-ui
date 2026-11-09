import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ControlRange from './control-range';

describe('ControlRange', () => {
  describe('basic', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      onChange: mockOnChange
    };

    test('renders', () => {
      const { baseElement } = render(<ControlRange {...props} />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('disabled', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      onChange: mockOnChange,
      disabled: true
    };

    test('renders', () => {
      const { baseElement } = render(<ControlRange {...props} />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('all options', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      label: 'All options',
      validationError: 'oh no!',
      value: [200, 400, 600],
      min: 100,
      max: 1000,
      step: 100,
      optional: true,
      autoFocus: true,
      aside: <span>Aside text</span>,
      themeControlRange: 'range--s range--red',
      themeControlRangeActive: 'bg-red-dark',
      themeControlWrapper: 'bg-red-light',
      themeLabel: 'txt-s txt-bold color-white',
      onChange: mockOnChange
    };

    test('renders', () => {
      const { baseElement } = render(<ControlRange {...props} />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('tooltip', () => {
    const mockOnChange = jest.fn();
    window.HTMLElement.prototype.hasPointerCapture = jest.fn();
    const props = {
      id: 'testinput',
      label: 'All options',
      validationError: 'oh no!',
      value: [200],
      min: 100,
      max: 1000,
      step: 100,
      optional: true,
      autoFocus: true,
      aside: <span>Aside text</span>,
      themeControlRange: 'range--s range--red',
      themeControlRangeActive: 'bg-red-dark',
      themeControlWrapper: 'bg-red-light',
      themeLabel: 'txt-s txt-bold color-white',
      tooltip: true,
      onChange: mockOnChange
    };
    test('shows the value on hover', async () => {
      render(<ControlRange {...props} />);
      await userEvent.hover(screen.getByRole('slider'));
      expect(await screen.findByRole('tooltip')).toHaveTextContent('200');
    });

    test('keyboard focus stays on the thumb until Tab moves it on', async () => {
      const user = userEvent.setup();
      render(
        <>
          <ControlRange {...props} autoFocus={false} />
          <button type="button">After</button>
        </>
      );
      const thumb = screen.getByRole('slider');

      await user.tab();
      expect(await screen.findByRole('tooltip')).toHaveTextContent('200');
      expect(thumb).toHaveFocus();

      await user.keyboard('{ArrowRight}');
      expect(mockOnChange).toHaveBeenCalledWith([300], 'testinput');
      expect(thumb).toHaveFocus();

      await user.tab();
      expect(screen.getByRole('button', { name: 'After' })).toHaveFocus();
    });
  });
});
