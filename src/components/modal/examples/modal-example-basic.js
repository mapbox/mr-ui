/*
Basic.
*/
import React from 'react';
import Modal from '../modal';

export default class Example extends React.Component {
  state = { modalOpen: false };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div>
        <button className="btn btn--s bg-pink" onClick={this.openModal}>
          Show modal
        </button>
        {this.state.modalOpen && (
          <Modal title="Hello explorer" onExit={this.closeModal}>
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
        )}
      </div>
    );
  }
}
