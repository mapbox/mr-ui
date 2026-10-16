import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';

type ElementProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface LoaderLocalProps extends ElementProps {
  themeLoader?: string;
}

const propNames = [
  'themeLoader'
];

export default function LoaderLocal({
  themeLoader = 'bg-gray-faint',
  ...props
}: LoaderLocalProps): ReactElement {
  const passedProps: LoaderLocalProps = omit(props, propNames);
  return <div
    className={`loading absolute top left right bottom flex flex--center-cross flex--center-main ${themeLoader}`}
    {...passedProps}
  />;
}

LoaderLocal.propTypes = {
  /** Assembly classes to apply to the loader component */
  themeLoader: PropTypes.string
};
