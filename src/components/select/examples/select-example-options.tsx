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
    .map((option, index) => ({
      label: (
        <div className="flex flex--space-between txt-s">
          <div className="flex-child">{animals[option]}</div>
          <div className="flex-child flex-child-grow color-gray align-r">{`Item ${index + 1}`}</div>
        </div>
      ),
      value: option,
      active: value === option
    }));

  const renderHeader = (
    <div className="px6 pt6">
      <input
        className="input"
        type="text"
        placeholder="Filter by"
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
    <div className="bg-gray-faint border-t border--gray-lighter px12 py12 txt-s round-b">Here is an area called the footer which could be used for a description to help with making a selection.</div>
  );

  return (
    <Select
      onChange={setValue}
      options={options}
      header={renderHeader}
      footer={renderFooter}
      themeSelectWrapper="w240"
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
