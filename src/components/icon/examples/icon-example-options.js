/*
Options.
*/
import React from 'react';
import Icon from '../icon';

export default class Example extends React.Component {
  render() {
    return (
      <Icon
        name="antialias"
        inlineHeading={true}
        theme={{
          icon: 'icon--l'
        }}
      />
    );
  }
}
