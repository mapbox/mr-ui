import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

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
      <div className="limiter flex-parent-mm flex-parent--center-cross">
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
        <div
          style={{ width: 66 }}
          className="flex-child py6 round-full border color-blue txt-bold align-center txt-s"
        >
          User
        </div>
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
          className="flex-child color-blue color-blue-dark-on-hover txt-l txt-bold ml12"
          style={{ marginBottom: 1 }}
        >
          {siteName}
        </a>
      </div>
    );
  }

  renderMenu() {
    if (!this.state.open) return null;

    const { items } = this.props;

    const itemEls = items.map(item => {
      return (
        <li key={item.href} className="mt18">
          <a href={item.href}>{item.text}</a>
        </li>
      );
    });

    return (
      <div className="fixed top left right bottom bg-darken50 flex-parent flex-parent--stretch-cross">
        <div className="flex-child flex-child--no-shrink bg-white py12 pl24 pr12">
          <div className="flex-parent flex-parent--center-cross">
            <div className="flex-child">{this.renderLogoName()}</div>
            <div className="flex-child ml36">
              <button
                type="button"
                aria-label="close"
                className="block color-blue"
                onClick={this.toggleMenu}
              >
                <Icon name="close" size={36} />
              </button>
            </div>
          </div>
          <nav>
            <ul className="txt-bold color-gray-dark">{itemEls}</ul>
          </nav>
        </div>
        <div
          className="flex-child flex-child--grow cursor-pointer"
          onClick={this.toggleMenu}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="relative">
        <div className="limiter flex-parent flex-parent--center-cross flex-parent--space-between-main">
          <div className="flex-child">
            <button
              type="button"
              aria-label="menu"
              className="block color-blue"
              onClick={this.toggleMenu}
            >
              <Icon name="menu" size={36} />
            </button>
          </div>
          <div className="flex-child">{this.renderLogoName()}</div>
          <div
            style={{ width: 66 }}
            className="flex-child py6 round-full border color-blue txt-bold align-center txt-s"
          >
            User
          </div>
          {this.renderMenu()}
        </div>
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
