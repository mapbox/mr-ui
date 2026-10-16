/**
 * `data-*` attributes for `passthroughProps`. JSX attributes allow hyphenated
 * names implicitly, but object literals checked against React's
 * `HTMLAttributes`/`SVGProps` do not.
 */
export type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean;
};
