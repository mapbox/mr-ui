# Changelog

## HEAD

- Add **Heading** component.
- Add **Button** component.
- Add **IconText** component.
- Add **UnderlineTabs** component.
- **Popover**
  - 🚨 **Breaking change:** Remove `themePopover`, `backgroundColor`, and `accessibleTitle` props.
  - 🚨 **Breaking change:** Rename `contentElementAttributes` prop to `passthroughProps`, to match incoming convention.
  - Add `coloring` and `padded`.
  - Update `focus-trap` and `tabbable` dependencies.
- **PopoverTrigger**
  - 🚨 **Breaking change:** Rename `triggerProps` to `passthroughTriggerProps`.
  - If the trigger responds to focus but not click, and you focus the trigger *first* and *then* click, that click *closes* the popover instead of leaving it open even after you move the mouse away.
- **CopyButton**
  - *Fix:* Works in modals.
- **Tooltip**
  - 🚨 **Breaking change:** Remove `backgroundColor` and `themeTooltip` props.
  - Add `coloring` and `padded` props.
  - Children of Tooltip no longer need to be functions! If you provide a standard DOM element (e.g. `<button>`, `<div>`, `<span>`) or a Button component, things will just work. You can still use a function if your trigger is a custom component.

## 0.2.1

- Add TabList component.

## 0.1.0

- Start this log.
