/*
With options
*/
import React, { useState } from 'react';
import Select from '../select';

export default function Example() {
  const [value, setValue] = useState('humpback-whale');
  const [filterBy, setFilterBy] = useState({
    input: '',
    value: ''
  });

  const animals = {
    'humpback-whale': 'Humpback whale',
    'rufous-hummingbird': 'Rufous Hummingbird',
    'sea-otter': 'Sea Otter',
    'snowshoe-hare': 'Snowshoe Hare'
  };

  const options = Object.keys(animals)
    .filter(option => filterBy ? option.includes(filterBy.value) : true)
    .map(option => ({
      label: animals[option],
      value: option,
      active: value === option
    }));

  const renderHeader = (
    <div className="px6 pt6">
      <label className="txt-bold txt-s mb6 pt12">This is a header</label>
      <input
        className="input"
        type="text"
        placeholder="Filter"
        autoFocus={true}
        value={filterBy.input}
        onChange={e => {
          setFilterBy({
            input: e.target.value,
            value: e.target.value.toLowerCase().trim().split(/\s/g).join('-')
          })
        }}
      />
    </div>
  );

  const renderFooter = (
    <div className="bg-gray-lighter px12 py6 txt-s round-b color-gray">This is a footer</div>
  );

  return (
    <Select
      onChange={setValue}
      options={options}
      header={renderHeader}
      footer={renderFooter}
      themeSelectItemWrapper="px6 py12"
      padding="none"
    >
      <span className="link">
        {`Today's animal is: `}
        <span className="txt-bold">{animals[value]}</span>
      </span>
    </Select>
  );
}
