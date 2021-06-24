import ChevronousText from '../chevronous-text';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ChevronousText,
  props: {
    text: 'Explore Mapbox'
  }
};

testCases.oneLongWord = {
  description: 'one long unwrappable word text',
  component: ChevronousText,
  props: {
    text: 'Pneumonoultramicroscopicsilicovolcanoconiosis'
  }
};

testCases.multilineText = {
  description: 'multiline text',
  component: ChevronousText,
  props: {
    text: '"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us..." - A Tale of Two Cities'
  }
};

testCases.sizedIcon = {
  description: 'sized icon',
  component: ChevronousText,
  props: {
    iconSize: 10,
    text: 'Cheers!'
  }
};

testCases.iconBeforeOneLongWord = {
  description: 'chevron before one long unwrappable word text',
  component: ChevronousText,
  props: {
    iconBefore: true,
    text: 'Lopadotemachoselachogaleokranioleipsanodrimhypotrimmatosilphioparaomelitokatakechymenokichlepikossyphophattoperisteralektryonoptekephalliokigklopeleiolagoiosiraiobaphetraganopterygon'
  }
};

testCases.iconBeforeMultilineText = {
  description: 'chevron before multiline text',
  component: ChevronousText,
  props: {
    iconBefore: true,
    text: '"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us..." - A Tale of Two Cities'
  }
};

testCases.sizedIconBeforeText = {
  description: 'sized icon before text',
  component: ChevronousText,
  props: {
    iconBefore: true,
    iconSize: '1.7em',
    text: 'Cheers!'
  }
};

export { testCases };
