# @mapbox/mr-ui

![mr-ui logo](https://github.com/mapbox/mr-ui/raw/main/logo/mr-ui.gif)

Pronounced `'mis-tər yü-'ī`. **M**apbox **R**eact **UI** components.

UI components for Mapbox projects. See docs at https://mapbox.github.io/mr-ui/.

**This project is for internal Mapbox usage.** The code is open source and we appreciate bug reports; but we will only consider feature requests and pull requests from Mapbox developers.

## Installation

```
npm install @mapbox/mr-ui
```

On Mapbox projects, pair these components with version 1.1.0+ of Mapbox's custom [Assembly](https://labs.mapbox.com/assembly/) build. (This is not in `peerDependencies` because you might use `<link>` and `<script>` tags instead of the npm package.)

The public Assembly build should work fine, with maybe one or two hiccups.

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
# Start the documentation site.
npm start

# Start Jest's CLI in watch mode.
npx jest --watchAll

# Lint and test everything.
npm test
```

### Publishing

The `build` command creates a `pkg/` directory that contains the code we want to publish, organized the way we want it. So `pkg/` is the directory that we publish. `pkg/package.json` is a clone of `package.json` but with `private`/`scripts`/`devDependencies` removed.

Publishing is automated via the `NPM release` GitHub Actions workflow, triggered by pushing a version tag:

- Increment version numbers in `package.json` and `package-lock.json`, and ensure the changelog has an entry for the latest version. Commit this.
- Create a Git tag matching the version, prefixed with `v`: `git tag v2.25.0`.
- Push the tag: `git push origin v2.25.0`.
- This triggers the workflow, which builds `pkg/` and publishes it via [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/) (OIDC) — no npm token needed. It also builds and deploys the docs to https://mapbox.github.io/mr-ui/.
- Any prerelease tag (a version containing `-`, e.g. `v2.25.0-dev.0`) publishes under the npm `dev` dist-tag instead of `latest`, for testing a release without affecting `latest` consumers - dev releases don't touch the live docs site.
