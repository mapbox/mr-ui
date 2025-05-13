import React from 'react';
import classnames from 'classnames';
import capitalize from '../utils/capitalize';
import { TabItemProps, SizeType } from './types';
import { SIZE_SMALL, SIZE_LARGE } from './tabs-constants';

interface Props extends TabItemProps {
  themeTabItem: string;
  tabBorder: boolean;
  size: SizeType;
  active?: boolean;
  onClick?: (a: string, event: any) => void;
}

export default function TabItem({
  active = false,
  disabled = false,
  themeTabItem,
  size,
  tabBorder,
  label,
  id
}: Props) {
  const itemClassesArray = themeTabItem.split(' ');
  // disabled tab should alway be gray, so we remove all color classes for it
  const noneColorClasses = itemClassesArray.filter(
    (c) => !c.startsWith('color-') && !c.startsWith('bg-')
  );
  const colorClasses = itemClassesArray
    .filter((c) => c.startsWith('color-') || c.startsWith('bg-'))
    .join(' ');

  const itemClasses = classnames(`block relative`, noneColorClasses, {
    [colorClasses]: !disabled,
    'color-gray-light cursor-default': disabled,
    'cursor-default': active,
    'is-active': active && !disabled,
    'border-b border--transparent border--gray-dark-on-active': tabBorder
  });

  label = label || capitalize(id);

  const getHeight = () => {
    if (!tabBorder) {
      return undefined;
    }
    switch (size) {
      case SIZE_SMALL:
        return 36;
      case SIZE_LARGE:
        return 48;
      default:
        return 42;
    }
  };

  return (
    <span
      className={classnames(
        'block relative flex flex--center-cross',
        itemClasses
      )}
      style={{
        height: getHeight()
      }}
    >
      {label}
    </span>
  );
}
