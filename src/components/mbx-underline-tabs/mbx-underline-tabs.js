import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MbxUnderlineTabItem from './mbx-underline-tab-item';

const SIZE_SMALL = 'small';
const SIZE_MEDIUM = 'medium';
const SIZE_LARGE = 'large';

class MbxUnderlineTabs extends React.PureComponent {
  renderItems() {
    const { props } = this;
    return props.items.map((item, index) => {
      const isFirst = index === 0;
      const layoutClasses = classnames('flex-child', {
        'ml24 ml36-mxl': !isFirst && props.size === SIZE_MEDIUM,
        ml12: !isFirst && props.size === SIZE_SMALL,
        ml24: !isFirst && props.size === SIZE_LARGE
      });
      return (
        <div key={item.id} className={layoutClasses}>
          <MbxUnderlineTabItem
            active={props.active === item.id}
            onClick={props.onChange}
            size={props.size}
            inactiveColor={props.inactiveColor}
            activeColor={props.activeColor}
            {...item}
          />
        </div>
      );
    });
  }

  render() {
    const { props } = this;
    const containerClasses = classnames('flex-parent', {
      'txt-s': props.size === SIZE_MEDIUM,
      'txt-xs': props.size === SIZE_SMALL
    });
    return <div className={containerClasses}>{this.renderItems()}</div>;
  }
}

MbxUnderlineTabs.propTypes = {
  size: PropTypes.oneOf([SIZE_SMALL, SIZE_MEDIUM, SIZE_LARGE]),
  active: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      id: PropTypes.string,
      onClick: PropTypes.func,
      href: PropTypes.string,
      disabled: PropTypes.string
    })
  ).isRequired,
  onChange: PropTypes.func,
  inactiveColor: PropTypes.string,
  activeColor: PropTypes.string
};

MbxUnderlineTabs.defaultProps = {
  size: SIZE_MEDIUM
};

export default MbxUnderlineTabs;
