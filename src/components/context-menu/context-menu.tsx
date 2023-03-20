import React, { Fragment, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import Icon from '../icon';
import classnames from 'classnames';

type Options = {
  title?: string;
  options: Array<Option>;
}

type Option = {
  label: ReactNode;
  value: string;
  keyCode?: ReactNode;
  options?: Array<Options>;
  disabled?: boolean;
};

interface Props {
  children: ReactNode;
  onChange: (value: string) => void;
  options: Array<Options>;
  themeControlWrapper?: string;
  themeItem?: string;
  themeTitle?: string;
  themeSeparator?: string;
}

export default function ContextMenu({
  children,
  onChange,
  options,
  themeControlWrapper = 'bg-white round shadow-darken10 px6 py6 txt-s wmin240',
  themeItem = 'px6 py6 round color-blue-on-hover bg-gray-lighter-on-hover',
  themeTitle = 'px6 py6 txt-bold',
  themeSeparator = 'border-t border--gray-light my6'
}: Props): ReactElement {

  const renderOption = ({ label, value, keyCode, disabled = false, options: subOptions }, index: number) => {
    const itemClass = classnames(`flex flex--space-between-main ${themeItem}`, {
      'events-none opacity25': disabled
    });

    if (subOptions) {
      return (
        <ContextMenuPrimitive.Sub key={index}>
          <ContextMenuPrimitive.SubTrigger disabled={disabled} className={itemClass}>
            <span className="w-3/4 txt-truncate">{label}</span>
            <Icon name="chevron-right" />
          </ContextMenuPrimitive.SubTrigger>
          <ContextMenuPrimitive.Portal>
            <ContextMenuPrimitive.SubContent className={themeControlWrapper}>
              {subOptions.map(renderOptions)}
            </ContextMenuPrimitive.SubContent>
          </ContextMenuPrimitive.Portal>
        </ContextMenuPrimitive.Sub>
      );
    }

    let key = keyCode;
    if (typeof keyCode === 'string') {
      key = <span className="txt-code">{keyCode}</span>
    }

    return (
      <ContextMenuPrimitive.Item
        disabled={disabled}
        key={index}
        onSelect={() => onChange(value)}
        className={itemClass}
      >
        <span className="w-3/4 txt-truncate">{label}</span>
        {keyCode && <span className="w-1/4 align-r txt-truncate">{key}</span>}
      </ContextMenuPrimitive.Item>
    );
  }

  const renderOptions = ({ title, options: groupOptions }, index: number) => {
    return (
      <Fragment key={index}>
        {index !== 0 && (
          <ContextMenuPrimitive.Separator className={themeSeparator} />
        )}
        {title && (
          <ContextMenuPrimitive.Label className={themeTitle}>
            {title}
          </ContextMenuPrimitive.Label>
        )}
        {groupOptions.map(renderOption)}
      </Fragment>
    );
  }

  return (
    <ContextMenuPrimitive.Root>
      <ContextMenuPrimitive.Trigger asChild>
        {children}
      </ContextMenuPrimitive.Trigger>
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content className={themeControlWrapper}>
          {options.map(renderOptions)}
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Portal>
    </ContextMenuPrimitive.Root>
  );
}

ContextMenu.propTypes = {
  /**
   * The trigger element.
   */
  children: PropTypes.node.isRequired,
  /**
   * An array of objects that represent each option group.
   * Each object contains two fields:
   * - `title` an optional property to name a group
   * - `options` an array of objects that represent an item:
   *   - `label` which can either be a string or valid JSX
   *   - `value` a unique string value
   *   - `keyCode` An optional string if there is a keybinding associated with the option
   *   - `options` an array of objects that matches these object properties for a submenu
   *
   * Any additional fields added will be passed as attributes to the input
   * element.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.node.isRequired,
          value: PropTypes.string.isRequired,
          keyCode: PropTypes.node
        })
      ).isRequired
    })
  ).isRequired,
  /**
   * Invoked when the control's value changes.
   * Passed two arguments:
   *
   * - The value. A string matching the `value` field of one of the `options`
   */
  onChange: PropTypes.func.isRequired,
  /** Assembly classes to apply to the menu container */
  themeControlWrapper: PropTypes.string,
  /** Assembly classes to apply to menu items */
  themeItem: PropTypes.string,
  /** Assembly classes to apply to menu title items */
  themeTitle: PropTypes.string,
  /** Assembly classes to apply to menu group separator */
  themeSeparator: PropTypes.string
};
