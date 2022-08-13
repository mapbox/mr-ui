/*
Basic.
*/
import React from 'react';
import hljs from 'highlight.js';
import CodeSnippet from '../code-snippet';

const code = hljs.highlightAuto(`
function fibonacci(n) {
  return n < 1 ? 0
    : n <= 2 ? 1
    : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(4))
`);

export default function Example() {
  return (
    <CodeSnippet code={code.value} />
  );
}
