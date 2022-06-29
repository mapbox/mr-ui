# Mapbox React Components Migration Guide
A running document that itemizes the differences between MRC and MR-UI components to aid migrating from one to the other

## Icon
Passing nested props to the Mr-UI icon will cause `shallowEqualObjects` to throw an error. If you spread props into an icon, you should be doubly aware of this change.

MRC's `themeIcon` prop has been replaced by `passthroughProps.className`.

## Popover
MRC's `themePopover` prop has been replaced by `passthroughProps.className`.