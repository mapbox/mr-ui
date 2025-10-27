import { isMac } from './is-mac';

/**
 * Modifier key should be Command on macOS and Ctrl for Windows/Linux.
 *
 * Using {@link isMac} instead of Mousetrap's native `'mod'` so it's more predictable.
 */
export const transformCode = (code: string | string[]) => {
  const mod = isMac() ? 'command' : 'ctrl';

  if (Array.isArray(code)) {
    return code.map(item => item.split('mod').join(mod));
  } else {
    return code.split('mod').join(mod);
  }
};

/**
 * Keycodes, modifier codes,
 * and anything else that can be typed,
 * compiled into a big lookup table.
 */
const modifierCodes = {
  // Shift key, ⇧
  '⇧': 16,
  shift: 16,
  // CTRL key, on Mac: ⌃
  '⌃': 17,
  ctrl: 17,
  // ALT key, on Mac: ⌥ (Alt)
  '⌥': 18,
  alt: 18,
  option: 18,
  // META, on Mac: ⌘ (CMD), on Windows (Win), on Linux (Super)
  '⌘': 91,
  meta: 91,
  cmd: 91,
  command: 91,
  super: 91,
  win: 91
};

const modifierProperties = {
  '16': 'shiftKey',
  '17': 'ctrlKey',
  '18': 'altKey',
  '91': 'metaKey'
};

// Initiate hotKeys as an empty object to fight off flow errors.
const hotKeys = {};

Object.assign(hotKeys, {
  // Backspace key, on Mac: ⌫ (Backspace)
  '⌫': 8,
  backspace: 8,
  // Tab Key, on Mac: ⇥ (Tab), on Windows ⇥⇥
  '⇥': 9,
  '⇆': 9,
  tab: 9,
  // Return key, ↩
  '↩': 13,
  return: 13,
  enter: 13,
  '⌅': 13,
  // Pause/Break key
  pause: 19,
  'pause-break': 19,
  // Caps Lock key, ⇪
  '⇪': 20,
  caps: 20,
  'caps-lock': 20,
  // Escape key, on Mac: ⎋, on Windows: Esc
  '⎋': 27,
  escape: 27,
  esc: 27,
  // Space key
  space: 32,
  // Page-Up key, or pgup, on Mac: ↖
  '↖': 33,
  pgup: 33,
  'page-up': 33,
  // Page-Down key, or pgdown, on Mac: ↘
  '↘': 34,
  pgdown: 34,
  'page-down': 34,
  // END key, on Mac: ⇟
  '⇟': 35,
  end: 35,
  // HOME key, on Mac: ⇞
  '⇞': 36,
  home: 36,
  // Insert key, or ins
  ins: 45,
  insert: 45,
  // Delete key, on Mac: ⌦ (Delete)
  '⌦': 46,
  del: 46,
  delete: 46,
  // Left Arrow Key, or ←
  '←': 37,
  left: 37,
  'arrow-left': 37,
  // Up Arrow Key, or ↑
  '↑': 38,
  up: 38,
  'arrow-up': 38,
  // Right Arrow Key, or →
  '→': 39,
  right: 39,
  'arrow-right': 39,
  // Up Arrow Key, or ↓
  '↓': 40,
  down: 40,
  'arrow-down': 40,
  // odities, printing characters that come out wrong:
  // Num-Multiply, or *
  '*': 106,
  star: 106,
  asterisk: 106,
  multiply: 106,
  // Num-Plus or +
  '+': 107,
  plus: 107,
  // Num-Subtract, or -
  '-': 109,
  subtract: 109,
  // Semicolon
  ';': 186,
  semicolon: 186,
  // = or equals
  '=': 187,
  equals: 187,
  // Comma, or ,
  ',': 188,
  comma: 188,
  //'-': 189, //???
  // Period, or ., or full-stop
  '.': 190,
  period: 190,
  'full-stop': 190,
  // Slash, or /, or forward-slash
  '/': 191,
  slash: 191,
  'forward-slash': 191,
  // Tick, or `, or back-quote
  '`': 192,
  tick: 192,
  'back-quote': 192,
  // Open bracket, or [
  '[': 219,
  'open-bracket': 219,
  // Back slash, or \
  '\\': 220,
  'back-slash': 220,
  // Close backet, or ]
  ']': 221,
  'close-bracket': 221,
  // Apostrophe, or Quote, or '
  "'": 222,
  quote: 222,
  apostrophe: 222
});

// NUMPAD 0-9
let i = 95;
let n = 0;

while (++i < 106) {
  hotKeys['num-' + n] = i;
  ++n;
}

// 0-9
i = 47;
n = 0;
while (++i < 58) {
  hotKeys['' + n] = i;
  ++n;
}

// F1-F25
i = 111;
n = 1;
while (++i < 136) {
  hotKeys['f' + n] = i;
  ++n;
}

// ;-a-z
i = 63;
while (++i < 91) {
  hotKeys[String.fromCharCode(i).toLowerCase()] = i;
}

// these non-letter keys imply a shift key on US keyboards
const shiftEquivalents = [
  ['~', '`'],
  ['!', '1'],
  ['@', '2'],
  ['#', '3'],
  ['$', '4'],
  ['%', '5'],
  ['^', '6'],
  ['&', '7'],
  ['*', '8'],
  ['(', '9'],
  [')', '0'],
  ['_', '-'],
  ['+', '='],
  [':', ';'],
  ['"', "'"],
  ['<', ','],
  ['>', '.'],
  ['?', '/']
];

const unshiftedKeys = shiftEquivalents.reduce((memo, key) => {
  memo[hotKeys[key[1]]] = key[0];
  return memo;
}, {});

const shiftedKeys = shiftEquivalents.reduce((shiftedKeys, key) => {
  shiftedKeys[key[0]] = hotKeys[key[1]];
  return shiftedKeys;
}, {});

type ParsedCode = {
  keyCode: number;
  shiftKey: boolean;
  ctrlKey: boolean;
  altKey: boolean;
  metaKey: boolean;
};

/**
 * parse a key code given as a string
 * into an object of expectations used
 * to match keystrokes.
 * @param {String} input a string of a keycode combination
 * @returns {Object} expectations
 * @example
 * parseCode('a');
 */
export const parseCode = (input: string): ParsedCode => {
  const code = input.toLowerCase().match(/(?:(?:[^+⇧⌃⌥⌘])+|[⇧⌃⌥⌘]|\+\+|^\+$)/g);

  const event: {
    shiftKey: boolean;
    ctrlKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    keyCode: number;
  } = {
    shiftKey: false,
    ctrlKey: false,
    altKey: false,
    metaKey: false,
    keyCode: -1
  };

  if (Array.isArray(code)) {
    for (let i = 0; i < code.length; i++) {
      // Make sure to convert 'mod' into either 'command' or 'ctrl' based
      // on platform.
      let codePart = transformCode(code[i]);

      // Normalise matching errors.
      if (codePart === '++') {
        codePart = '+';
      }

      if (typeof codePart === 'string') {
        if (codePart in modifierCodes) {
          const modCode = modifierCodes[codePart];
          const propName = modifierProperties[modCode];
          if (propName) {
            event[propName] = true;
          }
        } else if (codePart in shiftedKeys) {
          event.keyCode = shiftedKeys[codePart];
          event.shiftKey = true;
        } else if (codePart in hotKeys) {
          event.keyCode = hotKeys[codePart];
        }
      }
    }
  }

  return event;
};

const findShortestIdentifiers = set => {
  const reversed = {};
  let k;

  for (k in set) {
    const id = set[k];
    if (reversed[id] === undefined) reversed[id] = [];
    reversed[id].push(k);
  }
  const shorter = (a, b) => {
    return a.length - b.length;
  };
  for (k in reversed) {
    reversed[k] = reversed[k].sort(shorter)[0];
  }
  return reversed;
};

const shortest = {
  modifierCodes: findShortestIdentifiers(modifierCodes),
  keyCodes: findShortestIdentifiers(hotKeys)
};

/**
 * Format a key code combination into an array of shortest-possible
 * key identifiers
 * @param {Object} input parsed keybinding
 * @returns {Array<String>} array of identifiers
 * @example
 * formatCode(parseCode('a'));
 */
export const formatCode = (input: ParsedCode): string[] => {
  const formatted = [];

  // The key code is the same for '!' and '1'. For '!', input.shiftKey = true.
  // This little bit helps separate '!' from 'shift+cmd+z' (redo).
  const shiftedCode = Object.prototype.hasOwnProperty.call(
    unshiftedKeys,
    input.keyCode
  )
    ? unshiftedKeys[input.keyCode]
    : false;

  // The shift key is a modifier when used in context of redo, where the formatted
  // output should show ⇧. For '!', we don't want to show '⇧ 1' (or '⇧ !').
  const shiftKeyIsModifier = input.shiftKey && !shiftedCode;

  if (shiftKeyIsModifier) {
    // Add that shift key
    formatted.push(shortest.modifierCodes[16]);
  }
  if (input.metaKey) formatted.push(shortest.modifierCodes[91]);
  if (input.altKey) formatted.push(shortest.modifierCodes[18]);
  if (input.ctrlKey) formatted.push(shortest.modifierCodes[17]);

  // '!', '@', '#'
  if (input.shiftKey && shiftedCode) {
    formatted.push(shiftedCode);
  } else if (input.keyCode !== -1) {
    const shortCode = shortest.keyCodes[input.keyCode];
    formatted.push(shortCode ? shortCode : input.keyCode.toString());
  }

  return formatted;
};

// Turn Mac-specific characters into OS-general ones.
const macKeyAlernatives = {
  '⌘': 'Ctrl ',
  '⌥': 'Alt ',
  '⇧': 'Shift '
};

export const formatCodeForDisplay = (code: string): string[] => {
  const isMacCached = isMac();
  return formatCode(parseCode(code)).map(key => {
    // Circumventing bad glyphs in our monospaced font.
    if (key === '⌫') {
      return 'Del';
    }
    return isMacCached ? key : macKeyAlernatives[key] || key;
  });
};
