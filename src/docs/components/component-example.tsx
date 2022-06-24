import React, { ReactElement, useState } from 'react';
import { Example } from '../typings';

export default function ComponentExample({ code, description, exampleModule }: Example): ReactElement {

  const [showCode, setShowCode] = useState(false);

  const renderCode = (): ReactElement => {
    if (!showCode) {
      return null;
    }
    return (
      <pre className="my0 round-tl pre language-jsx unround-tr unround-b">
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    );
  }

  return (
    <div>
      <div className="flex flex--end-cross">
        <div className="flex-child-grow pb6 prose">{description}</div>
        <div className="flex-child-no-shrink w120">
          <div className="flex flex--end-main">
            <ToggleCodeButton
              onClick={() => setShowCode(!showCode)}
              codeIsVisible={showCode}
            />
          </div>
        </div>
      </div>
      {renderCode()}
      <div className="border border--gray-light px24 py24 overflow-auto">
        {React.createElement(exampleModule.default)}
      </div>
    </div>
  );
}

function ToggleCodeButton({ codeIsVisible, onClick }: { codeIsVisible: boolean, onClick: () => void }): ReactElement {
  const text = codeIsVisible ? 'Hide code' : 'Show code';
  return (
    <button
      aria-label={text}
      className="block btn btn--s btn--gray unround-b round-t"
      onClick={onClick}
    >
      <span className="flex flex--center-cross">
        <svg className="icon">
          <use xlinkHref="#icon-code" />
        </svg>
        <span className="ml6">{text}</span>
      </span>
    </button>
  );
}
