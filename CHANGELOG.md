# Changelog

## 0.6.0
- [feature] Add **Badge** component.

## 0.5.0

- 🚨 [breaking change] Remove **PageHeader** component.
- 🚨 [breaking change] Remove **FooterLegalStrip** component.

## 0.4.1-0.4.3
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
  - [fix] If the trigger responds to focus but not click, and you focus the trigger *first* and *then* click, that click *closes* the popover instead of leaving it open even after you move the mouse away.
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
