import * as isMacModule from './is-mac';
 
import {
  transformCode,
  formatCode,
  parseCode,
  formatCodeForDisplay
} from './keybinding-formatters';

jest.mock('./is-mac', () => ({
  isMac: jest.fn(() => true)
}));

describe('transformCode', () => {
  it('works on single items (mac)', () => {
    (isMacModule.isMac).mockReturnValue(true);
    expect(transformCode('mod+p')).toEqual('command+p');
  });

  it('works on single items (non-mac)', () => {
    (isMacModule.isMac).mockReturnValue(false);
    expect(transformCode('mod+p')).toEqual('ctrl+p');
  });

  it('works on arrays (mac)', () => {
    (isMacModule.isMac).mockReturnValue(true);
    expect(transformCode(['mod+p', 'mod+z'])).toEqual([
      'command+p',
      'command+z'
    ]);
  });

  it('works on arrays (non-mac)', () => {
    (isMacModule.isMac).mockReturnValue(false);
    expect(transformCode(['mod+p', 'mod+z'])).toEqual(['ctrl+p', 'ctrl+z']);
  });
});

describe('Format keyCodes', () => {
  test('parseCode', () => {
    const p = parseCode;
    const out = {
      altKey: false,
      ctrlKey: false,
      keyCode: -1,
      metaKey: false,
      shiftKey: false
    };
    expect(p('a')).toEqual({ ...out, keyCode: 65 });
    expect(p('?')).toEqual({ ...out, keyCode: 191, shiftKey: true });
    expect(p('escape')).toEqual({ ...out, keyCode: 27 });
    expect(p('1')).toEqual({ ...out, keyCode: 49 });
    expect(p('!')).toEqual({ ...out, keyCode: 49, shiftKey: true });
    expect(p('command+alt+up')).toEqual({
      ...out,
      keyCode: 38,
      altKey: true,
      metaKey: true
    });
    expect(p('ctrl+alt+up')).toEqual({
      ...out,
      keyCode: 38,
      altKey: true,
      metaKey: false,
      ctrlKey: true
    });
    expect(p('shift+left')).toEqual({ ...out, keyCode: 37, shiftKey: true });
    expect(p('⇧1')).toEqual({ ...out, keyCode: 49, shiftKey: true });
    expect(p('⌘V')).toEqual({ ...out, keyCode: 86, metaKey: true });
  });

  test('formatCode', () => {
    const p = x => formatCode(parseCode(x));
    expect(p('a')).toEqual(['a']);
    expect(p('?')).toEqual(['?']);
    expect(p('escape')).toEqual(['⎋']);
    expect(p('1')).toEqual(['1']);
    expect(p('!')).toEqual(['!']);
    expect(p('command+alt+up')).toEqual(['⌘', '⌥', '↑']);
    expect(p('ctrl+alt+up')).toEqual(['⌥', '⌃', '↑']);
    expect(p('shift+left')).toEqual(['⇧', '←']);
    expect(p('⇧1')).toEqual(['!']);
    expect(p('⌘V')).toEqual(['⌘', 'v']);
  });

  test('formatCodeForDisplay (Mac)', () => {
    (isMacModule.isMac).mockReturnValue(true);
    expect(formatCodeForDisplay('a')).toEqual(['a']);
    expect(formatCodeForDisplay('escape')).toEqual(['⎋']);
    expect(formatCodeForDisplay('backspace')).toEqual(['Del']);
    expect(formatCodeForDisplay('command+alt+up')).toEqual(['⌘', '⌥', '↑']);
    expect(formatCodeForDisplay('shift+left')).toEqual(['⇧', '←']);
  });

  test('formatCodeForDisplay (non-Mac)', () => {
    (isMacModule.isMac).mockReturnValue(false);
    expect(formatCodeForDisplay('a')).toEqual(['a']);
    expect(formatCodeForDisplay('escape')).toEqual(['⎋']);
    expect(formatCodeForDisplay('backspace')).toEqual(['Del']);
    expect(formatCodeForDisplay('command+alt+up')).toEqual([
      'Ctrl ',
      'Alt ',
      '↑'
    ]);
    expect(formatCodeForDisplay('shift+left')).toEqual(['Shift ', '←']);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
