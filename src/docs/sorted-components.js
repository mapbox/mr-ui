import components from './data/components'; // eslint-disable-line

export default components.slice().sort((a, b) => {
  return a.name.localeCompare(b.name);
});
