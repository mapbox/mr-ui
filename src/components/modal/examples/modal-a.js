/*
The standard modal.
*/
import React from 'react';
import Modal from '../modal';
import Button from '../../button';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  renderModal() {
    if (!this.state.modalOpen) {
      return null;
    }
    return (
      <Modal
        accessibleTitle="Animals"
        onExit={this.closeModal}
        primaryAction={{ text: 'Okay', callback: this.closeModal }}
        secondaryAction={{ text: 'Not sure', callback: this.closeModal }}
      >
        <div className="prose">
          <h4>Animals</h4>
          <ul>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
          </ul>
        </div>
      </Modal>
    );
  }

  render() {
    return (
      <div>
        <Button
          size="medium"
          onClick={this.openModal}
          passthroughProps={{ 'aria-label': 'Show modal' }}
        >
          Show modal
        </Button>
        {this.renderModal()}
      </div>
    );
  }
}
