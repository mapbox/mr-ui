import React from 'react';
import classnames from 'classnames';
import {
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_LARGE
} from './tabs-constants';
import capitalize from '../utils/capitalize';
import { TabItemProps, SizeType } from './types';

interface Props extends TabItemProps {
  inactiveColor: string,
  activeColor: string,
  hoverColor: string,
  overlapBorder: boolean,
  size: SizeType,
  active?: boolean,
  onClick?: (a: string, event: any) => void,
}

export default function TabItem({
  size = SIZE_MEDIUM,
  active = false,
  disabled = false,
  inactiveColor,
  activeColor,
  hoverColor,
  overlapBorder,
  label,
  id,
}: Props) {
  // If we're overlapping a bottom border, each height must be 2px
  // more than the perceived height to account for the negative
  // margins on top and bottom.
  const getHeight = () => {
    const offset = overlapBorder ? 2 : 0;
    switch (size) {
      case SIZE_SMALL:
        return 36 + offset;
      case SIZE_LARGE:
        return 48 + offset;
      default:
        return 42 + offset;
    }
  }

  const renderBorder = () => {
    if (!active) {
      return null;
    }
    const borderClasses = classnames('absolute bottom left right border-b', {
      'border-b--2': size !== SIZE_SMALL
    });
    return <span data-testid="tab-border" className={borderClasses} />;
  }

  const itemClasses = classnames(`block relative`, {
    'mb-neg1 mt-neg1': overlapBorder,
    [`color-${inactiveColor} color-${hoverColor}-on-hover`]:
      !active && !disabled,
    [`color-${activeColor} cursor-default`]: active,
    'color-gray-light cursor-default': disabled
  });

  label = label || capitalize(id);
  const content = (
    <span
      className="block relative flex flex--center-cross"
      style={{ height: getHeight() }}
    >
      {label}
      {renderBorder()}
    </span>
  );

  const universalProps = {
    className: itemClasses,
  };

  return (
    <span data-testid="tab-text-wrapper" {...universalProps}>
      {content}
    </span>
  );
}

