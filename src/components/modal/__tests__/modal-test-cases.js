import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

// Wrapper to show and hide modal in the test-cases app.
class ModalWrapper extends React.Component {
  static propTypes = {
    componentProps: PropTypes.object
  };

  state = {
    modalOpen: false
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const modal = this.state.modalOpen && (
      <Modal {...this.props.componentProps} onExit={this.toggleModal} />
    );
    return (
      <div>
        <button type="button" className="btn" onClick={this.toggleModal}>
          Open modal
        </button>
        {modal}
      </div>
    );
  }
}

testCases.basicSmallDisplay = {
  description: 'basic small, display only',
  element: (
    <ModalWrapper
      componentProps={{
        title: 'Small modal title',
        size: 'small',
        children: <div>Small modal body</div>
      }}
    />
  )
};

testCases.basicLargeDisplay = {
  description: 'basic large, display only',
  element: (
    <ModalWrapper
      componentProps={{
        title: 'Large modal title',
        children: <div>Large modal body</div>
      }}
    />
  )
};

testCases.basicAutoDisplay = {
  description: 'No fixed width, display only',
  element: (
    <ModalWrapper
      componentProps={{
        title: 'Auto modal title',
        size: 'auto',
        children: <div>No fixed width on the modal container</div>
      }}
    />
  )
};

testCases.themed = {
  description: 'themed modal',
  element: (
    <ModalWrapper
      componentProps={{
        title: 'Large modal title',
        children: <div>Theme modal container and close button</div>,
        themeModal: 'bg-gray round py60 px60 color-white',
        themeButtonClose:
          'btn btn--transparent unround-t unround-br color-white py12 px12',
        underlayStyle: {
          transform: 'scale(0.9)',
          zIndex: 5
        },
        themeUnderlay: 'bg-pink px24 py24'
      }}
    />
  )
};

// Automatable test cases

testCases.basicLarge = {
  description: 'basic default',
  component: Modal,
  props: {
    title: 'Large modal title',
    onExit: safeSpy(),
    children: <div>Large modal body</div>
  },
  noDisplay: true
};

testCases.basicSmall = {
  description: 'basic small',
  component: Modal,
  props: {
    title: 'Small modal title',
    onExit: safeSpy(),
    size: 'small',
    children: <div>Small modal body</div>
  },
  noDisplay: true
};

testCases.basicAuto = {
  description: 'No fixed width, display only',
  component: Modal,
  props: {
    title: 'Auto modal title',
    onExit: safeSpy(),
    size: 'auto',
    children: <div>No fixed width on the modal container</div>
  },
  noDisplay: true
};

testCases.allOptions = {
  description: 'all options',
  component: Modal,
  props: {
    title: 'All options',
    size: 'small',
    onExit: safeSpy(),
    initialFocus: '#foo',
    themeModal: 'bg-gray-light round py60 px60',
    themeButtonClose:
      'btn btn--transparent unround-t unround-br color-gray py12 px12',
    underlayProps: {
      'data-foo': 'foo'
    },
    underlayStyle: {
      margin: 'pink'
    },
    themeUnderlay: 'bg-pink px24 py24',
    children: (
      <div>
        <div className="mb12">I am a message</div>
        <button id="foo" className="btn">
          press me
        </button>
      </div>
    )
  },
  noDisplay: true
};

testCases.optionalOnExit = {
  description: 'no onExit',
  component: Modal,
  props: {
    title: 'No onExit passed as prop',
    size: 'small',
    children: <div>You can't close me</div>
  },
  noDisplay: true
};

export { testCases };
