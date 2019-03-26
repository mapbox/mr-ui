import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Tooltip from '../tooltip';

export default class Badge extends React.Component {
  static propTypes = {
    /** Text in the badge. */
    badgeText: PropTypes.string.isRequired,
    /** Badge coloring options. */
    coloring: PropTypes.oneOf(['blue', 'orange', 'purple']),
    /** Text in the tooltip. If not provided, there is no tooltip. */
    tooltipText: PropTypes.string
  };

  static defaultProps = {
    coloring: 'orange'
  };

  render() {
    const { badgeText, coloring, tooltipText } = this.props;
    const badgeClasses = classnames(
      'txt-s txt-bold round px6 py3 inline-block cursor-default',
      {
        'bg-blue-faint color-blue ': coloring === 'blue',
        'bg-orange-faint color-orange-dark ': coloring === 'orange',
        'bg-purple-faint color-purple ': coloring === 'purple'
      }
    );

    if (tooltipText) {
      return (
        <Tooltip content={tooltipText} maxWidth="small" placement="top">
          <div className={badgeClasses}>{badgeText}</div>
        </Tooltip>
      );
    }

    return <div className={badgeClasses}>{badgeText}</div>;
  }
}
