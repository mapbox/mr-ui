# @mapbox/mr-ui

[![Build Status](https://travis-ci.com/mapbox/mr-ui.svg?token=FB2dZNVWaGo68KZnwz9M&branch=master)](https://travis-ci.com/mapbox/mr-ui)

Pronounced "Mister UI". **M**apbox **R**eact **UI** components.

UI components for Mapbox projects.

**This project is for internal Mapbox usage.** The code is open source and we appreciate bug reports; but we will only consider feature requests and pull requests from Mapbox developers.

## Installation

```
npm install @mapbox/mr-ui
```

## Usage

**Import individual components!** All components are exposed at `@mapbox/mr-ui/{component-name}`. For example:

```js
import Modal from '@mapbox/mr-ui/modal';
import Tooltip from '@mapbox/mr-ui/tooltip';
```

Only the component itself and whatever *it* depends on will be drawn into your bundle.

### Utility functions

There are a few utility functions you can import from `@mapbox/mr-ui/utils/{name}`.

See [the utils documentation](./src/components/utils/README.md).

## Development

Here are some commands you'll probably want to use:

```bash
# Start the test-cases app.
npm start

# Start the documentation site.
npm run start-docs

# Start Jest's CLI in watch mode.
npx jest --watchAll

# Lint and test everything.
npm test
```

### Publishing

The `build` command creates a `pkg/` directory that contains the code we want to publish, organized the way we want it. So `pkg/` is the directory that we publish. `pkg/package.json` is a clone of `package.json` but with `private: true` removed.

- Update all version numbers and create a Git tag.
- Build the `pkg/` directory: `npm run build`.
- `cd` into the `pkg/` directory and `npm run publish` from there.
