/*
The standard modal.
*/
import React, { ReactElement, useState } from 'react';
import Modal from '../modal';
import Button from '../../button';

export default function Example(): ReactElement {
  const [modal, setModal] = useState<boolean>(false);
  const renderModal = (): ReactElement => {
    return (
      <Modal
        accessibleTitle="Animals"
        onExit={() => setModal(false)}
        primaryAction={{ text: 'Okay', callback: () => setModal(false) }}
        secondaryAction={{ text: 'Not sure', callback: () => setModal(false) }}
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
  };

  return (
    <>
      <Button
        size="medium"
        onClick={() => setModal(true)}
        passthroughProps={{ 'aria-label': 'Show modal' }}
      >
        Show modal
      </Button>
      {modal && renderModal()}
    </>
  );
}
