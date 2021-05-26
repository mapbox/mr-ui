import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UnderlineTabItem from './underline-tab-item';
import { SIZE_SMALL, SIZE_MEDIUM } from './underline-tabs-constants';

/**
 * For navigation between pages or sections.
 *
 * Items will be `<button>`s or `<a>`s, depending on whether they
 * have `href` props or not.
 */
class UnderlineTabs extends React.Component {
  render() {
    const { props } = this;

    const small = props.size === SIZE_SMALL;
    const medium = props.size === SIZE_MEDIUM;

    const containerClasses = classnames('flex txt-nowrap unselectable', {
      'txt-bold': props.bold,
      'txt-s': medium,
      'txt-xs': small
    });

    const itemEls = props.items.map((item, index) => {
      const first = index === 0;
      const layoutClasses = classnames({
        ml12: !first && small,
        'ml24 ml36-mxl': !first && !small
      });
      return (
        <li key={item.id} className={layoutClasses}>
          <UnderlineTabItem
            active={props.active === item.id}
            onClick={props.onChange}
            size={props.size}
            inactiveColor={props.inactiveColor}
            activeColor={props.activeColor}
            hoverColor={props.hoverColor}
            overlapBorder={props.overlapBorder}
            {...item}
          />
        </li>
      );
    });

    return <ul className={containerClasses}>{itemEls}</ul>;
  }
}

UnderlineTabs.propTypes = {
  /**
   * Each item is an object with the following properties:
   * - `id` (required): A string ID.
   * - `label`: Text or React element. If `label` is not provided, `id` will
   *   be used, with its first letter capitalized. (You should provide your
   *   own `label` unless your `id`s are single words.)
   * - `href`: A URL. If `href` is provided, the items will be `<a>`s.
   *   If not, the items will be `<button>`s.
   * - `disabled`: Boolean.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.node,
      href: PropTypes.string,
      disabled: PropTypes.bool
    })
  ).isRequired,
  /**
   * The ID of the active item. Value must correspond with an `id` property
   * in the `items` array.
   */
  active: PropTypes.string.isRequired,
  /**
   * A callback that will be invoked when an item is clicked.
   * It will receive the ID of the clicked item and the click `event` itself as arguments.
   */
  onChange: PropTypes.func,
  /**
   * Three sizes: "small", "medium", or "large".
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * If `true`, the element will extend down one pixel so the underline beneath
   * the active item overlaps the bottom border of a container.
   * **You must provide your own bottom border,** by setting it on a container
   * element.
   */
  overlapBorder: PropTypes.bool,
  /** The Assembly color of inactive items. */
  inactiveColor: PropTypes.string,
  /** The Assembly color of active items. */
  activeColor: PropTypes.string,
  /** The Assembly color of hovered inactive items. */
  hoverColor: PropTypes.string,
  /** Whether or not the text is bold. */
  bold: PropTypes.bool
};

UnderlineTabs.defaultProps = {
  size: 'medium',
  inactiveColor: 'gray',
  activeColor: 'gray-dark',
  hoverColor: 'blue',
  overlapBorder: false,
  bold: true
};

export default UnderlineTabs;
