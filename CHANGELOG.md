# Changelog

## HEAD

- Add **Heading** component.
- Add **Button** component.
- Add **IconText** component.
- Add **UnderlineTabs** component.
- **Popover**
  - Remove `themePopover`, `backgroundColor`, and `accessibleTitle` props.
  - Add `coloring` and `padded`.
  - Rename `contentElementAttributes` prop to `passthroughProps`, to match incoming convention.
  - Update `focus-trap` and `tabbable` dependencies.
- **PopoverTrigger**
  - *Fix:* If the trigger responds to focus but not click, and you focus the trigger *first* and *then* click, that click *closes* the popover instead of leaving it open even after you move the mouse away.
- **CopyButton**
  - *Fix:* Works in modals.
- **Tooltip**
  - Remove `backgroundColor` and `themeTooltip` props.
  - Add `coloring` and `padded` props.

## 0.2.1

- Add TabList component.

## 0.1.0

- Start this log.
