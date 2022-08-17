import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';

type ElementProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface Props extends ElementProps {
  themeLoader?: string;
}

const propNames = [
  'themeLoader'
];

export default function LoaderLocal(props: Props): ReactElement {
  const {
    themeLoader = 'bg-gray-faint'
  } = props;

  const passedProps: Props = omit(props, propNames);

  return <div
    className={`loading absolute top left right bottom flex flex--center-cross flex--center-main ${themeLoader}`}
    {...passedProps}
  />;
}

LoaderLocal.propTypes = {
  /** Assembly classes to apply to the loader component */
  themeLoader: PropTypes.string
};
