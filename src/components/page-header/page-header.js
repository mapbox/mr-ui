import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const MOBILE_NAV_TRIGGER_WIDTH = 36;
const MOBILE_NAV_POINTER_WIDTH = 16;
const MOBILE_NAV_MENU_OFFSET_LEFT = 10;

class NonMobilePageHeader extends React.Component {
  shouldComponentUpdate() {
    return false;
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
            className="flex-child mb-logo"
            href="https://www.mapbox.com"
            aria-label="Mapbox"
          />
          <div
            className="flex-child flex-parent flex-parent--center-cross color-blue txt-l txt-bold relative"
            style={{ marginBottom: 1 }}
          >
            <div className="flex-child mx12 bg-blue h24" style={{ width: 2 }} />
            <a
              href="/"
              className="flex-child color-blue color-blue-dark-on-hover"
            >
              {siteName}
            </a>
          </div>
        </div>

        <nav className="flex-child flex-child--grow flex-parent flex-parent--center-cross flex-parent--end-main txt-bold txt-s">
          {itemEls}
        </nav>
        <div id="mbx-user-menu" style={{ width: 66 }} className="flex-child" />
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

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.open !== nextState.open;
  }

  componentDidMount() {
    const doc = window.document;
    doc.addEventListener('click', this.closeOnDocumentClick);
  }

  componentWillUnmount() {
    const doc = window.document;
    doc.removeEventListener('click', this.closeOnDocumentClick);
  }

  closeOnDocumentClick = event => {
    // Close the popup if the target is outside of the popup
    if (!this.state.open) return;
    if (document.getElementById('mobile-menu-trigger').contains(event.target)) {
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
      width: MOBILE_NAV_POINTER_WIDTH,
      height: MOBILE_NAV_POINTER_WIDTH,
      fontSize: 0,
      lineHeight: 0,
      borderLeft: `${MOBILE_NAV_POINTER_WIDTH}px solid transparent`,
      borderRight: `${MOBILE_NAV_POINTER_WIDTH}px solid transparent`,
      borderBottom: `${MOBILE_NAV_POINTER_WIDTH}px solid currentColor`,
      position: 'absolute',
      top: -1 * MOBILE_NAV_POINTER_WIDTH,
      // 24 is the limiter's left padding.
      left:
        24 -
        MOBILE_NAV_MENU_OFFSET_LEFT +
        MOBILE_NAV_TRIGGER_WIDTH / 2 -
        MOBILE_NAV_POINTER_WIDTH
    };

    const { items } = this.props;
    const itemEls = items.map((item, i) => {
      let classList;
      if (items.length === i + 1) {
        classList = 'color-gray-dark color-blue-on-hover txt-s txt-bold block';
      } else {
        classList =
          'color-gray-dark color-blue-on-hover txt-s txt-bold block mb12';
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
        id="mobile-menu-container"
        className="absolute left shadow-darken10-bold bg-white round"
        style={{ top: '56px', marginLeft: MOBILE_NAV_MENU_OFFSET_LEFT }}
        ref={node => {
          this.menuBodyElement = node;
        }}
      >
        <div
          id="mobile-menu-pointer"
          className="color-white z5"
          style={pointerStyle}
        />
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
          <div className="relative flex-child flex-child--no-shrink">
            <button
              id="mobile-menu-trigger"
              type="button"
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
            style={{ width: 66 }}
            className="flex-child flex-child--no-shrink bg-blue"
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
