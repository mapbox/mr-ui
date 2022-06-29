import isEmptyControlValue from './is-empty-control-value';
import indefiniteArticle from './indefinite-article';

export default function validateRequired(partial, full) {
  if (!partial && !full) {
    throw new Error('Provide a partial or full message to validateRequired');
  }
  return (value) => {
    if (!isEmptyControlValue(value)) {
      return '';
    }
    if (full) {
      return full;
    }
    if (partial) {
      return `Please enter ${indefiniteArticle(partial)}`;
    }
  };
}
