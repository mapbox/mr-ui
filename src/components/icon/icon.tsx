import React, { ReactElement, useRef, useEffect, SVGProps, DetailedHTMLProps } from 'react';
import PropTypes from 'prop-types';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

interface Props {
  name: string;
  inline?: boolean;
  passthroughProps?: DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGElement>;
  size?: number | string;
}

/**
 * Display an Assembly icon.
 *
 * Besides providing a convenient shortcut, this component does the following:
 *
 * - Sets some accessibility props.
 * - Provides an `inline` mode that automatically sizes icons to match their
 *   surrounding text.
 */
export default function Icon({
  name,
  inline = false,
  passthroughProps = {},
  size = 18
}: Props): ReactElement {
  const el = useRef(null);

  useEffect(() => {
    if (inline && el.current && typeof window !== 'undefined') {
      const lineHeight = window.getComputedStyle(el.current)[
        'line-height'
      ];
      el.current.style.height = lineHeight;
    }
  }, [inline, size]);

  let iconClasses = 'events-none icon';
  if (inline) {
    iconClasses += ' inline-block align-t';
  }

  const svgStyle = passthroughProps.style || {};
  if (!svgStyle.width && size) {
    svgStyle.width = size;
  }
  if (!svgStyle.height && size) {
    svgStyle.height = size;
  }

  return (
    <AccessibleIcon.Root label={name}>
      <svg
        ref={el}
        className={iconClasses}
        data-testid={`icon-${name}`}
        {...passthroughProps}
        style={svgStyle}
      >
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={`#icon-${name}`}
        />
      </svg>
    </AccessibleIcon.Root>
  );
}

Icon.propTypes = {
  /**
   * The name of the [Assembly icon](https://labs.mapbox.com/assembly/icons/) that
   * you want to display.
   */
  name: PropTypes.string.isRequired,
  /**
   * The width and height of the icon. All icons fill up a square space,
   * so this value will be applied to both width and height.
   *
   * If `inline: true`, the technical height will be controlled by the
   * line-height of the container, but the appearance of the icon will still
   * be in accordance with your `size` value (because it's limited by the
   * width).
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * If `true`, the icon will be adjusted after mounting so that its height
   * matches the line-height of its container. The result of this is that
   * the icon will not displace the text's established line-height and
   * will be vertically centered with the text alongside it.
   *
   * This is most useful when you are inserting the icon within multiline text,
   * so you can't use a flexbox layout to vertically center the icon and text.
   *
   * Be aware that there are edge cases that can cause problems with this
   * setting. For example, it won't work well if you don't have a `line-height`
   * set to a pixel value, or if there are dynamic adjustments to the
   * line-height.
   */
  inline: PropTypes.bool,
  /**
   * Props to pass directly to the `<svg>` element.
   */
  passthroughProps: PropTypes.object
};
