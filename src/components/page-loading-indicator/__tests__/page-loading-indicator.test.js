import delay from 'delay';
import pageLoadingIndictor from '../page-loading-indicator';

describe('pageLoadingIndictor.start', () => {
  afterEach(() => {
    pageLoadingIndictor._reset();
  });

  test('adds indicator to the DOM', () => {
    const el = pageLoadingIndictor.start();
    expect(el).toBeTruthy();
    expect(el.className).toMatch(/[\b]?page-loading-indicator[\b]?/);
  });

  test('indicator receives enter class after a short delay', () => {
    const el = pageLoadingIndictor.start();
    expect(el.className).toMatch(/[\b]?page-loading-indicator[\b]?/);
    return delay(10).then(() => {
      expect(el.className).toMatch(/[\b]?page-loading-indicator[\b]?/);
      expect(el.className).toMatch(/[\b]?page-loading-indicator-enter[\b]?/);
    });
  });

  test('does not create duplicate elements', () => {
    const els = [];
    els.push(pageLoadingIndictor.start());
    els.push(pageLoadingIndictor.start());
    expect(els.filter((x) => !!x).length).toBe(1);
  });
});

describe('pageLoadingIndictor.end', () => {
  afterEach(() => {
    pageLoadingIndictor._reset();
    return delay(500);
  });

  test('changes enter class to leave class after 300 ms', () => {
    const el = pageLoadingIndictor.start();
    pageLoadingIndictor.end();
    return delay(10)
      .then(() => {
        expect(el.className).toMatch(/[\b]?page-loading-indicator[\b]?/);
        expect(el.className).toMatch(/[\b]?page-loading-indicator-enter[\b]?/);
        expect(el.className).not.toMatch(
          /[\b]?page-loading-indicator-leave[\b]?/
        );
        return delay(400);
      })
      .then(() => {
        expect(el.className).toMatch(/[\b]?page-loading-indicator[\b]?/);
        expect(el.className).not.toMatch(
          /[\b]?page-loading-indicator-enter[\b]?/
        );
        expect(el.className).toMatch(/[\b]?page-loading-indicator-leave[\b]?/);
        // Final delay is necessary to allow the dismount to finish.
        return delay(300);
      });
  });

  test('removes the indicator from the DOM after another 300ms', () => {
    const el = pageLoadingIndictor.start();
    pageLoadingIndictor.end();
    return delay(10)
      .then(() => {
        expect(el.parentElement).toBeTruthy();
        return delay(400);
      })
      .then(() => {
        expect(el.parentElement).toBeTruthy();
        return delay(300);
      })
      .then(() => {
        expect(el.parentElement).toBe(null);
      });
  });
});
