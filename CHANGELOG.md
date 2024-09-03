## Changelog

## 2.10.3
- [feature] support onOpenChange handler for contextMenu

## 2.10.2
- [feature] upgrade @mapbox/mbx-assembly to 1.6.0

## 2.10.0
- [feature] upgrade to react 18 

## 2.9.0

- [feature] add customizable select UI component [#218](https://github.com/mapbox/mr-ui/pull/218)

## 2.8.0

- [feature] add additional style props to control-range for tighter styling control [#217](https://github.com/mapbox/mr-ui/pull/217)

## 2.7.1

- [fix] replace calls to getWindow with a simpler check [#216](https://github.com/mapbox/mr-ui/pull/216)

## 2.7.0

- [feature] add `margin` prop to `Modal` (compensates for new fixed header in Mapbox docs) [#214](https://github.com/mapbox/mr-ui/pull/214)

## 2.6.2

- [bug] `MinimumDurationLoader` mounts the underlying components twice if `minDuration` is reached before `isLoaded` is set to `true`.

## 2.6.1

- [fix] Incorrect directory was published to npm as 2.6.0

## 2.6.0

- [feature] Add optional children prop to control-file [#212](https://github.com/mapbox/mr-ui/pull/212)

## 2.5.1

- [fix] Improve contrast of tooltips [#208](https://github.com/mapbox/mr-ui/pull/208)

## 2.5.0

- [feature] Add **Context menu** component
- [chore] Upgraded radix-ui packages

## 2.4.0

- [feature] add `tooltipTextSize` option to copy-button.
- [fix] rename `themeTooltip` option to `tooltipColoring` to match convention.

## 2.3.1

- [bug] Fix layout bug introduced in copy-button changes where wrapper was given `inline-block`

## 2.3.0

- [feature] add optional `children` and `themeTooltip` props to copy-button. [#205](https://github.com/mapbox/mr-ui/pull/205)
- [bug] Modify `propType` for `displayValue` from `string` to `node`.

## 2.2.0

- [feature] Support JSX from `displayLabel` prop in control-file component

## 2.1.4

- [fix] Incorrect directory was published to npm as 2.1.3

## 2.1.3

- [fix] Fixes a crash when attempting server-side rendering with the `CopyButton` component. [#203](https://github.com/mapbox/mr-ui/pull/203)

## 2.1.2

- [fix] Add `events-none` to outer container and `events-all` to inner container to resolve activities around the Toast component.

## 2.1.1

- [fix] Remove `children` prop from **Toast** component.

## 2.1.0

- [feature] Add **Toast** component.
- [fix] Support `disabled` option in modal actions. [#199](https://github.com/mapbox/mr-ui/pull/199)

## 2.0.0

- [fix] added new styling for ControlToggleGroup component that is consistent with actual usage.
- [breaking] props changes to `src/components/control-range`
  - `value` is now accepts an array of numbers
- [feature] `src/components/control-range` now supports multi range with an additional `themeControlRangeActive` for providing classnames to the active member of the range track.
- [fix] `gap` prop in `src/components/icon-text` which was not in use.
- [breaking] Removed `isSupported` check in `src/components/copy-button`
- [breaking] props changes to `src/components/copy-button`
  - Dropped `textEl`
- [breaking] props changes to `src/components/control-file`
  - Dropped `label`
  - Dropped `themeLabel`
  - Dropped `aside`
  - Renamed `initialDisplayValue` to `displayValue`
  - Dropped 'themeControlFileClear'
- [breaking] Removed clear implementation in `src/components/control-file`. Just a button element that triggers <input type="file" /> is implemented.
- [breaking] Deletes `src/components/popover-trigger`
- [breaking] Rewrites `src/components/popover` as a functional component. 🚨 **Prop changes**:
  - Dropped `getAnchorElement`. Popover now behaves like Tooltip where the Popover is wrapped around the anchor, and a `content` prop provides the popover contents.
  - Added `content`
  - Dropped `receiveFocus`
  - Dropped `trapFocus`
  - Dropped `ignoreClickWithinElement`
  - Dropped `getContainingElement`
  - Dropped `onElement`
  - Dropped `zindex`
  - Dropped `observeSize`
  - Dropped `containWithinViewport`
- [breaking] Deletes `src/components/tab-list`
  - tab-list component was not used anywhere according to our audit and radix does not have support for such mobile functionality (such as displaying a popover for the rest of the tabs that do not fit on mobile)
- [breaking] Deletes `src/components/underline-tabs`
  - underline-tabs can be replaced with tabs component, except the new tabs component cannot handle links. In order to take full advantage of Radix out of the box functionality related to key bindings we need to let radix generate the buttons for tabs.
  - new tabs component also supports adding the tab content which will be rendered automatically when the tab changes
- [feature] Creates new component `src/components/tabs` and uses [`Tabs ` from Radix](https://www.radix-ui.com/docs/primitives/components/tabs).
- [breaking] Removed the following components that have been underutilized/no longer worth maintaining: Badge, ControlCard, ControlLegend, GoLink, Heading, and NewTabLink.
- [breaking] Rewrites `src/components/modal` as a functional component.and uses [`DialogPrimitive ` from Radix](https://www.radix-ui.com/docs/primitives/components/dialog#custom-apis). 🚨 **Prop changes**:
  - Dropped `alert`
  - Dropped `focusTrapPaused` which isn't exposed as an option from Radix
- [breaking] Rewrites `src/components/buttton` as a functional component. 🚨 **Prop changes**:
  - Dropped `component` which accepted a component or a string equally a DOM value.
  - Renamed `discouraging` to `tertiary`
- [breaking] Rewrites `src/components/tooltip` as a functional component.and uses [`TooltipPrimitive ` from Radix](https://www.radix-ui.com/docs/primitives/components/tooltip#custom-apis). 🚨 **Prop changes**:
  - Dropped `triggerprops`. This is no longer needed for Radix and will need to be considered when porting tooltips using the older version.
  - Dropped `respondsToClick` which triggers a tooltip on Click. Radix doesn't support it as it believes a tooltip shouldn't have this native behavior and I think we can get away without it - encouraging consumers to use a popup instead.
  - Dropped `alignment` has values `start` and `end` and **dropped** `top`, `bottom`, `left`, `right`.
  - Dropped `block` I'm not seeing strong usage of this property and I believe its a tradeoff we can make
  - Dropped `testId` Passing custom data attributes to the Radix tooltip isn't supported. There are other good ways to test the presence of tooltip contents like: `screen.getByRole('tooltip')` or by wrapping a child prop in a data test attribute.
- [breaking] Rewrites `src/components/control-switch` as a functional component.and uses [`swtich` from Radix](https://radix-website-git-release.modulz-deploys.com/docs/primitives/components/switch). 🚨 **Prop changes**:
  - Dropped `optional`: Additional text like "optional" should be applied by the consumer using the label prop.
  - Dropped `initialValue` and `validator` which were previously provided by the form component.
- [breaking] Rewrites `src/components/icon` as a functional component and uses [`accessible-icon` from Radix](https://www.radix-ui.com/docs/primitives/utilities/accessible-icon) as an internal primitive.
- [breaking] Rewrites `src/components/control-wrapper` as a functional component.
- [feature] Introduces TypeScript to the source code and converts:
  - `src/docs/*`
  - `src/components/utils/*`
  - `src/components/icon/*`
  - `src/components/control-wrapper/*`
- [feature] Adds React Testing Library to newly ported components
- [internal] Drop `src/test-cases-app` from the development workflow of this project.

## 2.0.0-beta.2

- [feature] Added rules for password validation: password must have one uppercase, one lowercase, one special char, one digit, and at least 8 chars long.

## 2.0.0-beta.1

- [feature] Remove unsafe lifecycle methods that cause React 16+ warnings.

- 🚨 [breaking change] Drop support for React 15.
- 🚨 [breaking change] Remove **ControlDate** component.
- 🚨 [breaking change] Remove `validateStartDateBeforeEndDate`.
- 🚨 [breaking change] Remove `onContentRender` property from **MinimumDurationLoader**.
- 🚨 [breaking change] Remove `errorTooltipTheme` and `errorTooltipBackgroundColor` properties from the **ControlText** component. These props can be specified in `popoverProps` instead as `backgroundColor` and `themePopover`.

- [fix] Watch **PopoverPosition** DOM children for size changes to reposition.
- [fix] Don't show **PopoverTrigger** (showBecauseClick) if clicked element is inside the container.

- [chore] Remove need for `xtend` dependency.

## 1.1.0

- [feature] Add new error popover style, improve warning popover style

## 1.0.0

- [feature] Trap events in modals by default
- [fix] Fix coloring values for popover
- [fix] rename unsafe lifecycle methods to eliminate warnings under React 16

## 0.12.0

- [feature] Update dependencies and add browserslist.

## 0.11.0

- [breaking] Migrate to Assembly 1+

## 0.10.0

- [feature] Add `inline` prop to `IconText` component.
- [fix] Only render "More +" in `TabList` when needed.

## 0.9.1

- [fix] Initialize `Clipboard` in **CopyButton** after it is destroyed so it can be copied again.

## 0.9.0

- [feature] Allow **ControlText** `value` to accept a number or a string.
- [fix] Destroy `Clipboard` after copy in **CopyButton** to prevent exaggerated scroll length in scrolled code snippets.

## 0.8.0

- [feature] Add `aria-label` to all components, test cases, and examples with buttons.

## 0.7.4

- [fix] Allow **TabList** label to accept a node.

## 0.7.3

- [feature] Allow the **CopyButton** and **Copiable** components to pass through the `focusTrapPaused` prop.

## 0.7.2

- [feature] Update `react-aria-modal` to v4.
- [feature] Allow the **modal** component to pass through the `focusTrapPaused` prop.

## 0.7.1

- [fix] Evaluate parentNode before removeChild in **page-loading-indicator** component.

## 0.7.0

- [feature] Add `zIndex` option to **Popover** component.

## 0.6.1

- [fix] fix issue that prevented popovers from recognizing the hasPointer prop.

## 0.6.0

- [feature] Add **Badge** component.

## 0.5.0

- 🚨 [breaking change] Remove **PageHeader** component.
- 🚨 [breaking change] Remove **FooterLegalStrip** component.

## 0.4.1-0.4.3

## 0.7.0

- [feature] Add `zIndex` option to **Popover** component.
- [fix] Update build script for Babel 7 to fix broken v0.4.0 publication.

## 0.4.0

- [feature] Add **PageHeader** component.
- [feature] Add **FooterLegalStrip** component.
- [feature] Add **ControlAlert** component.
- [feature] Add **ControlCard** component.
- [feature] Add **GoLink** component.
- [feature] Add **NewTabLink** component.
- **ChevronousText**
  - 🚨 [breaking change] Remove `themeIcon` prop.
  - [feature] Add `iconSize` prop.
  - [feature] Add `beforeIcon` prop.
- **Icon**
  - [feature] Allow `size` prop to be a number or string .

## 0.3.2

- [fix] Put `ControlFile`'s icon and text on the same line.

## 0.3.1

- [fix] Fix the release. **Don't use 0.3.0: use 0.3.1.**
- **Copiable**
  - [fix] Fix layout for server-side rendering.

## 0.3.0

- 🚨 [breaking change] Remove **IconButton** component.
- [feature] Add **Heading** component.
- [feature] Add **Button** component.
- [feature] Add **IconText** component.
- [feature] Add **UnderlineTabs** component.
- **Popover**
  - 🚨 [breaking change] Remove `themePopover`, `backgroundColor`, and `accessibleTitle` props.
  - 🚨 [breaking change] Rename `contentElementAttributes` prop to `passthroughProps`, to match incoming convention.
  - [feature] Add `coloring` and `padding`.
  - [chore] Update `focus-trap` and `tabbable` dependencies.
- **PopoverTrigger**
  - 🚨 [breaking change] Rename `triggerProps` prop to `passthroughTriggerProps`.
  - 🚨 [breaking change] Replace `display` prop with `block`.
  - [fix] If the trigger responds to focus but not click, and you focus the trigger _first_ and _then_ click, that click _closes_ the popover instead of leaving it open even after you move the mouse away.
  - [fix] If you use `disable` to disable a trigger with an open popover, the popover will hide.
- **CopyButton**
  - 🚨 [breaking change] Arbitrary props will not be passed through to the button.
  - 🚨 [breaking change] Remove `iconButtonProps` and `feedbackTime` props.
  - [feature] Add `block`, `className`, and `passthroughProps` props.
  - [feature] Add `CopyButton.copyIsSupported()` static function.
  - [feature] Improve appearance of copy instructions popover.
  - [fix] Works in modals.
- **Copiable**
  - 🚨 [breaking change] Remove `themeWrapper`, `themeCopyButtonContainer`, `themeCopyButton`, `themeText`, and `themeTooltip` props.
  - [feature] Add `truncate` prop.
- **Tooltip**
  - 🚨 [breaking change] Remove `backgroundColor` and `themeTooltip` props.
  - 🚨 [breaking change] Replace `display` prop with `block`.
  - [feature] Add `coloring`, `padding`, and `maxWidth` props.
  - [feature] Children of Tooltip no longer need to be functions! If you provide a standard DOM element (e.g. `<button>`, `<div>`, `<span>`) or a Button component, things will just work. You can still use a function if your trigger is a custom component.
- **Modal**
  - 🚨 [breaking change] Remove `underlayStyle`, `underlayProps`, `themeUnderlay`, `themeModal`, and `themeButtonClose` props.
  - 🚨 [breaking change] Rename `title` to `accessibleTitle`.
  - [feature] Add `padding`, `alert`, `primaryAction`, `secondaryAction`, and `tertiaryAction` props.
  - [fix] Modals taller than the viewport will now show padding above them: the browser will not longer automatically scroll down to the top of the modal.
  - [fix] Update `react-aria-modal` to get some bug fixes and focus-management improvements.
- **Icon**
  - 🚨 [breaking change] Remove `themeIcon` prop.
  - 🚨 [breaking change] Arbitrary props will not be passed through to the `<svg>`. Use `passthroughProps`.
  - [feature] Add `passthroughProps` prop.
  - [feature] Add `size` prop.
  - [fix] If `inline: true`, the corresponding style adjustment will be performed after updates as well as mounting.

## 0.2.1

- Add TabList component.

## 0.1.0

- Start this log.
