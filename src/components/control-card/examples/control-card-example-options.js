/*
Controlled card with options.
*/
import React from 'react';
import ControlCard from '../control-card';
import Icon from '../../icon';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: true
    };
  }

  toggleCard = () => {
    const { showCard } = this.state;

    this.setState({
      showCard: !showCard
    });
  };

  renderShowCardButton() {
    const { showCard } = this.state;

    if (showCard) return null;

    return (
      <div className="flex-parent flex-parent--end-main mr18 mb18">
        <button
          className="color-gray-dark color-blue-on-hover flex-child"
          onClick={this.toggleCard}
          type="button"
        >
          <span className="inline-block txt-s">
            Show card <Icon name="caret-down" inline={true} />
          </span>
        </button>
      </div>
    );
  }

  renderCard() {
    const { showCard } = this.state;

    if (!showCard) return null;

    return (
      <ControlCard
        buttonType="collapse"
        onButtonClick={this.toggleCard}
        title="Example card with options"
        titleSize="minor"
      >
        <p className="bg-gray-faint txt-mono txt-break-word px12 py12">
          console.log('Hello world!');
        </p>
      </ControlCard>
    );
  }

  render() {
    return (
      <div>
        {this.renderShowCardButton()}
        {this.renderCard()}
      </div>
    );
  }
}
