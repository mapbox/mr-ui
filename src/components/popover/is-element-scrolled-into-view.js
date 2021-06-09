import getScrollableParents from './get-scrollable-parents';

/**
 * Returns a boolean indicating whether an element is scrolled into
 * view. If it has no scrollable parent, this just means it's within
 * the viewport. If it does have a scrollable parent, this means that
 * both window and parent are scrolled such that the element is visible.
 *
 * Assumes there's only one level of sub-document scrolling involved,
 * i.e. one scrollable parent.
 *
 * @param {HTMLElement} element
 * @return {Boolean}
 */
export default function isElementScrolledIntoView(element) {
  const scrollableParents = getScrollableParents(element).filter((parent) => {
    return parent !== window;
  });

  const elementRect = element.getBoundingClientRect();
  if (scrollableParents.length > 0) {
    const scrollableParentRect = scrollableParents[0].getBoundingClientRect();
    if (
      scrollableParentRect.top > elementRect.top ||
      scrollableParentRect.bottom < elementRect.bottom
    ) {
      return false;
    }
  }

  const bodyTop = document.body.scrollTop;
  if (bodyTop > elementRect.top + bodyTop) return false;
  return bodyTop + window.innerHeight > elementRect.bottom + bodyTop;
}
