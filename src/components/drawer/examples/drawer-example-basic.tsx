/*
Basic.
*/
import React, { ReactElement, useState } from 'react';
import Drawer from '../drawer';
import Button from '../../button';

export default function Example(): ReactElement {
  const [drawer, setDrawer] = useState<'left' | 'right'>(null);
  const renderDrawer = (): ReactElement => {
    return (
      <Drawer
        onExit={() => setDrawer(null)}
        themeContent="bg-gray-faint py24 px24"
        side={drawer || 'left'}
      >
        <div className="prose">
          <h4>Animals</h4>
          <ul>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
            <li>Humpback whale</li>
            <li>Rufous hummingbird</li>
            <li>Sea otter</li>
            <li>Snowshoe hare</li>
          </ul>
        </div>
      </Drawer>
    );
  };

  return (
    <>
      <div className="my6">
        <Button
          size="medium"
          onClick={() => setDrawer('left')}
          passthroughProps={{ 'aria-label': 'Show modal' }}
        >
          Show left drawer
        </Button>
      </div>
      <div className="my6">
        <Button
          size="medium"
          onClick={() => setDrawer('right')}
          passthroughProps={{ 'aria-label': 'Show modal' }}
        >
          Show right drawer
        </Button>
      </div>
      {drawer && renderDrawer()}
    </>
  );
}
