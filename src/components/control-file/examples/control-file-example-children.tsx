/*
Custom child element
*/
import React from 'react';
import IconText from '../../icon-text';
import ControlFile from '../control-file';

export default function Example() {
  return (
    <ControlFile
      id="name"
      themeControlFile="link link--gray txt-s txt-bold"
      onChange={(value, id) => {
        console.log(value, id);
      }}
    >
      <IconText iconBefore="plus">
        Child element
      </IconText>
    </ControlFile>
  );
}
