import React from 'react';
import CopyButton from '../copy-button';
import Modal from '../../modal';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.defaults = {
  description: 'Defaults',
  component: CopyButton,
  props: {
    text: 'Copied by the default test case'
  }
};

testCases.allProps = {
  description: 'all props',
  component: CopyButton,
  props: {
    text: 'more copiable text',
    onCopy: safeSpy(),
    className: 'px6 py6 btn btn--purple btn--stroke',
    focusTrapPaused: true,
    passthroughProps: {
      'data-test': 'copy-button'
    }
  }
};

class InModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState((state) => ({ modalOpen: !state.modalOpen }));
  }
  renderModal() {
    if (!this.state.modalOpen) {
      return null;
    }
    return (
      <Modal accessibleTitle="Copy test" onExit={this.toggleModal}>
        <CopyButton text="You copied this text from a modal" />
      </Modal>
    );
  }
  render() {
    return (
      <div>
        <button
          aria-label="Open modal"
          className="btn"
          onClick={this.toggleModal}
        >
          Open modal
        </button>
        {this.renderModal()}
      </div>
    );
  }
}

testCases.inModal = {
  description: 'in modal',
  element: <InModal />
};

export { testCases };
