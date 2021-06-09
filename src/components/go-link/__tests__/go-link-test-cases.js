import GoLink from '../go-link';

const testCases = {};

testCases.basic = {
  description: 'basic go forward link',
  component: GoLink,
  props: {
    href: 'http://www.mapbox.com',
    text: 'Read Mapbox'
  }
};

testCases.multilineTextGoForward = {
  description: 'multiline text, go forward link',
  component: GoLink,
  props: {
    href: 'http://www.mapbox.com',
    text: '"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us..." - A Tale of Two Cities'
  }
};

testCases.smallGoForward = {
  description: 'small go forward link',
  component: GoLink,
  props: {
    size: 'small',
    href: 'http://www.mapbox.com',
    text: "Maybe there's something cool if you go here"
  }
};

testCases.largeGoForward = {
  description: 'large go forward link',
  component: GoLink,
  props: {
    size: 'large',
    href: 'http://www.mapbox.com',
    text: 'Reach for the stars'
  }
};

testCases.unboldedGoForward = {
  description: 'unbolded go forward link',
  component: GoLink,
  props: {
    href: 'http://www.mapbox.com',
    isBold: false,
    text: 'Go to Mapbox'
  }
};

testCases.lightGoForward = {
  description: 'light go forward link',
  component: GoLink,
  props: {
    color: 'light',
    href: 'http://www.mapbox.com',
    text: 'View all of Mapbox'
  }
};

testCases.newTabGoForward = {
  description: 'go forward new tab link',
  component: GoLink,
  props: {
    href: 'http://www.mapbox.com',
    isNewTab: true,
    text: 'See all of the things'
  }
};

testCases.smallUnboldedNewTabGoBack = {
  description: 'small, unbolded, go back new tab link',
  component: GoLink,
  props: {
    goBack: true,
    href: 'http://www.mapbox.com',
    isBold: false,
    isNewTab: true,
    size: 'small',
    text: 'Jusk kidding! Go back to this new place.'
  }
};

export { testCases };
