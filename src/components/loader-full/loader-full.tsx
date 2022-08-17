import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as Portal from '@radix-ui/react-portal';
import omit from '../utils/omit';

type ElementProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface Props extends ElementProps {
  opaque?: boolean;
}

const propNames = [
  'opaque',
  'style'
];

export default function LoaderFull(props: Props): ReactElement {
  const {
    opaque,
    style = {}
  } = props;

  const bgClasses = classnames('fixed top left right bottom flex flex--center-main flex--center-cross', {
    'loading--dark': !opaque
  });

  const loaderClasses = classnames('loading', {
    'bg-white': opaque,
    'bg-darken50': !opaque
  });

  const passedProps: Props = omit(props, propNames);
  
  return (
    <Portal.Root>
      <div
        className={bgClasses}
        data-testid="loader"
        style={{ ...style, zIndex: 9999 }}
        {...passedProps}
      >
        <div className={loaderClasses} />
      </div>
    </Portal.Root>
  );
}

LoaderFull.propTypes = {
  /**
   * By default, the loader's overlay is semi-transparent.
   * If this prop is `true`, the component hides the contents of the page with an entirely opaque container.
   */
  opaque: PropTypes.bool
};
