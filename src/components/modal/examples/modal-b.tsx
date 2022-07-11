/*
A small modal, unpadded to allow for custom background coloring, with
initial focus set on an input. Also features its own action special button.
*/
import React, { ReactElement, useState } from 'react';
import Modal from '../modal';
import Button from '../../button';

export default function Example(): ReactElement {
  const [modal, setModal] = useState(false);
  const renderModal = (): ReactElement => {
    return (
      <Modal
        accessibleTitle="Animals"
        onExit={() => setModal(false)}
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
              onClick={() => setModal(false)}
              passthroughProps={{ 'aria-label': 'Done' }}
            >
              Ok, done
            </Button>
          </div>
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
