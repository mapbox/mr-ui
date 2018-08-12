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
    this.setState(state => ({ modalOpen: !state.modalOpen }));
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
        accessibleTitle: 'Small modal title',
        size: 'small',
        children: <div>Small modal body</div>,
        primaryAction: {
          text: 'Okay',
          callback: safeSpy()
        }
      }}
    />
  )
};

testCases.basicLargeDisplay = {
  description: 'basic large, display only',
  element: (
    <ModalWrapper
      componentProps={{
        accessibleTitle: 'Large modal title',
        children: <div>Large modal body</div>,
        primaryAction: {
          text: 'Okay',
          callback: safeSpy(),
          destructive: true
        },
        secondaryAction: {
          text: 'Cancel',
          callback: safeSpy()
        },
        tertiaryAction: {
          text: 'Give up',
          callback: safeSpy()
        }
      }}
    />
  )
};

testCases.basicAutoDisplay = {
  description: 'No fixed width, display only',
  element: (
    <ModalWrapper
      componentProps={{
        accessibleTitle: 'Auto modal title',
        size: 'auto',
        children: (
          <div style={{ height: 1200 }}>
            No fixed width on the modal container
          </div>
        )
      }}
    />
  )
};

testCases.unpadded = {
  description: 'unpadded modal',
  element: (
    <ModalWrapper
      componentProps={{
        accessibleTitle: 'Unpadded',
        children: (
          <div className="flex-parent flex-parent--stretch-cross">
            <div className="flex-child w300 bg-gray-dark px24 py24 round-l color-white">
              One side
            </div>
            <div className="flex-child px24 py24">The other side</div>
          </div>
        ),
        padding: 'none'
      }}
    />
  )
};

// Automatable test cases

const noDisplayCases = {};

noDisplayCases.basicLarge = {
  description: 'basic default',
  component: Modal,
  props: {
    accessibleTitle: 'Large modal title',
    onExit: safeSpy(),
    children: <div>Large modal body</div>,
    primaryAction: {
      text: 'Okay',
      callback: safeSpy(),
      destructive: true
    },
    secondaryAction: {
      text: 'Cancel',
      callback: safeSpy()
    },
    tertiaryAction: {
      text: 'Give up',
      callback: safeSpy()
    }
  },
  noDisplay: true
};

noDisplayCases.basicSmall = {
  description: 'basic small',
  component: Modal,
  props: {
    accessibleTitle: 'Small modal title',
    onExit: safeSpy(),
    size: 'small',
    children: <div>Small modal body</div>,
    primaryAction: {
      text: 'Okay',
      callback: safeSpy()
    }
  },
  noDisplay: true
};

noDisplayCases.basicAuto = {
  description: 'No fixed width, display only',
  component: Modal,
  props: {
    accessibleTitle: 'Auto modal title',
    onExit: safeSpy(),
    size: 'auto',
    children: <div>No fixed width on the modal container. But very tall.</div>
  },
  noDisplay: true
};

noDisplayCases.allOptions = {
  description: 'all options',
  component: Modal,
  props: {
    accessibleTitle: 'All options',
    size: 'small',
    onExit: safeSpy(),
    initialFocus: '#foo',
    padded: false,
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

noDisplayCases.optionalOnExit = {
  description: 'no onExit',
  component: Modal,
  props: {
    accessibleTitle: 'No onExit passed as prop',
    size: 'small',
    children: <div>You can't close me</div>
  },
  noDisplay: true
};

export { testCases, noDisplayCases };
