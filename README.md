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

Pull Requests merged to `main` with conventional commit prefixes are automatically published to npm by the `NPM release` GitHub Actions workflow, as new major/minor/patch versions (`feat!:`/`feat:`/`fix:` respectively). When using "Squash and merge", ensure your PR title includes the conventional commit prefix; a `BREAKING CHANGE:` footer only counts if it ends up in the squash commit's body. Other prefixes (`chore:`, `docs:`, etc.) or no prefix don't trigger a release.

Examples:
- `fix: resolved issue with dropdowns` -> patch
- `feat: added dropdowns` -> minor
- `feat!: Overhauled dropdowns` (requires manual migration work) -> major

The workflow builds `pkg/` and publishes it via [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/) (OIDC) — no npm token needed. It then creates a GitHub Release with generated notes, comments the released version on the merged PRs, and builds and deploys the docs to https://mapbox.github.io/mr-ui/.

`package.json`'s `version` may be incremented manually if needed (for example, to skip a minor version), but you shouldn't normally need to touch it; the published npm version, not `package.json`, is the source of truth for what gets released next.

#### Pre-release versions on other branches

For testing in downstream projects, you can manually trigger the "NPM release" workflow on a branch to publish a pre-release tagged with the short commit sha (e.g. `2.24.3-aa79c6a`) under the npm `prerelease` dist-tag, without affecting `latest` or the live docs site. Check the workflow results for the published version.
