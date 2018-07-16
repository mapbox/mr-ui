/*
Options.
*/
import React from 'react';
import Modal from '../modal';
import ControlText from '../../control-text';

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
          <Modal
            title="Hello explorer"
            onExit={this.closeModal}
            size="auto"
            initialFocus="[data-animal-input-field]"
            underlayStyle={{
              transform: 'scale(0.9)'
            }}
            themeModal="bg-white px36 py36 round border border--pink"
            themeButtonClose="'btn btn--transparent unround-t unround-br color-pink py12 px12'"
          >
            <div className="prose">
              <h4>Animals</h4>
              <ul>
                <li>Humpback whale</li>
                <li>Rufous hummingbird</li>
                <li>Sea otter</li>
                <li>Snowshoe hare</li>
              </ul>
              <ControlText
                data-animal-input-field={true}
                id="name"
                placeholder="Suggest another animal"
                onChange={
                  (/* value, id */) => {
                    /* console.log(value, id); */
                  }
                }
              />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
