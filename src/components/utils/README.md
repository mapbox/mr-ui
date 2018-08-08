# Utils

All utils can be imported from `@mapbox/mr-ui/utils/{name}`.

## getWindow

```js
import getWindow from '@mapbox/mr-ui/utils/get-window';
```

Wraps `window` to make it easy to mock aspects of the browser environment while testing.

## shallowEqualObjects

```js
import shallowEqualObjects from '@mapbox/mr-ui/utils/shallow-equal-objects';

shallowEqualObjects(
  a: Object,
  b: Object,
  allowedObjectKeys: Array<string>
): boolean;
```

Returns `true` if every property of `a` is equal to (with `===`) every property of `b`.

Unlike some other shallow-compare functions, this one will *not* return true if `a === b`. Instead, it *only* evaluates based on the values of the object's properties.

This check is *not* recursive. But `allowObjectKeys` can be used to add *one level* of depth to the check: properties whose keys are in the `allowedObjectKeys` array will themselves be checked with `shallowEqualObjects`, instead of just `===`.

If you try to `shallowEqualObjects` to compare objects with values that are not primitives or functions and do not match an exception in `allowObjectKeys`, an error will be thrown.

## maybeAddPeriod

```js
import maybeAddPeriod from '@mapbox/mr-ui/utils/maybe-add-period';
```

Adds a period to the end of your sentence if there isn't already sentence-ending punctuation.

## omit

```js
import omit from '@mapbox/mr-ui/utils/omit';
```

Selectively clones an object, omitting the specified properties.

## styles

The `styles` util includes two things:

1. A set of class constants that align to Mapbox Styleguide styles.
2. A set of utilities for using the class constants.

### Installation

```js
import styles from '@mapbox/mr-ui/utils/styles';
```

### API

`styles.js` maintains state of a `style` object and exports three functions:

#### getStyle

Get the corresponding style rules for a given constant.

```js
getStyle('h1');

// 'txt-h1-mm txt-h2 txt-fancy'
```

Pass an array of strings as an optional second argument in order to exclude classes from the style constant:

```js
getStyle('h1', ['txt-fancy']);

// 'txt-h1-mm txt-h2'
```

#### mergeStyles

Use this method to combine a set of constants with existing constants.

```js
mergeStyles({
  h1: 'some nice classes',
  foo: 'bar'
});

/*
_styles ->
{
  h1: 'some nice classes',
  h2: 'txt-h2-mm txt-h3 txt-fancy mb6',
  ...
  foo: 'bar'
}
*/

```

#### setStyles

Set the contents of the `styles` object. Overrides existing constants. Use this method if you do not want to use the default values in `src/styles.js`:

```js
setStyles({ foo: 'bar' });

/*
_styles ->
{
  foo: 'bar'
}
*/

```

### Example usage

Use the  `styles` util to set the className property in React components:

```js
import { mergeStyles, getStyle } from '../src/styles';

mergeStyles({
  specialHeading: 'some fun classes',
  specialParagraph: 'more fun classes'
});

class Example extends React.Component {
  render() {
    return (
    <div>
      <div className={getStyle('specialHeading')}>
      Hello world!
      </div>
      <div className={getStyle('h1', ['txt-fancy'])}>
      Goodbye world!
      </div>
    </div>);
  }
}

/*
<div>
  <div class='some fun classes'>
  Hello world!
  </div>
  <div class='txt-h1-mm txt-h2 mb6'>
  Goodbye world!
  </div>
</div>
*/

```
