/// <reference types="react" />
declare module "src/components/accordion-item/accordion-item" {
    export default class AccordionItem extends React.Component<any, any, any> {
        static propTypes: {
            /** Identifying value for accordion item. */
            id: PropTypes.Validator<string>;
            /** Callback when an accordion header item is clicked. */
            onToggle: PropTypes.Validator<(...args: any[]) => any>;
            /** Function that accepts an `active` boolean argument and returns JSX. */
            header: PropTypes.Validator<(...args: any[]) => any>;
            /** Contents that shown when the accordion is active. */
            body: PropTypes.Validator<PropTypes.ReactNodeLike>;
            /** Determines if the state of the accordion item is active. */
            active: PropTypes.Requireable<boolean>;
            /** Determines if the state of the accordion item is disabled. */
            disabled: PropTypes.Requireable<boolean>;
            /** CSS classes to apply to the accordion item container. */
            themeItem: PropTypes.Requireable<string>;
            /** CSS classes to apply to the accordion header. */
            themeItemHeader: PropTypes.Requireable<string>;
            /** CSS classes to apply to the accordion header when `disabled` is true/ */
            themeItemHeaderDisabled: PropTypes.Requireable<string>;
            /** CSS classes to apply to the accordion body. */
            themeItemBody: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            active: boolean;
            themeItemHeader: string;
            themeItemHeaderDisabled: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onToggle: () => void;
        renderHeader: () => any;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/accordion-item/index" {
    export default main;
    import main from "src/components/accordion-item/accordion-item";
}
declare module "src/test-utils/safe-spy" {
    export default function safeSpy(nonSpyImplementation: any): any;
}
declare module "src/components/accordion-item/__tests__/accordion-item-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { AccordionItem as component };
            export namespace props {
                const onToggle: any;
                const id: string;
                function header(): JSX.Element;
                const body: string;
            }
        }
        namespace disabled {
            const description_1: string;
            export { description_1 as description };
            export { AccordionItem as component };
            export namespace props_1 {
                const onToggle_1: any;
                export { onToggle_1 as onToggle };
                const id_1: string;
                export { id_1 as id };
                export function header_1(): JSX.Element;
                export { header_1 as header };
                const body_1: string;
                export { body_1 as body };
                const disabled_1: boolean;
                export { disabled_1 as disabled };
            }
            export { props_1 as props };
        }
        namespace allOptions {
            const description_2: string;
            export { description_2 as description };
            export { AccordionItem as component };
            export namespace props_2 {
                const onToggle_2: any;
                export { onToggle_2 as onToggle };
                const id_2: string;
                export { id_2 as id };
                export const active: boolean;
                export function header_2(): JSX.Element;
                export { header_2 as header };
                const body_2: string;
                export { body_2 as body };
                export const themeItem: string;
                export const themeItemHeader: string;
                export const themeItemBody: string;
            }
            export { props_2 as props };
        }
    }
    import AccordionItem from "src/components/accordion-item/accordion-item";
}
declare module "src/components/accordion-item/__tests__/accordion-item.test" {
    export {};
}
declare module "src/components/button/button" {
    export default Button;
    /**
     * A good-looking button!
     *
     * The rendered element will be a `<button>` or an `<a>`, depending on whether
     * you provide an `href` prop or not. (You can also use the `component` prop to
     * render a different element altogether.)
     *
     * If you'd like to put an icon before or after the text of your button,
     * use [IconText](#icontext) for the content.
     */
    class Button extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    namespace Button {
        namespace propTypes {
            const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
            const variant: PropTypes.Requireable<string>;
            const onClick: PropTypes.Requireable<(...args: any[]) => any>;
            const href: PropTypes.Requireable<string>;
            const size: PropTypes.Requireable<string>;
            const width: PropTypes.Requireable<string>;
            const outline: PropTypes.Requireable<boolean>;
            const color: PropTypes.Requireable<string>;
            const corners: PropTypes.Requireable<boolean>;
            const block: PropTypes.Requireable<boolean>;
            const disabled: PropTypes.Requireable<boolean>;
            const component: PropTypes.Requireable<string | ((...args: any[]) => any)>;
            const passthroughProps: PropTypes.Requireable<object>;
        }
        namespace defaultProps {
            const variant_1: string;
            export { variant_1 as variant };
            const block_1: boolean;
            export { block_1 as block };
            const disabled_1: boolean;
            export { disabled_1 as disabled };
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/button/index" {
    export default main;
    import main from "src/components/button/button";
}
declare module "src/components/popover/get-scrollable-parents" {
    export default function getScrollableParents(element: any): any[];
}
declare module "src/components/popover/is-element-scrolled-into-view" {
    /**
     * Returns a boolean indicating whether an element is scrolled into
     * view. If it has no scrollable parent, this just means it's within
     * the viewport. If it does have a scrollable parent, this means that
     * both window and parent are scrolled such that the element is visible.
     *
     * Assumes there's only one level of sub-document scrolling involved,
     * i.e. one scrollable parent.
     *
     * @param {HTMLElement} element
     * @return {Boolean}
     */
    export default function isElementScrolledIntoView(element: HTMLElement): boolean;
}
declare module "src/components/utils/get-window" {
    export default function getWindow(): Window & typeof globalThis;
}
declare module "src/components/popover/constants" {
    export const PLACEMENT_TOP: "top";
    export const PLACEMENT_BOTTOM: "bottom";
    export const PLACEMENT_LEFT: "left";
    export const PLACEMENT_RIGHT: "right";
    export const ALIGNMENT_TOP: "top";
    export const ALIGNMENT_BOTTOM: "bottom";
    export const ALIGNMENT_LEFT: "left";
    export const ALIGNMENT_RIGHT: "right";
    export const ALIGNMENT_CENTER: "center";
    export const POINTER_DIRECTION_DOWNWARD: "downward";
    export const POINTER_DIRECTION_UPWARD: "upward";
    export const POINTER_DIRECTION_LEFTWARD: "leftward";
    export const POINTER_DIRECTION_RIGHTWARD: "rightward";
}
declare module "src/components/popover/calculate-position-context" {
    /**
     * @typedef {Object} PopoverPositionContext
     * @property {number} offsetFromEdge
     * @property {number} offsetFromAnchor
     * @property {number} availableWidth
     * @property {number} availableHeight
     * @property {number} documentTopOffset
     * @property {number} topBoundary
     * @property {number} bottomBoundary
     * @property {number} anchorRect
     * @property {number} bodyElementRect
     * @property {number} bodyElementWidthWithoutPadding
     * @property {number} bodyElementHeightWithoutPadding
     * @property {number} anchorAbsoluteTop
     * @property {number} anchorAbsoluteBottom
     * @property {number} anchorHorizontalCenter
     * @property {number} anchorVerticalCenter
     * @property {number} maxLeftOffset
     * @property {number} maxWidth
     * @property {number} maxHeight
     */
    /**
     * @param {Object} options - See definition in calculatePosition.
     * @return {PopoverPositionContext}
     */
    export default function calculatePositionContext(options: any): PopoverPositionContext;
    export type PopoverPositionContext = {
        offsetFromEdge: number;
        offsetFromAnchor: number;
        availableWidth: number;
        availableHeight: number;
        documentTopOffset: number;
        topBoundary: number;
        bottomBoundary: number;
        anchorRect: number;
        bodyElementRect: number;
        bodyElementWidthWithoutPadding: number;
        bodyElementHeightWithoutPadding: number;
        anchorAbsoluteTop: number;
        anchorAbsoluteBottom: number;
        anchorHorizontalCenter: number;
        anchorVerticalCenter: number;
        maxLeftOffset: number;
        maxWidth: number;
        maxHeight: number;
    };
}
declare module "src/components/popover/calculate-placement-alignment" {
    /**
     * @param {Object} options - See definition in calculatePosition
     * @param {PopoverPositionContext} context - See definition in calculatePositionContext
     * @return {{ placement: string, alignment: string }}
     */
    export default function calculatePlacementAlignment(options: any, context: PopoverPositionContext): {
        placement: string;
        alignment: string;
    };
}
declare module "src/components/popover/calculate-body-style" {
    /**
     * @param {string} placement
     * @param {string} alignment
     * @param {Object} options - See definition in calculatePosition
     * @param {PopoverPositionContext} context - See definition in calculatePositionContext
     * @return {Object}
     */
    export default function calculateBodyStyle(placement: string, alignment: string, options: any, context: PopoverPositionContext): any;
}
declare module "src/components/popover/calculate-pointer-style" {
    /**
     * @param {string} placement
     * @param {Object} options - See definition in calculatePosition
     * @param {PopoverPositionContext} context - See definition in calculatePositionContext
     * @return {Object}
     */
    export default function calculatePointerStyle(placement: string, options: any, context: PopoverPositionContext): any;
}
declare module "src/components/popover/adjust-styles-for-anchor-visibility" {
    /**
     * @param {Object} pointerStyle
     * @param {Object} bodyStyle
     * @param {string} placement
     * @param {Object} options - See definition in calculatePosition
     * @param {PopoverPositionContext} context - See definition in calculatePositionContext
     * @return {{ pointerStyle: Object, bodyStyle: Object }}
     */
    export default function adjustStylesForAnchorVisibility(pointerStyle: any, bodyStyle: any, placement: string, options: any, context: PopoverPositionContext): {
        pointerStyle: any;
        bodyStyle: any;
    };
}
declare module "src/components/popover/calculate-position" {
    /**
     * @typedef {Object} PopoverPositionData
     * @property {string} placement
     * @property {string} alignment
     * @property {Object} pointerPositioningStyle
     * @property {Object} bodyPositioningStyle
     */
    /**
     * Calculate positioning for a popover. Returns PopoverPositionData.
     *
     * @param {Object} options
     * @param {'top' | 'bottom' | 'left' | 'right'} options.placement
     * @param {'top' | 'bottom' | 'left' | 'right' | 'center' } options.alignment
     * @param {Function} options.getAnchorElement - Returns anchor element.
     * @param {Function} options.getPopoverElement - Returns popover element.
     * @param {Function} [options.getContainingElement] - Returns containing element.
     * @param {number} [options.offsetFromAnchor=5]
     * @param {number} [options.offsetFromEdge]
     * @param {boolean} [options.containWithinViewport=false]
     * @param {Function} [options.getScrollableParentElement] - Returns scrollable parent element.
     * @param {boolean} [options.allowPlacementAxisChange=true]
     * @param {boolean} [options.hasPointer=true]
     * @param {number} [options.pointerBase=12]
     * @param {number} [options.pointerAltitude=6]
     * @param {string} [options.pointerColor='#fff']
     * @param {boolean} [options.hideWhenAnchorIsOffscreen=false]
     * @return {PopoverPositionData}
     */
    export default function calculatePopoverPosition(options: {
        placement: 'top' | 'bottom' | 'left' | 'right';
        alignment: 'top' | 'bottom' | 'left' | 'right' | 'center';
        getAnchorElement: Function;
        getPopoverElement: Function;
        getContainingElement?: Function;
        offsetFromAnchor?: number;
        offsetFromEdge?: number;
        containWithinViewport?: boolean;
        getScrollableParentElement?: Function;
        allowPlacementAxisChange?: boolean;
        hasPointer?: boolean;
        pointerBase?: number;
        pointerAltitude?: number;
        pointerColor?: string;
        hideWhenAnchorIsOffscreen?: boolean;
    }): PopoverPositionData;
    export type PopoverPositionData = {
        placement: string;
        alignment: string;
        pointerPositioningStyle: any;
        bodyPositioningStyle: any;
    };
}
declare module "src/components/popover/create-scroll-listener" {
    /**
     * Create a scroll listener debounced by requestAnimationFrame.
     *
     * @param {HTMLElement} element
     * @param {Function} callback
     * @return {Object} An object with `start()` and `stop()` functions.
     */
    export default function createScrollListener(element: HTMLElement, callback: Function): any;
}
declare module "src/components/popover/popover-positioner" {
    export default displaced;
    const displaced: any;
}
declare module "src/components/popover/popover" {
    /**
     * Display a popover. The popover is positioned relative to an anchor element,
     * and the preferred position determined by props is adjusted according to the
     * available space.
     *
     * **Usually you won't need to use this low-level component.** You should have
     * a look at [Tooltip](#tooltip) and [PopoverTrigger](#popovertrigger).
     *
     * If you are using this component directly, you need to manage its open-closed
     * state. Use `onExit` to do that.
     *
     * The static function `Popover.repositionPopovers()` can be used to
     * automatically reposition *all the popovers that are currently open*. This is
     * useful if some state change other than a scroll or resize may have caused
     * the popover's anchor to move or the space available to the
     * popover to change.
     *
     * If `ResizeObserver` is available in the user's browser, the popover will
     * automatically reposition itself when the content is resized. This can be disabled
     * in the `observeSize` prop.
     */
    class Popover extends React.Component<any, any, any> {
        constructor(props: any);
        popoverId: number;
        componentDidMount(): void;
        previouslyFocusedElement: Element;
        hackListenerRemovers: any[];
        focusBodyTimer: NodeJS.Timeout;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        maybeFocusPopover: () => void;
        focusTrap: import("focus-trap").FocusTrap;
        hasReceivedFocus: boolean;
        onDocumentMousedown: (event: any) => void;
        onBodyKeyDown: (event: any) => void;
        onBodyFocus: () => void;
        elementIsWithinChildPopover: (element: any) => any;
        setPopoverElement: (element: any) => void;
        bodyElement: any;
        render(): JSX.Element;
    }
    namespace Popover {
        namespace propTypes {
            const getAnchorElement: PropTypes.Validator<(...args: any[]) => any>;
            const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
            const placement: PropTypes.Requireable<string>;
            const alignment: PropTypes.Requireable<string>;
            const coloring: PropTypes.Requireable<string>;
            const padding: PropTypes.Requireable<string>;
            const hasPointer: PropTypes.Requireable<boolean>;
            const hideWhenAnchorIsOffscreen: PropTypes.Requireable<boolean>;
            const allowPlacementAxisChange: PropTypes.Requireable<boolean>;
            const containWithinViewport: PropTypes.Requireable<boolean>;
            const clickOutsideCloses: PropTypes.Requireable<boolean>;
            const escapeCloses: PropTypes.Requireable<boolean>;
            const receiveFocus: PropTypes.Requireable<boolean>;
            const trapFocus: PropTypes.Requireable<boolean>;
            const onExit: PropTypes.Requireable<(...args: any[]) => any>;
            const onElement: PropTypes.Requireable<(...args: any[]) => any>;
            const getInitialFocus: PropTypes.Requireable<(...args: any[]) => any>;
            const ignoreClickWithinElement: PropTypes.Requireable<(...args: any[]) => any>;
            const getContainingElement: PropTypes.Requireable<(...args: any[]) => any>;
            const offsetFromAnchor: PropTypes.Requireable<number>;
            const passthroughProps: PropTypes.Requireable<object>;
            const zIndex: PropTypes.Requireable<number>;
            const observeSize: PropTypes.Requireable<boolean>;
        }
        namespace defaultProps {
            const coloring_1: string;
            export { coloring_1 as coloring };
            const placement_1: string;
            export { placement_1 as placement };
            const alignment_1: string;
            export { alignment_1 as alignment };
            const padding_1: string;
            export { padding_1 as padding };
            const hasPointer_1: boolean;
            export { hasPointer_1 as hasPointer };
            const hideWhenAnchorIsOffscreen_1: boolean;
            export { hideWhenAnchorIsOffscreen_1 as hideWhenAnchorIsOffscreen };
            const allowPlacementAxisChange_1: boolean;
            export { allowPlacementAxisChange_1 as allowPlacementAxisChange };
            const containWithinViewport_1: boolean;
            export { containWithinViewport_1 as containWithinViewport };
            const clickOutsideCloses_1: boolean;
            export { clickOutsideCloses_1 as clickOutsideCloses };
            const escapeCloses_1: boolean;
            export { escapeCloses_1 as escapeCloses };
            const receiveFocus_1: boolean;
            export { receiveFocus_1 as receiveFocus };
            const trapFocus_1: boolean;
            export { trapFocus_1 as trapFocus };
            const zIndex_1: number;
            export { zIndex_1 as zIndex };
            const observeSize_1: boolean;
            export { observeSize_1 as observeSize };
        }
        const repositionPopovers: any;
    }
    export default Popover;
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/popover/index" {
    export default main;
    import main from "src/components/popover/popover";
}
declare module "src/components/popover-trigger/popover-trigger" {
    /**
     * A smart trigger for managing the state of a [Popover](#popover).
     *
     * If you want to manage the open-closed state of the Popover yourself,
     * use [Popover](#popover) directly.
     *
     * `respondsToClick`, `respondsToHover`, and `respondsToFocus` props determine
     * the means of opening and closing the Popover with interactions. If you open
     * the Popover with a hover or focus, you can also close it by hovering away or
     * blurring. If, however, you open the Popover with a click, you can only close
     * it with another click, on the trigger or outside the Popover. If you
     * open the Popover with a hover and *then* you click, this is equivalent to
     * opening it with a click directly, so it will only close with another
     * click (not from just hovering away).
     */
    class PopoverTrigger extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        state: {
            visible: boolean;
            activeTriggerType: any;
        };
        componentDidMount(): void;
        hoverListener: any;
        componentDidUpdate(prevProps: any, prevState: any): void;
        componentWillUnmount(): void;
        openPopover: (trigger: any, callback: any) => void;
        closePopover: (callback: any) => void;
        onAnyClick: (event: any) => void;
        blockHover: () => void;
        hoverIsBlocked: boolean;
        addMouseMoveUnblockTimeout: NodeJS.Timeout;
        unblockHover: () => void;
        onTriggerMouseEnter: () => void;
        onTriggerMouseLeave: (event: any) => void;
        onPopoverMouseLeave: (event: any) => void;
        onTriggerFocus: () => void;
        onTriggerBlur: () => void;
        onTriggerKeyDown: (event: any) => void;
        showBecauseClick: () => void;
        showBecauseHover: () => void;
        showBecauseTriggerFocus: () => void;
        hideBecauseHover: () => void;
        hide: () => void;
        triggerFocusIsBlocked: boolean;
        cancelTriggerFocusIsBlockedTimeout: NodeJS.Timeout;
        removePopoverListeners: () => void;
        clearTimeouts(): void;
        ignoreClickWithinElement: (element: any) => any;
        getAnchorElement: () => any;
        setTriggerElement: (element: any) => void;
        triggerElement: any;
        setPopoverElement: (element: any) => void;
        popoverElement: any;
        setPopoverContentElement: (element: any) => void;
        popoverContentElement: any;
        getPopoverContent: () => any;
        render(): JSX.Element;
    }
    namespace PopoverTrigger {
        namespace propTypes {
            const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
            const block: PropTypes.Requireable<boolean>;
            const content: PropTypes.Requireable<((...args: any[]) => any) | PropTypes.ReactNodeLike>;
            const renderHiddenContent: PropTypes.Requireable<boolean>;
            const receiveFocus: PropTypes.Requireable<boolean>;
            const trapFocus: PropTypes.Requireable<boolean>;
            const respondsToClick: PropTypes.Requireable<boolean>;
            const respondsToHover: PropTypes.Requireable<boolean>;
            const respondsToFocus: PropTypes.Requireable<boolean>;
            const disabled: PropTypes.Requireable<boolean>;
            const popoverProps: PropTypes.Requireable<object>;
            const passthroughTriggerProps: PropTypes.Requireable<object>;
            const onPopoverOpen: PropTypes.Requireable<(...args: any[]) => any>;
            const onPopoverClose: PropTypes.Requireable<(...args: any[]) => any>;
        }
        namespace defaultProps {
            const block_1: boolean;
            export { block_1 as block };
            const disabled_1: boolean;
            export { disabled_1 as disabled };
            const renderHiddenContent_1: boolean;
            export { renderHiddenContent_1 as renderHiddenContent };
            const receiveFocus_1: boolean;
            export { receiveFocus_1 as receiveFocus };
            const trapFocus_1: boolean;
            export { trapFocus_1 as trapFocus };
            const respondsToClick_1: boolean;
            export { respondsToClick_1 as respondsToClick };
            const respondsToHover_1: boolean;
            export { respondsToHover_1 as respondsToHover };
            const respondsToFocus_1: boolean;
            export { respondsToFocus_1 as respondsToFocus };
            const popoverProps_1: {};
            export { popoverProps_1 as popoverProps };
        }
    }
    export default PopoverTrigger;
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/popover-trigger/index" {
    export default main;
    import main from "src/components/popover-trigger/popover-trigger";
}
declare module "src/components/tooltip/tooltip" {
    /**
     * Wrap a trigger element so that when it is hovered or focused a tooltip
     * appears.
     *
     * Tooltip extends [PopoverTrigger](#popovertrigger) and configures the
     * popover and trigger for accessibility.
     */
    class Tooltip extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        state: {
            visible: boolean;
            tooltipId: any;
        };
        componentDidMount(): void;
        getContent(): any;
        renderTrigger(): any;
        render(): JSX.Element;
    }
    namespace Tooltip {
        namespace propTypes {
            const children: PropTypes.Validator<((...args: any[]) => any) | PropTypes.ReactNodeLike>;
            const content: PropTypes.Validator<((...args: any[]) => any) | PropTypes.ReactNodeLike>;
            const placement: PropTypes.Requireable<string>;
            const alignment: PropTypes.Requireable<string>;
            const disabled: PropTypes.Requireable<boolean>;
            const coloring: PropTypes.Requireable<string>;
            const textSize: PropTypes.Requireable<string>;
            const maxWidth: PropTypes.Requireable<string>;
            const padding: PropTypes.Requireable<string>;
            const respondsToClick: PropTypes.Requireable<boolean>;
            const block: PropTypes.Requireable<boolean>;
            const testId: PropTypes.Requireable<string>;
        }
        namespace defaultProps {
            const placement_1: string;
            export { placement_1 as placement };
            const alignment_1: string;
            export { alignment_1 as alignment };
            const coloring_1: string;
            export { coloring_1 as coloring };
            const disabled_1: boolean;
            export { disabled_1 as disabled };
            const respondsToClick_1: boolean;
            export { respondsToClick_1 as respondsToClick };
            const padding_1: string;
            export { padding_1 as padding };
            const block_1: boolean;
            export { block_1 as block };
            const textSize_1: string;
            export { textSize_1 as textSize };
            const maxWidth_1: string;
            export { maxWidth_1 as maxWidth };
        }
    }
    export default Tooltip;
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/tooltip/index" {
    export default main;
    import main from "src/components/tooltip/tooltip";
}
declare module "src/components/badge/badge" {
    export default class Badge extends React.Component<any, any, any> {
        static propTypes: {
            /** Text in the badge. */
            badgeText: PropTypes.Validator<string>;
            /** Badge coloring options. */
            coloring: PropTypes.Requireable<string>;
            /** Text in the tooltip. If not provided, there is no tooltip. */
            tooltipText: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            coloring: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/badge/index" {
    export default main;
    import main from "src/components/badge/badge";
}
declare module "src/components/badge/__tests__/badge-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { Badge as component };
            export namespace props {
                const badgeText: string;
            }
        }
        namespace color {
            const description_1: string;
            export { description_1 as description };
            export { Badge as component };
            export namespace props_1 {
                const badgeText_1: string;
                export { badgeText_1 as badgeText };
                export const coloring: string;
            }
            export { props_1 as props };
        }
        namespace tooltip {
            const description_2: string;
            export { description_2 as description };
            export { Badge as component };
            export namespace props_2 {
                const badgeText_2: string;
                export { badgeText_2 as badgeText };
                export const tooltipText: string;
            }
            export { props_2 as props };
        }
        namespace colorAndTooltip {
            const description_3: string;
            export { description_3 as description };
            export { Badge as component };
            export namespace props_3 {
                const badgeText_3: string;
                export { badgeText_3 as badgeText };
                const coloring_1: string;
                export { coloring_1 as coloring };
                const tooltipText_1: string;
                export { tooltipText_1 as tooltipText };
            }
            export { props_3 as props };
        }
    }
    import Badge from "src/components/badge/badge";
}
declare module "src/components/badge/__tests__/badge.test" {
    export {};
}
declare module "src/components/badge/examples/badge-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/badge/examples/badge-example-beta" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/icon/icon" {
    import { ReactElement, CSSProperties } from 'react';
    import PropTypes from 'prop-types';
    interface Props {
        name: string;
        inline?: boolean;
        passthroughProps?: {
            style?: CSSProperties;
        };
        size?: number;
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
    declare function Icon({ name, inline, passthroughProps, size }: Props): ReactElement;
    declare namespace Icon {
        var propTypes: {
            /**
             * The name of the [Assembly icon](https://labs.mapbox.com/assembly/icons/) that
             * you want to display.
             */
            name: PropTypes.Validator<string>;
            /**
             * The width and height of the icon. All icons fill up a square space,
             * so this value will be applied to both width and height.
             *
             * If `inline: true`, the technical height will be controlled by the
             * line-height of the container, but the appearance of the icon will still
             * be in accordance with your `size` value (because it's limited by the
             * width).
             */
            size: PropTypes.Requireable<string | number>;
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
            inline: PropTypes.Requireable<boolean>;
            /**
             * Props to pass directly to the `<svg>` element.
             */
            passthroughProps: PropTypes.Requireable<object>;
        };
    }
    export default Icon;
}
declare module "src/components/icon/index" {
    export default main;
    import main from "src/components/icon/icon";
}
declare module "src/components/icon-text/icon-text" {
    export default IconText;
    /**
     * Put an icon next to some text.
     *
     * The icon and text will be vertically centered, with standard spacing between.
     */
    class IconText extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        renderIcon(icon: any): any;
        render(): JSX.Element;
    }
    namespace IconText {
        namespace propTypes {
            const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
            const gap: PropTypes.Requireable<string>;
            const iconBefore: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            const iconAfter: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            const inline: PropTypes.Requireable<boolean>;
        }
        namespace defaultProps {
            const gap_1: string;
            export { gap_1 as gap };
            const inline_1: boolean;
            export { inline_1 as inline };
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/icon-text/index" {
    export default main;
    import main from "src/components/icon-text/icon-text";
}
declare module "src/components/button/__tests__/button-test-cases" {
    export namespace testCases {
        namespace primary {
            export const description: string;
            export { Button as component };
            export namespace props {
                const children: string;
                const onClick: any;
                const passthroughProps: {
                    'aria-label': string;
                };
            }
        }
        namespace secondary {
            const description_1: string;
            export { description_1 as description };
            export { Button as component };
            export namespace props_1 {
                const children_1: string;
                export { children_1 as children };
                export const variant: string;
                const onClick_1: any;
                export { onClick_1 as onClick };
                const passthroughProps_1: {
                    'aria-label': string;
                };
                export { passthroughProps_1 as passthroughProps };
            }
            export { props_1 as props };
        }
        namespace discouraging {
            const description_2: string;
            export { description_2 as description };
            export { Button as component };
            export namespace props_2 {
                const children_2: string;
                export { children_2 as children };
                const variant_1: string;
                export { variant_1 as variant };
                const onClick_2: any;
                export { onClick_2 as onClick };
                const passthroughProps_2: {
                    'aria-label': string;
                };
                export { passthroughProps_2 as passthroughProps };
            }
            export { props_2 as props };
        }
        namespace destructive {
            const description_3: string;
            export { description_3 as description };
            export { Button as component };
            export namespace props_3 {
                const children_3: string;
                export { children_3 as children };
                const variant_2: string;
                export { variant_2 as variant };
                const onClick_3: any;
                export { onClick_3 as onClick };
                const passthroughProps_3: {
                    'aria-label': string;
                };
                export { passthroughProps_3 as passthroughProps };
            }
            export { props_3 as props };
        }
        namespace appPrimary {
            const description_4: string;
            export { description_4 as description };
            export { Button as component };
            export namespace props_4 {
                const children_4: string;
                export { children_4 as children };
                const variant_3: string;
                export { variant_3 as variant };
                const onClick_4: any;
                export { onClick_4 as onClick };
                const passthroughProps_4: {
                    'aria-label': string;
                };
                export { passthroughProps_4 as passthroughProps };
            }
            export { props_4 as props };
        }
        namespace appSecondary {
            const description_5: string;
            export { description_5 as description };
            export { Button as component };
            export namespace props_5 {
                const children_5: string;
                export { children_5 as children };
                const variant_4: string;
                export { variant_4 as variant };
                const onClick_5: any;
                export { onClick_5 as onClick };
                const passthroughProps_5: {
                    'aria-label': string;
                };
                export { passthroughProps_5 as passthroughProps };
            }
            export { props_5 as props };
        }
        namespace linkOutlinePadding {
            const description_6: string;
            export { description_6 as description };
            export { Button as component };
            export namespace props_6 {
                const children_6: JSX.Element;
                export { children_6 as children };
                export const href: string;
                const onClick_6: any;
                export { onClick_6 as onClick };
                export const outline: boolean;
                export const width: string;
            }
            export { props_6 as props };
        }
        namespace fullWidthPurple {
            const description_7: string;
            export { description_7 as description };
            export { Button as component };
            export namespace props_7 {
                const children_7: string;
                export { children_7 as children };
                export const color: string;
                const width_1: string;
                export { width_1 as width };
                const passthroughProps_6: {
                    'aria-label': string;
                };
                export { passthroughProps_6 as passthroughProps };
            }
            export { props_7 as props };
        }
        namespace weird {
            const description_8: string;
            export { description_8 as description };
            export { Button as component };
            export namespace props_8 {
                const children_8: string;
                export { children_8 as children };
                export const size: string;
                const variant_5: string;
                export { variant_5 as variant };
                const onClick_7: any;
                export { onClick_7 as onClick };
                export const component: string;
                const passthroughProps_7: {
                    'aria-label': string;
                    role: string;
                    'data-test': string;
                };
                export { passthroughProps_7 as passthroughProps };
            }
            export { props_8 as props };
        }
        namespace disabled {
            const description_9: string;
            export { description_9 as description };
            export { Button as component };
            export namespace props_9 {
                const children_9: string;
                export { children_9 as children };
                const disabled_1: boolean;
                export { disabled_1 as disabled };
                const passthroughProps_8: {
                    'aria-hidden': boolean;
                };
                export { passthroughProps_8 as passthroughProps };
            }
            export { props_9 as props };
        }
        namespace disabledSecondary {
            const description_10: string;
            export { description_10 as description };
            export { Button as component };
            export namespace props_10 {
                const children_10: string;
                export { children_10 as children };
                const disabled_2: boolean;
                export { disabled_2 as disabled };
                const variant_6: string;
                export { variant_6 as variant };
                const onClick_8: any;
                export { onClick_8 as onClick };
                const passthroughProps_9: {
                    'aria-hidden': boolean;
                };
                export { passthroughProps_9 as passthroughProps };
            }
            export { props_10 as props };
        }
        namespace disabledSpecial {
            const description_11: string;
            export { description_11 as description };
            export { Button as component };
            export namespace props_11 {
                const children_11: string;
                export { children_11 as children };
                const variant_7: string;
                export { variant_7 as variant };
                const onClick_9: any;
                export { onClick_9 as onClick };
                const disabled_3: boolean;
                export { disabled_3 as disabled };
                const color_1: string;
                export { color_1 as color };
                const passthroughProps_10: {
                    'aria-hidden': boolean;
                };
                export { passthroughProps_10 as passthroughProps };
            }
            export { props_11 as props };
        }
    }
    import Button from "src/components/button/button";
}
declare module "src/components/button/__tests__/button.test" {
    export {};
}
declare module "src/components/button/examples/button-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/button/examples/button-b" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/button/examples/button-c" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/button/examples/button-d" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/chevronous-text/chevronous-text" {
    export default class ChevronousText extends React.PureComponent<any, any, any> {
        static propTypes: {
            /** When true, the text will follow after a left pointed chevron. */
            iconBefore: PropTypes.Requireable<boolean>;
            /**
             * The width and height size of the chevron icon. Note that this icon is
             * inline and the height won't go beyond the line-height. This can be a
             * number which will fall back to px, or a string in the units of
             * px, em, %, or pt.
             */
            iconSize: PropTypes.Requireable<string | number>;
            /** The text that should be aligned next to the chevron. */
            text: PropTypes.Validator<string>;
        };
        static defaultProps: {
            iconBefore: boolean;
            iconSize: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/chevronous-text/index" {
    export default main;
    import main from "src/components/chevronous-text/chevronous-text";
}
declare module "src/components/chevronous-text/__tests__/chevronous-text-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ChevronousText as component };
            export namespace props {
                const text: string;
            }
        }
        namespace oneLongWord {
            const description_1: string;
            export { description_1 as description };
            export { ChevronousText as component };
            export namespace props_1 {
                const text_1: string;
                export { text_1 as text };
            }
            export { props_1 as props };
        }
        namespace multilineText {
            const description_2: string;
            export { description_2 as description };
            export { ChevronousText as component };
            export namespace props_2 {
                const text_2: string;
                export { text_2 as text };
            }
            export { props_2 as props };
        }
        namespace sizedIcon {
            const description_3: string;
            export { description_3 as description };
            export { ChevronousText as component };
            export namespace props_3 {
                export const iconSize: number;
                const text_3: string;
                export { text_3 as text };
            }
            export { props_3 as props };
        }
        namespace iconBeforeOneLongWord {
            const description_4: string;
            export { description_4 as description };
            export { ChevronousText as component };
            export namespace props_4 {
                export const iconBefore: boolean;
                const text_4: string;
                export { text_4 as text };
            }
            export { props_4 as props };
        }
        namespace iconBeforeMultilineText {
            const description_5: string;
            export { description_5 as description };
            export { ChevronousText as component };
            export namespace props_5 {
                const iconBefore_1: boolean;
                export { iconBefore_1 as iconBefore };
                const text_5: string;
                export { text_5 as text };
            }
            export { props_5 as props };
        }
        namespace sizedIconBeforeText {
            const description_6: string;
            export { description_6 as description };
            export { ChevronousText as component };
            export namespace props_6 {
                const iconBefore_2: boolean;
                export { iconBefore_2 as iconBefore };
                const iconSize_1: string;
                export { iconSize_1 as iconSize };
                const text_6: string;
                export { text_6 as text };
            }
            export { props_6 as props };
        }
    }
    import ChevronousText from "src/components/chevronous-text/chevronous-text";
}
declare module "src/components/chevronous-text/__tests__/chevronous-text.test" {
    export {};
}
declare module "src/components/chevronous-text/examples/chevronous-text-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/chevronous-text/examples/chevronous-text-example-heading" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/copy-button/copy-button" {
    /**
     * A button that, when clicked, copies the designated text to the clipboard.
     *
     * The static function `CopyButton.isCopySupported` returns a boolean
     * indicating whether the current browser will support automatic copying.
     * If it does not, you might want to hide your copy button and make sure
     * the user is able to manually select and copy the text.
     */
    class CopyButton extends React.PureComponent<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        state: {
            showingFeedback: boolean;
        };
        componentDidMount(): void;
        componentDidUpdate(prevProps: any): void;
        componentWillUnmount(): void;
        handleCopyButtonClick: (event: any) => void;
        showFeedback: () => void;
        revertTimer: NodeJS.Timeout;
        setContainer: (element: any) => void;
        container: any;
        getContainer: () => any;
        destroyClipboard: () => void;
        setClipboard(element: any): void;
        clipboard: any;
        renderFeedbackPopover(): JSX.Element;
        render(): JSX.Element;
    }
    namespace CopyButton {
        namespace propTypes {
            const text: PropTypes.Validator<string>;
            const textEl: PropTypes.Requireable<object>;
            const onCopy: PropTypes.Requireable<(...args: any[]) => any>;
            const block: PropTypes.Requireable<boolean>;
            const focusTrapPaused: PropTypes.Requireable<boolean>;
            const className: PropTypes.Requireable<string>;
            const passthroughProps: PropTypes.Requireable<object>;
        }
        namespace defaultProps {
            const className_1: string;
            export { className_1 as className };
            const block_1: boolean;
            export { block_1 as block };
        }
        function isCopySupported(): any;
    }
    export default CopyButton;
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/copy-button/index" {
    export default main;
    import main from "src/components/copy-button/copy-button";
}
declare module "src/components/code-snippet/code-snippet" {
    export default class CodeSnippet extends React.PureComponent<any, any, any> {
        static propTypes: {
            /** Raw (unhighlighted) code. When the user clicks a copy button, this is what they'll get. If no `highlightedCode` is provided, `code` is displayed. */
            code: PropTypes.Validator<string>;
            /** The HTML output of running code through a syntax highlighter. If this is not provided, `code` is displayed, instead. The default theme CSS assumes the highlighter is [`highlight.js`](https://github.com/isagalaev/highlight.js). If you are using another highlighter, provide your own theme. */
            highlightedCode: PropTypes.Requireable<string>;
            /** Specific line ranges that should be independently copiable. Each range is a two-value array, consisting of the starting and ending line. If this is not provided, the entire snippet is copiable. */
            copyRanges: PropTypes.Requireable<number[][]>;
            /** A maximum height for the snippet. If the code exceeds this height, the snippet will scroll internally. */
            maxHeight: PropTypes.Requireable<number>;
            /** A callback that is invoked when the snippet (or a chunk of the snippet) is copied. If `copyRanges` are provided, the callback is passed the index (0-based) of the chunk that was copied. */
            onCopy: PropTypes.Requireable<(...args: any[]) => any>;
            /** CSS that styles the highlighted code. The default theme is a [`highlight.js` theme](https://highlightjs.readthedocs.io/en/latest/style-guide.html#defining-a-theme) theme. It is the dark theme used on mapbox.com's installation flow. */
            highlightThemeCss: PropTypes.Requireable<string>;
            /** The width of a character in the theme's monospace font, used for indentation. If you use a font or font-size different than the default theme, you may need to change this value. */
            characterWidth: PropTypes.Requireable<number>;
        };
        static defaultProps: {
            characterWidth: number;
            highlightThemeCss: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        componentDidMount(): void;
        styleTag: HTMLStyleElement;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        adjustPositions: any;
        onContainerElement: (element: any) => void;
        containerElement: any;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/code-snippet/index" {
    export default main;
    import main from "src/components/code-snippet/code-snippet";
}
declare module "src/components/code-snippet/__tests__/code-snippet-test-cases" {
    export namespace testCases {
        namespace notHighlighted {
            export const description: string;
            export { CodeSnippet as component };
            export namespace props {
                export { snippetA as code };
            }
        }
        namespace highlighted {
            const description_1: string;
            export { description_1 as description };
            export { CodeSnippet as component };
            export namespace props_1 {
                export { snippetA as code };
                export const highlightedCode: any;
            }
            export { props_1 as props };
        }
        namespace highlightedNoRangesWithCallback {
            const description_2: string;
            export { description_2 as description };
            export { CodeSnippet as component };
            export namespace props_2 {
                export { snippetA as code };
                const highlightedCode_1: any;
                export { highlightedCode_1 as highlightedCode };
                export const onCopy: any;
            }
            export { props_2 as props };
        }
        namespace copyRanges {
            const description_3: string;
            export { description_3 as description };
            export { CodeSnippet as component };
            export namespace props_3 {
                export { snippetB as code };
                const highlightedCode_2: any;
                export { highlightedCode_2 as highlightedCode };
                const copyRanges_1: number[][];
                export { copyRanges_1 as copyRanges };
            }
            export { props_3 as props };
        }
        namespace copyRangesWithCallback {
            const description_4: string;
            export { description_4 as description };
            export { CodeSnippet as component };
            export namespace props_4 {
                export { snippetB as code };
                const highlightedCode_3: any;
                export { highlightedCode_3 as highlightedCode };
                const copyRanges_2: number[][];
                export { copyRanges_2 as copyRanges };
                const onCopy_1: any;
                export { onCopy_1 as onCopy };
            }
            export { props_4 as props };
        }
        namespace maxHeight {
            const description_5: string;
            export { description_5 as description };
            export { CodeSnippet as component };
            export namespace props_5 {
                export { snippetB as code };
                const highlightedCode_4: any;
                export { highlightedCode_4 as highlightedCode };
                const copyRanges_3: number[][];
                export { copyRanges_3 as copyRanges };
                const maxHeight_1: number;
                export { maxHeight_1 as maxHeight };
            }
            export { props_5 as props };
        }
    }
    import CodeSnippet from "src/components/code-snippet/code-snippet";
    const snippetA: "dependencies {\n  compile('com.mapbox.mapboxsdk:mapbox-android-sdk:5.0.2@aar') {\n    transitive=true\n  }\n}";
    const snippetB: "import Mapbox\n\n  class ViewController: UIViewController {\n  override func viewDidLoad() {\n    super.viewDidLoad()\n\n    let url = URL(string: \"mapbox://styles/mapbox/streets-v9\")\n    let mapView = MGLMapView(frame: view.bounds, styleURL: url)\n    mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]\n    mapView.setCenter(CLLocationCoordinate2D(latitude: 59.31, longitude: 18.06), zoomLevel: 9, animated: false)\n    view.addSubview(mapView)\n  }\n}";
    export {};
}
declare module "src/components/code-snippet/__tests__/code-snippet.test" {
    export {};
}
declare module "src/components/code-snippet/examples/code-snippet-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/code-snippet/examples/code-snippet-example-options" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-alert/control-alert" {
    export default class ControlAlert extends React.Component<any, any, any> {
        static propTypes: {
            /** Whether to use ARIA alert role for screen readers or not. */
            autoFocus: PropTypes.Requireable<boolean>;
            /** The content of the alert. */
            children: PropTypes.Validator<PropTypes.ReactNodeLike>;
            /**
             * Called on click of dismiss button. Must have this callback to display
             * the button.
             */
            onButtonClick: PropTypes.Requireable<(...args: any[]) => any>;
            /**
             * The alert `theme` options are "error", "locked", "success", and
             * "warning".
             */
            theme: PropTypes.Validator<string>;
        };
        static defaultProps: {
            autoFocus: boolean;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        componentDidMount(): void;
        handleContentRef: (ref: any) => void;
        contentRef: any;
        onButtonClick: () => void;
        renderDismissButton(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-alert/index" {
    export default main;
    import main from "src/components/control-alert/control-alert";
}
declare module "src/components/control-alert/__tests__/control-alert-test-cases" {
    export namespace testCases {
        namespace basicError {
            export { ControlAlert as component };
            export const description: string;
            export namespace props {
                const children: JSX.Element;
                const theme: string;
            }
        }
        namespace basicLocked {
            export { ControlAlert as component };
            const description_1: string;
            export { description_1 as description };
            export namespace props_1 {
                const children_1: JSX.Element;
                export { children_1 as children };
                const theme_1: string;
                export { theme_1 as theme };
            }
            export { props_1 as props };
        }
        namespace basicSuccess {
            export { ControlAlert as component };
            const description_2: string;
            export { description_2 as description };
            export namespace props_2 {
                const children_2: JSX.Element;
                export { children_2 as children };
                const theme_2: string;
                export { theme_2 as theme };
            }
            export { props_2 as props };
        }
        namespace dismissiveWarning {
            export { ControlAlert as component };
            const description_3: string;
            export { description_3 as description };
            export namespace props_3 {
                const children_3: JSX.Element;
                export { children_3 as children };
                export const onButtonClick: any;
                const theme_3: string;
                export { theme_3 as theme };
            }
            export { props_3 as props };
        }
        namespace dismissiveMultilineError {
            export { ControlAlert as component };
            const description_4: string;
            export { description_4 as description };
            export namespace props_4 {
                const children_4: JSX.Element;
                export { children_4 as children };
                const onButtonClick_1: any;
                export { onButtonClick_1 as onButtonClick };
                const theme_4: string;
                export { theme_4 as theme };
            }
            export { props_4 as props };
        }
    }
    import ControlAlert from "src/components/control-alert/control-alert";
}
declare module "src/components/control-alert/__tests__/control-alert.test" {
    export {};
}
declare module "src/components/control-alert/examples/control-alert-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-alert/examples/control-alert-example-options" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            showAlert: boolean;
        };
        toggleAlert: () => void;
        renderShowAlertButton(): JSX.Element;
        renderAlert(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/heading/heading" {
    export default Heading;
    /**
     * Fancy headings with responsive styling.
     *
     * This component only *styles*: it does not apply an `<h*>` element. You
     * should wrap it in the `<h*>` element appropriate to the context.
     */
    class Heading extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    namespace Heading {
        namespace propTypes {
            const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
            const variant: PropTypes.Validator<string>;
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/heading/index" {
    export default main;
    import main from "src/components/heading/heading";
}
declare module "src/components/control-card/control-card" {
    export default class ControlCard extends React.Component<any, any, any> {
        static propTypes: {
            /**
             * The type of update to the card. Options are "close" and "collapse".
             * Must have `onButtonClick` prop to enable action and button.
             */
            buttonType: PropTypes.Requireable<string>;
            /** The content of the card. */
            children: PropTypes.Validator<PropTypes.ReactNodeLike>;
            /**
             * Called on click of update button. Must have `buttonType` prop to enable
             * this action and button.
             */
            onButtonClick: PropTypes.Requireable<(...args: any[]) => any>;
            /** Card title heading. */
            title: PropTypes.Requireable<string>;
            /**
             * The card title heading variant. Options are "primary", "secondary",
             * "tertiary", and "minor".
             */
            titleSize: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            buttonType: string;
            titleSize: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onButtonClick: () => void;
        renderTitle(): JSX.Element;
        renderUpdateButton(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-card/index" {
    export default main;
    import main from "src/components/control-card/control-card";
}
declare module "src/components/control-card/__tests__/control-card-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlCard as component };
            export namespace props {
                const children: string;
            }
        }
        namespace title {
            const description_1: string;
            export { description_1 as description };
            export { ControlCard as component };
            export namespace props_1 {
                const children_1: string;
                export { children_1 as children };
                const title_1: string;
                export { title_1 as title };
            }
            export { props_1 as props };
        }
        namespace sizedTitle {
            const description_2: string;
            export { description_2 as description };
            export { ControlCard as component };
            export namespace props_2 {
                const children_2: string;
                export { children_2 as children };
                const title_2: string;
                export { title_2 as title };
                export const titleSize: string;
            }
            export { props_2 as props };
        }
        namespace collapsible {
            const description_3: string;
            export { description_3 as description };
            export { ControlCard as component };
            export namespace props_3 {
                export const buttonType: string;
                const children_3: string;
                export { children_3 as children };
                export const onButtonClick: any;
                const title_3: string;
                export { title_3 as title };
            }
            export { props_3 as props };
        }
        namespace sizedTitleclosable {
            const description_4: string;
            export { description_4 as description };
            export { ControlCard as component };
            export namespace props_4 {
                const buttonType_1: string;
                export { buttonType_1 as buttonType };
                const children_4: string;
                export { children_4 as children };
                const onButtonClick_1: any;
                export { onButtonClick_1 as onButtonClick };
                const title_4: string;
                export { title_4 as title };
                const titleSize_1: string;
                export { titleSize_1 as titleSize };
            }
            export { props_4 as props };
        }
    }
    import ControlCard from "src/components/control-card/control-card";
}
declare module "src/components/control-card/__tests__/control-card.test" {
    export {};
}
declare module "src/components/control-card/examples/control-card-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-card/examples/control-card-example-options" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            showCard: boolean;
        };
        toggleCard: () => void;
        renderShowCardButton(): JSX.Element;
        renderCard(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/utils/omit" {
    type PrimitiveDataTypes = string | boolean | number;
    type PropertyValues = PrimitiveDataTypes | {
        [key: string]: PrimitiveDataTypes;
    };
    export default function omit(source?: ({
        [key: string]: PropertyValues;
    }), omittedProperties?: Array<string>): ({
        [key: string]: PropertyValues;
    });
}
declare module "src/components/control-legend/control-legend" {
    export default class ControlLegend extends React.PureComponent<any, any, any> {
        static propTypes: {
            /** Label text for this control. */
            text: PropTypes.Validator<string>;
            /** Element id used to group additional form controls. */
            id: PropTypes.Validator<string>;
            /** Additional content inserted alongside the label element. */
            aside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** If `true`, the text `(optional)` is appended to the label element. */
            optional: PropTypes.Requireable<boolean>;
            /** Classes to apply to the legend element. */
            themeLegend: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            themeLegend: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-legend/index" {
    export default main;
    import main from "src/components/control-legend/control-legend";
}
declare module "src/components/utils/maybe-add-period" {
    export default function maybeAddPeriod(text: string): string;
}
declare module "src/components/control-wrapper/control-wrapper" {
    import { ReactElement } from 'react';
    import PropTypes from 'prop-types';
    interface Props {
        id: string;
        children: ReactElement;
        themeControlWrapper?: string;
        validationError?: ReactElement | string;
    }
    declare function ControlWrapper({ id, themeControlWrapper, validationError, children }: Props): ReactElement;
    declare namespace ControlWrapper {
        var propTypes: {
            /** Should correspond to the identifier of the input. */
            id: PropTypes.Validator<string>;
            /**
             * If provided, the value of this property will show up as an error message.
             * Strings will end with periods.
             */
            validationError: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** The contents the controlWrapper contains */
            children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** A space separated list of Assembly class names to override the existing presentation. */
            themeControlWrapper: PropTypes.Requireable<string>;
        };
    }
    export default ControlWrapper;
}
declare module "src/components/control-wrapper/index" {
    export default main;
    import main from "src/components/control-wrapper/control-wrapper";
}
declare module "src/components/control-checkbox-set/control-checkbox-set" {
    export default class ControlCheckboxSet extends React.Component<any, any, any> {
        static propTypes: {
            /** Unique id for this control. */
            id: PropTypes.Validator<string>;
            /**
             * An array of object(s) that represent each option of the set.
             * Each object should contain two fields:
             *
             * - `label` which can either be a string or valid JSX
             * - `value` a unique string value
             *
             * Any additional fields added will be passed as attributes to the input
             * element.
             */
            options: PropTypes.Validator<PropTypes.InferProps<{
                label: PropTypes.Validator<PropTypes.ReactNodeLike>;
                value: PropTypes.Validator<string>;
            }>[]>;
            /**
             * Invoked when the control's value changes.
             * Passed two arguments:
             *
             * - The value. A string matching the `value` field of one of the `options`
             *   props passed.
             * - The `id` prop.
             */
            onChange: PropTypes.Validator<(...args: any[]) => any>;
            /** Legend label for the control. */
            legend: PropTypes.Requireable<string>;
            /** Accepts an array of strings, where each string matches the value property of an entry in the options prop. */
            value: PropTypes.Requireable<any[]>;
            /** If provided, "(optional)" is appended to the value of the legend element. */
            optional: PropTypes.Requireable<boolean>;
            /** Additional content inserted alongside the legend element. */
            aside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Icon to use for the checkbox active style. Must match an icon name available in Assembly. */
            icon: PropTypes.Requireable<string>;
            /** When `true`, autofocus attributes are applied to the input that matches the `value` prop passed. */
            autoFocus: PropTypes.Requireable<boolean>;
            /** A validation error to display beneath the control. */
            validationError: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Classes to apply to the checkbox container. */
            themeCheckboxContainer: PropTypes.Requireable<string>;
            /** Classes to apply to the checkbox element. */
            themeCheckbox: PropTypes.Requireable<string>;
            /** Classes to apply to the control container. */
            themeControlWrapper: PropTypes.Requireable<string>;
            /** Classes to apply to the legend element. */
            themeLegend: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            value: any[];
            optional: boolean;
            autoFocus: boolean;
            icon: string;
            themeCheckboxContainer: string;
            themeCheckbox: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onChange: (e: any) => any;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-checkbox-set/index" {
    export default main;
    import main from "src/components/control-checkbox-set/control-checkbox-set";
}
declare module "src/components/control-checkbox-set/__tests__/control-checkbox-set-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlCheckboxSet as component };
            export namespace props {
                const id: string;
                const legend: string;
                const options: {
                    label: string;
                    value: string;
                }[];
                const onChange: any;
            }
        }
        namespace disabled {
            const description_1: string;
            export { description_1 as description };
            export { ControlCheckboxSet as component };
            export namespace props_1 {
                const id_1: string;
                export { id_1 as id };
                const legend_1: string;
                export { legend_1 as legend };
                const options_1: ({
                    label: string;
                    value: string;
                    disabled?: undefined;
                } | {
                    label: string;
                    value: string;
                    disabled: boolean;
                })[];
                export { options_1 as options };
                const onChange_1: any;
                export { onChange_1 as onChange };
            }
            export { props_1 as props };
        }
        namespace allOptions {
            const description_2: string;
            export { description_2 as description };
            export { ControlCheckboxSet as component };
            export namespace props_2 {
                const id_2: string;
                export { id_2 as id };
                const options_2: {
                    label: JSX.Element;
                    value: string;
                }[];
                export { options_2 as options };
                export const validationError: string;
                export const value: string[];
                export const autoFocus: boolean;
                export const optional: boolean;
                const legend_2: string;
                export { legend_2 as legend };
                export const aside: JSX.Element;
                export const themeCheckboxContainer: string;
                export const themeCheckbox: string;
                export const themeControlWrapper: string;
                export const themeLegend: string;
                const onChange_2: any;
                export { onChange_2 as onChange };
            }
            export { props_2 as props };
        }
    }
    import ControlCheckboxSet from "src/components/control-checkbox-set/control-checkbox-set";
}
declare module "src/components/control-checkbox-set/__tests__/control-checkbox-set.test" {
    export {};
}
declare module "src/components/control-checkbox-set/examples/control-checkbox-set-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            value: string;
            id: string;
        };
        handleChange: (value: any, id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-checkbox-set/examples/control-checkbox-set-example-options" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            value: string;
            id: string;
        };
        handleChange: (value: any, id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-label/control-label" {
    export default class ControlLabel extends React.PureComponent<any, any, any> {
        static propTypes: {
            /** Label text */
            text: PropTypes.Validator<string>;
            /** Value should match the identifying id of the input element. */
            id: PropTypes.Validator<string>;
            /** Additional content to provide aligned to the right of the label. */
            aside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** If true, label text adds (optional) alongside it. */
            optional: PropTypes.Requireable<boolean>;
            /** A space separated list of Assembly class names to override the existing presentation. */
            themeLabel: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            themeLabel: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-label/index" {
    export default main;
    import main from "src/components/control-label/control-label";
}
declare module "src/components/control-file/control-file" {
    export default class ControlFile extends React.Component<any, any, any> {
        static propTypes: {
            /** Identifying value for input element. */
            id: PropTypes.Validator<string>;
            /** Input value */
            value: PropTypes.Requireable<string | PropTypes.InferProps<{
                name: PropTypes.Validator<string>;
            }>[]>;
            /** Called during changes to the input element. Invoked with the array of
             selected files and the id of the input. */
            onChange: PropTypes.Validator<(...args: any[]) => any>;
            /** Value passed to the label element. */
            label: PropTypes.Requireable<string>;
            /** If provided the text, "(optional)" is appended to the value of the label element. */
            optional: PropTypes.Requireable<boolean>;
            /** Additional content inserted alongside the label element. */
            aside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Pass disabled attribute */
            disabled: PropTypes.Requireable<boolean>;
            /** If provided, the value of this propery displays as an error message. */
            validationError: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Overrides the "Select a file" label. */
            initialDisplayValue: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the button trigger element */
            themeControlFile: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the file clear element */
            themeControlFileClear: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the control wrapper */
            themeControlWrapper: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the input element */
            themeLabel: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            initialDisplayValue: string;
            optional: boolean;
            disabled: boolean;
            themeControlFile: string;
            themeControlFileClear: string;
        };
        static getDerivedStateFromProps(nextProps: any): {
            displayValue: any;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onChange: (e: any) => any;
        state: {
            displayValue: string;
        };
        onButtonClick: () => void;
        onClear: () => any;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-file/index" {
    export default main;
    import main from "src/components/control-file/control-file";
}
declare module "src/components/control-file/__tests__/control-file-test-cases" {
    export namespace testCases {
        namespace interactive {
            const description: string;
            const element: JSX.Element;
        }
        namespace basic {
            const description_1: string;
            export { description_1 as description };
            export { ControlFile as component };
            export namespace props {
                const id: string;
                const label: string;
                const onChange: any;
            }
        }
        namespace multiple {
            const description_2: string;
            export { description_2 as description };
            export { ControlFile as component };
            export namespace props_1 {
                const id_1: string;
                export { id_1 as id };
                const label_1: string;
                export { label_1 as label };
                const onChange_1: any;
                export { onChange_1 as onChange };
                const multiple_1: boolean;
                export { multiple_1 as multiple };
            }
            export { props_1 as props };
        }
        namespace disabled {
            const description_3: string;
            export { description_3 as description };
            export { ControlFile as component };
            export namespace props_2 {
                const id_2: string;
                export { id_2 as id };
                const label_2: string;
                export { label_2 as label };
                const disabled_1: boolean;
                export { disabled_1 as disabled };
                const onChange_2: any;
                export { onChange_2 as onChange };
            }
            export { props_2 as props };
        }
        namespace allOptions {
            const description_4: string;
            export { description_4 as description };
            export { ControlFile as component };
            export namespace props_3 {
                const id_3: string;
                export { id_3 as id };
                export const themeControlFile: string;
                export const themeControlWrapper: string;
                export const themeControlFileClear: string;
                export const themeLabel: string;
                export const initialDisplayValue: string;
                export const validationError: string;
                const label_3: string;
                export { label_3 as label };
                export const aside: JSX.Element;
                export const optional: boolean;
                export const accept: string;
                const multiple_2: boolean;
                export { multiple_2 as multiple };
                export const autoFocus: boolean;
                const onChange_3: any;
                export { onChange_3 as onChange };
            }
            export { props_3 as props };
        }
    }
    import ControlFile from "src/components/control-file/control-file";
}
declare module "src/components/control-file/__tests__/control-file.test" {
    export {};
}
declare module "src/components/control-file/examples/control-file-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-label/__tests__/control-label-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlLabel as component };
            export namespace props {
                const text: string;
                const id: string;
            }
        }
        namespace basicWithAside {
            const description_1: string;
            export { description_1 as description };
            export { ControlLabel as component };
            export namespace props_1 {
                const text_1: string;
                export { text_1 as text };
                const id_1: string;
                export { id_1 as id };
                export const aside: JSX.Element;
            }
            export { props_1 as props };
        }
        namespace basicWithOptional {
            const description_2: string;
            export { description_2 as description };
            export { ControlLabel as component };
            export namespace props_2 {
                const text_2: string;
                export { text_2 as text };
                const id_2: string;
                export { id_2 as id };
                const aside_1: string;
                export { aside_1 as aside };
                export const optional: boolean;
                export const themeLabel: string;
            }
            export { props_2 as props };
        }
    }
    import ControlLabel from "src/components/control-label/control-label";
}
declare module "src/components/control-label/__tests__/control-label.test" {
    export {};
}
declare module "src/components/control-label/examples/control-label-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-legend/__tests__/control-legend-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlLegend as component };
            export namespace props {
                const text: string;
                const id: string;
            }
        }
        namespace basicWithAside {
            const description_1: string;
            export { description_1 as description };
            export { ControlLegend as component };
            export namespace props_1 {
                const text_1: string;
                export { text_1 as text };
                const id_1: string;
                export { id_1 as id };
                export const aside: JSX.Element;
            }
            export { props_1 as props };
        }
        namespace basicWithOptional {
            const description_2: string;
            export { description_2 as description };
            export { ControlLegend as component };
            export namespace props_2 {
                const text_2: string;
                export { text_2 as text };
                const id_2: string;
                export { id_2 as id };
                export const optional: boolean;
                const aside_1: string;
                export { aside_1 as aside };
                export const themeLegend: string;
            }
            export { props_2 as props };
        }
    }
    import ControlLegend from "src/components/control-legend/control-legend";
}
declare module "src/components/control-legend/__tests__/control-legend.test" {
    export {};
}
declare module "src/components/control-legend/examples/control-legend-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-legend/examples/control-legend-example-multiple-inputs" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        renderOptions: (p: any) => JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-radio-set/control-radio-set" {
    export default class ControlRadioSet extends React.Component<any, any, any> {
        static propTypes: {
            /** Unique id for this control. Required if you want a `label`. */
            id: PropTypes.Validator<string>;
            /**
             * An array of objects that represent each option of the set.
             * Each object should contain two fields:
             *
             * - `label` which can either be a string or valid JSX
             * - `value` a unique string value
             *
             * Any additional fields added will be passed as attributes to the input
             * element.
             */
            options: PropTypes.Validator<PropTypes.InferProps<{
                label: PropTypes.Validator<PropTypes.ReactNodeLike>;
                value: PropTypes.Validator<string>;
            }>[]>;
            /**
             * Invoked when the control's value changes.
             * Passed two arguments:
             *
             * - The value. A string matching the `value` field of one of the `options`
             *   props passed.
             * - The `id` prop.
             */
            onChange: PropTypes.Validator<(...args: any[]) => any>;
            /** Legend label for the control. */
            legend: PropTypes.Requireable<string>;
            /** The control's value. Can be an empty string to indicate no value. */
            value: PropTypes.Requireable<string>;
            /** If provided, "(optional)" is appended to the value of the legend element. */
            optional: PropTypes.Requireable<boolean>;
            /** Additional content inserted alongside the legend element. */
            aside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** When set, auto focus attributes are applied to the input that matches the `value` prop passed. */
            autoFocus: PropTypes.Requireable<boolean>;
            /** A validation error to display beneath the control. */
            validationError: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Classes to apply to the radio container */
            themeRadioContainer: PropTypes.Requireable<string>;
            /** Classes to apply to the radio element */
            themeRadio: PropTypes.Requireable<string>;
            /** Classes to apply to the control wrapper */
            themeControlWrapper: PropTypes.Requireable<string>;
            /** Classes to apply to the legend element */
            themeLegend: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            value: string;
            optional: boolean;
            autoFocus: boolean;
            themeRadioContainer: string;
            themeRadio: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onChange: (e: any) => any;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-radio-set/index" {
    export default main;
    import main from "src/components/control-radio-set/control-radio-set";
}
declare module "src/components/control-radio-set/__tests__/control-radio-set-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlRadioSet as component };
            export namespace props {
                const id: string;
                const legend: string;
                const options: {
                    label: string;
                    value: string;
                }[];
                const onChange: any;
            }
        }
        namespace disabled {
            const description_1: string;
            export { description_1 as description };
            export { ControlRadioSet as component };
            export namespace props_1 {
                const id_1: string;
                export { id_1 as id };
                const legend_1: string;
                export { legend_1 as legend };
                const options_1: ({
                    label: string;
                    value: string;
                    disabled?: undefined;
                } | {
                    label: string;
                    value: string;
                    disabled: boolean;
                })[];
                export { options_1 as options };
                const onChange_1: any;
                export { onChange_1 as onChange };
            }
            export { props_1 as props };
        }
        namespace allOptions {
            const description_2: string;
            export { description_2 as description };
            export { ControlRadioSet as component };
            export namespace props_2 {
                const id_2: string;
                export { id_2 as id };
                const options_2: {
                    label: JSX.Element;
                    value: string;
                }[];
                export { options_2 as options };
                export const validationError: string;
                export const value: string;
                export const autoFocus: boolean;
                export const optional: boolean;
                const legend_2: string;
                export { legend_2 as legend };
                export const aside: JSX.Element;
                export const themeRadioContainer: string;
                export const themeRadio: string;
                export const themeControlWrapper: string;
                export const themeLegend: string;
                const onChange_2: any;
                export { onChange_2 as onChange };
            }
            export { props_2 as props };
        }
    }
    import ControlRadioSet from "src/components/control-radio-set/control-radio-set";
}
declare module "src/components/control-radio-set/__tests__/control-radio-set.test" {
    export {};
}
declare module "src/components/control-radio-set/examples/control-radio-set-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            value: string;
            id: string;
        };
        handleChange: (value: any, id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-radio-set/examples/control-radio-set-example-options" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            value: string;
            id: string;
        };
        handleChange: (value: any, id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-range/control-range" {
    export default class ControlRange extends React.Component<any, any, any> {
        static propTypes: {
            /** Identifying value for input element. */
            id: PropTypes.Validator<string>;
            /** Input value */
            value: PropTypes.Requireable<string | number>;
            /** Called during changes to the input element. */
            onChange: PropTypes.Validator<(...args: any[]) => any>;
            /** Value passed to the label element. */
            label: PropTypes.Requireable<string>;
            /** If provided the text, "(optional)" is appended to the value of the label element. */
            optional: PropTypes.Requireable<boolean>;
            /** Additional content inserted alongside the label element. */
            aside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** If provided, the value of this propery displays as an error message. */
            validationError: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Assembly classes to apply to the range element */
            themeControlRange: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the control wrapper */
            themeControlWrapper: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the label element */
            themeLabel: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            value: string;
            optional: boolean;
            themeControlRange: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onChange: (e: any) => any;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-range/index" {
    export default main;
    import main from "src/components/control-range/control-range";
}
declare module "src/components/control-range/__tests__/control-range-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlRange as component };
            export namespace props {
                const id: string;
                const label: string;
                const onChange: any;
            }
        }
        namespace disabled {
            const description_1: string;
            export { description_1 as description };
            export { ControlRange as component };
            export namespace props_1 {
                const id_1: string;
                export { id_1 as id };
                const label_1: string;
                export { label_1 as label };
                const onChange_1: any;
                export { onChange_1 as onChange };
                const disabled_1: boolean;
                export { disabled_1 as disabled };
            }
            export { props_1 as props };
        }
        namespace allOptions {
            const description_2: string;
            export { description_2 as description };
            export { ControlRange as component };
            export namespace props_2 {
                const id_2: string;
                export { id_2 as id };
                const label_2: string;
                export { label_2 as label };
                export const validationError: string;
                export const value: number;
                export const min: number;
                export const max: number;
                export const step: number;
                export const optional: boolean;
                export const autoFocus: boolean;
                export const aside: JSX.Element;
                export const themeControlRange: string;
                export const themeControlWrapper: string;
                export const themeLabel: string;
                const onChange_2: any;
                export { onChange_2 as onChange };
            }
            export { props_2 as props };
        }
    }
    import ControlRange from "src/components/control-range/control-range";
}
declare module "src/components/control-range/__tests__/control-range.test" {
    export {};
}
declare module "src/components/control-range/examples/control-range-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-select/control-select" {
    export default class ControlSelect extends React.Component<any, any, any> {
        static propTypes: {
            /** Identifying value for input element. */
            id: PropTypes.Validator<string>;
            /** An array of objects containing `label` `value` key value pairings to represent each option. An optional `disable` key can be provided to disable the selection of an indiviual `<option>`. If `value` is not present but an `options` array is provided containing the same `label` `value` key value pairings, options will be grouped within a `<optgroup>` element as defined by `label` child key. Note that each `label` value must be unique. */
            options: PropTypes.Validator<PropTypes.InferProps<{
                label: PropTypes.Validator<string>;
                value: (props: {
                    [key: string]: any;
                }, propName: string, componentName: string) => Error;
                disabled: PropTypes.Requireable<boolean>;
                options: PropTypes.Requireable<PropTypes.InferProps<{
                    label: PropTypes.Validator<string>;
                    value: PropTypes.Requireable<string>;
                    disabled: PropTypes.Requireable<boolean>;
                }>[]>;
            }>[]>;
            /** Input value */
            value: PropTypes.Requireable<string | number>;
            /** Called during changes to the input element. */
            onChange: PropTypes.Validator<(...args: any[]) => any>;
            /** Value passed to the label element. */
            label: PropTypes.Requireable<string>;
            /** If provided the text, "(optional)" is appended to the value of the label element. */
            optional: PropTypes.Requireable<boolean>;
            /** Additional content inserted alongside the label element. */
            aside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Pass disabled attribute */
            disabled: PropTypes.Requireable<boolean>;
            /** If provided, the value of this propery displays as an error message. */
            validationError: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Assembly classes to apply to the select element */
            themeControlSelect: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the select container */
            themeControlSelectContainer: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the control wrapper */
            themeControlWrapper: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the label element */
            themeLabel: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            value: string;
            optional: boolean;
            disabled: boolean;
            themeControlSelectContainer: string;
            themeControlSelect: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onChange: (e: any) => any;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-select/index" {
    export default main;
    import main from "src/components/control-select/control-select";
}
declare module "src/components/control-select/__tests__/control-select-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlSelect as component };
            export namespace props {
                const id: string;
                const label: string;
                const options: {
                    label: string;
                    value: string;
                }[];
                const onChange: any;
            }
        }
        namespace disabled {
            const description_1: string;
            export { description_1 as description };
            export { ControlSelect as component };
            export namespace props_1 {
                const id_1: string;
                export { id_1 as id };
                const disabled_1: boolean;
                export { disabled_1 as disabled };
                const label_1: string;
                export { label_1 as label };
                const options_1: {
                    label: string;
                    value: string;
                }[];
                export { options_1 as options };
                const onChange_1: any;
                export { onChange_1 as onChange };
            }
            export { props_1 as props };
        }
        namespace grouped {
            const description_2: string;
            export { description_2 as description };
            export { ControlSelect as component };
            export namespace props_2 {
                const id_2: string;
                export { id_2 as id };
                const label_2: string;
                export { label_2 as label };
                const onChange_2: any;
                export { onChange_2 as onChange };
                const options_2: {
                    label: string;
                    options: {
                        label: string;
                        value: string;
                    }[];
                }[];
                export { options_2 as options };
            }
            export { props_2 as props };
        }
        namespace values {
            const description_3: string;
            export { description_3 as description };
            export { ControlSelect as component };
            export namespace props_3 {
                const id_3: string;
                export { id_3 as id };
                const label_3: string;
                export { label_3 as label };
                const options_3: ({
                    label: string;
                    value: string;
                } | {
                    label: string;
                    value: number;
                })[];
                export { options_3 as options };
                const onChange_3: any;
                export { onChange_3 as onChange };
            }
            export { props_3 as props };
        }
        namespace allOptions {
            const description_4: string;
            export { description_4 as description };
            export { ControlSelect as component };
            export namespace props_4 {
                const id_4: string;
                export { id_4 as id };
                const options_4: ({
                    label: string;
                    value: string;
                    disabled?: undefined;
                } | {
                    label: string;
                    value: string;
                    disabled: boolean;
                })[];
                export { options_4 as options };
                export const validationError: string;
                export const value: string;
                export const autoFocus: boolean;
                export const optional: boolean;
                const label_4: string;
                export { label_4 as label };
                export const aside: JSX.Element;
                export const themeControlSelectContainer: string;
                export const themeControlSelect: string;
                export const themeControlWrapper: string;
                export const themeLabel: string;
                const onChange_4: any;
                export { onChange_4 as onChange };
            }
            export { props_4 as props };
        }
    }
    import ControlSelect from "src/components/control-select/control-select";
}
declare module "src/components/control-select/__tests__/control-select.test" {
    export {};
}
declare module "src/components/control-select/examples/control-select-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-switch/control-switch" {
    export default class ControlSwitch extends React.Component<any, any, any> {
        static propTypes: {
            /** Identifying value for input element. */
            id: PropTypes.Validator<string>;
            /** Input value */
            value: PropTypes.Requireable<string | boolean>;
            /** If provided the text, "(optional)" is appended to the value of the label element. */
            optional: PropTypes.Requireable<boolean>;
            /** Called during changes to the input element. */
            onChange: PropTypes.Validator<(...args: any[]) => any>;
            /** Value passed to the label element. */
            label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** If provided, the value of this propery displays as an error message. */
            validationError: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Assembly classes to apply to the switch container */
            themeControlSwitchContainer: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the switch element */
            themeControlSwitch: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the control wrapper */
            themeControlWrapper: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the label element */
            themeLabel: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            value: boolean;
            themeControlSwitchContainer: string;
            themeControlSwitch: string;
            optional: boolean;
            themeLabel: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onChange: (e: any) => any;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-switch/index" {
    export default main;
    import main from "src/components/control-switch/control-switch";
}
declare module "src/components/control-switch/__tests__/control-switch-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlSwitch as component };
            export namespace props {
                const id: string;
                const label: string;
                const onChange: any;
            }
        }
        namespace emptyStringValue {
            const description_1: string;
            export { description_1 as description };
            export { ControlSwitch as component };
            export namespace props_1 {
                const id_1: string;
                export { id_1 as id };
                const label_1: string;
                export { label_1 as label };
                const onChange_1: any;
                export { onChange_1 as onChange };
                export const value: string;
            }
            export { props_1 as props };
        }
        namespace disabled {
            const description_2: string;
            export { description_2 as description };
            export { ControlSwitch as component };
            export namespace props_2 {
                const id_2: string;
                export { id_2 as id };
                const disabled_1: boolean;
                export { disabled_1 as disabled };
                const label_2: string;
                export { label_2 as label };
                const onChange_2: any;
                export { onChange_2 as onChange };
            }
            export { props_2 as props };
        }
        namespace allOptions {
            const description_3: string;
            export { description_3 as description };
            export { ControlSwitch as component };
            export namespace props_3 {
                const id_3: string;
                export { id_3 as id };
                export const validationError: string;
                const value_1: boolean;
                export { value_1 as value };
                export const autoFocus: boolean;
                export const optional: boolean;
                const label_3: JSX.Element;
                export { label_3 as label };
                export const themeControlSwitchContainer: string;
                export const themeControlSwitch: string;
                export const themeControlWrapper: string;
                export const themeLabel: string;
                const onChange_3: any;
                export { onChange_3 as onChange };
            }
            export { props_3 as props };
        }
    }
    import ControlSwitch from "src/components/control-switch/control-switch";
}
declare module "src/components/control-switch/__tests__/control-switch.test" {
    export {};
}
declare module "src/components/control-switch/examples/control-switch-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-text/control-text" {
    export default class ControlText extends React.Component<any, any, any> {
        static propTypes: {
            /** Unique id for this control. Required if you want a `label`. */
            id: PropTypes.Validator<string>;
            /**
             * Invoked when the control's value changes.
             * Passed two arguments:
             *
             * - `value` the current value of the input passes as a string
             * - The `id` prop.
             */
            onChange: PropTypes.Validator<(...args: any[]) => any>;
            /** The control's value. Can be an empty string to indicate no value. */
            value: PropTypes.Requireable<string | number>;
            /** Type attribute to override the existing default of 'text' */
            type: PropTypes.Requireable<string>;
            /** Label for the control. */
            label: PropTypes.Requireable<string>;
            /** Enable/Disable browser enabled autocorrect or spelling suggestions from the element. */
            noAuto: PropTypes.Requireable<boolean>;
            /** If provided, "(optional)" is appended to the value of the legend element. */
            optional: PropTypes.Requireable<boolean>;
            /** Additional content inserted alongside the label element. */
            aside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** If provided, the value of this propery displays as an error message. */
            validationError: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /**
             * Sets the style of the error message. There are two options:
             *
             * - `default` the standard presentation control components display an error
             *   message: beneath the input.
             * - `inline` An error indicator is displayed to the right of the element
             *   with the value of `validationError` prop displayed in a tooltip.
             */
            errorStyle: PropTypes.Requireable<string>;
            /**
             * Props to pass directly to the [Popover](#popover) component when inline error validation is in use. See Popover's
             * documentation for details.
             */
            popoverProps: PropTypes.Requireable<object>;
            /** Classes to apply to the input element */
            themeControlInput: PropTypes.Requireable<string>;
            /** Classes to apply to the control wrapper */
            themeControlWrapper: PropTypes.Requireable<string>;
            /** classes to apply to the label element */
            themeLabel: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            value: string;
            type: string;
            optional: boolean;
            noAuto: boolean;
            errorStyle: string;
            themeControlInput: string;
        };
        constructor(props: any);
        inputElement: any;
        errorElement: any;
        onChange: (e: any) => any;
        state: {
            popoverOpen: boolean;
        };
        setInputElement: (el: any) => void;
        setErrorElement: (el: any) => void;
        getErrorElement: () => any;
        onErrorClick: () => void;
        onFocus: () => void;
        onBlur: () => void;
        isActive: () => boolean;
        onContainerMouseOver: () => void;
        onContainerMouseOut: () => void;
        renderLabel: () => JSX.Element;
        renderPopover: () => JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-text/index" {
    export default main;
    import main from "src/components/control-text/control-text";
}
declare module "src/components/control-text/__tests__/control-text-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlText as component };
            export namespace props {
                const id: string;
                const label: string;
                const onChange: any;
            }
        }
        namespace disabled {
            const description_1: string;
            export { description_1 as description };
            export { ControlText as component };
            export namespace props_1 {
                const id_1: string;
                export { id_1 as id };
                const label_1: string;
                export { label_1 as label };
                const onChange_1: any;
                export { onChange_1 as onChange };
                const disabled_1: boolean;
                export { disabled_1 as disabled };
            }
            export { props_1 as props };
        }
        namespace validationError {
            const description_2: string;
            export { description_2 as description };
            export { ControlText as component };
            export namespace props_2 {
                const id_2: string;
                export { id_2 as id };
                const label_2: string;
                export { label_2 as label };
                const validationError_1: string;
                export { validationError_1 as validationError };
                const onChange_2: any;
                export { onChange_2 as onChange };
            }
            export { props_2 as props };
        }
        namespace errorInline {
            const description_3: string;
            export { description_3 as description };
            export { ControlText as component };
            export namespace props_3 {
                const id_3: string;
                export { id_3 as id };
                const label_3: string;
                export { label_3 as label };
                export const errorStyle: string;
                const validationError_2: string;
                export { validationError_2 as validationError };
                const onChange_3: any;
                export { onChange_3 as onChange };
            }
            export { props_3 as props };
        }
        namespace allOptions {
            const description_4: string;
            export { description_4 as description };
            export { ControlText as component };
            export namespace props_4 {
                const id_4: string;
                export { id_4 as id };
                const label_4: string;
                export { label_4 as label };
                export const type: string;
                const validationError_3: string;
                export { validationError_3 as validationError };
                const errorStyle_1: string;
                export { errorStyle_1 as errorStyle };
                export namespace popoverProps {
                    const coloring: string;
                    const padding: string;
                }
                export const placeholder: string;
                export const value: string;
                export const optional: boolean;
                export const autoFocus: boolean;
                export const noAuto: boolean;
                export const aside: JSX.Element;
                export const themeControlInput: string;
                export const themeControlWrapper: string;
                export const themeLabel: string;
                const onChange_4: any;
                export { onChange_4 as onChange };
            }
            export { props_4 as props };
        }
    }
    import ControlText from "src/components/control-text/control-text";
}
declare module "src/components/control-text/__tests__/control-text.test" {
    export {};
}
declare module "src/components/control-text/examples/control-text-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            value: string;
            id: string;
        };
        handleChange: (value: any, id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-text/examples/control-text-example-options" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            value: string;
            id: string;
        };
        handleChange: (value: any, id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-textarea/control-textarea" {
    export default class ControlTextarea extends React.Component<any, any, any> {
        static propTypes: {
            /** Unique id for this control. Required if you want a `label`. */
            id: PropTypes.Requireable<string>;
            /** The control's value. */
            value: PropTypes.Requireable<string>;
            /**
             * Invoked when the control's value changes.
             * Passed two arguments: the new value, and the `id` prop.
             */
            onChange: PropTypes.Validator<(...args: any[]) => any>;
            /** Label for the control. */
            label: PropTypes.Requireable<string>;
            /** If `true`, autocorrect and spelling suggestions will be disabled. */
            noAuto: PropTypes.Requireable<boolean>;
            /** If `true`, the text `(optional)` is appended to the label element. */
            optional: PropTypes.Requireable<boolean>;
            /** Additional content inserted alongside the label element. */
            aside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** A validation error to display beneath the control. */
            validationError: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Classes to apply to the textarea element. */
            themeControlTextarea: PropTypes.Requireable<string>;
            /** Classes to apply to the control wrapper. */
            themeControlWrapper: PropTypes.Requireable<string>;
            /** Classes to apply to the label element. */
            themeLabel: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            value: string;
            optional: boolean;
            noAuto: boolean;
            themeControlTextarea: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onChange: (e: any) => any;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-textarea/index" {
    export default main;
    import main from "src/components/control-textarea/control-textarea";
}
declare module "src/components/control-textarea/__tests__/control-textarea-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlTextarea as component };
            export namespace props {
                const id: string;
                const label: string;
                const onChange: any;
            }
        }
        namespace disabled {
            const description_1: string;
            export { description_1 as description };
            export { ControlTextarea as component };
            export namespace props_1 {
                const id_1: string;
                export { id_1 as id };
                const label_1: string;
                export { label_1 as label };
                const disabled_1: boolean;
                export { disabled_1 as disabled };
                const onChange_1: any;
                export { onChange_1 as onChange };
            }
            export { props_1 as props };
        }
        namespace allOptions {
            const description_2: string;
            export { description_2 as description };
            export { ControlTextarea as component };
            export namespace props_2 {
                const id_2: string;
                export { id_2 as id };
                const label_2: string;
                export { label_2 as label };
                export const validationError: string;
                export const noAuto: boolean;
                export const optional: boolean;
                export const autoFocus: boolean;
                export const aside: JSX.Element;
                export const placeholder: string;
                export const value: string;
                export const themeControlTextarea: string;
                export const themeControlWrapper: string;
                export const themeLabel: string;
                const onChange_2: any;
                export { onChange_2 as onChange };
            }
            export { props_2 as props };
        }
    }
    import ControlTextarea from "src/components/control-textarea/control-textarea";
}
declare module "src/components/control-textarea/__tests__/control-textarea.test" {
    export {};
}
declare module "src/components/control-textarea/examples/control-textarea-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        state: {
            value: string;
        };
        handleChange: (value: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-toggle-set/control-toggle-set" {
    export default class ControlToggleSet extends React.Component<any, any, any> {
        static propTypes: {
            /** Identifying value for input element. */
            id: PropTypes.Validator<string>;
            /** Function that's called when text changes in the input element. Argument that's returned the id prop and value entered. */
            onChange: PropTypes.Validator<(...args: any[]) => any>;
            /** An array of objects containing `label` `value` key value pairings to represent each option. Any additional keys are passed as props to the input. */
            options: PropTypes.Validator<PropTypes.InferProps<{
                label: PropTypes.Validator<PropTypes.ReactNodeLike>;
                value: PropTypes.Validator<string>;
            }>[]>;
            /** Legend name */
            legend: PropTypes.Requireable<string>;
            /** input value */
            value: PropTypes.Requireable<string>;
            /** If provided, "(optional)" is appended to the value of the legend element. */
            optional: PropTypes.Requireable<boolean>;
            /** Additional content inserted alongside the legend element. */
            aside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Add auto focus attributes. */
            autoFocus: PropTypes.Requireable<boolean>;
            /** If provided, the value of this propery displays as an error message. */
            validationError: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Assembly classes to apply to the toggle group */
            themeToggleGroup: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the toggle container */
            themeToggleContainer: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the toggle element */
            themeToggle: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the control wrapper */
            themeControlWrapper: PropTypes.Requireable<string>;
            /** Assembly classes to apply to the legend element */
            themeLegend: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            value: string;
            optional: boolean;
            autoFocus: boolean;
            themeToggleGroup: string;
            themeToggleContainer: string;
            themeToggle: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onChange: (e: any) => any;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/control-toggle-set/index" {
    export default main;
    import main from "src/components/control-toggle-set/control-toggle-set";
}
declare module "src/components/control-toggle-set/__tests__/control-toggle-set-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlToggleSet as component };
            export namespace props {
                const id: string;
                const legend: string;
                const options: {
                    label: string;
                    value: string;
                }[];
                const onChange: any;
            }
        }
        namespace disabled {
            const description_1: string;
            export { description_1 as description };
            export { ControlToggleSet as component };
            export namespace props_1 {
                const id_1: string;
                export { id_1 as id };
                const legend_1: string;
                export { legend_1 as legend };
                export namespace theme {
                    const toggleGroup: string;
                }
                const options_1: ({
                    label: string;
                    value: string;
                    disabled?: undefined;
                } | {
                    label: string;
                    value: string;
                    disabled: boolean;
                })[];
                export { options_1 as options };
                const onChange_1: any;
                export { onChange_1 as onChange };
            }
            export { props_1 as props };
        }
        namespace allOptions {
            const description_2: string;
            export { description_2 as description };
            export { ControlToggleSet as component };
            export namespace props_2 {
                const id_2: string;
                export { id_2 as id };
                const options_2: {
                    label: JSX.Element;
                    value: string;
                }[];
                export { options_2 as options };
                export const validationError: string;
                export const value: string;
                export const autoFocus: boolean;
                export const optional: boolean;
                const legend_2: string;
                export { legend_2 as legend };
                export const aside: JSX.Element;
                export const themeToggleGroup: string;
                export const themeToggleContainer: string;
                export const themeToggle: string;
                export const themeControlWrapper: string;
                export const themeLegend: string;
                const onChange_2: any;
                export { onChange_2 as onChange };
            }
            export { props_2 as props };
        }
    }
    import ControlToggleSet from "src/components/control-toggle-set/control-toggle-set";
}
declare module "src/components/control-toggle-set/__tests__/control-toggle-set.test" {
    export {};
}
declare module "src/components/control-toggle-set/examples/control-toggle-set-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/control-wrapper/__tests__/control-wrapper.test" { }
declare module "src/components/control-wrapper/examples/control-wrapper-example-basic" {
    import { ReactElement } from 'react';
    export default function Example(): ReactElement;
}
declare module "src/components/controlled-accordion/controlled-accordion" {
    export default class ControlledAccordion extends React.PureComponent<any, any, any> {
        static propTypes: {
            items: PropTypes.Validator<PropTypes.InferProps<{
                /** Identifying value for accordion item. */
                id: PropTypes.Validator<string>;
                /** Contents that are always shown. */
                header: PropTypes.Validator<(...args: any[]) => any>;
                /** Contents that shown when the accordion is active. */
                body: PropTypes.Validator<PropTypes.ReactNodeLike>;
                /** Flag to disable the clickability of an accordion item. */
                disabled: PropTypes.Requireable<boolean>;
            }>[]>;
            /** Callback when an accordion header item is clicked. */
            onToggle: PropTypes.Validator<(...args: any[]) => any>;
            /** Value should coorespond to an `id` within the items array. */
            activeItem: PropTypes.Requireable<string>;
            /** CSS classes to apply to the accordion item container */
            themeItem: PropTypes.Requireable<string>;
            /** CSS classes to apply to the accordion header */
            themeItemHeader: PropTypes.Requireable<string>;
            /** CSS classes to apply to the accordion body */
            themeItemBody: PropTypes.Requireable<string>;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        onToggle: (id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/controlled-accordion/index" {
    export default main;
    import main from "src/components/controlled-accordion/controlled-accordion";
}
declare module "src/components/controlled-accordion/__tests__/controlled-accordion-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { ControlledAccordion as component };
            export namespace props {
                const onToggle: any;
                const items: {
                    id: string;
                    header: () => JSX.Element;
                    body: string;
                }[];
            }
        }
        namespace disabled {
            const description_1: string;
            export { description_1 as description };
            export { ControlledAccordion as component };
            export namespace props_1 {
                const onToggle_1: any;
                export { onToggle_1 as onToggle };
                const items_1: ({
                    id: string;
                    header: () => JSX.Element;
                    body: string;
                    disabled?: undefined;
                } | {
                    id: string;
                    header: () => JSX.Element;
                    body: string;
                    disabled: boolean;
                })[];
                export { items_1 as items };
            }
            export { props_1 as props };
        }
        namespace allOptions {
            const description_2: string;
            export { description_2 as description };
            export { ControlledAccordion as component };
            export namespace props_2 {
                const onToggle_2: any;
                export { onToggle_2 as onToggle };
                const items_2: {
                    id: string;
                    header: (active: any) => JSX.Element;
                    body: string;
                }[];
                export { items_2 as items };
                export const activeItem: string;
                export const themeItem: string;
                export const themeItemHeader: string;
                export const themeItemBody: string;
            }
            export { props_2 as props };
        }
    }
    import ControlledAccordion from "src/components/controlled-accordion/controlled-accordion";
}
declare module "src/components/controlled-accordion/__tests__/controlled-accordion.test" {
    export {};
}
declare module "src/components/controlled-accordion/examples/controlled-accordion-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        state: {
            activeItem: string;
        };
        onToggle: (id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/copiable/copiable" {
    /**
     * Make some text easily copiable.
     *
     * Comes with a [CopyButton](#copybutton) that you can click to automatically
     * copy the text.
     *
     * Also, on wider viewports a click on the text will automatically select it
     * all, so you can easily copy with your favorite keyboard shortcut.
     */
    class Copiable extends React.Component<any, any, any> {
        constructor(props: any);
        copyHintText: string;
        state: {
            copyTooltipActive: boolean;
            showCopyButton: boolean;
        };
        showCopyTooltip: () => void;
        revertTimer: NodeJS.Timeout;
        componentDidMount(): void;
        renderCopyHintText(): JSX.Element;
        componentWillUnmount(): void;
        setTextEl: (el: any) => void;
        textEl: any;
        getTextEl: () => any;
        getWindowWidth(): number;
        handleTextFocus: () => void;
        handleTextBlur: (event: any) => void;
        renderCopyButton(): JSX.Element;
        render(): JSX.Element;
    }
    namespace Copiable {
        namespace propTypes {
            const value: PropTypes.Validator<string>;
            const focusTrapPaused: PropTypes.Requireable<boolean>;
            const truncated: PropTypes.Requireable<boolean>;
        }
        namespace defaultProps {
            const truncated_1: boolean;
            export { truncated_1 as truncated };
        }
    }
    export default Copiable;
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/copiable/index" {
    export default main;
    import main from "src/components/copiable/copiable";
}
declare module "src/components/copiable/__tests__/copiable-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { Copiable as component };
            export namespace props {
                const value: string;
            }
        }
        namespace focusTrapPaused {
            const description_1: string;
            export { description_1 as description };
            export { Copiable as component };
            export namespace props_1 {
                const focusTrapPaused_1: boolean;
                export { focusTrapPaused_1 as focusTrapPaused };
                const value_1: string;
                export { value_1 as value };
            }
            export { props_1 as props };
        }
        namespace truncated {
            const description_2: string;
            export { description_2 as description };
            export { Copiable as component };
            export namespace props_2 {
                const truncated_1: boolean;
                export { truncated_1 as truncated };
                const value_2: string;
                export { value_2 as value };
            }
            export { props_2 as props };
        }
    }
    import Copiable from "src/components/copiable/copiable";
}
declare module "src/components/copiable/__tests__/copiable.test" {
    export {};
}
declare module "src/components/copiable/examples/copiable-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/modal/modal-actions" {
    class ModalActions extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        renderSecondary(): JSX.Element;
        renderTertiary(): JSX.Element;
        render(): JSX.Element;
    }
    namespace ModalActions {
        namespace propTypes {
            const primaryAction: PropTypes.Validator<PropTypes.InferProps<{
                text: PropTypes.Validator<string>;
                callback: PropTypes.Validator<(...args: any[]) => any>;
                destructive: PropTypes.Requireable<boolean>;
            }>>;
            const secondaryAction: PropTypes.Requireable<PropTypes.InferProps<{
                text: PropTypes.Validator<string>;
                callback: PropTypes.Validator<(...args: any[]) => any>;
            }>>;
            const tertiaryAction: PropTypes.Requireable<PropTypes.InferProps<{
                text: PropTypes.Validator<string>;
                callback: PropTypes.Validator<(...args: any[]) => any>;
            }>>;
        }
    }
    export default ModalActions;
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/modal/event-trap" {
    export default EventTrap;
    function EventTrap({ children }: {
        children: any;
    }): JSX.Element;
    namespace EventTrap {
        namespace propTypes {
            const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "src/components/modal/modal" {
    /**
     * An accessible modal dialog.
     *
     * To get a standard button arrangement at the bottom of the modal, use the
     * `primaryAction`, `secondaryAction`, and `tertiaryAction` props.
     *
     * This modal *traps focus within it*. You should be aware of that, because it
     * can sometimes introduce a hurdle when integrating the modal with other
     * things, especially third-party libraries. But it's an essential UX feature.
     */
    class Modal extends React.Component<any, any, any> {
        constructor(props: any);
        setDialogEl(el: any): void;
        componentDidMount(): void;
        scrollTimeout: number;
        componentWillUnmount(): void;
        dialogEl: any;
        renderActions(): JSX.Element;
        render(): JSX.Element;
    }
    namespace Modal {
        namespace propTypes {
            const accessibleTitle: PropTypes.Validator<string>;
            const onExit: PropTypes.Requireable<(...args: any[]) => any>;
            const getApplicationNode: PropTypes.Requireable<(...args: any[]) => any>;
            const size: PropTypes.Requireable<string>;
            const initialFocus: PropTypes.Requireable<string>;
            const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
            const padding: PropTypes.Requireable<string>;
            const focusTrapPaused: PropTypes.Requireable<boolean>;
            const alert: PropTypes.Requireable<boolean>;
            const primaryAction: PropTypes.Requireable<PropTypes.InferProps<{
                text: PropTypes.Validator<string>;
                callback: PropTypes.Validator<(...args: any[]) => any>;
                destructive: PropTypes.Requireable<boolean>;
            }>>;
            const secondaryAction: PropTypes.Requireable<PropTypes.InferProps<{
                text: PropTypes.Validator<string>;
                callback: PropTypes.Validator<(...args: any[]) => any>;
            }>>;
            const tertiaryAction: PropTypes.Requireable<PropTypes.InferProps<{
                text: PropTypes.Validator<string>;
                callback: PropTypes.Validator<(...args: any[]) => any>;
            }>>;
            const allowEventBubbling: PropTypes.Requireable<boolean>;
        }
        namespace defaultProps {
            const size_1: string;
            export { size_1 as size };
            export function getApplicationNode_1(): HTMLElement;
            export { getApplicationNode_1 as getApplicationNode };
            const padding_1: string;
            export { padding_1 as padding };
        }
    }
    export default Modal;
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/modal/index" {
    export default main;
    import main from "src/components/modal/modal";
}
declare module "src/components/copy-button/__tests__/copy-button-test-cases" {
    export namespace testCases {
        namespace defaults {
            export const description: string;
            export { CopyButton as component };
            export namespace props {
                const text: string;
            }
        }
        namespace allProps {
            const description_1: string;
            export { description_1 as description };
            export { CopyButton as component };
            export namespace props_1 {
                const text_1: string;
                export { text_1 as text };
                export const onCopy: any;
                export const className: string;
                export const focusTrapPaused: boolean;
                export const passthroughProps: {
                    'data-test': string;
                };
            }
            export { props_1 as props };
        }
        namespace inModal {
            const description_2: string;
            export { description_2 as description };
            export const element: JSX.Element;
        }
    }
    import CopyButton from "src/components/copy-button/copy-button";
}
declare module "src/components/copy-button/__tests__/copy-button.test" {
    export {};
}
declare module "src/components/copy-button/examples/copy-button-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/copy-button/examples/copy-button-b" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/loader-full/loader-full" {
    const _default: any;
    export default _default;
}
declare module "src/components/loader-full/index" {
    export default main;
    import main from "src/components/loader-full/loader-full";
}
declare module "src/components/loader-local/loader-local" {
    export default class LoaderLocal extends React.PureComponent<any, any, any> {
        static propTypes: {
            /** Assembly classes to apply to the loader component */
            themeLoader: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            themeLoader: string;
        };
        static propNames: string[];
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/loader-local/index" {
    export default main;
    import main from "src/components/loader-local/loader-local";
}
declare module "src/components/form/form" {
    export default class Form extends React.Component<any, any, any> {
        static propTypes: {
            /** An object containing keys that correspond to control names. The value of each control name key are objects containing the configuration of a control. */
            config: PropTypes.Validator<object>;
            /** Renders the form layout. When called a get argument is passed to return the configuration object of each control type. */
            renderForm: PropTypes.Validator<(...args: any[]) => any>;
            /** Called when the form has successfully passed validation and returns an object containing keys the coorespond to control names with values equalling the users inputted value. */
            handleFormData: PropTypes.Validator<(...args: any[]) => any>;
            /** Called when any control component registered with the form changes in value. */
            onChange: PropTypes.Requireable<(...args: any[]) => any>;
            /** Called when ESC is pressed. */
            onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        };
        constructor(props: any);
        _isMounted: boolean;
        state: {
            formState: string;
            ready: boolean;
            controlValues: {};
            controlValidationErrors: {};
        };
        componentDidMount(): void;
        componentWillUnmount(): void;
        componentDidUpdate({ config }: {
            config: any;
        }): void;
        checkValidation(formState: any): Promise<any>;
        onControlChange: (controlValue: any, controlName: any) => void;
        getControlProps: (controlName: any) => any;
        onSubmit: () => void;
        submitForm: () => void;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/form/index" {
    export default main;
    import main from "src/components/form/form";
}
declare module "src/components/form-submit/form-submit" {
    export default class FormSubmit extends React.PureComponent<any, any, any> {
        static propTypes: {
            /** Function called when the button is clicked. */
            onSubmit: PropTypes.Validator<(...args: any[]) => any>;
            /** Submit button label. */
            label: PropTypes.Requireable<string>;
            /** Toggle disabled state of the element. */
            disabled: PropTypes.Requireable<boolean>;
            /** Identifier for the purposes of testing. */
            testId: PropTypes.Requireable<string>;
            /** A space seperated list of Assembly class names. */
            themeButton: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            label: string;
            testId: string;
            disabled: boolean;
            themeButton: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/form-submit/index" {
    export default main;
    import main from "src/components/form-submit/form-submit";
}
declare module "src/components/form/validators/is-empty-control-value" {
    export default function isEmptyControlValue(value: any): boolean;
}
declare module "src/components/form/validators/indefinite-article" {
    export default function indefiniteArticle(noun: any): string;
}
declare module "src/components/form/validators/validate-required" {
    export default function validateRequired(partial: any, full: any): (value: any) => any;
}
declare module "src/components/form/validators/validate-email" {
    export default function validateEmail(value: any): "" | "Please enter an email address that includes @";
}
declare module "src/components/form/__tests__/form-test-cases" {
    export namespace testCases {
        export namespace basic {
            export const description: string;
            export { Form as component };
            export namespace props {
                namespace config {
                    namespace firstName {
                        const label: string;
                        const placeholder: string;
                        const validator: (value: any) => any;
                    }
                    namespace lastName {
                        const label_1: string;
                        export { label_1 as label };
                        const placeholder_1: string;
                        export { placeholder_1 as placeholder };
                    }
                }
                const handleFormData: any;
                function renderForm(getControlProps: any, onSubmit: any): JSX.Element;
                function renderForm(getControlProps: any, onSubmit: any): JSX.Element;
            }
        }
        export namespace allControls {
            const description_1: string;
            export { description_1 as description };
            export { Form as component };
            export namespace props_1 {
                export { formConfig as config };
                export { renderForm };
                export { onSuccess as handleFormData };
                export const onChange: any;
            }
            export { props_1 as props };
        }
        export namespace onChange_1 {
            const description_2: string;
            export { description_2 as description };
            export { Form as component };
            export namespace props_2 {
                export namespace config_1 {
                    const description_3: {};
                    export { description_3 as description };
                }
                export { config_1 as config };
                export function renderForm(getControlProps: any): JSX.Element;
                export function renderForm(getControlProps: any): JSX.Element;
                export { onSuccess as handleFormData };
                const onChange_2: any;
                export { onChange_2 as onChange };
            }
            export { props_2 as props };
        }
        export { onChange_1 as onChange };
        export namespace onCancel {
            const description_4: string;
            export { description_4 as description };
            export { Form as component };
            export namespace props_3 {
                export namespace config_2 {
                    namespace name {
                        const label_2: string;
                        export { label_2 as label };
                        const placeholder_2: string;
                        export { placeholder_2 as placeholder };
                    }
                }
                export { config_2 as config };
                export { onSuccess as handleFormData };
                const onCancel_1: any;
                export { onCancel_1 as onCancel };
                export function renderForm(getControlProps: any, onSubmit: any): JSX.Element;
                export function renderForm(getControlProps: any, onSubmit: any): JSX.Element;
            }
            export { props_3 as props };
        }
    }
    import Form from "src/components/form/form";
    namespace formConfig {
        export namespace firstName_1 {
            const label_3: string;
            export { label_3 as label };
            const placeholder_3: string;
            export { placeholder_3 as placeholder };
            const validator_1: ((value: any) => any)[];
            export { validator_1 as validator };
        }
        export { firstName_1 as firstName };
        export namespace lastName_1 {
            const label_4: string;
            export { label_4 as label };
            const placeholder_4: string;
            export { placeholder_4 as placeholder };
            const validator_2: ((value: any) => any)[];
            export { validator_2 as validator };
        }
        export { lastName_1 as lastName };
        export namespace email {
            const label_5: string;
            export { label_5 as label };
            export const type: string;
            const placeholder_5: string;
            export { placeholder_5 as placeholder };
            const validator_3: ((value: any) => any)[];
            export { validator_3 as validator };
        }
        export namespace url {
            const label_6: string;
            export { label_6 as label };
            const type_1: string;
            export { type_1 as type };
            const placeholder_6: string;
            export { placeholder_6 as placeholder };
            const validator_4: ((value: any) => any)[];
            export { validator_4 as validator };
        }
        export namespace upload {
            const label_7: string;
            export { label_7 as label };
            export const optional: boolean;
            export const multiple: boolean;
        }
        export namespace spiritAnimal {
            const label_8: string;
            export { label_8 as label };
            export const initialValue: string;
            export const themeToggleGroup: string;
            export const themeToggle: string;
            export const themeLabel: string;
            export const options: {
                label: string;
                value: string;
            }[];
        }
        export namespace level {
            const label_9: string;
            export { label_9 as label };
            const initialValue_1: string;
            export { initialValue_1 as initialValue };
            const options_1: {
                label: string;
                value: string;
            }[];
            export { options_1 as options };
        }
        export namespace difficulty {
            const label_10: string;
            export { label_10 as label };
            const initialValue_2: string;
            export { initialValue_2 as initialValue };
            const options_2: {
                label: string;
                value: string;
            }[];
            export { options_2 as options };
        }
        export namespace tools {
            const label_11: string;
            export { label_11 as label };
            const initialValue_3: any[];
            export { initialValue_3 as initialValue };
            const options_3: {
                label: string;
                value: string;
            }[];
            export { options_3 as options };
        }
        export namespace active {
            const label_12: string;
            export { label_12 as label };
            const initialValue_4: boolean;
            export { initialValue_4 as initialValue };
        }
        export namespace area {
            const label_13: string;
            export { label_13 as label };
            const initialValue_5: string;
            export { initialValue_5 as initialValue };
            export const min: number;
            export const max: number;
            export const step: number;
        }
        export namespace description_5 {
            const label_14: string;
            export { label_14 as label };
            const placeholder_7: string;
            export { placeholder_7 as placeholder };
        }
        export { description_5 as description };
    }
    function renderForm(getControlProps: any, onSubmit: any): JSX.Element;
    function onSuccess(result: any): any;
    export {};
}
declare module "src/components/form/__tests__/form.test" {
    export {};
}
declare module "src/components/form/examples/form-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        renderForm: () => JSX.Element;
        handleFormData: () => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/form/validators/validate-access-token" {
    export default function validateAccessToken(value: any): "" | "Please enter a valid access token";
}
declare module "src/components/form/validators/validate-number" {
    export default function validateNumber(value: any): "" | "Please enter a number";
}
declare module "src/components/form/validators/validate-number-between" {
    export default function validateNumberBetween(low: any, high: any): (value: any) => string;
}
declare module "src/components/form/validators/validate-bearing" {
    export default function validateBearing(value: any): string;
}
declare module "src/components/form/validators/validate-date" {
    export default function validateDate(value: any): "" | "Please select a valid date";
}
declare module "src/components/form/validators/validate-latitude" {
    export default function validateLatitude(value: any): string;
}
declare module "src/components/form/validators/validate-longitude" {
    export default function validateLongitude(value: any): string;
}
declare module "src/components/form/validators/validate-password" {
    export default function validatePassword(value: any): JSX.Element | "";
}
declare module "src/components/form/validators/validate-pitch" {
    export default function validateBearing(value: any): string;
}
declare module "src/components/form/validators/validate-style-uri" {
    export default function validateStyleUri(value: any): "" | "Please enter a valid style URI";
}
declare module "src/components/form/validators/validate-zoom" {
    export default function validateZoom(value: any): string;
}
declare module "src/components/form/validators/__tests__/validate-access-token.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-bearing.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-date.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-email.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-latitude.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-longitude.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-number.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-password.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-pitch.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-required.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-style-uri.test" {
    export {};
}
declare module "src/components/form/validators/__tests__/validate-zoom.test" {
    export {};
}
declare module "src/components/form/validators/examples/util-validators-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        state: {
            accessToken: string;
            accessTokenValidationError: string;
            bearing: string;
            bearingValidationError: string;
            date: string;
            dateValidationError: string;
            dateRange: string;
            dateRangeValidationError: string;
            email: string;
            emailValidationError: string;
            latitude: string;
            latitudeValidationError: string;
            longitude: string;
            longitudeValidationError: string;
            numberBetween: string;
            numberBetweenValidationError: string;
            number: string;
            numberValidationError: string;
            password: string;
            passwordValidationError: string;
            pitch: string;
            pitchValidationError: string;
            required: string;
            requiredValidationError: string;
            styleUri: string;
            styleUriValidationError: string;
            zoom: string;
            zoomValidationError: string;
        };
        updateAccessToken: (accessToken: any) => void;
        updateBearing: (bearing: any) => void;
        updateDate: (date: any) => void;
        updateEmail: (email: any) => void;
        updateLatitude: (latitude: any) => void;
        updateLongitude: (longitude: any) => void;
        updateNumberBetween: (numberBetween: any) => void;
        updateNumber: (number: any) => void;
        updatePassword: (password: any) => void;
        updatePitch: (pitch: any) => void;
        updateRequired: (required: any) => void;
        updateStyleUri: (styleUri: any) => void;
        updateZoom: (zoom: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/form-submit/examples/form-submit-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/new-tab-link/new-tab-link" {
    /**
     * A simple new tab link wrapper component.
     *
     * This component applies an opinionated relationship (rel) attribute to
     * prevent the new tab from accessing the originating tab's content.
     */
    export default class NewTabLink extends React.Component<any, any, any> {
        static propTypes: {
            /** The content of the new tab link. */
            children: PropTypes.Validator<PropTypes.ReactNodeLike>;
            /** The new tab location path. */
            href: PropTypes.Validator<string>;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/new-tab-link/index" {
    export default main;
    import main from "src/components/new-tab-link/new-tab-link";
}
declare module "src/components/go-link/go-link" {
    /**
     * Standard styled link for going to a previous or next location.
     */
    export default class GoLink extends React.PureComponent<any, any, any> {
        static propTypes: {
            /** Two colors: "light" or "dark". */
            color: PropTypes.Requireable<string>;
            /** Whether or not this is a go back or go forward link. */
            goBack: PropTypes.Requireable<boolean>;
            /** URL or path to the page the new tab should go to when clicked. */
            href: PropTypes.Validator<string>;
            /** Whether or not the text is bold. */
            isBold: PropTypes.Requireable<boolean>;
            /** Whether or not this link should go to the href in a new tab. */
            isNewTab: PropTypes.Requireable<boolean>;
            /** Three sizes: "small", "medium", and "large". */
            size: PropTypes.Requireable<string>;
            /** Link text. */
            text: PropTypes.Validator<string>;
        };
        static defaultProps: {
            color: string;
            goBack: boolean;
            isBold: boolean;
            isNewTab: boolean;
            size: string;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/go-link/index" {
    export default main;
    import main from "src/components/go-link/go-link";
}
declare module "src/components/go-link/__tests__/go-link-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { GoLink as component };
            export namespace props {
                const href: string;
                const text: string;
            }
        }
        namespace multilineTextGoForward {
            const description_1: string;
            export { description_1 as description };
            export { GoLink as component };
            export namespace props_1 {
                const href_1: string;
                export { href_1 as href };
                const text_1: string;
                export { text_1 as text };
            }
            export { props_1 as props };
        }
        namespace smallGoForward {
            const description_2: string;
            export { description_2 as description };
            export { GoLink as component };
            export namespace props_2 {
                export const size: string;
                const href_2: string;
                export { href_2 as href };
                const text_2: string;
                export { text_2 as text };
            }
            export { props_2 as props };
        }
        namespace largeGoForward {
            const description_3: string;
            export { description_3 as description };
            export { GoLink as component };
            export namespace props_3 {
                const size_1: string;
                export { size_1 as size };
                const href_3: string;
                export { href_3 as href };
                const text_3: string;
                export { text_3 as text };
            }
            export { props_3 as props };
        }
        namespace unboldedGoForward {
            const description_4: string;
            export { description_4 as description };
            export { GoLink as component };
            export namespace props_4 {
                const href_4: string;
                export { href_4 as href };
                export const isBold: boolean;
                const text_4: string;
                export { text_4 as text };
            }
            export { props_4 as props };
        }
        namespace lightGoForward {
            const description_5: string;
            export { description_5 as description };
            export { GoLink as component };
            export namespace props_5 {
                export const color: string;
                const href_5: string;
                export { href_5 as href };
                const text_5: string;
                export { text_5 as text };
            }
            export { props_5 as props };
        }
        namespace newTabGoForward {
            const description_6: string;
            export { description_6 as description };
            export { GoLink as component };
            export namespace props_6 {
                const href_6: string;
                export { href_6 as href };
                export const isNewTab: boolean;
                const text_6: string;
                export { text_6 as text };
            }
            export { props_6 as props };
        }
        namespace smallUnboldedNewTabGoBack {
            const description_7: string;
            export { description_7 as description };
            export { GoLink as component };
            export namespace props_7 {
                export const goBack: boolean;
                const href_7: string;
                export { href_7 as href };
                const isBold_1: boolean;
                export { isBold_1 as isBold };
                const isNewTab_1: boolean;
                export { isNewTab_1 as isNewTab };
                const size_2: string;
                export { size_2 as size };
                const text_7: string;
                export { text_7 as text };
            }
            export { props_7 as props };
        }
    }
    import GoLink from "src/components/go-link/go-link";
}
declare module "src/components/go-link/__tests__/go-link.test" {
    export {};
}
declare module "src/components/go-link/examples/go-link-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/go-link/examples/go-link-b" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/heading/__tests__/heading-test-cases" {
    export namespace testCases {
        namespace primary {
            export const description: string;
            export { Heading as component };
            export namespace props {
                const children: string;
                const variant: string;
            }
        }
        namespace secondary {
            const description_1: string;
            export { description_1 as description };
            export { Heading as component };
            export namespace props_1 {
                const children_1: string;
                export { children_1 as children };
                const variant_1: string;
                export { variant_1 as variant };
            }
            export { props_1 as props };
        }
        namespace tertiary {
            const description_2: string;
            export { description_2 as description };
            export { Heading as component };
            export namespace props_2 {
                const children_2: string;
                export { children_2 as children };
                const variant_2: string;
                export { variant_2 as variant };
            }
            export { props_2 as props };
        }
        namespace minor {
            const description_3: string;
            export { description_3 as description };
            export { Heading as component };
            export namespace props_3 {
                const children_3: string;
                export { children_3 as children };
                const variant_3: string;
                export { variant_3 as variant };
            }
            export { props_3 as props };
        }
    }
    import Heading from "src/components/heading/heading";
}
declare module "src/components/heading/__tests__/heading.test" {
    export {};
}
declare module "src/components/heading/examples/heading-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/icon/__tests__/icon.test" { }
declare module "src/components/icon/examples/icon-a" {
    import React from 'react';
    export default class Example extends React.Component {
        render(): JSX.Element;
    }
}
declare module "src/components/icon/examples/icon-b" {
    import { ReactElement } from 'react';
    export default function Example(): ReactElement;
}
declare module "src/components/icon-text/__tests__/icon-text-test-cases" {
    export namespace testCases {
        namespace iconBefore {
            export const description: string;
            export { IconText as component };
            export namespace props {
                export const children: string;
                const iconBefore_1: string;
                export { iconBefore_1 as iconBefore };
            }
        }
        namespace iconAfter {
            const description_1: string;
            export { description_1 as description };
            export { IconText as component };
            export namespace props_1 {
                const children_1: string;
                export { children_1 as children };
                const iconAfter_1: string;
                export { iconAfter_1 as iconAfter };
            }
            export { props_1 as props };
        }
        namespace largeSpacing {
            const description_2: string;
            export { description_2 as description };
            export { IconText as component };
            export namespace props_2 {
                const children_2: string;
                export { children_2 as children };
                const iconBefore_2: string;
                export { iconBefore_2 as iconBefore };
                export const gap: string;
            }
            export { props_2 as props };
        }
        namespace bothIcons {
            const description_3: string;
            export { description_3 as description };
            export { IconText as component };
            export namespace props_3 {
                const children_3: string;
                export { children_3 as children };
                const iconBefore_3: string;
                export { iconBefore_3 as iconBefore };
                const iconAfter_2: JSX.Element;
                export { iconAfter_2 as iconAfter };
            }
            export { props_3 as props };
        }
        namespace buttonyDisplay {
            const description_4: string;
            export { description_4 as description };
            export const element: JSX.Element;
        }
        namespace flexParentInline {
            const description_5: string;
            export { description_5 as description };
            export { IconText as component };
            export namespace props_4 {
                const children_4: string;
                export { children_4 as children };
                const iconBefore_4: string;
                export { iconBefore_4 as iconBefore };
                export const inline: boolean;
            }
            export { props_4 as props };
        }
    }
    import IconText from "src/components/icon-text/icon-text";
}
declare module "src/components/icon-text/__tests__/icon-text.test" {
    export {};
}
declare module "src/components/icon-text/examples/icon-text-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/icon-text/examples/icon-text-b" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/loader-full/__tests__/loader-full-test-cases" {
    export namespace testCases {
        namespace loaderBasic {
            const description: string;
            const component: any;
            const props: {};
            const noDisplay: boolean;
        }
        namespace loaderOpaque {
            const description_1: string;
            export { description_1 as description };
            const component_1: any;
            export { component_1 as component };
            export namespace props_1 {
                const opaque: boolean;
            }
            export { props_1 as props };
            const noDisplay_1: boolean;
            export { noDisplay_1 as noDisplay };
        }
    }
}
declare module "src/components/loader-full/__tests__/loader-full.test" {
    export {};
}
declare module "src/components/loader-full/examples/loader-full-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        timeout: any;
        state: {
            loading: boolean;
        };
        componentWillUnmount(): void;
        showLoader: () => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/loader-full/examples/loader-full-example-opaque" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        timeout: any;
        state: {
            loading: boolean;
        };
        componentWillUnmount(): void;
        showLoader: () => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/minimum-duration-loader/minimum-duration-loader" {
    /**
     * This component displays a loading indicator in place of its children until
     * the `isLoaded` prop is true. The indicator will be displayed for a minimum
     * amount of time as specified by the minDuration prop (defaults to one second).
     */
    export default class MinimumDurationLoader extends React.PureComponent<any, any, any> {
        static propTypes: {
            children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            isLoaded: PropTypes.Requireable<boolean>;
            loader: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            minDuration: PropTypes.Requireable<number>;
        };
        static defaultProps: {
            loader: JSX.Element;
            minDuration: number;
        };
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/minimum-duration-loader/index" {
    export default main;
    import main from "src/components/minimum-duration-loader/minimum-duration-loader";
}
declare module "src/components/minimum-duration-loader/__tests__/minimum-duration-loader-test-cases" {
    export namespace testCases {
        namespace minimumLoaderWithDefaultLoader {
            const description: string;
            const element: JSX.Element;
        }
        namespace minimumLoaderWithCustomLoader {
            const description_1: string;
            export { description_1 as description };
            const element_1: JSX.Element;
            export { element_1 as element };
        }
        namespace minimumLoaderWithCustomDuration {
            const description_2: string;
            export { description_2 as description };
            const element_2: JSX.Element;
            export { element_2 as element };
        }
        namespace minimumLoaderWithCustomDurationAndCustomLoader {
            const description_3: string;
            export { description_3 as description };
            const element_3: JSX.Element;
            export { element_3 as element };
        }
        namespace defaultPropsNotLoaded {
            const description_4: string;
            export { description_4 as description };
            export { MinimumDurationLoader as component };
            export const noDisplay: boolean;
            export namespace props {
                export { children };
                export const isLoaded: boolean;
            }
        }
        namespace defaultPropsLoaded {
            const description_5: string;
            export { description_5 as description };
            export { MinimumDurationLoader as component };
            const noDisplay_1: boolean;
            export { noDisplay_1 as noDisplay };
            export namespace props_1 {
                export { children };
                const isLoaded_1: boolean;
                export { isLoaded_1 as isLoaded };
            }
            export { props_1 as props };
        }
        namespace customDuration {
            const description_6: string;
            export { description_6 as description };
            export { MinimumDurationLoader as component };
            const noDisplay_2: boolean;
            export { noDisplay_2 as noDisplay };
            export namespace props_2 {
                export { children };
                const isLoaded_2: boolean;
                export { isLoaded_2 as isLoaded };
                export const minDuration: number;
            }
            export { props_2 as props };
        }
        namespace minimumLoaderLoadedWithDefaultLoader {
            const description_7: string;
            export { description_7 as description };
            export { MinimumDurationLoader as component };
            const noDisplay_3: boolean;
            export { noDisplay_3 as noDisplay };
            export namespace props_3 {
                export { children };
                const isLoaded_3: boolean;
                export { isLoaded_3 as isLoaded };
            }
            export { props_3 as props };
        }
        namespace minimumLoaderNotLoadedWithDefaultLoader {
            const description_8: string;
            export { description_8 as description };
            export { MinimumDurationLoader as component };
            const noDisplay_4: boolean;
            export { noDisplay_4 as noDisplay };
            export namespace props_4 {
                export { children };
                const isLoaded_4: boolean;
                export { isLoaded_4 as isLoaded };
            }
            export { props_4 as props };
        }
        namespace minimumLoaderLoadedWithCustomLoader {
            const description_9: string;
            export { description_9 as description };
            export { MinimumDurationLoader as component };
            const noDisplay_5: boolean;
            export { noDisplay_5 as noDisplay };
            export namespace props_5 {
                export { children };
                const isLoaded_5: boolean;
                export { isLoaded_5 as isLoaded };
                export { customLoader as loader };
            }
            export { props_5 as props };
        }
        namespace minimumLoaderNotLoadedWithCustomLoader {
            const description_10: string;
            export { description_10 as description };
            export { MinimumDurationLoader as component };
            const noDisplay_6: boolean;
            export { noDisplay_6 as noDisplay };
            export namespace props_6 {
                export { children };
                const isLoaded_6: boolean;
                export { isLoaded_6 as isLoaded };
                export { customLoader as loader };
            }
            export { props_6 as props };
        }
    }
    import MinimumDurationLoader from "src/components/minimum-duration-loader/minimum-duration-loader";
    const children: JSX.Element;
    const customLoader: JSX.Element;
    export {};
}
declare module "src/components/minimum-duration-loader/__tests__/minimum-duration-loader.test" {
    export {};
}
declare module "src/components/modal/__tests__/modal-actions.test" {
    export {};
}
declare module "src/components/modal/__tests__/modal-test-cases" {
    export namespace testCases {
        namespace nested {
            const description: string;
            const element: JSX.Element;
        }
        namespace basicSmallDisplay {
            const description_1: string;
            export { description_1 as description };
            const element_1: JSX.Element;
            export { element_1 as element };
        }
        namespace basicLargeDisplay {
            const description_2: string;
            export { description_2 as description };
            const element_2: JSX.Element;
            export { element_2 as element };
        }
        namespace basicAutoDisplay {
            const description_3: string;
            export { description_3 as description };
            const element_3: JSX.Element;
            export { element_3 as element };
        }
        namespace unpadded {
            const description_4: string;
            export { description_4 as description };
            const element_4: JSX.Element;
            export { element_4 as element };
        }
        namespace pausedFocusTrap {
            const description_5: string;
            export { description_5 as description };
            const element_5: JSX.Element;
            export { element_5 as element };
        }
    }
    export namespace noDisplayCases {
        namespace basicLarge {
            const description_6: string;
            export { description_6 as description };
            export { Modal as component };
            export namespace props {
                const accessibleTitle: string;
                const onExit: any;
                const children: JSX.Element;
                namespace primaryAction {
                    const text: string;
                    const callback: any;
                    const destructive: boolean;
                }
                namespace secondaryAction {
                    const text_1: string;
                    export { text_1 as text };
                    const callback_1: any;
                    export { callback_1 as callback };
                }
                namespace tertiaryAction {
                    const text_2: string;
                    export { text_2 as text };
                    const callback_2: any;
                    export { callback_2 as callback };
                }
            }
            export const noDisplay: boolean;
        }
        namespace basicSmall {
            const description_7: string;
            export { description_7 as description };
            export { Modal as component };
            export namespace props_1 {
                const accessibleTitle_1: string;
                export { accessibleTitle_1 as accessibleTitle };
                const onExit_1: any;
                export { onExit_1 as onExit };
                export const size: string;
                const children_1: JSX.Element;
                export { children_1 as children };
                export namespace primaryAction_1 {
                    const text_3: string;
                    export { text_3 as text };
                    const callback_3: any;
                    export { callback_3 as callback };
                }
                export { primaryAction_1 as primaryAction };
            }
            export { props_1 as props };
            const noDisplay_1: boolean;
            export { noDisplay_1 as noDisplay };
        }
        namespace basicAuto {
            const description_8: string;
            export { description_8 as description };
            export { Modal as component };
            export namespace props_2 {
                const accessibleTitle_2: string;
                export { accessibleTitle_2 as accessibleTitle };
                const onExit_2: any;
                export { onExit_2 as onExit };
                const size_1: string;
                export { size_1 as size };
                const children_2: JSX.Element;
                export { children_2 as children };
            }
            export { props_2 as props };
            const noDisplay_2: boolean;
            export { noDisplay_2 as noDisplay };
        }
        namespace allOptions {
            const description_9: string;
            export { description_9 as description };
            export { Modal as component };
            export namespace props_3 {
                const accessibleTitle_3: string;
                export { accessibleTitle_3 as accessibleTitle };
                const size_2: string;
                export { size_2 as size };
                const onExit_3: any;
                export { onExit_3 as onExit };
                export const initialFocus: string;
                export const padded: boolean;
                const children_3: JSX.Element;
                export { children_3 as children };
            }
            export { props_3 as props };
            const noDisplay_3: boolean;
            export { noDisplay_3 as noDisplay };
        }
        namespace optionalOnExit {
            const description_10: string;
            export { description_10 as description };
            export { Modal as component };
            export namespace props_4 {
                const accessibleTitle_4: string;
                export { accessibleTitle_4 as accessibleTitle };
                const size_3: string;
                export { size_3 as size };
                const children_4: JSX.Element;
                export { children_4 as children };
            }
            export { props_4 as props };
            const noDisplay_4: boolean;
            export { noDisplay_4 as noDisplay };
        }
    }
    import Modal from "src/components/modal/modal";
}
declare module "src/components/modal/__tests__/modal.test" {
    export {};
}
declare module "src/components/modal/examples/modal-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            modalOpen: boolean;
        };
        openModal(): void;
        closeModal(): void;
        renderModal(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/modal/examples/modal-b" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            modalOpen: boolean;
        };
        openModal(): void;
        closeModal(): void;
        renderModal(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/new-tab-link/__tests__/new-tab-link-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { NewTabLink as component };
            export namespace props {
                const children: string;
                const href: string;
            }
        }
        namespace styling {
            const description_1: string;
            export { description_1 as description };
            export { NewTabLink as component };
            export namespace props_1 {
                const children_1: string;
                export { children_1 as children };
                export const className: string;
                const href_1: string;
                export { href_1 as href };
            }
            export { props_1 as props };
        }
    }
    import NewTabLink from "src/components/new-tab-link/new-tab-link";
}
declare module "src/components/new-tab-link/__tests__/new-tab-link.test" {
    export {};
}
declare module "src/components/new-tab-link/examples/new-tab-link-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/new-tab-link/examples/new-tab-link-b" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/page-loading-indicator/page-loading-indicator" {
    namespace _default {
        export { start };
        export { end };
        export { _reset };
    }
    export default _default;
    function start(): any;
    function end(): any;
    function _reset(): void;
}
declare module "src/components/page-loading-indicator/index" {
    export default main;
    import main from "src/components/page-loading-indicator/page-loading-indicator";
}
declare module "src/components/page-loading-indicator/__tests__/page-loading-indicator-test-cases" {
    export namespace testCases {
        namespace ms1000 {
            const description: string;
            const element: JSX.Element;
        }
        namespace ms300 {
            const description_1: string;
            export { description_1 as description };
            const element_1: JSX.Element;
            export { element_1 as element };
        }
        namespace ms40 {
            const description_2: string;
            export { description_2 as description };
            const element_2: JSX.Element;
            export { element_2 as element };
        }
    }
}
declare module "src/components/page-loading-indicator/__tests__/page-loading-indicator.test" {
    export {};
}
declare module "src/components/page-loading-indicator/examples/loader-full-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        show: () => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/popover/__tests__/calculate-position.test" {
    export {};
}
declare module "src/components/popover/__tests__/get-scrollable-parents-test-cases" {
    export namespace testCases {
        namespace noNesting {
            const description: string;
            const element: JSX.Element;
        }
        namespace nestedTwice {
            const description_1: string;
            export { description_1 as description };
            const element_1: JSX.Element;
            export { element_1 as element };
        }
        namespace trickNested {
            const description_2: string;
            export { description_2 as description };
            const element_2: JSX.Element;
            export { element_2 as element };
        }
        namespace absolute {
            const description_3: string;
            export { description_3 as description };
            const element_3: JSX.Element;
            export { element_3 as element };
        }
        namespace fixed {
            const description_4: string;
            export { description_4 as description };
            const element_4: JSX.Element;
            export { element_4 as element };
        }
        namespace insideFixed {
            const description_5: string;
            export { description_5 as description };
            const element_5: JSX.Element;
            export { element_5 as element };
        }
    }
}
declare module "src/components/popover/__tests__/is-element-scrolled-into-view-test-cases" {
    export namespace testCases {
        namespace windowTest {
            const description: string;
            const element: JSX.Element;
        }
        namespace parentTest {
            const description_1: string;
            export { description_1 as description };
            const element_1: JSX.Element;
            export { element_1 as element };
        }
    }
}
declare module "src/components/popover/__tests__/popover-positioner.test" {
    export {};
}
declare module "src/components/popover/__tests__/popover-test-cases" {
    export namespace testCases {
        namespace headerMenu {
            const description: string;
            const element: JSX.Element;
        }
        namespace studioPanel {
            const description_1: string;
            export { description_1 as description };
            const element_1: JSX.Element;
            export { element_1 as element };
        }
        namespace nestedPopovers {
            const description_2: string;
            export { description_2 as description };
            const element_2: JSX.Element;
            export { element_2 as element };
        }
        namespace receiveFocus {
            const description_3: string;
            export { description_3 as description };
            const element_3: JSX.Element;
            export { element_3 as element };
        }
        namespace doNotReceiveFocus {
            const description_4: string;
            export { description_4 as description };
            const element_4: JSX.Element;
            export { element_4 as element };
        }
        namespace trapFocus {
            const description_5: string;
            export { description_5 as description };
            const element_5: JSX.Element;
            export { element_5 as element };
        }
        namespace dark {
            const description_6: string;
            export { description_6 as description };
            const element_6: JSX.Element;
            export { element_6 as element };
        }
        namespace warning {
            const description_7: string;
            export { description_7 as description };
            const element_7: JSX.Element;
            export { element_7 as element };
        }
        namespace noPointer {
            const description_8: string;
            export { description_8 as description };
            const element_8: JSX.Element;
            export { element_8 as element };
        }
    }
    export namespace noDisplayCases {
        export namespace basic {
            const description_9: string;
            export { description_9 as description };
            export { Popover as component };
            export namespace props {
                function getAnchorElement(): void;
                const children: JSX.Element;
            }
        }
        export namespace dark_1 {
            const description_10: string;
            export { description_10 as description };
            export { Popover as component };
            export namespace props_1 {
                export function getAnchorElement_1(): void;
                export { getAnchorElement_1 as getAnchorElement };
                const children_1: JSX.Element;
                export { children_1 as children };
                export const coloring: string;
            }
            export { props_1 as props };
        }
        export { dark_1 as dark };
        export namespace warning_1 {
            const description_11: string;
            export { description_11 as description };
            export { Popover as component };
            export namespace props_2 {
                export function getAnchorElement_2(): void;
                export { getAnchorElement_2 as getAnchorElement };
                const children_2: JSX.Element;
                export { children_2 as children };
                const coloring_1: string;
                export { coloring_1 as coloring };
            }
            export { props_2 as props };
        }
        export { warning_1 as warning };
        export namespace noPointer_1 {
            const description_12: string;
            export { description_12 as description };
            export { Popover as component };
            export namespace props_3 {
                export function getAnchorElement_3(): void;
                export { getAnchorElement_3 as getAnchorElement };
                const children_3: JSX.Element;
                export { children_3 as children };
                export const hasPointer: boolean;
            }
            export { props_3 as props };
        }
        export { noPointer_1 as noPointer };
        export namespace allProps {
            const description_13: string;
            export { description_13 as description };
            export { Popover as component };
            export namespace props_4 {
                export function getAnchorElement_4(): void;
                export { getAnchorElement_4 as getAnchorElement };
                const children_4: JSX.Element;
                export { children_4 as children };
                export const placement: string;
                export const padding: string;
                const hasPointer_1: boolean;
                export { hasPointer_1 as hasPointer };
                export const hideWhenAnchorIsOffscreen: boolean;
                export const allowPlacementAxisChange: boolean;
                export const containWithinViewport: boolean;
                export const clickOutsideCloses: boolean;
                export const escapeCloses: boolean;
                const receiveFocus_1: boolean;
                export { receiveFocus_1 as receiveFocus };
                export function onExit(): void;
                export function ignoreClickWithinElement(): void;
                export function getContainingElement(): void;
                export const passthroughProps: {
                    'data-test': boolean;
                };
            }
            export { props_4 as props };
        }
    }
    import Popover from "src/components/popover/popover";
}
declare module "src/components/popover/__tests__/popover.test" {
    export {};
}
declare module "src/components/popover/examples/popover-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            popoverOpen: boolean;
        };
        togglePopover(): void;
        setAnchor(el: any): void;
        getAnchor(): any;
        ignore(el: any): boolean;
        anchor: any;
        renderPopover(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/popover/examples/popover-b" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            popoverOpen: boolean;
        };
        togglePopover(): void;
        setAnchor(el: any): void;
        getAnchor(): any;
        ignore(el: any): boolean;
        anchor: any;
        renderPopover(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/popover/examples/popover-c" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            popoverOpen: boolean;
        };
        togglePopover(): void;
        setAnchor(el: any): void;
        getAnchor(): any;
        ignore(el: any): boolean;
        anchor: any;
        renderPopover(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/popover/examples/popover-d" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            popoverOpen: boolean;
        };
        togglePopover(): void;
        setAnchor(el: any): void;
        getAnchor(): any;
        ignore(el: any): boolean;
        anchor: any;
        renderPopover(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/popover/examples/popover-e" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            popoverOpen: boolean;
        };
        togglePopover(): void;
        setAnchor(el: any): void;
        getAnchor(): any;
        ignore(el: any): boolean;
        anchor: any;
        renderPopover(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/popover-trigger/__tests__/popover-trigger-test-cases" {
    export namespace testCases {
        namespace defaultProps {
            const description: string;
            const element: JSX.Element;
        }
        namespace respondsToAllInteractions {
            const description_1: string;
            export { description_1 as description };
            const element_1: JSX.Element;
            export { element_1 as element };
        }
        namespace focusHoverNotClick {
            const description_2: string;
            export { description_2 as description };
            const element_2: JSX.Element;
            export { element_2 as element };
        }
        namespace callbacks {
            const description_3: string;
            export { description_3 as description };
            export { PopoverTrigger as component };
            export namespace props {
                export { getPopoverContent as content };
                export const onPopoverOpen: any;
                export const onPopoverClose: any;
                export const respondsToFocus: boolean;
                export const respondsToHover: boolean;
                export const children: JSX.Element;
            }
        }
        namespace clickInsideContent {
            const description_4: string;
            export { description_4 as description };
            const element_3: JSX.Element;
            export { element_3 as element };
        }
    }
    import PopoverTrigger from "src/components/popover-trigger/popover-trigger";
    function getPopoverContent(): JSX.Element;
    export {};
}
declare module "src/components/popover-trigger/__tests__/popover-trigger.test" {
    export {};
}
declare module "src/components/popover-trigger/examples/popover-trigger-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        getPopoverContent: () => JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/popover-trigger/examples/popover-trigger-b" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            popoverOpen: boolean;
        };
        handlePopoverOpen(): void;
        handlePopoverClose(): void;
        getPopoverContent(): JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/tab-list/tab-list" {
    export default class TabList extends React.PureComponent<any, any, any> {
        /** If you change propTypes, also change propNames. */
        static propTypes: {
            items: PropTypes.Validator<PropTypes.InferProps<{
                /** Identifying value for tab list item. */
                id: PropTypes.Validator<string>;
                /** The name of the tab to be displayed. */
                label: PropTypes.Validator<PropTypes.ReactNodeLike>;
                /** Determines if the state of the tab list item is active. */
                active: PropTypes.Requireable<boolean>;
                /** Link to the page the lab list item should take you to when clicked. */
                href: PropTypes.Requireable<string>;
                /** Flag to disable the clickability of an tab list item. */
                disabled: PropTypes.Requireable<boolean>;
            }>[]>;
            /** Callback when an tab list header item is clicked.
             Note that this should be a function that is passed an `id` argument. */
            onChange: PropTypes.Requireable<(...args: any[]) => any>;
            /** Value should coorespond to an `id` within the items array. */
            activeItem: PropTypes.Requireable<string>;
            /** Index of the first item in the `items` array that
             should move to the dropdown on narrow screens. */
            truncateBy: PropTypes.Requireable<number>;
            /** CSS classes to apply to the tab list item. */
            themeItem: PropTypes.Requireable<string>;
            /** CSS classes to apply to the active tab list item. */
            themeItemActive: PropTypes.Requireable<string>;
            /** CSS classes to apply to items when they are truncated. */
            themeItemTruncated: PropTypes.Requireable<string>;
            /** CSS classes to apply to the active tab list item. */
            themeItemActivePopover: PropTypes.Requireable<string>;
            /** CSS classes to apply to the tab list item container. */
            themeItemContainer: PropTypes.Requireable<string>;
            /** CSS classes to apply to the tab list item when `disabled` is true */
            themeItemDisabled: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            truncateBy: number;
            themeItem: string;
            themeItemActive: string;
            themeItemTruncated: string;
            themeItemActivePopover: string;
            themeItemContainer: string;
            themeItemDisabled: string;
        };
        constructor(props: any);
        state: {
            openPopover: boolean;
        };
        onChange: (id: any) => void;
        handlePopoverOpen: () => void;
        handlePopoverClose: () => void;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/tab-list/index" {
    export default main;
    import main from "src/components/tab-list/tab-list";
}
declare module "src/components/tab-list/__tests__/tab-list-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { TabList as component };
            export namespace props {
                const onChange: any;
                const activeItem: string;
                const items: {
                    id: string;
                    label: string;
                }[];
            }
        }
        namespace links {
            const description_1: string;
            export { description_1 as description };
            export { TabList as component };
            export namespace props_1 {
                const activeItem_1: string;
                export { activeItem_1 as activeItem };
                const items_1: {
                    id: string;
                    label: string;
                    href: string;
                }[];
                export { items_1 as items };
            }
            export { props_1 as props };
        }
        namespace truncateAll {
            const description_2: string;
            export { description_2 as description };
            export { TabList as component };
            export namespace props_2 {
                const activeItem_2: string;
                export { activeItem_2 as activeItem };
                export const truncateBy: number;
                const items_2: {
                    id: string;
                    label: string;
                    href: string;
                }[];
                export { items_2 as items };
            }
            export { props_2 as props };
        }
        namespace moreButtonOnlyIfNeeded {
            const description_3: string;
            export { description_3 as description };
            export { TabList as component };
            export namespace props_3 {
                const activeItem_3: string;
                export { activeItem_3 as activeItem };
                const truncateBy_1: number;
                export { truncateBy_1 as truncateBy };
                const items_3: {
                    id: string;
                    label: string;
                }[];
                export { items_3 as items };
            }
            export { props_3 as props };
        }
        namespace labelNode {
            const description_4: string;
            export { description_4 as description };
            export { TabList as component };
            export namespace props_4 {
                const onChange_1: any;
                export { onChange_1 as onChange };
                const activeItem_4: string;
                export { activeItem_4 as activeItem };
                const items_4: ({
                    id: string;
                    label: JSX.Element;
                } | {
                    id: string;
                    label: string;
                })[];
                export { items_4 as items };
            }
            export { props_4 as props };
        }
    }
    import TabList from "src/components/tab-list/tab-list";
}
declare module "src/components/tab-list/__tests__/tab-list.test" {
    export {};
}
declare module "src/components/tab-list/examples/tab-list-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        state: {
            activeItem: string;
        };
        onChange: (id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/tooltip/__tests__/tooltip-test-cases" {
    export namespace testCases {
        export namespace topFiller {
            const description: string;
            const element: JSX.Element;
        }
        export namespace domElementChild {
            const description_1: string;
            export { description_1 as description };
            export { Tooltip as component };
            export namespace props {
                const children: JSX.Element;
                const content: string;
            }
        }
        export namespace functionChild {
            const description_2: string;
            export { description_2 as description };
            export { Tooltip as component };
            export namespace props_1 {
                export function children_1(triggerProps: any): JSX.Element;
                export { children_1 as children };
                const content_1: string;
                export { content_1 as content };
            }
            export { props_1 as props };
        }
        export namespace buttonChild {
            const description_3: string;
            export { description_3 as description };
            export { Tooltip as component };
            export namespace props_2 {
                const children_2: JSX.Element;
                export { children_2 as children };
                const content_2: string;
                export { content_2 as content };
            }
            export { props_2 as props };
        }
        export namespace allProps {
            const description_4: string;
            export { description_4 as description };
            export { Tooltip as component };
            export namespace props_3 {
                const children_3: JSX.Element;
                export { children_3 as children };
                export { getTooltipContent as content };
                export const placement: string;
                export const alignment: string;
                export const coloring: string;
                export const respondsToClick: boolean;
                export const themeTooltip: string;
                export const display: string;
            }
            export { props_3 as props };
        }
        export namespace warningProp {
            const description_5: string;
            export { description_5 as description };
            export { Tooltip as component };
            export namespace props_4 {
                const children_4: JSX.Element;
                export { children_4 as children };
                export { getTooltipContent as content };
                const coloring_1: string;
                export { coloring_1 as coloring };
            }
            export { props_4 as props };
        }
        export namespace errorProp {
            const description_6: string;
            export { description_6 as description };
            export { Tooltip as component };
            export namespace props_5 {
                const children_5: JSX.Element;
                export { children_5 as children };
                export { getTooltipContent as content };
                const coloring_2: string;
                export { coloring_2 as coloring };
            }
            export { props_5 as props };
        }
        export namespace respondsToClick_1 {
            const description_7: string;
            export { description_7 as description };
            export { Tooltip as component };
            export namespace props_6 {
                export { getTooltipChildren as children };
                const content_3: string;
                export { content_3 as content };
                const respondsToClick_2: boolean;
                export { respondsToClick_2 as respondsToClick };
            }
            export { props_6 as props };
        }
        export { respondsToClick_1 as respondsToClick };
        export namespace manyPositions {
            const description_8: string;
            export { description_8 as description };
            const element_1: JSX.Element;
            export { element_1 as element };
        }
        export namespace bottomFiller {
            const description_9: string;
            export { description_9 as description };
            const element_2: JSX.Element;
            export { element_2 as element };
        }
    }
    import Tooltip from "src/components/tooltip/tooltip";
    function getTooltipContent(): JSX.Element;
    function getTooltipChildren(): JSX.Element;
    export {};
}
declare module "src/components/tooltip/__tests__/tooltip.test" {
    export {};
}
declare module "src/components/tooltip/examples/tooltip-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/tooltip/examples/tooltip-b" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        renderTooltipContent: () => JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/uncontrolled-accordion/uncontrolled-accordion" {
    export default class UncontrolledAccordion extends React.PureComponent<any, any, any> {
        static propTypes: {
            items: PropTypes.Validator<PropTypes.InferProps<{
                /** Identifying value for accordion item. */
                id: PropTypes.Validator<string>;
                /** Contents that are always shown. */
                header: PropTypes.Validator<(...args: any[]) => any>;
                /** Contents that shown when the accordion is active. */
                body: PropTypes.Validator<PropTypes.ReactNodeLike>;
                /** Flag to disable the clickability of an accordion item. */
                disabled: PropTypes.Requireable<boolean>;
            }>[]>;
            /** Callback when an accordion header item is clicked. */
            onToggle: PropTypes.Requireable<(...args: any[]) => any>;
            /** Value should coorespond to an `id` within the items array. */
            initiallyActiveItem: PropTypes.Requireable<string>;
            /** CSS classes to apply to the accordion item container */
            themeItem: PropTypes.Requireable<string>;
            /** CSS classes to apply to the accordion header */
            themeItemHeader: PropTypes.Requireable<string>;
            /** CSS classes to apply to the accordion body */
            themeItemBody: PropTypes.Requireable<string>;
        };
        constructor(props: any);
        state: {
            active: any;
        };
        onToggle: (id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/uncontrolled-accordion/index" {
    export default main;
    import main from "src/components/uncontrolled-accordion/uncontrolled-accordion";
}
declare module "src/components/uncontrolled-accordion/__tests__/uncontrolled-accordion-test-cases" {
    export namespace testCases {
        namespace basic {
            export const description: string;
            export { UncontrolledAccordion as component };
            export namespace props {
                const onToggle: any;
                const items: {
                    id: string;
                    header: () => JSX.Element;
                    body: string;
                }[];
            }
        }
        namespace disabled {
            const description_1: string;
            export { description_1 as description };
            export { UncontrolledAccordion as component };
            export namespace props_1 {
                const items_1: ({
                    id: string;
                    header: () => JSX.Element;
                    body: string;
                    disabled?: undefined;
                } | {
                    id: string;
                    header: () => JSX.Element;
                    body: string;
                    disabled: boolean;
                })[];
                export { items_1 as items };
            }
            export { props_1 as props };
        }
        namespace allOptions {
            const description_2: string;
            export { description_2 as description };
            export { UncontrolledAccordion as component };
            export namespace props_2 {
                const onToggle_1: any;
                export { onToggle_1 as onToggle };
                const items_2: {
                    id: string;
                    header: (active: any) => JSX.Element;
                    body: string;
                }[];
                export { items_2 as items };
                export const initiallyActiveItem: string;
                export const themeItem: string;
                export const themeItemHeader: string;
                export const themeItemBody: string;
            }
            export { props_2 as props };
        }
    }
    import UncontrolledAccordion from "src/components/uncontrolled-accordion/uncontrolled-accordion";
}
declare module "src/components/uncontrolled-accordion/__tests__/uncontrolled-accordion.test" {
    export {};
}
declare module "src/components/uncontrolled-accordion/examples/uncontrolled-accordion-example-basic" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/underline-tabs/underline-tabs-constants" {
    export const SIZE_SMALL: "small";
    export const SIZE_MEDIUM: "medium";
    export const SIZE_LARGE: "large";
}
declare module "src/components/utils/capitalize" {
    export default function capitalize(x: any): any;
}
declare module "src/components/underline-tabs/underline-tab-item" {
    export default UnderlineTabItem;
    class UnderlineTabItem extends React.PureComponent<any, any, any> {
        constructor(props: any);
        handleClick(event: any): void;
        getHeight(): number;
        renderBorder(): JSX.Element;
        render(): JSX.Element;
    }
    namespace UnderlineTabItem {
        namespace propTypes {
            const id: PropTypes.Validator<string>;
            const inactiveColor: PropTypes.Validator<string>;
            const activeColor: PropTypes.Validator<string>;
            const hoverColor: PropTypes.Validator<string>;
            const overlapBorder: PropTypes.Validator<boolean>;
            const label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            const size: PropTypes.Requireable<string>;
            const active: PropTypes.Requireable<boolean>;
            const onClick: PropTypes.Requireable<(...args: any[]) => any>;
            const href: PropTypes.Requireable<string>;
            const disabled: PropTypes.Requireable<boolean>;
        }
        namespace defaultProps {
            export { SIZE_MEDIUM as size };
            const active_1: boolean;
            export { active_1 as active };
            const disabled_1: boolean;
            export { disabled_1 as disabled };
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
    import { SIZE_MEDIUM } from "src/components/underline-tabs/underline-tabs-constants";
}
declare module "src/components/underline-tabs/underline-tabs" {
    export default UnderlineTabs;
    /**
     * For navigation between pages or sections.
     *
     * Items will be `<button>`s or `<a>`s, depending on whether they
     * have `href` props or not.
     */
    class UnderlineTabs extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    namespace UnderlineTabs {
        namespace propTypes {
            const items: PropTypes.Validator<PropTypes.InferProps<{
                id: PropTypes.Validator<string>;
                label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
                href: PropTypes.Requireable<string>;
                disabled: PropTypes.Requireable<boolean>;
            }>[]>;
            const active: PropTypes.Validator<string>;
            const onChange: PropTypes.Requireable<(...args: any[]) => any>;
            const size: PropTypes.Requireable<string>;
            const overlapBorder: PropTypes.Requireable<boolean>;
            const inactiveColor: PropTypes.Requireable<string>;
            const activeColor: PropTypes.Requireable<string>;
            const hoverColor: PropTypes.Requireable<string>;
            const bold: PropTypes.Requireable<boolean>;
        }
        namespace defaultProps {
            const size_1: string;
            export { size_1 as size };
            const inactiveColor_1: string;
            export { inactiveColor_1 as inactiveColor };
            const activeColor_1: string;
            export { activeColor_1 as activeColor };
            const hoverColor_1: string;
            export { hoverColor_1 as hoverColor };
            const overlapBorder_1: boolean;
            export { overlapBorder_1 as overlapBorder };
            const bold_1: boolean;
            export { bold_1 as bold };
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "src/components/underline-tabs/index" {
    export default main;
    import main from "src/components/underline-tabs/underline-tabs";
}
declare module "src/components/underline-tabs/__tests__/underline-tabs-test-cases" {
    export namespace testCases {
        namespace interactive {
            const description: string;
            const element: JSX.Element;
        }
        namespace manyItems {
            const description_1: string;
            export { description_1 as description };
            export { UnderlineTabs as component };
            export namespace props {
                const items: {
                    id: string;
                    label: string;
                }[];
                const active: string;
                const onChange: any;
            }
        }
        namespace defaults {
            const description_2: string;
            export { description_2 as description };
            export { UnderlineTabs as component };
            export namespace props_1 {
                const items_1: {
                    id: string;
                    label: string;
                }[];
                export { items_1 as items };
                const active_1: string;
                export { active_1 as active };
                const onChange_1: any;
                export { onChange_1 as onChange };
            }
            export { props_1 as props };
        }
        namespace overlap {
            const description_3: string;
            export { description_3 as description };
            export { UnderlineTabs as component };
            export namespace props_2 {
                export const overlapBorder: boolean;
                const items_2: {
                    id: string;
                    label: string;
                }[];
                export { items_2 as items };
                const active_2: string;
                export { active_2 as active };
                const onChange_2: any;
                export { onChange_2 as onChange };
            }
            export { props_2 as props };
        }
        namespace small {
            const description_4: string;
            export { description_4 as description };
            export { UnderlineTabs as component };
            export namespace props_3 {
                const items_3: {
                    id: string;
                    label: string;
                }[];
                export { items_3 as items };
                const active_3: string;
                export { active_3 as active };
                const onChange_3: any;
                export { onChange_3 as onChange };
                export const size: string;
            }
            export { props_3 as props };
        }
        namespace large {
            const description_5: string;
            export { description_5 as description };
            export { UnderlineTabs as component };
            export namespace props_4 {
                const items_4: {
                    id: string;
                    label: string;
                }[];
                export { items_4 as items };
                const active_4: string;
                export { active_4 as active };
                const onChange_4: any;
                export { onChange_4 as onChange };
                const size_1: string;
                export { size_1 as size };
            }
            export { props_4 as props };
        }
        namespace largeLinksIcons {
            const description_6: string;
            export { description_6 as description };
            export { UnderlineTabs as component };
            export namespace props_5 {
                const items_5: {
                    id: string;
                    label: JSX.Element;
                    href: string;
                }[];
                export { items_5 as items };
                const active_5: string;
                export { active_5 as active };
                const onChange_5: any;
                export { onChange_5 as onChange };
                const size_2: string;
                export { size_2 as size };
            }
            export { props_5 as props };
        }
        namespace customized {
            const description_7: string;
            export { description_7 as description };
            export { UnderlineTabs as component };
            export namespace props_6 {
                const items_6: {
                    id: string;
                    label: string;
                }[];
                export { items_6 as items };
                const active_6: string;
                export { active_6 as active };
                const onChange_6: any;
                export { onChange_6 as onChange };
                const size_3: string;
                export { size_3 as size };
                export const activeColor: string;
                export const inactiveColor: string;
                export const hoverColor: string;
                export const bold: boolean;
            }
            export { props_6 as props };
        }
        namespace idLabelsAndDisabledItem {
            const description_8: string;
            export { description_8 as description };
            export { UnderlineTabs as component };
            export namespace props_7 {
                const items_7: ({
                    id: string;
                    disabled?: undefined;
                } | {
                    id: string;
                    disabled: boolean;
                })[];
                export { items_7 as items };
                const active_7: string;
                export { active_7 as active };
                const onChange_7: any;
                export { onChange_7 as onChange };
            }
            export { props_7 as props };
        }
    }
    import UnderlineTabs from "src/components/underline-tabs/underline-tabs";
}
declare module "src/components/underline-tabs/__tests__/underline-tabs.test" {
    export {};
}
declare module "src/components/underline-tabs/examples/underline-tabs-a" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            active: string;
        };
        changeTab: (id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/underline-tabs/examples/underline-tabs-b" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            active: string;
        };
        changeTab: (id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/underline-tabs/examples/underline-tabs-c" {
    export default class Example extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            active: string;
        };
        changeTab: (id: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/components/utils/shallow-equal-objects" {
    export default function shallowEqualObjects(objA: {
        [key: string]: any;
    }, objB: {
        [key: string]: any;
    }, allowedObjectKeys?: Array<string>): any;
}
declare module "src/components/utils/styles" {
    interface Constants {
        [key: string]: string;
    }
    /**
     * Replace existing constant object with a new constant object. Use
     * with no argument to reset constant object to it's default.
     * @param constants {object} an object that conforms to { [id]: string }.
     */
    function setStyles(constants?: Constants): void;
    /**
     * Merge a new constant object with existing constants.
     * @param constants {object} an object that conforms to { [id]: string }.
     */
    function mergeStyles(constants: Constants): void;
    /**
     * Get the classlist for a style constant.
     * @param constant {string} a string corresponding to a constant that resolves to a class list.
     * @param exclude {string | array<string>} a list of classes to exclude from the style constant.
     * @return {string} a space-separated list of classes.
     */
    function getStyle(constant: string, exclude?: string | Array<string>): string;
    export { mergeStyles, setStyles, getStyle };
}
declare module "src/components/utils/__tests__/maybe-add-period.test" { }
declare module "src/components/utils/__tests__/omit.test" { }
declare module "src/components/utils/__tests__/shallow-equal-objects.test" { }
declare module "src/components/utils/__tests__/styles.test" { }
declare module "src/docs/typings" {
    import { ReactElement } from 'react';
    interface Value {
        [key: string]: any;
    }
    export interface PropData {
        name?: string;
        type: {
            name: string;
            value?: Value | Array<Value>;
        };
        required: boolean;
        defaultValue: string | undefined;
        description: ReactElement;
    }
    export interface Example {
        description: ReactElement;
        code: string;
        exampleModule: {
            default: any;
        };
    }
    export interface Data {
        name: string;
        description: ReactElement;
        props: {
            [key: string]: PropData;
        };
        examples: Array<Example>;
    }
    export type Entry = {
        name: string;
        content: ReactElement;
    };
    export interface Section {
        name: string;
        entries: Array<Entry>;
        intro?: ReactElement;
    }
}
declare module "src/docs/components/component-example" {
    import { ReactElement } from 'react';
    import { Example } from "src/docs/typings";
    export default function ComponentExample({ code, description, exampleModule }: Example): ReactElement;
}
declare module "src/docs/components/component-section" {
    import { ReactElement } from 'react';
    import { Data } from "src/docs/typings";
    interface Props {
        data: Data;
    }
    export default function ComponentSection({ data }: Props): ReactElement;
}
declare module "src/docs/components/sidebar" {
    import { ReactElement } from 'react';
    import { Section } from "src/docs/typings";
    interface Props {
        sections: Array<Section>;
    }
    export default function Sidebar({ sections }: Props): ReactElement;
}
declare module "src/docs/components/assembly-section" {
    import { ReactElement } from 'react';
    interface SectionData {
        name: string;
        description: ReactElement;
        preview: ReactElement;
    }
    interface Props {
        sectionData: SectionData;
    }
    export default function AssemblySection({ sectionData }: Props): ReactElement;
}
declare module "src/docs/components/assembly-intro" {
    import { ReactElement } from 'react';
    interface Props {
        name: string;
        children: ReactElement;
    }
    export default function AssemblyIntro({ name, children }: Props): ReactElement;
}
declare module "src/docs/components/colors" {
    export default function Color(): JSX.Element;
}
declare module "src/docs/components/assets" {
    import { ReactElement } from 'react';
    export default function Assets(): ReactElement;
}
declare module "src/docs/app" {
    export default function App(): JSX.Element;
}
declare module "babel.config" {
    export const presets: string[];
    export const overrides: {
        test: RegExp;
        presets: (string | (string | {
            allExtensions: boolean;
            isTSX: boolean;
        })[])[];
    }[];
}
declare module "src/docs/babel.config" {
    export = config;
    import config = require("babel.config");
}
declare module "src/docs/html" {
    const _exports: string;
    export = _exports;
}
declare module "src/docs/docs-underreact.config" {
    function _exports(): {
        siteBasePath: string;
        browserslist: string[];
        jsEntry: string;
        htmlSource: string;
        webpackConfigTransform: (config: any) => any;
    };
    export = _exports;
}
declare module "src/docs/index" {
    export {};
}
declare module "src/docs/sorted-components" {
    const _default: ({
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            header: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            body: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            active: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItemHeader: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemHeaderDisabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemBody: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: any[];
    } | {
        name: string;
        description: any;
        props: {
            badgeText: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            coloring: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            tooltipText: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/badge/examples/badge-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            variant: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onClick: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            href: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            size: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            width: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            outline: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            color: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            corners: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            block: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            component: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            passthroughProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/button/examples/button-a");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            iconBefore: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            iconSize: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            text: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/chevronous-text/examples/chevronous-text-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            code: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            highlightedCode: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            copyRanges: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            name: string;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            maxHeight: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onCopy: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            highlightThemeCss: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            characterWidth: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/code-snippet/examples/code-snippet-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            autoFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onButtonClick: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            theme: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: ({
            exampleModule: typeof import("src/components/control-alert/examples/control-alert-example-basic");
            code: string;
            description: JSX.Element;
        } | {
            exampleModule: typeof import("src/components/control-alert/examples/control-alert-example-options");
            code: string;
            description: JSX.Element;
        })[];
    } | {
        name: string;
        description: any;
        props: {
            buttonType: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onButtonClick: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            title: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            titleSize: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            theme?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: ({
            exampleModule: typeof import("src/components/control-card/examples/control-card-example-basic");
            code: string;
            description: JSX.Element;
        } | {
            exampleModule: typeof import("src/components/control-card/examples/control-card-example-options");
            code: string;
            description: JSX.Element;
        })[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            options: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            label: {
                                name: string;
                                required: boolean;
                            };
                            value: {
                                name: string;
                                required: boolean;
                                raw?: undefined;
                            };
                            disabled?: undefined;
                            options?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            legend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            icon: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            autoFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeCheckboxContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeCheckbox: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLegend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-checkbox-set/examples/control-checkbox-set-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value: ({
                        name: string;
                        value: {
                            name: string;
                            value: {
                                name: {
                                    name: string;
                                    required: boolean;
                                };
                            };
                        };
                    } | {
                        name: string;
                        value: {
                            value: string;
                            computed: boolean;
                        }[];
                    })[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            initialDisplayValue: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlFile: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlFileClear: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-file/examples/control-file-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            text: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-label/examples/control-label-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            text: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLegend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-legend/examples/control-legend-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            options: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            label: {
                                name: string;
                                required: boolean;
                            };
                            value: {
                                name: string;
                                required: boolean;
                                raw?: undefined;
                            };
                            disabled?: undefined;
                            options?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            legend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            autoFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeRadioContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeRadio: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLegend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-radio-set/examples/control-radio-set-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlRange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-range/examples/control-range-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            options: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            label: {
                                name: string;
                                required: boolean;
                            };
                            value: {
                                name: string;
                                raw: string;
                                required: boolean;
                            };
                            disabled: {
                                name: string;
                                required: boolean;
                            };
                            options: {
                                name: string;
                                value: {
                                    name: string;
                                    value: {
                                        label: {
                                            name: string;
                                            required: boolean;
                                        };
                                        value: {
                                            name: string;
                                            required: boolean;
                                        };
                                        disabled: {
                                            name: string;
                                            required: boolean;
                                        };
                                    };
                                };
                                required: boolean;
                            };
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlSelect: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlSelectContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            legend?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-select/examples/control-select-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value: ({
                        name: string;
                        value?: undefined;
                    } | {
                        name: string;
                        value: {
                            value: string;
                            computed: boolean;
                        }[];
                    })[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlSwitchContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlSwitch: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            aside?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-switch/examples/control-switch-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            type: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            noAuto: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            errorStyle: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            popoverProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlInput: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-text/examples/control-text-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            noAuto: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlTextarea: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-textarea/examples/control-textarea-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            options: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            label: {
                                name: string;
                                required: boolean;
                            };
                            value: {
                                name: string;
                                required: boolean;
                                raw?: undefined;
                            };
                            disabled?: undefined;
                            options?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            legend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            autoFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeToggleGroup: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeToggleContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeToggle: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLegend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/control-toggle-set/examples/control-toggle-set-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: any;
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            items: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            id: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            header: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            body: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            disabled: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            label?: undefined;
                            active?: undefined;
                            href?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            activeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItemHeader: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItemBody: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItemHeaderDisabled?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/controlled-accordion/examples/controlled-accordion-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            value: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            focusTrapPaused: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            truncated: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/copiable/examples/copiable-a");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            text: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            textEl: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onCopy: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            block: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            focusTrapPaused: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            className: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            passthroughProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            component?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            truncated?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/copy-button/examples/copy-button-a");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            config: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            renderForm: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            handleFormData: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onCancel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/form/examples/form-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            onSubmit: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            testId: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeButton: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/form-submit/examples/form-submit-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            color: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            goBack: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            href: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            isBold: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            isNewTab: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            size: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            text: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            width?: undefined;
            outline?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/go-link/examples/go-link-a");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            variant: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/heading/examples/heading-a");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            name: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            size: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            inline: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            passthroughProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: any;
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            gap: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            iconBefore: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            iconAfter: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            inline: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/icon-text/examples/icon-text-a");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            opaque: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            style: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/loader-full/examples/loader-full-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            themeLoader: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: any[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            isLoaded: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            loader: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            minDuration: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: any[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            accessibleTitle: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onExit: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            getApplicationNode: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            size: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            initialFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            padding: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            focusTrapPaused: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            alert: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            primaryAction: {
                type: {
                    name: string;
                    value: {
                        text: {
                            name: string;
                            required: boolean;
                        };
                        callback: {
                            name: string;
                            required: boolean;
                        };
                        destructive: {
                            name: string;
                            required: boolean;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            secondaryAction: {
                type: {
                    name: string;
                    value: {
                        text: {
                            name: string;
                            required: boolean;
                        };
                        callback: {
                            name: string;
                            required: boolean;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            tertiaryAction: {
                type: {
                    name: string;
                    value: {
                        text: {
                            name: string;
                            required: boolean;
                        };
                        callback: {
                            name: string;
                            required: boolean;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            allowEventBubbling: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/modal/examples/modal-a");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            href: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/new-tab-link/examples/new-tab-link-a");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            getAnchorElement: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            placement: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            alignment: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            coloring: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            padding: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            hasPointer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            hideWhenAnchorIsOffscreen: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            allowPlacementAxisChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            containWithinViewport: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            clickOutsideCloses: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            escapeCloses: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            receiveFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            trapFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onExit: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onElement: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            getInitialFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            ignoreClickWithinElement: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            getContainingElement: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            offsetFromAnchor: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            passthroughProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            zIndex: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            observeSize: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/popover/examples/popover-a");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            block: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            content: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            renderHiddenContent: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            receiveFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            trapFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            respondsToClick: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            respondsToHover: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            respondsToFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            popoverProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            passthroughTriggerProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onPopoverOpen: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onPopoverClose: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: ({
            exampleModule: typeof import("src/components/popover-trigger/examples/popover-trigger-a");
            code: string;
            description: JSX.Element;
        } | {
            exampleModule: typeof import("src/components/popover-trigger/examples/popover-trigger-b");
            code: string;
            description: JSX.Element;
        })[];
    } | {
        name: string;
        description: any;
        props: {
            items: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            id: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            label: {
                                name: string;
                                value: {
                                    name: string;
                                }[];
                                description: string;
                                required: boolean;
                            };
                            active: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            href: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            disabled: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            header?: undefined;
                            body?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            activeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            truncateBy: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemActive: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemTruncated: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemActivePopover: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemDisabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/tab-list/examples/tab-list-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            content: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            placement: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            alignment: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            coloring: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            textSize: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            maxWidth: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            padding: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            respondsToClick: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            block: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            testId: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            renderHiddenContent?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/tooltip/examples/tooltip-a");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            items: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            id: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            header: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            body: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            disabled: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            label?: undefined;
                            active?: undefined;
                            href?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            initiallyActiveItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItemHeader: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItemBody: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItemHeaderDisabled?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/uncontrolled-accordion/examples/uncontrolled-accordion-example-basic");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            items: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            id: {
                                name: string;
                                required: boolean;
                                description?: undefined;
                            };
                            label: {
                                name: string;
                                required: boolean;
                                value?: undefined;
                                description?: undefined;
                            };
                            href: {
                                name: string;
                                required: boolean;
                                description?: undefined;
                            };
                            disabled: {
                                name: string;
                                required: boolean;
                                description?: undefined;
                            };
                            header?: undefined;
                            body?: undefined;
                            active?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            active: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            size: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            overlapBorder: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            inactiveColor: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            activeColor: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            hoverColor: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            bold: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
        };
        examples: {
            exampleModule: typeof import("src/components/underline-tabs/examples/underline-tabs-a");
            code: string;
            description: JSX.Element;
        }[];
    })[];
    export default _default;
}
declare module "src/docs/data/components" {
    const _default: ({
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            header: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            body: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            active: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItemHeader: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemHeaderDisabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemBody: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: any[];
    } | {
        name: string;
        description: any;
        props: {
            badgeText: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            coloring: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            tooltipText: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/badge/examples/badge-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            variant: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onClick: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            href: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            size: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            width: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            outline: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            color: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            corners: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            block: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            component: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            passthroughProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/button/examples/button-a.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            iconBefore: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            iconSize: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            text: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/chevronous-text/examples/chevronous-text-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            code: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            highlightedCode: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            copyRanges: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            name: string;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            maxHeight: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onCopy: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            highlightThemeCss: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            characterWidth: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/code-snippet/examples/code-snippet-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            autoFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onButtonClick: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            theme: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: ({
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-alert/examples/control-alert-example-basic.js");
            code: string;
            description: JSX.Element;
        } | {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-alert/examples/control-alert-example-options.js");
            code: string;
            description: JSX.Element;
        })[];
    } | {
        name: string;
        description: any;
        props: {
            buttonType: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onButtonClick: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            title: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            titleSize: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            theme?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: ({
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-card/examples/control-card-example-basic.js");
            code: string;
            description: JSX.Element;
        } | {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-card/examples/control-card-example-options.js");
            code: string;
            description: JSX.Element;
        })[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            options: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            label: {
                                name: string;
                                required: boolean;
                            };
                            value: {
                                name: string;
                                required: boolean;
                                raw?: undefined;
                            };
                            disabled?: undefined;
                            options?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            legend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            icon: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            autoFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeCheckboxContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeCheckbox: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLegend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-checkbox-set/examples/control-checkbox-set-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value: ({
                        name: string;
                        value: {
                            name: string;
                            value: {
                                name: {
                                    name: string;
                                    required: boolean;
                                };
                            };
                        };
                    } | {
                        name: string;
                        value: {
                            value: string;
                            computed: boolean;
                        }[];
                    })[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            initialDisplayValue: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlFile: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlFileClear: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-file/examples/control-file-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            text: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-label/examples/control-label-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            text: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLegend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-legend/examples/control-legend-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            options: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            label: {
                                name: string;
                                required: boolean;
                            };
                            value: {
                                name: string;
                                required: boolean;
                                raw?: undefined;
                            };
                            disabled?: undefined;
                            options?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            legend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            autoFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeRadioContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeRadio: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLegend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-radio-set/examples/control-radio-set-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlRange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-range/examples/control-range-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            options: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            label: {
                                name: string;
                                required: boolean;
                            };
                            value: {
                                name: string;
                                raw: string;
                                required: boolean;
                            };
                            disabled: {
                                name: string;
                                required: boolean;
                            };
                            options: {
                                name: string;
                                value: {
                                    name: string;
                                    value: {
                                        label: {
                                            name: string;
                                            required: boolean;
                                        };
                                        value: {
                                            name: string;
                                            required: boolean;
                                        };
                                        disabled: {
                                            name: string;
                                            required: boolean;
                                        };
                                    };
                                };
                                required: boolean;
                            };
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlSelect: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlSelectContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            legend?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-select/examples/control-select-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value: ({
                        name: string;
                        value?: undefined;
                    } | {
                        name: string;
                        value: {
                            value: string;
                            computed: boolean;
                        }[];
                    })[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlSwitchContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlSwitch: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            aside?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-switch/examples/control-switch-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            type: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            noAuto: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            errorStyle: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            popoverProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlInput: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-text/examples/control-text-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            noAuto: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlTextarea: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLabel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-textarea/examples/control-textarea-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            options: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            label: {
                                name: string;
                                required: boolean;
                            };
                            value: {
                                name: string;
                                required: boolean;
                                raw?: undefined;
                            };
                            disabled?: undefined;
                            options?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            legend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            value: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            optional: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            aside: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            autoFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeToggleGroup: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeToggleContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeToggle: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeLegend: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/control-toggle-set/examples/control-toggle-set-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            id: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            validationError: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeControlWrapper: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: any;
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            items: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            id: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            header: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            body: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            disabled: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            label?: undefined;
                            active?: undefined;
                            href?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            activeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItemHeader: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItemBody: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItemHeaderDisabled?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/controlled-accordion/examples/controlled-accordion-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            value: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            focusTrapPaused: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            truncated: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/copiable/examples/copiable-a.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            text: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            textEl: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onCopy: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            block: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            focusTrapPaused: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            className: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            passthroughProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            component?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            truncated?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/copy-button/examples/copy-button-a.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            config: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            renderForm: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            handleFormData: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onCancel: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/form/examples/form-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            onSubmit: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            label: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            testId: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeButton: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/form-submit/examples/form-submit-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            color: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            goBack: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            href: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            isBold: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            isNewTab: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            size: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            text: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            width?: undefined;
            outline?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/go-link/examples/go-link-a.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            variant: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/heading/examples/heading-a.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            name: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            size: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            inline: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            passthroughProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: any;
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            gap: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            iconBefore: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            iconAfter: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            inline: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/icon-text/examples/icon-text-a.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            opaque: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            style: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/loader-full/examples/loader-full-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            themeLoader: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: any[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            isLoaded: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            loader: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            minDuration: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: any[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            accessibleTitle: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onExit: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            getApplicationNode: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            size: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            initialFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            padding: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            focusTrapPaused: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            alert: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            primaryAction: {
                type: {
                    name: string;
                    value: {
                        text: {
                            name: string;
                            required: boolean;
                        };
                        callback: {
                            name: string;
                            required: boolean;
                        };
                        destructive: {
                            name: string;
                            required: boolean;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            secondaryAction: {
                type: {
                    name: string;
                    value: {
                        text: {
                            name: string;
                            required: boolean;
                        };
                        callback: {
                            name: string;
                            required: boolean;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            tertiaryAction: {
                type: {
                    name: string;
                    value: {
                        text: {
                            name: string;
                            required: boolean;
                        };
                        callback: {
                            name: string;
                            required: boolean;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            allowEventBubbling: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/modal/examples/modal-a.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            href: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/new-tab-link/examples/new-tab-link-a.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            getAnchorElement: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            placement: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            alignment: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            coloring: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            padding: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            hasPointer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            hideWhenAnchorIsOffscreen: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            allowPlacementAxisChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            containWithinViewport: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            clickOutsideCloses: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            escapeCloses: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            receiveFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            trapFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            onExit: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onElement: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            getInitialFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            ignoreClickWithinElement: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            getContainingElement: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            offsetFromAnchor: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            passthroughProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            zIndex: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            observeSize: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/popover/examples/popover-a.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value?: undefined;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            block: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            content: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            renderHiddenContent: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            receiveFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            trapFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            respondsToClick: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            respondsToHover: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            respondsToFocus: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            popoverProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            passthroughTriggerProps: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onPopoverOpen: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onPopoverClose: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: ({
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/popover-trigger/examples/popover-trigger-a.js");
            code: string;
            description: JSX.Element;
        } | {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/popover-trigger/examples/popover-trigger-b.js");
            code: string;
            description: JSX.Element;
        })[];
    } | {
        name: string;
        description: any;
        props: {
            items: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            id: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            label: {
                                name: string;
                                value: {
                                    name: string;
                                }[];
                                description: string;
                                required: boolean;
                            };
                            active: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            href: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            disabled: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            header?: undefined;
                            body?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            activeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            truncateBy: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemActive: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemTruncated: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemActivePopover: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemContainer: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            themeItemDisabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/tab-list/examples/tab-list-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            children: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            content: {
                type: {
                    name: string;
                    value: {
                        name: string;
                    }[];
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            placement: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            alignment: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            disabled: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            coloring: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            textSize: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            maxWidth: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            padding: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            respondsToClick: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            block: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            testId: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            tooltipText?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            items?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            renderHiddenContent?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            initiallyActiveItem?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/tooltip/examples/tooltip-a.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: any;
        props: {
            items: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            id: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            header: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            body: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            disabled: {
                                name: string;
                                description: string;
                                required: boolean;
                            };
                            label?: undefined;
                            active?: undefined;
                            href?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onToggle: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            initiallyActiveItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItem: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItemHeader: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            themeItemBody: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            id?: undefined;
            header?: undefined;
            body?: undefined;
            active?: undefined;
            disabled?: undefined;
            themeItemHeaderDisabled?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            size?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            onChange?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            overlapBorder?: undefined;
            inactiveColor?: undefined;
            activeColor?: undefined;
            hoverColor?: undefined;
            bold?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/uncontrolled-accordion/examples/uncontrolled-accordion-example-basic.js");
            code: string;
            description: JSX.Element;
        }[];
    } | {
        name: string;
        description: JSX.Element;
        props: {
            items: {
                type: {
                    name: string;
                    value: {
                        name: string;
                        value: {
                            id: {
                                name: string;
                                required: boolean;
                                description?: undefined;
                            };
                            label: {
                                name: string;
                                required: boolean;
                                value?: undefined;
                                description?: undefined;
                            };
                            href: {
                                name: string;
                                required: boolean;
                                description?: undefined;
                            };
                            disabled: {
                                name: string;
                                required: boolean;
                                description?: undefined;
                            };
                            header?: undefined;
                            body?: undefined;
                            active?: undefined;
                        };
                    };
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            active: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            onChange: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: any;
                description: JSX.Element;
            };
            size: {
                type: {
                    name: string;
                    value: {
                        value: string;
                        computed: boolean;
                    }[];
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            overlapBorder: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            inactiveColor: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            activeColor: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            hoverColor: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            bold: {
                type: {
                    name: string;
                };
                required: boolean;
                defaultValue: string;
                description: JSX.Element;
            };
            id?: undefined;
            onToggle?: undefined;
            header?: undefined;
            body?: undefined;
            disabled?: undefined;
            themeItem?: undefined;
            themeItemHeader?: undefined;
            themeItemHeaderDisabled?: undefined;
            themeItemBody?: undefined;
            badgeText?: undefined;
            coloring?: undefined;
            tooltipText?: undefined;
            children?: undefined;
            variant?: undefined;
            onClick?: undefined;
            href?: undefined;
            width?: undefined;
            outline?: undefined;
            color?: undefined;
            corners?: undefined;
            block?: undefined;
            component?: undefined;
            passthroughProps?: undefined;
            iconBefore?: undefined;
            iconSize?: undefined;
            text?: undefined;
            code?: undefined;
            highlightedCode?: undefined;
            copyRanges?: undefined;
            maxHeight?: undefined;
            onCopy?: undefined;
            highlightThemeCss?: undefined;
            characterWidth?: undefined;
            autoFocus?: undefined;
            onButtonClick?: undefined;
            theme?: undefined;
            buttonType?: undefined;
            title?: undefined;
            titleSize?: undefined;
            options?: undefined;
            legend?: undefined;
            value?: undefined;
            optional?: undefined;
            aside?: undefined;
            icon?: undefined;
            validationError?: undefined;
            themeCheckboxContainer?: undefined;
            themeCheckbox?: undefined;
            themeControlWrapper?: undefined;
            themeLegend?: undefined;
            label?: undefined;
            initialDisplayValue?: undefined;
            themeControlFile?: undefined;
            themeControlFileClear?: undefined;
            themeLabel?: undefined;
            themeRadioContainer?: undefined;
            themeRadio?: undefined;
            themeControlRange?: undefined;
            themeControlSelect?: undefined;
            themeControlSelectContainer?: undefined;
            themeControlSwitchContainer?: undefined;
            themeControlSwitch?: undefined;
            type?: undefined;
            noAuto?: undefined;
            errorStyle?: undefined;
            popoverProps?: undefined;
            themeControlInput?: undefined;
            themeControlTextarea?: undefined;
            themeToggleGroup?: undefined;
            themeToggleContainer?: undefined;
            themeToggle?: undefined;
            activeItem?: undefined;
            focusTrapPaused?: undefined;
            truncated?: undefined;
            textEl?: undefined;
            className?: undefined;
            config?: undefined;
            renderForm?: undefined;
            handleFormData?: undefined;
            onCancel?: undefined;
            onSubmit?: undefined;
            testId?: undefined;
            themeButton?: undefined;
            goBack?: undefined;
            isBold?: undefined;
            isNewTab?: undefined;
            name?: undefined;
            inline?: undefined;
            gap?: undefined;
            iconAfter?: undefined;
            opaque?: undefined;
            style?: undefined;
            themeLoader?: undefined;
            isLoaded?: undefined;
            loader?: undefined;
            minDuration?: undefined;
            accessibleTitle?: undefined;
            onExit?: undefined;
            getApplicationNode?: undefined;
            initialFocus?: undefined;
            padding?: undefined;
            alert?: undefined;
            primaryAction?: undefined;
            secondaryAction?: undefined;
            tertiaryAction?: undefined;
            allowEventBubbling?: undefined;
            getAnchorElement?: undefined;
            placement?: undefined;
            alignment?: undefined;
            hasPointer?: undefined;
            hideWhenAnchorIsOffscreen?: undefined;
            allowPlacementAxisChange?: undefined;
            containWithinViewport?: undefined;
            clickOutsideCloses?: undefined;
            escapeCloses?: undefined;
            receiveFocus?: undefined;
            trapFocus?: undefined;
            onElement?: undefined;
            getInitialFocus?: undefined;
            ignoreClickWithinElement?: undefined;
            getContainingElement?: undefined;
            offsetFromAnchor?: undefined;
            zIndex?: undefined;
            observeSize?: undefined;
            content?: undefined;
            renderHiddenContent?: undefined;
            respondsToClick?: undefined;
            respondsToHover?: undefined;
            respondsToFocus?: undefined;
            passthroughTriggerProps?: undefined;
            onPopoverOpen?: undefined;
            onPopoverClose?: undefined;
            truncateBy?: undefined;
            themeItemActive?: undefined;
            themeItemTruncated?: undefined;
            themeItemActivePopover?: undefined;
            themeItemContainer?: undefined;
            themeItemDisabled?: undefined;
            textSize?: undefined;
            maxWidth?: undefined;
            initiallyActiveItem?: undefined;
        };
        examples: {
            exampleModule: typeof import("/Users/tristenbrown/dev/mapbox/mr-ui/src/components/underline-tabs/examples/underline-tabs-a.js");
            code: string;
            description: JSX.Element;
        }[];
    })[];
    export default _default;
}
declare module "src/docs/pages/index" {
    import { ReactElement } from 'react';
    export default function Page(): ReactElement;
}
declare module "src/test-cases-app/html" {
    const _exports: string;
    export = _exports;
}
declare module "src/test-cases-app/test-cases-app" {
    export default TestCasesApp;
    class TestCasesApp extends React.Component<any, any, any> {
        constructor(props: any);
        constructor(props: any, context: any);
        render(): JSX.Element;
    }
    import React from "react";
}
declare module "src/test-cases-app/index" {
    export {};
}
declare module "src/test-cases-app/test-cases-app-underreact.config" {
    function _exports(): {
        siteBasePath: string;
        jsEntry: string;
        htmlSource: string;
        devServerHistoryFallback: boolean;
        webpackConfigTransform: (config: any) => any;
    };
    export = _exports;
}
declare module "src/test-utils/jest-framework-setup" {
    export {};
}
declare module "src/test-utils/jest-setup" {
    export {};
}
