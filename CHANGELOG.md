# Changelog

## HEAD

- [feature] Add **Heading** component.
- [feature] Add **Button** component.
- [feature] Add **IconText** component.
- [feature] Add **UnderlineTabs** component.
- **Popover**
  - 🚨 [breaking change] Remove `themePopover`, `backgroundColor`, and `accessibleTitle` props.
  - 🚨 [breaking change] Rename `contentElementAttributes` prop to `passthroughProps`, to match incoming convention.
  - [feature] Add `coloring` and `padded`.
  - [chore] Update `focus-trap` and `tabbable` dependencies.
- **PopoverTrigger**
  - 🚨 [breaking change] Rename `triggerProps` to `passthroughTriggerProps`.
  - [fix] If the trigger responds to focus but not click, and you focus the trigger *first* and *then* click, that click *closes* the popover instead of leaving it open even after you move the mouse away.
- **CopyButton**
  - [fix] Works in modals.
- **Tooltip**
  - 🚨 [breaking change] Remove `backgroundColor` and `themeTooltip` props.
  - [feature] Add `coloring`, `padded`, and `maxWidth` props.
  - [feature] Children of Tooltip no longer need to be functions! If you provide a standard DOM element (e.g. `<button>`, `<div>`, `<span>`) or a Button component, things will just work. You can still use a function if your trigger is a custom component.

## 0.2.1

- Add TabList component.

## 0.1.0

- Start this log.
