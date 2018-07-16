import React from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import IconButton from '../icon-button';

export default class Modal extends React.Component {
  static propTypes = {
    /** A screen-reader-friendly modal title. Required for accessibility. */
    title: PropTypes.string.isRequired,
    /**
     * Invoked when the modal should close. When provided, a close button is
     * present in the top right corner. If not provided, the `esc` key and any
     * outside clicks will not close the modal.
     */
    onExit: PropTypes.func,
    /**
     * When invoked, it returns the primary application node, which should be
     * `aria-hidden` when the modal is open. By default, returns
     * `document.getElementById('app')`.
     */
    getApplicationNode: PropTypes.func,
    /**
     * Modal container size. Options are `small`, `large`, or `auto`. If `auto`
     * is provided, a width is not specified.
     */
    size: PropTypes.oneOf(['small', 'large', 'auto']),
    /**
     * Selector for a specific element that should receive initial focus. The
     * value will be passed to `querySelector`.
     */
    initialFocus: PropTypes.string,
    /** Component's children, which will be the modal content. */
    children: PropTypes.node.isRequired,
    /** Additional style attributes to apply to the underlay container. */
    underlayStyle: PropTypes.object,
    /** Additional properties to apply to the underlay container. */
    underlayProps: PropTypes.object,
    /** CSS styling classes to apply to the underlay container. */
    themeUnderlay: PropTypes.string,
    /** CSS styling classes to apply to the modal container. */
    themeModal: PropTypes.string,
    /** CSS styling classes to apply to the close button. */
    themeButtonClose: PropTypes.string
  };

  static defaultProps = {
    size: 'large',
    getApplicationNode: () => document.getElementById('app'),
    underlayProps: { 'data-popover-ignore-clicks': true },
    underlayStyle: {},
    themeUnderlay: 'bg-darken50 px12 py12 px60-mm py60-mm',
    themeModal: 'bg-white px36 py36 round',
    themeButtonClose:
      'btn btn--transparent unround-t unround-br color-gray py12 px12'
  };

  render() {
    const {
      title,
      onExit,
      size,
      initialFocus,
      underlayProps,
      underlayStyle,
      themeUnderlay,
      themeModal,
      themeButtonClose
    } = this.props;

    let closeButton = null;
    if (onExit) {
      closeButton = (
        <div className="absolute top right">
          <IconButton
            icon="close"
            onClick={onExit}
            tooltipProps={{
              content: 'Close'
            }}
            themeButton={themeButtonClose}
          />
        </div>
      );
    }

    let widthClass = '';
    if (size === 'small') {
      widthClass = 'w360';
    }

    if (size === 'large') {
      widthClass = 'w600';
    }

    const containerClasses = `relative wmax-full ${widthClass}`;

    const dialogBody = (
      <div className={`${containerClasses} ${themeModal}`}>
        {this.props.children}
        {closeButton}
      </div>
    );

    if (underlayStyle.zIndex === undefined) {
      underlayStyle.zIndex = 1;
    }

    const modalProps = {
      titleText: title,
      getApplicationNode: this.props.getApplicationNode,
      underlayClass: themeUnderlay,
      dialogStyle: { boxShadow: 'none' },
      underlayColor: '',
      underlayProps,
      underlayStyle
    };

    if (onExit) {
      modalProps.onExit = onExit;
    }

    if (initialFocus) {
      modalProps.initialFocus = initialFocus;
    } else {
      modalProps.focusDialog = true;
    }

    return <AriaModal {...modalProps}>{dialogBody}</AriaModal>;
  }
}
