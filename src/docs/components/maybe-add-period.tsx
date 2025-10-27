import React, { ReactElement } from 'react';
import AssemblyIntro from './assembly-intro';
import hljs from 'highlight.js';
import CodeSnippet from '../../components/code-snippet';
import maybeAddPeriod from '../../components/utils/maybe-add-period';
 
export default function MaybeAddPeriod(): ReactElement {

  const code = hljs.highlightAuto(`
import maybeAddPeriod from "@mapbox/mr-ui/utils/maybe-add-period";

maybeAddPeriod("");
maybeAddPeriod("Jump for joy!");
maybeAddPeriod("Jump for joy?");
maybeAddPeriod("Jump for joy");
  `);

    return (
    <section className="py24 mb36" id="maybeAddPeriod">
      <AssemblyIntro name="maybeAddPeriod">
        <>
          <p>
            Adds a period to a string if necessary. Skips adding a period to text that has a punctuation mark for example.
            Useful for programmatically formatting text (like Mapbox style specification docs!)
          </p>

          <div className="mb24 bg-gray-dark round">
            <CodeSnippet code={code.value} />
          </div>

          Returns:{' '}
          <>
            <div>{`${maybeAddPeriod('')}`}</div>
            <div>{`${maybeAddPeriod('Jump for joy!')}`}</div>
            <div>{`${maybeAddPeriod('Jump for joy?')}`}</div>
            <div>{`${maybeAddPeriod('Jump for joy')}`}</div>
          </>
        </>
      </AssemblyIntro>
    </section>
  );
}
