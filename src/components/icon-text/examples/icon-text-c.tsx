/*
Inline, both icons and the child is JSX
*/
import React from 'react';
import IconText from '../icon-text';
import Icon from '../../icon';

export default class Example extends React.Component {
  render() {
    return (
      <IconText
        inline={true}
        iconBefore={<Icon name="github" />}
        iconAfter="check"
      >
        <span className="txt-kbd">hi</span>
      </IconText>
    );
  }
}
