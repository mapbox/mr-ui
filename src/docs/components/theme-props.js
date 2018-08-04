import React from 'react';

export default class ThemeProps extends React.Component {
  render() {
    return (
      <div>
        <h2 id="themeprops" className="txt-fancy txt-h3 mb24">
          <code>theme*</code> props
        </h2>
        <div className="prose">
          <p>
            Advanced users may want to customize the class lists of elements
            rendered by a component. To allow for this, many components expose{' '}
            <code>theme*</code> props, such as <code>themeButton</code>,{' '}
            <code>themeContainer</code>, or just <code>theme</code>.
          </p>
          <p>
            The value of a <code>theme*</code> prop can be a string or a
            function. If it's a string, that string will be appended to the
            element's standard class list. If it's a function, the function will
            be passed the element's standard class list and whatever the
            function returns will be passed to the element.
          </p>
          <p>
            <strong>String example:</strong> To append <code>mr6</code> to the
            class list of a component's container element, you could provide{' '}
            <code>themeContainer="mr6"</code>.
          </p>
          <p>
            <strong>Function example:</strong> To remove <code>txt-bold</code>{' '}
            from and add <code>txt-em</code> to the class list of a component's
            button element, you could provide the following:
          </p>
          <pre>
            <code>
              themeContainer={'{'}original => original.replace('txt-bold',
              'txt-em'){'}'}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}
