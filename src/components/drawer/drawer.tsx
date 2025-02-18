import React, { ReactElement, CSSProperties } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import EventTrap from '../modal/event-trap';

interface Props {
  children: ReactElement;
  zIndex?: number | string;
  side?: 'left' | 'right';
  allowEventBubbling?: boolean;
  themeOverlay?: string;
  themeContent?: string;
  accessibleTitle?: string;
  onExit?: () => void;
}

/**
 * An accessible drawer implemented based on modal component.
 *
 * This drawer *traps focus within it*. You should be aware of that, because it
 * can sometimes introduce a hurdle when integrating the drawer with other
 * things, especially third-party libraries. But it's an essential UX feature.
 */

export default function Drawer({
  children,
  zIndex = 'auto',
  side = 'left',
  allowEventBubbling = false,
  themeOverlay = '',
  themeContent = '',
  accessibleTitle = 'drawer',
  onExit
}: Props): ReactElement {
  const overlayProps: {
    className: string;
    style: CSSProperties;
    'data-testid': string;
  } = {
    className: `fixed top bottom left right bg-darken50 ${themeOverlay}`,
    'data-testid': 'drawer-overlay',
    style: {
      zIndex
    }
  };

  const rootProps: {
    defaultOpen: true;
    onOpenChange?: () => void;
  } = {
    defaultOpen: true
  };

  const contentProps: {
    className: string;
  } = {
    className: classnames(
      `overflow-auto scroll-styled fixed top bottom ${themeContent}`,
      {
        'left round-tr round-br': side === 'left',
        'right round-tl round-bl': side === 'right',
        // Default background color
        'bg-white': !themeContent?.includes('bg-')
      }
    )
  };

  if (onExit) {
    rootProps.onOpenChange = onExit;
  }

  const drawer = (
    <DialogPrimitive.Root {...rootProps} open={true}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay {...overlayProps}>
          <DialogPrimitive.Content {...contentProps}>
            <VisuallyHidden.Root>
              <DialogPrimitive.Title>{accessibleTitle}</DialogPrimitive.Title>
            </VisuallyHidden.Root>
            {children}
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );

  if (!allowEventBubbling) {
    return <EventTrap>{drawer}</EventTrap>;
  }

  return drawer;
}

Drawer.propTypes = {
  /**
   * The content of the drawer
   */
  children: PropTypes.node.isRequired,
  /**
   * The z-index of the drawer
   */
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The side of the drawer. Could be `left` or `right`
   */
  side: PropTypes.oneOf(['left', 'right']),
  /**
   * We stop propagation on clicks by default to enable more intuitive
   * operation with React Portals. If you need click events to bubble up
   * to parent components, set this prop to true
   */
  allowEventBubbling: PropTypes.bool,
  /**
   * Additional class name for the overlay,
   * along with the existing classes `fixed top bottom left right bg-darken50`
   */
  themeOverlay: PropTypes.string,
  /**
   * Additional class name for the content,
   * along with the existing classes `overflow-auto scroll-styled fixed top bottom`
   */
  themeContent: PropTypes.string,
  /**
   * The callback function when the drawer is exited by clicking the overlay
   */
  onExit: PropTypes.func
};
