/*
A small modal, unpadded to allow for custom background coloring, with
initial focus set on an input. Also features its own action special button.
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
        padding="none"
        size="small"
        initialFocus="#modal-input"
      >
        <h2 className="px24 py24 bg-gray-dark color-white txt-h4 txt-fancy round-t">
          Animals!
        </h2>
        <div className="px24 py24">
          <div className="prose">
            <p>Type an animal name. Here are some suggestions:</p>
            <ul>
              <li>Humpback whale</li>
              <li>Rufous hummingbird</li>
              <li>Sea otter</li>
              <li>Snowshoe hare</li>
            </ul>
          </div>
          <div className="align-center mt24">
            <input className="input mb12" id="modal-input" />
            <Button
              size="medium"
              onClick={this.closeModal}
              passthroughProps={{ 'aria-label': 'Done' }}
            >
              Ok, done
            </Button>
          </div>
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
