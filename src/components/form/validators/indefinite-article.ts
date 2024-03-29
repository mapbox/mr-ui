export default function indefiniteArticle(noun: string): string {
  const article = /[aeiou]/i.test(noun.charAt(0)) ? 'an' : 'a';
  return `${article} ${noun}`;
}
