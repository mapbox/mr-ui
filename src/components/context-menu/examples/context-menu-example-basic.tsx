/*
Basic
*/
import React from 'react';
import ContextMenu from '../context-menu';

export default function Example() {
  return (
    <ContextMenu
      onChange={(value => console.log('value is: ', value))}
      options={[
        {
          options: [
            {
              label: 'Whale',
              value: 'whale',
              keyCode: '⌥+W'
            },
            {
              label: 'Bird',
              value: 'bird',
              keyCode: '⌘+B'
            },
            {
              label: 'Otter',
              value: 'otter',
              disabled: true,
              keyCode: 'o'
            },
            {
              label: 'Hare',
              value: 'hare',
              options: [
                {
                  title: 'Hare names',
                  options: [{
                    label: 'Peter',
                    value: 'peter'
                  }, {
                    label: 'Bugs',
                    value: 'bugs'
                  }, {
                    label: 'Cottontail',
                    value: 'cottontail'
                  }]
                }
              ]
            }
          ],
        }, {
          title: 'Pet names',
          options: [
            {
              label: 'Steve',
              value: 'steve'
            },
            {
              label: 'Penny',
              value: 'penny'
            },
            {
              label: 'Deli',
              value: 'deli',
              keyCode: 'o'
            },
            {
              label: 'Effy',
              value: 'effy',
              keyCode: 'up+down'
            }
          ]
        }
      ]}
    >
 
      <div className="flex flex--center-main flex--center-cross round border border--purple h180 bg-purple-faint color-purple txt-mono txt-bold">
        Right click here.
      </div>


    </ContextMenu>
  );
}
