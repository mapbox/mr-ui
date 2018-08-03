import React from 'react';
import CopyButton from '../copy-button';
import Modal from '../../modal';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: CopyButton,
  props: {
    text: 'the text you copy'
  }
};

testCases.allProps = {
  description: 'all props',
  component: CopyButton,
  props: {
    text: 'more copiable text',
    onCopy: safeSpy(),
    feedbackTime: 1000,
    iconButtonProps: {
      tooltipProps: {
        themeTooltip: 'color-gray shadow-darken50',
        placement: 'bottom'
      },
      themeButton: 'px12 py12 btn--red',
      'data-test': 'copy-button',
      themeIcon: 'color-yellow'
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
    this.setState(state => ({ modalOpen: !state.modalOpen }));
  }
  renderModal() {
    if (!this.state.modalOpen) {
      return null;
    }
    return (
      <Modal title="Copy test" onExit={this.toggleModal}>
        <CopyButton text="This is the text you're copying" />
      </Modal>
    );
  }
  render() {
    return (
      <div>
        <button className="btn" onClick={this.toggleModal}>
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
