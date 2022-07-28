import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Button from './button';
import IconText from '../icon-text';
import userEvent from '@testing-library/user-event';

describe('primary', () => {
  const mockOnClick = jest.fn();
  const props = {
    children: 'Primary',
    onClick: mockOnClick,
    passthroughProps: {
      'role': 'button'
    }
  };

  test('renders as expected', () => {
    const { baseElement } = render(<Button {...props} />)
    expect(baseElement).toMatchSnapshot();
  });

  test('click triggers callback', () => {
    render(<Button {...props} />)
    fireEvent.click(screen.getByRole('button'));

    expect(props.onClick).toHaveBeenCalled();
  });

  test('updates when a prop changes', () => {
    const { rerender } = render(<Button {...props} />)

    const nextProps = {
      ...props,
      color: 'pink'
    };

    rerender(<Button {...nextProps} />)
    expect(screen.getByText('Primary').classList.contains('btn--pink')).toBe(true)
  });
});

describe('secondary', () => {
  const props = {
    children: 'secondary',
    variant: 'secondary'
  } as const;

  test('renders as expected', () => {
    const { baseElement } = render(<Button {...props} />)
    expect(baseElement).toMatchSnapshot();
  });
});

describe('tertiary', () => {
  const props = {
    children: 'tertiary',
    variant: 'tertiary'
  } as const;

  test('renders as expected', () => {
    const { baseElement } = render(<Button {...props} />)
    expect(baseElement).toMatchSnapshot();
  });
});

describe('destructive', () => {
  const props = {
    children: 'destructive',
    variant: 'destructive'
  } as const;

  test('renders as expected', () => {
    const { baseElement } = render(<Button {...props} />)
    expect(baseElement).toMatchSnapshot();
  });
});

describe('appPrimary', () => {
  const props = {
    children: 'appPrimary',
    variant: 'appPrimary'
  } as const;

  test('renders as expected', () => {
    const { baseElement } = render(<Button {...props} />)
    expect(baseElement).toMatchSnapshot();
  });
});

describe('appSecondary', () => {
  const props = {
    children: 'appSecondary',
    variant: 'appSecondary'
  } as const;

  test('renders as expected', () => {
    const { baseElement } = render(<Button {...props} />)
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Link with outline and icon text, extra padding', () => {
  const mockOnClick = jest.fn();
  const props = {
    children: <IconText iconBefore="bug">Go do things</IconText>,
    href: '#',
    onClick: mockOnClick,
    outline: true,
    width: 'large',
    passthroughProps: {
      role: 'button',
    }
  } as const;

  test('renders as expected', () => {
    const { baseElement } = render(<Button {...props} />)
    expect(baseElement).toMatchSnapshot();
  });

  test('anchor still triggers callback', () => {
    render(<Button {...props} />)
    fireEvent.click(screen.getByRole('button'));

    expect(props.onClick).toHaveBeenCalled();
  });
});

describe('Full width, alternate color', () => {
  const props = {
    children: 'Here we are',
    color: 'purple',
    width: 'full',
    passthroughProps: {
      'aria-label': 'Example full width, purple button'
    }
  } as const;

  test('renders as expected', () => {
    const { baseElement } = render(<Button {...props} />)
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Div styled like a medium destructive button with some elementAttributes', () => {
  const props = {
    children: 'Save',
    size: 'medium',
    variant: 'destructive',
    onClick: jest.fn(),
    component: 'div',
    passthroughProps: {
      'aria-label': 'Example save button',
      role: 'button',
      'data-test': 'foo'
    }
  } as const;

  test('renders as expected', () => {
    const { baseElement } = render(<Button {...props} />)
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Disabled', () => {
  const mockOnClick = jest.fn();
  const props = {
    children: 'Oops',
    disabled: true,
    onClick: mockOnClick,
    passthroughProps: {
      'aria-hidden': true
    }
  } as const;

  test('renders as expected', () => {
    const { baseElement } = render(<Button {...props} />)
    expect(baseElement).toMatchSnapshot();
  });

  test('does not trigger callback', () => {
    render(<Button {...props} />)
    userEvent.click(screen.queryByRole('button'));
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
