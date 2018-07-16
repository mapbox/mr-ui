export default function maybeAddPeriod(text) {
  if (!text) return text;
  const trimmedText = text.trim();
  const lastChar = trimmedText[trimmedText.length - 1];
  if (lastChar === '.' || lastChar === '!' || lastChar === '?')
    return trimmedText;
  return trimmedText + '.';
}
