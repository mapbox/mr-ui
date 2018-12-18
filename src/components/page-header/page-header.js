import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const MOBILE_NAV_TRIGGER_WIDTH = 36;
const MOBILE_NAV_POINTER_WIDTH = 32;
const MOBILE_NAV_MENU_OFFSET_LEFT = 10;
const MBX_USER_MENU_WIDTH = 66;
const MOBILE_NAV_MENU_OFFSET_TOP = 56;

class NonMobilePageHeader extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    window.MapboxUserMenu.initialize({
      // Boolean to indicate if the menu is used on a production or staging
      // site, which impacts which API endpoints are used.
      // Defaults to `false`.
      isProduction: false,
      // Boolean to indicate if text and other elements should be dark
      // so that they show up against a light background.
      // Defaults to `true`.
      dark: true,
      // ID of the element that the menu will be mounted into.
      // Defaults to "mbx-user-menu".
      elementId: 'mbx-user-menu',
      // Function called after the session is checked.
      // It will be passed `false` if the session is not valid, or a `user` object.
      // Optional.
      userCallback: function(user) {
        console.log('The user session has been checked!', user);
      }
    });
  }

  render() {
    const { items, siteName } = this.props;

    const itemEls = items.map(item => {
      return (
        <a
          href={item.href}
          className="flex-child relative mr18 mr36-mxl color-gray-dark color-blue-on-hover"
          key={item.href}
        >
          {item.text}
        </a>
      );
    });

    return (
      <div className="limiter flex-parent flex-parent--center-cross">
        <div className="flex-child flex-child--no-shrink flex-parent flex-parent--center-cross">
          <a
            className="flex-child mb-logo wmax180-mxl wmax30"
            href="https://www.mapbox.com"
            aria-label="Mapbox"
          />
          <div className="flex-child flex-parent flex-parent--center-cross color-blue txt-l txt-bold relative">
            <div
              className="flex-child mx12 bg-blue h24 none block-mxl"
              style={{ width: 2 }}
            />
            <a
              href="/"
              className="flex-child color-blue color-blue-dark-on-hover ml6 ml0-mxl"
            >
              {siteName}
            </a>
          </div>
        </div>

        <nav className="flex-child flex-child--grow flex-parent flex-parent--center-cross flex-parent--end-main txt-bold txt-s">
          {itemEls}
        </nav>
        <div
          id="mbx-user-menu"
          style={{ width: MBX_USER_MENU_WIDTH }}
          className="flex-child flex-child--no-shrink"
        />
      </div>
    );
  }
}

NonMobilePageHeader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  siteName: PropTypes.string.isRequired
};

class MobilePageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentDidMount() {
    window.MapboxUserMenu.initialize({
      // Boolean to indicate if the menu is used on a production or staging
      // site, which impacts which API endpoints are used.
      // Defaults to `false`.
      isProduction: false,
      // Boolean to indicate if text and other elements should be dark
      // so that they show up against a light background.
      // Defaults to `true`.
      dark: true,
      // ID of the element that the menu will be mounted into.
      // Defaults to "mbx-user-menu".
      elementId: 'mbx-user-menu',
      // Function called after the session is checked.
      // It will be passed `false` if the session is not valid, or a `user` object.
      // Optional.
      userCallback: function(user) {
        console.log('The user session has been checked!', user);
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.open && !prevState.open) {
      const doc = window.document;
      doc.addEventListener('click', this.closeOnDocumentClick);
      return;
    } else if (!this.state.open && prevState.open) {
      const doc = window.document;
      doc.removeEventListener('click', this.closeOnDocumentClick);
    }
  }

  componentWillUnmount() {
    const doc = window.document;
    doc.removeEventListener('click', this.closeOnDocumentClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.open !== nextState.open;
  }

  closeOnDocumentClick = event => {
    // Close the popup if the target is outside of the popup
    if (!this.state.open) return;
    const mobileMenuTrigger = this.mobileTriggerRef;
    if (mobileMenuTrigger.contains(event.target)) {
      return;
    }
    if (
      this.menuBodyElement.contains(event.target) &&
      !event.target.getAttribute('data-page-header-mobile-link')
    ) {
      return;
    }
    this.setState({ open: false });
  };

  toggleMenu = () => {
    this.setState(state => ({ open: !state.open }));
  };

  renderLogoName() {
    const { siteName } = this.props;

    return (
      <div className="flex-parent flex-parent--center-cross">
        <a
          className="flex-child mb-logo"
          href="https://www.mapbox.com"
          aria-label="Mapbox"
          style={{ width: 30 }}
        />
        <a
          href="/"
          className="flex-child color-blue color-blue-dark-on-hover txt-l txt-bold ml6"
          style={{ marginBottom: 1 }}
        >
          {siteName}
        </a>
      </div>
    );
  }

  renderMenu() {
    if (!this.state.open) return null;

    const pointerStyle = {
      width: MOBILE_NAV_POINTER_WIDTH / 2,
      height: MOBILE_NAV_POINTER_WIDTH / 2,
      fontSize: 0,
      lineHeight: 0,
      borderLeft: `${MOBILE_NAV_POINTER_WIDTH / 2}px solid transparent`,
      borderRight: `${MOBILE_NAV_POINTER_WIDTH / 2}px solid transparent`,
      borderBottom: `${MOBILE_NAV_POINTER_WIDTH / 2}px solid currentColor`,
      position: 'absolute',
      top: (-1 * MOBILE_NAV_POINTER_WIDTH) / 2,
      // 24 is the limiter's left padding.
      left:
        24 -
        MOBILE_NAV_MENU_OFFSET_LEFT +
        MOBILE_NAV_TRIGGER_WIDTH / 2 -
        MOBILE_NAV_POINTER_WIDTH / 2
    };

    const { items } = this.props;
    const itemEls = items.map((item, i) => {
      let classList =
        'color-gray-dark color-blue-on-hover txt-s txt-bold block';
      if (i < items.length - 1) {
        classList += ' mb12';
      }

      return (
        <li key={item.href} className={classList}>
          <a href={item.href} data-page-header-mobile-link={true}>
            {item.text}
          </a>
        </li>
      );
    });

    return (
      <div
        className="absolute left shadow-darken10-bold bg-white round z5"
        style={{
          top: MOBILE_NAV_MENU_OFFSET_TOP,
          marginLeft: MOBILE_NAV_MENU_OFFSET_LEFT
        }}
        ref={node => {
          this.menuBodyElement = node;
        }}
      >
        <div className="color-white" style={pointerStyle} />
        <div className="py30 px30">
          <nav>
            <ul className="txt-bold color-darken75">{itemEls}</ul>
          </nav>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="relative">
        <div className="limiter flex-parent flex-parent--center-cross">
          <div className="flex-child flex-child--no-shrink">
            <button
              type="button"
              ref={el => {
                this.mobileTriggerRef = el;
              }}
              aria-label="menu"
              className="block color-blue"
              onClick={this.toggleMenu}
            >
              <Icon
                name={this.state.open ? 'close' : 'menu'}
                size={MOBILE_NAV_TRIGGER_WIDTH}
              />
            </button>
          </div>
          <div className="flex-child flex-child--grow ml12">
            {this.renderLogoName()}
          </div>
          <div
            id="mbx-user-menu-mobile"
            style={{ width: MBX_USER_MENU_WIDTH }}
            className="flex-child flex-child--no-shrink"
          />
        </div>
        {this.renderMenu()}
      </div>
    );
  }
}

MobilePageHeader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  siteName: PropTypes.string.isRequired
};

export default class PageHeader extends React.Component {
  render() {
    const { items, siteName } = this.props;

    return (
      <div>
        <div className="none block-mm">
          <NonMobilePageHeader items={items} siteName={siteName} />
        </div>
        <div className="none-mm">
          <MobilePageHeader items={items} siteName={siteName} />
        </div>
      </div>
    );
  }
}

PageHeader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  siteName: PropTypes.string.isRequired
};
