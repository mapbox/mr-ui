import React, { ReactElement } from 'react';
import AssemblyIntro from './assembly-intro';
import hljs from 'highlight.js';
import CodeSnippet from '../../components/code-snippet';
import { formatCodeForDisplay } from '../../components/utils/keybinding-formatters';
 
export default function KeyboardUtilities(): ReactElement {

  const code = hljs.highlightAuto(`
    import { formatCodeForDisplay } from "@mapbox/mr-ui/utils/keybinding-formatters";

    formatCodeForDisplay("Meta+Alt+Up");
  `);

    return (
    <section className="py24 mb36" id="formatCodeForDisplay">
      <AssemblyIntro name="formatCodeForDisplay">
        <>
          <p>
            Mr. UI provides a simple keyboard formatter to convert codes to
            nicely readable key combinations that adapt to either Mac or Windows.
          </p>

          <div className="mb24 bg-gray-dark round">
            <CodeSnippet code={code.value} />
          </div>

          Returns:{' '}
          <div>{`${formatCodeForDisplay('Meta+Alt+Up')}`}</div>
        </>
      </AssemblyIntro>
    </section>
  );
}
