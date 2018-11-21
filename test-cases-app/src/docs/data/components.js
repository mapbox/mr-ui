"use strict";
const React = require("react");
module.exports = [
  {
    name: "AccordionItem",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Identifying value for accordion item.</p>
      },
      onToggle: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: <p>Callback when an accordion header item is clicked.</p>
      },
      header: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Function that accepts an <code>active</code> boolean argument and
            returns JSX.
          </p>
        )
      },
      body: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <p>Contents that shown when the accordion is active.</p>
      },
      active: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>Determines if the state of the accordion item is active.</p>
        )
      },
      disabled: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Determines if the state of the accordion item is disabled.</p>
        )
      },
      themeItem: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>CSS classes to apply to the accordion item container.</p>
        )
      },
      themeItemHeader: {
        type: { name: "string" },
        required: false,
        defaultValue: "'txt-s txt-bold txt-truncate link link--gray py6'",
        description: <p>CSS classes to apply to the accordion header.</p>
      },
      themeItemHeaderDisabled: {
        type: { name: "string" },
        required: false,
        defaultValue: "'color-gray-light'",
        description: (
          <p>
            CSS classes to apply to the accordion header when{" "}
            <code>disabled</code> is true/
          </p>
        )
      },
      themeItemBody: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>CSS classes to apply to the accordion body.</p>
      }
    },
    examples: []
  },
  {
    name: "Button",
    description: (
      <div>
        <p>A good-looking button!</p>
        <p>
          The rendered element will be a <code>&lt;button&gt;</code> or an{" "}
          <code>&lt;a&gt;</code>, depending on whether you provide an{" "}
          <code>href</code> prop or not. (You can also use the{" "}
          <code>component</code> prop to render a different element altogether.)
        </p>
        <p>
          If you'd like to put an icon before or after the text of your button,
          use <a href="#icontext">IconText</a> for the content.
        </p>
      </div>
    ),
    props: {
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            The button's content. A string is recommended, but you can put an
            element in here if you think that's right. If you do, it should be
            inline-level, using <code>&lt;span&gt;</code>s instead of{" "}
            <code>&lt;div&gt;</code>s. (<a href="#icontext">IconText</a> is
            inline-level.)
          </p>
        )
      },
      variant: {
        type: {
          name: "enum",
          value: [
            { value: "'primary'", computed: false },
            { value: "'secondary'", computed: false },
            { value: "'discouraging'", computed: false },
            { value: "'destructive'", computed: false },
            { value: "'appPrimary'", computed: false },
            { value: "'appSecondary'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'primary'",
        description: (
          <div>
            <p>
              A keyword identifying the standard button styling variant to use.
            </p>
            <p>
              <em>The variant is a starting point</em>: all of the other styling
              props can be used to override details.
            </p>
            <p>The following variants are available:</p>
            <ul>
              <li>
                <code>"primary"</code>: For primary actions.
              </li>
              <li>
                <code>"secondary"</code>: For secondary actions.
              </li>
              <li>
                <code>"discouraging"</code>: For downplayed actions, the ones
                people shouldn't usually want to perform, like cancelling
                instead of confirming.
              </li>
              <li>
                <code>"destructive"</code>: For destructive actions, like
                deleting something.
              </li>
              <li>
                <code>"appPrimary"</code>: For primary actions in dense apps.
              </li>
              <li>
                <code>"appSecondary"</code>: For secondary actions in dense
                apps.
              </li>
            </ul>
          </div>
        )
      },
      onClick: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <div>
            <p>A callback that receives the click event.</p>
            <p>
              You definitely need this if you don't use <code>href</code>; but
              you can also provide both <code>onClick</code> and{" "}
              <code>href</code>, and <code>onClick</code> will be called when
              the <code>&lt;a&gt;</code> is clicked.
            </p>
          </div>
        )
      },
      href: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A URL. If <code>href</code> is provided, the button will be an{" "}
            <code>&lt;a&gt;</code>.
          </p>
        )
      },
      size: {
        type: {
          name: "enum",
          value: [
            { value: "'small'", computed: false },
            { value: "'medium'", computed: false },
            { value: "'large'", computed: false }
          ]
        },
        required: false,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              The size of the button: <code>"small"</code>,{" "}
              <code>"medium"</code>, or <code>"large"</code>.
            </p>
            <p>
              This accounts for height, outline thickness, text size, and other
              details.
            </p>
            <p>
              This will override whichever defaults are set by your{" "}
              <code>variant</code> of choice.
            </p>
          </div>
        )
      },
      width: {
        type: {
          name: "enum",
          value: [
            { value: "'small'", computed: false },
            { value: "'medium'", computed: false },
            { value: "'large'", computed: false },
            { value: "'full'", computed: false }
          ]
        },
        required: false,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              The width of the button: <code>"small"</code>,{" "}
              <code>"medium"</code>, <code>"large"</code>, or{" "}
              <code>"full"</code>. For every option but <code>"full"</code> this
              prop determines horizontal padding.
              <code>"full"</code> sets the button to fill the width of its
              container.
            </p>
            <p>
              This is distinguished from <code>size</code> because buttons of
              the same general size can vary by width.
            </p>
            <p>
              This will override whichever defaults are set by your{" "}
              <code>variant</code> of choice.
            </p>
          </div>
        )
      },
      outline: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If <code>true</code>, the button will be outlined instead of filled
            with color.
          </p>
        )
      },
      color: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>The Assembly color of the button.</p>
      },
      corners: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If <code>true</code>, the button will have (slightly rounded)
            corners instead of the full curve they have by default.
          </p>
        )
      },
      block: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <div>
            <p>
              If <code>true</code>, the element will be <code>block</code>{" "}
              displayed instead of <code>inline-block</code>.
            </p>
            <p>
              This is sometimes necessary to get your pixel-perfect layout, if
              you don't want the extra line-height that wraps inline elements.
              Typically, you should only set <code>block</code> to{" "}
              <code>true</code> if the parent element is controlling width (in a
              layout that uses flexbox, absolute positioning, or floats).
            </p>
          </div>
        )
      },
      disabled: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <p>Is it disabled?</p>
      },
      component: {
        type: { name: "union", value: [{ name: "func" }, { name: "string" }] },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            An alternate component to render in the style of a button. If the
            value is a string, it must refer to a DOM element, like{" "}
            <code>"div"</code>. Otherwise, it can be a React component.
          </p>
        )
      },
      passthroughProps: {
        type: { name: "object" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            An object of props that you want to pass through to the element that
            Button renders. This can be useful if you want to disable the
            button, assign an ID for testing, add an ARIA attribute, toss in
            some custom style properties, etc.
          </p>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/button/examples/button-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Primary</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            Secondary
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>discouraging<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            Discouraging
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>destructive<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            Destructive
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>appPrimary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            AppPrimary
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>appSecondary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            AppSecondary
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">noop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>`,
        description: <p>All the standard variants.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/button/examples/button-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> IconText <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/icon-text'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>purple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconText</span> <span class="token attr-name">iconBefore</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>floppy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Save your map</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IconText</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <p>
            A slightly wider, outlined button with an alternate color, using{" "}
            <a href="#icontext">IconText</a> to prefix the text with an icon.
          </p>
        )
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/button/examples/button-c.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">btnClasses</span> <span class="token operator">=</span> variantClasses <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">&#36;{</span>variantClasses<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> shadow-darken25&#96;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button-c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
          <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#button-c<span class="token punctuation">"</span></span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span>
          <span class="token attr-name">data-test</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link-to-c<span class="token punctuation">"</span></span>
          <span class="token attr-name">transformClasses</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>btnClasses<span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          You are here
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <div>
            <p>
              A link that looks like a slightly short button (<code>
                size: "medium"
              </code>).
            </p>
            <p>
              The additional prop <code>data-test</code> is passed on directly
              to the <code>&lt;a&gt;</code>.
            </p>
            <p>
              Also, <code>transformClasses</code> is used to add the drop-shadow
              class.
            </p>
          </div>
        )
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/button/examples/button-d.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mb24 flex-parent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-child w120 mr12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              Door
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-child w120 mr12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              Dog
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-child w120 mr12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              Dash
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w60<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
              <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span>
              <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span>
            <span class="token punctuation">></span></span><span class="token plain-text">
              A
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
              <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span>
              <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span>
            <span class="token punctuation">></span></span><span class="token plain-text">
              B
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
              <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span>
              <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noop<span class="token punctuation">}</span></span>
            <span class="token punctuation">></span></span><span class="token plain-text">
              C
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">noop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>`,
        description: (
          <div>
            <p>
              To control button width, you can use <code>width: "full"</code>{" "}
              and put the button in a wrapper container with an Assembly width
              class.
            </p>
            <p>
              Sometimes, for example, you might want a column or row of
              equal-width buttons.
            </p>
          </div>
        )
      }
    ]
  },
  {
    name: "ChevronousText",
    description: null,
    props: {
      iconBefore: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>When true, the text will follow after a left pointed chevron.</p>
        )
      },
      iconSize: {
        type: {
          name: "union",
          value: [{ name: "string" }, { name: "number" }]
        },
        required: false,
        defaultValue: "'1.5em'",
        description: (
          <p>
            The width and height size of the chevron icon. Note that this icon
            is inline and the height won't go beyond the line-height. This can
            be a number which will fall back to px, or a string in the units of
            px, em, %, or pt.
          </p>
        )
      },
      text: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>The text that should be aligned next to the chevron.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/chevronous-text/examples/chevronous-text-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChevronousText <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/chevronous-text'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> lineHeight<span class="token punctuation">:</span> <span class="token string">'24px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronousText</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello explorer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/chevronous-text/examples/chevronous-text-example-heading.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChevronousText <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/chevronous-text'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>txt-xl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronousText</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello Explorer<span class="token punctuation">"</span></span> <span class="token attr-name">iconBefore</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">iconSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">45</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Chevronous text with options.</p>
      }
    ]
  },
  {
    name: "CodeSnippet",
    description: null,
    props: {
      code: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Raw (unhighlighted) code. When the user clicks a copy button, this
            is what they'll get. If no <code>highlightedCode</code> is provided,{" "}
            <code>code</code> is displayed.
          </p>
        )
      },
      highlightedCode: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            The HTML output of running code through a syntax highlighter. If
            this is not provided, <code>code</code> is displayed, instead. The
            default theme CSS assumes the highlighter is{" "}
            <a href="https://github.com/isagalaev/highlight.js">
              <code>highlight.js</code>
            </a>. If you are using another highlighter, provide your own theme.
          </p>
        )
      },
      copyRanges: {
        type: {
          name: "arrayOf",
          value: { name: "arrayOf", value: { name: "number" } }
        },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Specific line ranges that should be independently copiable. Each
            range is a two-value array, consisting of the starting and ending
            line. If this is not provided, the entire snippet is copiable.
          </p>
        )
      },
      maxHeight: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A maximum height for the snippet. If the code exceeds this height,
            the snippet will scroll internally.
          </p>
        )
      },
      onCopy: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A callback that is invoked when the snippet (or a chunk of the
            snippet) is copied. If <code>copyRanges</code> are provided, the
            callback is passed the index (0-based) of the chunk that was copied.
          </p>
        )
      },
      highlightThemeCss: {
        type: { name: "string" },
        required: false,
        defaultValue:
          "`\n.hljs-comment,\n.hljs-quote {\n  color: #7285b7;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #ff9da4;\n}\n\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #ffc58f;\n}\n\n.hljs-attribute {\n  color: #ffeead;\n}\n\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #d1f1a9;\n}\n\n.hljs-title,\n.hljs-section {\n  color: #bbdaff;\n}\n\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #ebbbff;\n}\n\n.hljs {\n  display: block;\n  font-family: 'Menlo', 'Bitstream Vera Sans Mono', 'Monaco', 'Consolas', monospace;\n  font-size: 12px;\n  line-height: 1.5em;\n  overflow-x: auto;\n  background: #273d56;\n  color: #fff;\n  padding: 12px;\n  border-radius: 3px;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}`",
        description: (
          <p>
            CSS that styles the highlighted code. The default theme is a{" "}
            <a href="https://highlightjs.readthedocs.io/en/latest/style-guide.html#defining-a-theme">
              <code>highlight.js</code> theme
            </a>{" "}
            theme. It is the dark theme used on mapbox.com's installation flow.
          </p>
        )
      },
      characterWidth: {
        type: { name: "number" },
        required: false,
        defaultValue: "7.225",
        description: (
          <p>
            The width of a character in the theme's monospace font, used for
            indentation. If you use a font or font-size different than the
            default theme, you may need to change this value.
          </p>
        )
      }
    },
    examples: []
  },
  {
    name: "ControlCheckboxSet",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Unique id for this control.</p>
      },
      options: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              label: { name: "node", required: true },
              value: { name: "string", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              An array of object(s) that represent each option of the set. Each
              object should contain two fields:
            </p>
            <ul>
              <li>
                <code>label</code> which can either be a string or valid JSX
              </li>
              <li>
                <code>value</code> a unique string value
              </li>
            </ul>
            <p>
              Any additional fields added will be passed as attributes to the
              input element.
            </p>
          </div>
        )
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              Invoked when the control's value changes. Passed two arguments:
            </p>
            <ul>
              <li>
                The value. A string matching the <code>value</code> field of one
                of the <code>options</code>
                props passed.
              </li>
              <li>
                The <code>id</code> prop.
              </li>
            </ul>
          </div>
        )
      },
      legend: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Legend label for the control.</p>
      },
      value: {
        type: { name: "array" },
        required: false,
        defaultValue: "[]",
        description: (
          <p>
            Accepts an array of strings, where each string matches the value
            property of an entry in the options prop.
          </p>
        )
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If provided, "(optional)" is appended to the value of the legend
            element.
          </p>
        )
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Additional content inserted alongside the legend element.</p>
        )
      },
      icon: {
        type: { name: "string" },
        required: false,
        defaultValue: "'check'",
        description: (
          <p>
            Icon to use for the checkbox active style. Must match an icon name
            available in Assembly.
          </p>
        )
      },
      autoFocus: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            When <code>true</code>, autofocus attributes are applied to the
            input that matches the <code>value</code> prop passed.
          </p>
        )
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <p>A validation error to display beneath the control.</p>
      },
      themeCheckboxContainer: {
        type: { name: "string" },
        required: false,
        defaultValue: "'txt-s block mb6 flex-parent'",
        description: <p>Classes to apply to the checkbox container.</p>
      },
      themeCheckbox: {
        type: { name: "string" },
        required: false,
        defaultValue:
          "'mr6 inline-block checkbox--blue checkbox--s-label flex-child'",
        description: <p>Classes to apply to the checkbox element.</p>
      },
      themeControlWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Classes to apply to the control container.</p>
      },
      themeLegend: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Classes to apply to the legend element.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-checkbox-set/examples/control-checkbox-set-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlCheckboxSet <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-checkbox-set'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlCheckboxSet</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Humpback whale'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'humpback-whale'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-checkbox-set/examples/control-checkbox-set-example-options.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlCheckboxSet <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-checkbox-set'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlCheckboxSet</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>more-options<span class="token punctuation">"</span></span>
        <span class="token attr-name">legend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Choose an animal<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'sea-otter'</span><span class="token punctuation">,</span> <span class="token string">'humpback-whale'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">validationError</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>oh no!<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeControlWrapper</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray px12 py12<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeRadioContainer</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-full<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeRadio</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio--white radio--active-red mr6<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeLegend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>color-white<span class="token punctuation">"</span></span>
        <span class="token attr-name">optional</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">aside</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>txt-bold inline-block color-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            Aside content
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Humpback whale'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'humpback-whale'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Rufous Hummingbird'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'rufous-hummingbird'</span><span class="token punctuation">,</span>
            disabled<span class="token punctuation">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Sea Otter'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'sea-otter'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Snowshoe Hare'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'snowshoe-hare'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>More options</p>
      }
    ]
  },
  {
    name: "ControlDate",
    description: null,
    props: {
      moment: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Your version of Moment.js. What you get when you{" "}
            <code>import moment from 'moment'</code>.
          </p>
        )
      },
      id: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Unique id for this control. Required if you want a{" "}
            <code>label</code>.
          </p>
        )
      },
      value: {
        type: {
          name: "union",
          value: [
            {
              name: "shape",
              value: {
                date: { name: "instanceOf", value: "Date", required: true },
                endDate: { name: "instanceOf", value: "Date", required: false }
              }
            },
            { name: "enum", value: [{ value: "''", computed: false }] }
          ]
        },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            The control's value. Can be an empty string to indicate no value.
            Otherwise, should be an object with a required <code>date</code>{" "}
            property and optional <code>endDate</code>. If <code>endDate</code>{" "}
            is provided, <code>date</code> serves as the start date for the
            range.
          </p>
        )
      },
      dateRange: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If <code>true</code>, there will be one input for the start of a
            date range and one input for the end of a date range. If{" "}
            <code>false</code>, there will only be one input for a single date.
          </p>
        )
      },
      maxDate: {
        type: { name: "instanceOf", value: "Date" },
        required: false,
        defaultValue: undefined,
        description: <p>Date furthest in the future you can select.</p>
      },
      minDate: {
        type: { name: "instanceOf", value: "Date" },
        required: false,
        defaultValue: undefined,
        description: <p>Date furthest in the past you can select.</p>
      },
      disabled: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If <code>true</code>, the control cannot be interacted with.
          </p>
        )
      },
      placeholder: {
        type: { name: "string" },
        required: false,
        defaultValue: "'M/D/YYYY'",
        description: (
          <p>
            Placeholder for the inputs. If <code>dateRange</code> is true, this
            placeholder applies to both inputs unless you provide an{" "}
            <code>endDatePlaceholder</code>.
          </p>
        )
      },
      endDatePlaceholder: {
        type: { name: "string" },
        required: false,
        defaultValue: "'M/D/YYYY'",
        description: (
          <p>
            Placeholder for the end date input, if <code>dateRange</code> is
            true. If nothing is provided, the end date input will show the{" "}
            <code>placeholder</code>.
          </p>
        )
      },
      format: {
        type: { name: "string" },
        required: false,
        defaultValue: "'M/D/YYYY'",
        description: (
          <p>
            <a href="http://momentjs.com/docs/#/displaying/format/">
              Moment.js format
            </a>
            the inputs will display and accept (e.g. <code>'YYYY MM DD'</code>).
          </p>
        )
      },
      utcOffset: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Force a certain UTC offset, useful mostly for stabilizing tests.
          </p>
        )
      },
      label: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Label for the control.</p>
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Additional content inserted alongside the label element.</p>
        )
      },
      themeLabel: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Classes to apply to the label element.</p>
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              Invoked when the control's value changes. Passed two arguments:
            </p>
            <ul>
              <li>
                The date value. An object with a <code>date</code> and, if the
                control allows a date range, an <code>endDate</code>.
              </li>
              <li>
                The <code>id</code> prop.
              </li>
            </ul>
          </div>
        )
      },
      themeWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue:
          "'react-control-date react-control-date--disable-keyboard flex-parent-inline flex-parent--center-cross flex-parent--wrap'",
        description: <p>Classes to apply to the control wrapper.</p>
      },
      themeCalendar: {
        type: { name: "string" },
        required: false,
        defaultValue: "'shadow-darken10 border--0 none block-mm'",
        description: <p>Classes to apply to the datepicker's calendar.</p>
      },
      themeTextInput: {
        type: { name: "string" },
        required: false,
        defaultValue: "'input w180 none block-mm'",
        description: <p>Classes to apply to the input elements.</p>
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <p>A validation error to display beneath the control.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-date/examples/control-date-example-date-range.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">'moment'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlDate <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-date'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> validateStartDateBeforeEndDate <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/form/validators/validate-start-date-before-end-date'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> dateValue<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span> validationError<span class="token punctuation">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onDateChange</span> <span class="token operator">=</span> dateValue <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> validationError <span class="token operator">=</span> <span class="token function">validateStartDateBeforeEndDate</span><span class="token punctuation">(</span>dateValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dateValue<span class="token punctuation">,</span> validationError <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlDate</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dateRange<span class="token punctuation">"</span></span>
        <span class="token attr-name">moment</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>moment<span class="token punctuation">}</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dateValue<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDateChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">dateRange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>start<span class="token punctuation">"</span></span>
        <span class="token attr-name">endDatePlaceholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>end<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>txt-bold txt-s color-purple<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Date range<span class="token punctuation">"</span></span>
        <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2017-10-1'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2018-10-1'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">validationError</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>validationError<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <p>
            Date range input, with label, <code>minDate</code> of 10/1/2017,{" "}
            <code>maxDate</code> of 10/1/2018, placeholders, and some custom
            theming.
          </p>
        )
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-date/examples/control-date-example-one-date.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">'moment'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlDate <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-date'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> dateValue<span class="token punctuation">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onDateChange</span> <span class="token operator">=</span> dateValue <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dateValue <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlDate</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>singleDate<span class="token punctuation">"</span></span>
        <span class="token attr-name">moment</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>moment<span class="token punctuation">}</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dateValue<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDateChange<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Single date input.</p>
      }
    ]
  },
  {
    name: "ControlFile",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Identifying value for input element.</p>
      },
      value: {
        type: {
          name: "union",
          value: [
            {
              name: "arrayOf",
              value: {
                name: "shape",
                value: { name: { name: "string", required: true } }
              }
            },
            { name: "enum", value: [{ value: "''", computed: false }] }
          ]
        },
        required: false,
        defaultValue: undefined,
        description: <p>Input value</p>
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Called during changes to the input element. Invoked with the array
            of selected files and the id of the input.
          </p>
        )
      },
      label: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Value passed to the label element.</p>
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If provided the text, "(optional)" is appended to the value of the
            label element.
          </p>
        )
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Additional content inserted alongside the label element.</p>
        )
      },
      disabled: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <p>Pass disabled attribute</p>
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If provided, the value of this propery displays as an error message.
          </p>
        )
      },
      initialDisplayValue: {
        type: { name: "string" },
        required: false,
        defaultValue: "'Select a file'",
        description: <p>Overrides the "Select a file" label.</p>
      },
      themeControlFile: {
        type: { name: "string" },
        required: false,
        defaultValue:
          "'btn align-l bg-gray-faint py6 px12 round-full w-full txt-s link--gray txt-normal'",
        description: (
          <p>Assembly classes to apply to the button trigger element</p>
        )
      },
      themeControlFileClear: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: <p>Assembly classes to apply to the file clear element</p>
      },
      themeControlWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Assembly classes to apply to the control wrapper</p>
      },
      themeLabel: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Assembly classes to apply to the input element</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-file/examples/control-file-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlFile <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-file'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlFile</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token punctuation">(</span><span class="token comment">/* value, id */</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">/* console.log(value, id); */</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ControlLabel",
    description: null,
    props: {
      text: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Label text</p>
      },
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>Value should match the identifying id of the input element.</p>
        )
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Additional content to provide aligned to the right of the label.
          </p>
        )
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: <p>If true, label text adds (optional) alongside it.</p>
      },
      themeLabel: {
        type: { name: "string" },
        required: false,
        defaultValue: "'txt-s txt-bold mb6'",
        description: (
          <p>
            A space separated list of Assembly class names to override the
            existing presentation.
          </p>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-label/examples/control-label-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlLabel <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-label'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlLabel</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter your name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ControlLegend",
    description: null,
    props: {
      text: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Label text for this control.</p>
      },
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Element id used to group additional form controls.</p>
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Additional content inserted alongside the label element.</p>
        )
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If <code>true</code>, the text <code>(optional)</code> is appended
            to the label element.
          </p>
        )
      },
      themeLegend: {
        type: { name: "string" },
        required: false,
        defaultValue: "'txt-s txt-bold mb6'",
        description: <p>Classes to apply to the legend element.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-legend/examples/control-legend-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlLegend <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-legend'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlLegend</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter your name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-legend/examples/control-legend-example-multiple-inputs.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlLegend <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-legend'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">renderOptions</span> <span class="token operator">=</span> p <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>p<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>p<span class="token punctuation">.</span>label<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fields <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'First name'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'first-name'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'Middle initial'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'middle-initial'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'Last name'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'Last name'</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlLegend</span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
          <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter your name<span class="token punctuation">"</span></span>
          <span class="token attr-name">themeLegend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>txt-s txt-bold mb6 color-blue<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>fields<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>renderOptions<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <p>Control legend, with multiple inputs and a custom legend theme.</p>
        )
      }
    ]
  },
  {
    name: "ControlRadioSet",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Unique id for this control. Required if you want a{" "}
            <code>label</code>.
          </p>
        )
      },
      options: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              label: { name: "node", required: true },
              value: { name: "string", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              An array of objects that represent each option of the set. Each
              object should contain two fields:
            </p>
            <ul>
              <li>
                <code>label</code> which can either be a string or valid JSX
              </li>
              <li>
                <code>value</code> a unique string value
              </li>
            </ul>
            <p>
              Any additional fields added will be passed as attributes to the
              input element.
            </p>
          </div>
        )
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              Invoked when the control's value changes. Passed two arguments:
            </p>
            <ul>
              <li>
                The value. A string matching the <code>value</code> field of one
                of the <code>options</code>
                props passed.
              </li>
              <li>
                The <code>id</code> prop.
              </li>
            </ul>
          </div>
        )
      },
      legend: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Legend label for the control.</p>
      },
      value: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: (
          <p>
            The control's value. Can be an empty string to indicate no value.
          </p>
        )
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If provided, "(optional)" is appended to the value of the legend
            element.
          </p>
        )
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Additional content inserted alongside the legend element.</p>
        )
      },
      autoFocus: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            When set, auto focus attributes are applied to the input that
            matches the <code>value</code> prop passed.
          </p>
        )
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <p>A validation error to display beneath the control.</p>
      },
      themeRadioContainer: {
        type: { name: "string" },
        required: false,
        defaultValue: "'txt-s block mb6 flex-parent'",
        description: <p>Classes to apply to the radio container</p>
      },
      themeRadio: {
        type: { name: "string" },
        required: false,
        defaultValue:
          "'mr6 radio--blue radio--s-label inline-block flex-child'",
        description: <p>Classes to apply to the radio element</p>
      },
      themeControlWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Classes to apply to the control wrapper</p>
      },
      themeLegend: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Classes to apply to the legend element</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-radio-set/examples/control-radio-set-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlRadioSet <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-radio-set'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlRadioSet</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span>
        <span class="token attr-name">legend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Choose an animal<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Humpback whale'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'humpback-whale'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Rufous Hummingbird'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'rufous-hummingbird'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Sea Otter'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'sea-otter'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Snowshoe Hare'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'snowshoe-hare'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-radio-set/examples/control-radio-set-example-options.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlRadioSet <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-radio-set'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlRadioSet</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>more-options<span class="token punctuation">"</span></span>
        <span class="token attr-name">legend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Choose an animal<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sea-otter<span class="token punctuation">"</span></span>
        <span class="token attr-name">validationError</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>oh no!<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeControlWrapper</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray px12 py12<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeRadioContainer</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-full<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeRadio</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio--white radio--active-red mr6<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeLegend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>color-white<span class="token punctuation">"</span></span>
        <span class="token attr-name">optional</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">aside</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>txt-bold inline-block color-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            Aside content
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Humpback whale'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'humpback-whale'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Rufous Hummingbird'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'rufous-hummingbird'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Sea Otter'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'sea-otter'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Snowshoe Hare'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'snowshoe-hare'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>More options</p>
      }
    ]
  },
  {
    name: "ControlRange",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Identifying value for input element.</p>
      },
      value: {
        type: {
          name: "union",
          value: [{ name: "string" }, { name: "number" }]
        },
        required: false,
        defaultValue: "''",
        description: <p>Input value</p>
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: <p>Called during changes to the input element.</p>
      },
      label: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Value passed to the label element.</p>
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If provided the text, "(optional)" is appended to the value of the
            label element.
          </p>
        )
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Additional content inserted alongside the label element.</p>
        )
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If provided, the value of this propery displays as an error message.
          </p>
        )
      },
      themeControlRange: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: <p>Assembly classes to apply to the range element</p>
      },
      themeControlWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Assembly classes to apply to the control wrapper</p>
      },
      themeLabel: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Assembly classes to apply to the label element</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-range/examples/control-range-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlRange <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-range'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlRange</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
        <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token punctuation">(</span><span class="token comment">/* value, id */</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">/* console.log(value, id); */</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ControlSelect",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Identifying value for input element.</p>
      },
      options: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              label: { name: "string", required: true },
              value: {
                name: "custom",
                raw:
                  "(props, propName, componentName) => {\n  if (\n    !props.value &&\n    typeof props.value !== 'string' &&\n    !props.hasOwnProperty('options')\n  ) {\n    return new Error(\n      `The prop \"${propName}\" is required in ${componentName} if a options array is not provided for select groups.`\n    );\n  } else if (\n    props.value &&\n    typeof props.value !== 'number' &&\n    typeof props.value !== 'string'\n  ) {\n    return new Error(\n      `${\n        props.value\n      } of type ${typeof props.value} supplied to ${componentName}, expected a number or string.`\n    );\n  } else if (\n    props.hasOwnProperty('value') &&\n    props.hasOwnProperty('options')\n  ) {\n    return new Error(\n      `You've provided both an 'options' & 'value' key to one of your options object groups. Only 'options' will be used.`\n    );\n  }\n}",
                required: false
              },
              disabled: { name: "bool", required: false },
              options: {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    label: { name: "string", required: true },
                    value: { name: "string", required: false },
                    disabled: { name: "bool", required: false }
                  }
                },
                required: false
              }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            An array of objects containing <code>label</code> <code>value</code>{" "}
            key value pairings to represent each option. An optional{" "}
            <code>disable</code> key can be provided to disable the selection of
            an indiviual <code>&lt;option&gt;</code>. If <code>value</code> is
            not present but an <code>options</code> array is provided containing
            the same <code>label</code> <code>value</code> key value pairings,
            options will be grouped within a <code>&lt;optgroup&gt;</code>{" "}
            element as defined by <code>label</code> child key. Note that each{" "}
            <code>label</code> value must be unique.
          </p>
        )
      },
      value: {
        type: {
          name: "union",
          value: [{ name: "string" }, { name: "number" }]
        },
        required: false,
        defaultValue: "''",
        description: <p>Input value</p>
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: <p>Called during changes to the input element.</p>
      },
      label: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Value passed to the label element.</p>
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If provided the text, "(optional)" is appended to the value of the
            label element.
          </p>
        )
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Additional content inserted alongside the label element.</p>
        )
      },
      disabled: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <p>Pass disabled attribute</p>
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If provided, the value of this propery displays as an error message.
          </p>
        )
      },
      themeControlSelect: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: <p>Assembly classes to apply to the select element</p>
      },
      themeControlSelectContainer: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: <p>Assembly classes to apply to the select container</p>
      },
      themeControlWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Assembly classes to apply to the control wrapper</p>
      },
      themeLabel: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Assembly classes to apply to the label element</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-select/examples/control-select-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlSelect <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-select'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlSelect</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>animals<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Choose an animal<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token punctuation">(</span><span class="token comment">/* value, id */</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">/* console.log(value, id); */</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Humpback whale'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'humpback-whale'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Rufous Hummingbird'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'rufous-hummingbird'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Sea Otter'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'sea-otter'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Snowshoe Hare'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'snowshoe-hare'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ControlSwitch",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Identifying value for input element.</p>
      },
      value: {
        type: {
          name: "union",
          value: [
            { name: "bool" },
            { name: "enum", value: [{ value: "''", computed: false }] }
          ]
        },
        required: false,
        defaultValue: "false",
        description: <p>Input value</p>
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If provided the text, "(optional)" is appended to the value of the
            label element.
          </p>
        )
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: <p>Called during changes to the input element.</p>
      },
      label: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <p>Value passed to the label element.</p>
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If provided, the value of this propery displays as an error message.
          </p>
        )
      },
      themeControlSwitchContainer: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: <p>Assembly classes to apply to the switch container</p>
      },
      themeControlSwitch: {
        type: { name: "string" },
        required: false,
        defaultValue: "'switch--s-label'",
        description: <p>Assembly classes to apply to the switch element</p>
      },
      themeControlWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Assembly classes to apply to the control wrapper</p>
      },
      themeLabel: {
        type: { name: "string" },
        required: false,
        defaultValue: "'txt-s ml6'",
        description: <p>Assembly classes to apply to the label element</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-switch/examples/control-switch-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlSwitch <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-switch'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlSwitch</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>active-animal<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Activate animal<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token punctuation">(</span><span class="token comment">/* value, id */</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">/* console.log(value, id); */</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ControlText",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Unique id for this control. Required if you want a{" "}
            <code>label</code>.
          </p>
        )
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              Invoked when the control's value changes. Passed two arguments:
            </p>
            <ul>
              <li>
                <code>value</code> the current value of the input passes as a
                string
              </li>
              <li>
                The <code>id</code> prop.
              </li>
            </ul>
          </div>
        )
      },
      value: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: (
          <p>
            The control's value. Can be an empty string to indicate no value.
          </p>
        )
      },
      type: {
        type: { name: "string" },
        required: false,
        defaultValue: "'text'",
        description: (
          <p>Type attribute to override the existing default of 'text'</p>
        )
      },
      label: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Label for the control.</p>
      },
      noAuto: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            Enable/Disable browser enabled autocorrect or spelling suggestions
            from the element.
          </p>
        )
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If provided, "(optional)" is appended to the value of the legend
            element.
          </p>
        )
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Additional content inserted alongside the label element.</p>
        )
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If provided, the value of this propery displays as an error message.
          </p>
        )
      },
      errorStyle: {
        type: {
          name: "enum",
          value: [
            { value: "'default'", computed: false },
            { value: "'inline'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'default'",
        description: (
          <div>
            <p>Sets the style of the error message. There are two options:</p>
            <ul>
              <li>
                <code>default</code> the standard presentation control
                components display an error message: beneath the input.
              </li>
              <li>
                <code>inline</code> An error indicator is displayed to the right
                of the element with the value of <code>validationError</code>{" "}
                prop displayed in a tooltip.
              </li>
            </ul>
          </div>
        )
      },
      errorTooltipBackgroundColor: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Background color of the error tooltip when{" "}
            <code>errorStyle: "inline"</code> is set.
          </p>
        )
      },
      errorTooltipTheme: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Classes to style the error tooltip container.</p>
      },
      themeControlInput: {
        type: { name: "string" },
        required: false,
        defaultValue: "'input'",
        description: <p>Classes to apply to the input element</p>
      },
      themeControlWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Classes to apply to the control wrapper</p>
      },
      themeLabel: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>classes to apply to the label element</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-text/examples/control-text-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlText <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-text'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlText</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-text/examples/control-text-example-options.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlText <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-text'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlText</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>more-options<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter your email<span class="token punctuation">"</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
        <span class="token attr-name">validationError</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Oh no!<span class="token punctuation">"</span></span>
        <span class="token attr-name">error</span><span class="token style-attr language-css"><span class="token attr-name"><span class="token attr-name">Style</span></span><span class="token punctuation">="</span><span class="token attr-value">inline</span><span class="token punctuation">"</span></span>
        <span class="token attr-name">themeControlWrapper</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-faint px12 py12<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeControlInput</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>input input--s<span class="token punctuation">"</span></span>
        <span class="token attr-name">themeLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>txt-bold<span class="token punctuation">"</span></span>
        <span class="token attr-name">errorTooltipTheme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>color-white round py6 px12 shadow-darken25 txt-xs<span class="token punctuation">"</span></span>
        <span class="token attr-name">errorTooltipBackgroundColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#2c3d54<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter an email address<span class="token punctuation">"</span></span>
        <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo@bar.baz<span class="token punctuation">"</span></span>
        <span class="token attr-name">optional</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">noAuto</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">aside</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">Aside text</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>More options</p>
      }
    ]
  },
  {
    name: "ControlTextarea",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Unique id for this control. Required if you want a{" "}
            <code>label</code>.
          </p>
        )
      },
      value: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: <p>The control's value.</p>
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Invoked when the control's value changes. Passed two arguments: the
            new value, and the <code>id</code> prop.
          </p>
        )
      },
      label: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Label for the control.</p>
      },
      noAuto: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If <code>true</code>, autocorrect and spelling suggestions will be
            disabled.
          </p>
        )
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If <code>true</code>, the text <code>(optional)</code> is appended
            to the label element.
          </p>
        )
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Additional content inserted alongside the label element.</p>
        )
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <p>A validation error to display beneath the control.</p>
      },
      themeControlTextarea: {
        type: { name: "string" },
        required: false,
        defaultValue: "'textarea hmin120'",
        description: <p>Classes to apply to the textarea element.</p>
      },
      themeControlWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Classes to apply to the control wrapper.</p>
      },
      themeLabel: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Classes to apply to the label element.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-textarea/examples/control-textarea-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlTextarea <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-textarea'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlTextarea</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>story<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Your story<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ControlToggleSet",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Identifying value for input element.</p>
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Function that's called when text changes in the input element.
            Argument that's returned the id prop and value entered.
          </p>
        )
      },
      options: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              label: { name: "node", required: true },
              value: { name: "string", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            An array of objects containing <code>label</code> <code>value</code>{" "}
            key value pairings to represent each option. Any additional keys are
            passed as props to the input.
          </p>
        )
      },
      legend: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Legend name</p>
      },
      value: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: <p>input value</p>
      },
      optional: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If provided, "(optional)" is appended to the value of the legend
            element.
          </p>
        )
      },
      aside: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>Additional content inserted alongside the legend element.</p>
        )
      },
      autoFocus: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <p>Add auto focus attributes.</p>
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If provided, the value of this propery displays as an error message.
          </p>
        )
      },
      themeToggleGroup: {
        type: { name: "string" },
        required: false,
        defaultValue: "'border border--2 border--blue bg-blue'",
        description: <p>Assembly classes to apply to the toggle group</p>
      },
      themeToggleContainer: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: <p>Assembly classes to apply to the toggle container</p>
      },
      themeToggle: {
        type: { name: "string" },
        required: false,
        defaultValue: "'txt-s py3 toggle--white toggle--active-blue'",
        description: <p>Assembly classes to apply to the toggle element</p>
      },
      themeControlWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Assembly classes to apply to the control wrapper</p>
      },
      themeLegend: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>Assembly classes to apply to the legend element</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-toggle-set/examples/control-toggle-set-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlToggleSet <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-toggle-set'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlToggleSet</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>animals<span class="token punctuation">"</span></span>
        <span class="token attr-name">legend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Choose an animal<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token punctuation">(</span><span class="token comment">/* value, id */</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">/* console.log(value, id) */</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">initialValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'sea-otter'</span><span class="token punctuation">,</span> <span class="token string">'humpback-whale'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Humpback whale'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'humpback-whale'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Rufous Hummingbird'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'rufous-hummingbird'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Sea Otter'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'sea-otter'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Snowshoe Hare'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'snowshoe-hare'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ControlWrapper",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Should correspond to the identifier of the input.</p>
      },
      validationError: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If provided, the value of this property will show up as an error
            message. Strings will end with periods.
          </p>
        )
      },
      children: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <p>The contents the controlWrapper contains</p>
      },
      themeControlWrapper: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: (
          <p>
            A space separated list of Assembly class names to override the
            existing presentation.
          </p>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/control-wrapper/examples/control-wrapper-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlWrapper <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/control-wrapper'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlWrapper</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">validationError</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A value was not entered<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ControlWrapper</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ControlledAccordion",
    description: null,
    props: {
      items: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              id: {
                name: "string",
                description: "Identifying value for accordion item.",
                required: true
              },
              header: {
                name: "func",
                description: "Contents that are always shown.",
                required: true
              },
              body: {
                name: "node",
                description:
                  "Contents that shown when the accordion is active.",
                required: true
              },
              disabled: {
                name: "bool",
                description:
                  "Flag to disable the clickability of an accordion item.",
                required: false
              }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      onToggle: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: <p>Callback when an accordion header item is clicked.</p>
      },
      activeItem: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Value should coorespond to an <code>id</code> within the items
            array.
          </p>
        )
      },
      themeItem: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>CSS classes to apply to the accordion item container</p>
      },
      themeItemHeader: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>CSS classes to apply to the accordion header</p>
      },
      themeItemBody: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>CSS classes to apply to the accordion body</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/controlled-accordion/examples/controlled-accordion-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ControlledAccordion <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/controlled-accordion'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    activeItem<span class="token punctuation">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onToggle</span> <span class="token operator">=</span> id <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      activeItem<span class="token punctuation">:</span> id <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>activeItem <span class="token operator">?</span> <span class="token string">''</span> <span class="token punctuation">:</span> id
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ControlledAccordion</span>
        <span class="token attr-name">onToggle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onToggle<span class="token punctuation">}</span></span>
        <span class="token attr-name">activeItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>activeItem<span class="token punctuation">}</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">'one'</span><span class="token punctuation">,</span> header<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">one</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string">'First body'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">'two'</span><span class="token punctuation">,</span> header<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">two</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string">'Second body'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">'three'</span><span class="token punctuation">,</span> header<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">three</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string">'Third body'</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "Copiable",
    description: (
      <div>
        <p>Make some text easily copiable.</p>
        <p>
          Comes with a <a href="#copybutton">CopyButton</a> that you can click
          to automatically copy the text.
        </p>
        <p>
          Also, on wider viewports a click on the text will automatically select
          it all, so you can easily copy with your favorite keyboard shortcut.
        </p>
      </div>
    ),
    props: {
      value: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>The text that will be displayed and copied.</p>
      },
      truncated: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <div>
            <p>
              If <code>false</code> (default), the text will be overflow to
              multiple lines, and words longer than a single line (e.g. long
              access tokens or URLs) will be broken to enforce wrapping.
            </p>
            <p>
              If <code>true</code>, the Copiable's text will be truncated to a
              single line of text.{" "}
              <strong>
                Only set this to <code>true</code> if you know that your target
                browsers support the copy button!
              </strong>{" "}
              Some browsers will not effectively copy text that is truncated by
              CSS, so the risk is that some of your users might have{" "}
              <em>no way</em> to view and copy all the text if the copy button
              does not work for them.
            </p>
            <p>
              Horizontal scrolling is not an option because of things end up
              getting pretty gross across browsers.
            </p>
          </div>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/copiable/examples/copiable-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Copiable <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/copiable'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mb12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Copiable</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>The length of this copiable text is to illustrate to you how this component<span class="token punctuation">'</span>s styling works when the text wraps to multiple lines<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Copiable</span>
            <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.mapbox.com/something/special/for/you<span class="token punctuation">"</span></span>
            <span class="token attr-name">truncated</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>All Copiables work the same way.</p>
      }
    ]
  },
  {
    name: "CopyButton",
    description: (
      <div>
        <p>
          A button that, when clicked, copies the designated text to the
          clipboard.
        </p>
        <p>
          The static function <code>CopyButton.isCopySupported</code> returns a
          boolean indicating whether the current browser will support automatic
          copying. If it does not, you might want to hide your copy button and
          make sure the user is able to manually select and copy the text.
        </p>
      </div>
    ),
    props: {
      text: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>The text that will be copied when the button is clicked.</p>
        )
      },
      textEl: {
        type: { name: "object" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Pass in an element containing text to copy instead of the raw text
            to provide a better fallback, where the text is selected for you if
            <code>execcopy</code> is not supported.
          </p>
        )
      },
      onCopy: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Invoked when the button is clicked. Passed one argument: the{" "}
            <code>text</code> prop.
          </p>
        )
      },
      block: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <div>
            <p>
              If <code>true</code>, the element will be <code>block</code>{" "}
              displayed instead of <code>inline-block</code>.
            </p>
            <p>
              This is sometimes necessary to get your pixel-perfect layout, if
              you don't want the extra line-height that wraps inline elements.
              Typically, you should only set <code>block</code> to{" "}
              <code>true</code> if the parent element is controlling width (in a
              layout that uses flexbox, absolute positioning, or floats).
            </p>
          </div>
        )
      },
      className: {
        type: { name: "string" },
        required: false,
        defaultValue: "'btn btn--xs py3 px3 round'",
        description: (
          <p>
            The <code>className</code> prop of the <code>&lt;button&gt;</code>.
          </p>
        )
      },
      passthroughProps: {
        type: { name: "object" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            An object of props that you want to pass through to the{" "}
            <code>&lt;button&gt;</code>.
          </p>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/copy-button/examples/copy-button-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CopyButton <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/copy-button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-parent flex-parent--center-cross<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-child mr24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello explorer<span class="token punctuation">"</span></span> <span class="token attr-name">block</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-child flex-child--grow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>input input--s wmax360<span class="token punctuation">"</span></span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Paste text here<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Defaults.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/copy-button/examples/copy-button-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CopyButton <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/copy-button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-parent flex-parent--center-cross<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-child mr24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span>
            <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello fancy explorer<span class="token punctuation">"</span></span>
            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px6 py6 btn btn--purple btn--stroke<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-child flex-child--grow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>input input--s wmax360<span class="token punctuation">"</span></span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Paste text here<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Custom styling.</p>
      }
    ]
  },
  {
    name: "Form",
    description: null,
    props: {
      config: {
        type: { name: "object" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            An object containing keys that correspond to control names. The
            value of each control name key are objects containing the
            configuration of a control.
          </p>
        )
      },
      renderForm: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Renders the form layout. When called a get argument is passed to
            return the configuration object of each control type.
          </p>
        )
      },
      handleFormData: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Called when the form has successfully passed validation and returns
            an object containing keys the coorespond to control names with
            values equalling the users inputted value.
          </p>
        )
      },
      onChange: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Called when any control component registered with the form changes
            in value.
          </p>
        )
      },
      onCancel: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <p>Called when ESC is pressed.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/form/examples/form-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Form <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/form'</span><span class="token punctuation">;</span>
<span class="token comment">// import FormSubmit from '@mapbox/mr-ui/form-submit';</span>
<span class="token comment">// import ControlText from '@mapbox/mr-ui/control-text';</span>

<span class="token keyword">const</span> formConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    label<span class="token punctuation">:</span> <span class="token string">'Your name'</span><span class="token punctuation">,</span>
    placeHolder<span class="token punctuation">:</span> <span class="token string">'Enter your name'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  renderForm <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token comment">/* getControlProps, onSubmit */</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid--gut24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col col--12 col--6-mm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token comment">/* &lt;ControlText {...getControlProps('name')} /> */</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col col--12 col--6-mm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token comment">/* &lt;FormSubmit onSubmit={onSubmit} /> */</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  handleFormData <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token comment">/* formData */</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(formData);</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span>
        <span class="token attr-name">config</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formConfig<span class="token punctuation">}</span></span>
        <span class="token attr-name">renderForm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>renderForm<span class="token punctuation">}</span></span>
        <span class="token attr-name">handleFormData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleFormData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "FormSubmit",
    description: null,
    props: {
      onSubmit: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: <p>Function called when the button is clicked.</p>
      },
      label: {
        type: { name: "string" },
        required: false,
        defaultValue: "'Submit'",
        description: <p>Submit button label.</p>
      },
      disabled: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <p>Toggle disabled state of the element.</p>
      },
      testId: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: <p>Identifier for the purposes of testing.</p>
      },
      themeButton: {
        type: { name: "string" },
        required: false,
        defaultValue: "'btn px24 py12 round-full txt-s'",
        description: <p>A space seperated list of Assembly class names.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/form-submit/examples/form-submit-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> FormSubmit <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/form-submit'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormSubmit</span>
        <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token punctuation">(</span><span class="token comment">/* e */</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">/* console.log(e); */</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Submit me<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "GoLink",
    description: (
      <p>Standard styled link for going to a previous or next location.</p>
    ),
    props: {
      color: {
        type: {
          name: "enum",
          value: [
            { value: "'light'", computed: false },
            { value: "'dark'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'dark'",
        description: <p>Two colors: "light" or "dark".</p>
      },
      goBack: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <p>Whether or not this is a go back or go forward link.</p>
      },
      href: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>URL or path to the page the new tab should go to when clicked.</p>
        )
      },
      isBold: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: <p>Whether or not the text is bold.</p>
      },
      isNewTab: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>Whether or not this link should go to the href in a new tab.</p>
        )
      },
      size: {
        type: {
          name: "enum",
          value: [
            { value: "'small'", computed: false },
            { value: "'medium'", computed: false },
            { value: "'large'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'medium'",
        description: <p>Three sizes: "small", "medium", and "large".</p>
      },
      text: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>Link text.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/go-link/examples/go-link-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GoLink <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/go-link'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GoLink</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.mapbox.com<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>View all of Mapbox<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/go-link/examples/go-link-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GoLink <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/go-link'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-pink<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GoLink</span>
          <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>
          <span class="token attr-name">goBack</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">isBold</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">isNewTab</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.mapbox.com<span class="token punctuation">"</span></span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
          <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Go back to Mapbox!<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>GoLink with options</p>
      }
    ]
  },
  {
    name: "Heading",
    description: (
      <div>
        <p>Fancy headings with responsive styling.</p>
        <p>
          This component only <em>styles</em>: it does not apply an{" "}
          <code>&lt;h*&gt;</code> element. You should wrap it in the{" "}
          <code>&lt;h*&gt;</code> element appropriate to the context.
        </p>
      </div>
    ),
    props: {
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <p>The content of the heading, usually just text.</p>
      },
      variant: {
        type: {
          name: "enum",
          value: [
            { value: "'primary'", computed: false },
            { value: "'secondary'", computed: false },
            { value: "'tertiary'", computed: false },
            { value: "'minor'", computed: false }
          ]
        },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            The heading variant. Options are <code>"primary"</code>,{" "}
            <code>"secondary"</code>, <code>"tertiary"</code>, and{" "}
            <code>"minor"</code>.
          </p>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/heading/examples/heading-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Heading <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/heading'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mb12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Heading</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Primary</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Heading</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mb12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Heading</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Secondary</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Heading</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mb12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Heading</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tertiary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Tertiary</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Heading</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Heading</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>minor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Minor</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Heading</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <div>
            <p>All the heading variants.</p>
            <p>
              (You can see in this example that the semantics determined by an{" "}
              <code>&lt;h*&gt;</code>
              element are independent of the styling performed by this
              component.)
            </p>
          </div>
        )
      }
    ]
  },
  {
    name: "Icon",
    description: (
      <div>
        <p>Display an Assembly icon.</p>
        <p>
          Besides providing a convenient shortcut, this component does the
          following:
        </p>
        <ul>
          <li>Sets some accessibility props.</li>
          <li>
            Provides an <code>inline</code> mode that automatically sizes icons
            to match their surrounding text.
          </li>
        </ul>
      </div>
    ),
    props: {
      name: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            The name of the{" "}
            <a href="https://www.mapbox.com/assembly/icons/">Assembly icon</a>{" "}
            that you want to display.
          </p>
        )
      },
      size: {
        type: {
          name: "union",
          value: [{ name: "string" }, { name: "number" }]
        },
        required: false,
        defaultValue: "18",
        description: (
          <div>
            <p>
              The width and height of the icon. All icons fill up a square
              space, so this value will be applied to both width and height.
            </p>
            <p>
              If <code>inline: true</code>, the technical height will be
              controlled by the line-height of the container, but the appearance
              of the icon will still be in accordance with your{" "}
              <code>size</code> value (because it's limited by the width).
            </p>
          </div>
        )
      },
      inline: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <div>
            <p>
              If <code>true</code>, the icon will be adjusted after mounting so
              that its height matches the line-height of its container. The
              result of this is that the icon will not displace the text's
              established line-height and will be vertically centered with the
              text alongside it.
            </p>
            <p>
              This is most useful when you are inserting the icon within
              multiline text, so you can't use a flexbox layout to vertically
              center the icon and text.
            </p>
            <p>
              Be aware that there are edge cases that can cause problems with
              this setting. For example, it won't work well if you don't have a{" "}
              <code>line-height</code>
              set to a pixel value, or if there are dynamic adjustments to the
              line-height.
            </p>
          </div>
        )
      },
      passthroughProps: {
        type: { name: "object" },
        required: false,
        defaultValue: "{}",
        description: (
          <p>
            Props to pass directly to the <code>&lt;svg&gt;</code> element.
          </p>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/icon/examples/icon-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/icon'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic Icon usage.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/icon/examples/icon-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/icon'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> lineHeight<span class="token punctuation">:</span> <span class="token string">'24px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        The last thing you want in your kitchen is a</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block color-red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flame<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> fire
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        even though there is</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block color-blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>water<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> water
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        nearby. The last thing you want in your kitchen is a</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block color-red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flame<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> fire
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        even though there is</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block color-blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>water<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> water
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        nearby. The last thing you want in your kitchen is a</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block color-red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flame<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> fire
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        even though there is</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block color-blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>water<span class="token punctuation">"</span></span> <span class="token attr-name">inline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> water
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span><span class="token plain-text">
        nearby.
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Icons rendered inline with multi-line text.</p>
      }
    ]
  },
  {
    name: "IconText",
    description: (
      <div>
        <p>Put an icon next to some text.</p>
        <p>
          The icon and text will be vertically centered, with standard spacing
          between.
        </p>
      </div>
    ),
    props: {
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            The text. A string is recommended, but you can put an element in
            here if you think it's right. If you do, it should be inline-level,
            using <code>&lt;span&gt;</code>s instead of <code>&lt;div&gt;</code>s.
          </p>
        )
      },
      gap: {
        type: {
          name: "enum",
          value: [
            { value: "'small'", computed: false },
            { value: "'large'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'small'",
        description: (
          <p>
            The size of the gap between the text and the icon:{" "}
            <code>"small"</code> or <code>"large"</code>.
          </p>
        )
      },
      iconBefore: {
        type: { name: "union", value: [{ name: "node" }, { name: "string" }] },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            An icon to place before the text. If the value is a string, it
            should name an Assembly icon. If you bring your own SVG or want
            finer-grained control over how the Icon component is used, pass an
            element.
          </p>
        )
      },
      iconAfter: {
        type: { name: "union", value: [{ name: "node" }, { name: "string" }] },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            An icon to place after the text. See details documented for{" "}
            <code>iconBefore</code>.
          </p>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/icon-text/examples/icon-text-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> IconText <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/icon-text'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link txt-bold txt-s block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconText</span> <span class="token attr-name">iconBefore</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>duplicate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Duplicate</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IconText</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <p>
            The standard button-without-a-background look. Also useful for menu
            items.
          </p>
        )
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/icon-text/examples/icon-text-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> IconText <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/icon-text'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link link-purple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconText</span> <span class="token attr-name">iconAfter</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chevron-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Take me there</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IconText</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Go see the next thing!</p>
      }
    ]
  },
  {
    name: "LoaderFull",
    description: null,
    props: {
      opaque: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            By default, the loader's overlay is semi-transparent. If this prop
            is <code>true</code>, the component hides the contents of the page
            with an entirely opaque container.
          </p>
        )
      },
      style: {
        type: { name: "object" },
        required: false,
        defaultValue: "{}",
        description: <div />
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/loader-full/examples/loader-full-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LoaderFull <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/loader-full'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">showLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> loader <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      loader <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LoaderFull</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn--purple<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showLoader<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Show loader
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>loader<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Click the button to show the loader for 3 seconds.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/loader-full/examples/loader-full-example-opaque.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LoaderFull <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/loader-full'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">showLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> loader <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      loader <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LoaderFull</span> <span class="token attr-name">opaque</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn--purple<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showLoader<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Show loader
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>loader<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <p>
            An opaque loader. Click the button to show it for three seconds.
          </p>
        )
      }
    ]
  },
  {
    name: "LoaderLocal",
    description: null,
    props: {
      themeLoader: {
        type: { name: "string" },
        required: false,
        defaultValue: "'bg-gray-faint'",
        description: <p>Assembly classes to apply to the loader component</p>
      }
    },
    examples: []
  },
  {
    name: "MinimumDurationLoader",
    description: null,
    props: {
      children: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      isLoaded: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      loader: {
        type: { name: "node" },
        required: false,
        defaultValue: '<div className="loading" data-test-loader />',
        description: <div />
      },
      minDuration: {
        type: { name: "number" },
        required: false,
        defaultValue: "1000",
        description: <div />
      },
      onContentRender: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "Modal",
    description: (
      <div>
        <p>An accessible modal dialog.</p>
        <p>
          To get a standard button arrangement at the bottom of the modal, use
          the
          <code>primaryAction</code>, <code>secondaryAction</code>, and{" "}
          <code>tertiaryAction</code> props.
        </p>
        <p>
          This modal <em>traps focus within it</em>. You should be aware of
          that, because it can sometimes introduce a hurdle when integrating the
          modal with other things, especially third-party libraries. But it's an
          essential UX feature.
        </p>
      </div>
    ),
    props: {
      accessibleTitle: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              A screen-reader-friendly modal title. Required for accessibility.
            </p>
            <p>
              This <strong>will not be displayed.</strong> It's only for screen
              readers. You can visually display your own header text however
              you'd like.
            </p>
          </div>
        )
      },
      onExit: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              Invoked when the modal should close. When this callback is
              provided, a close button will be in the top right corner, and a
              click on the underlay or the Escape key will close the modal.
            </p>
            <p>
              If this prop is not provided, the close button will not be present
              and a click on the underlay or Escape will not close the modal.
              The reason you might not provide this function is that you want to
              force the user to do something, instead of allowing them to sneak
              out of the modal.
            </p>
          </div>
        )
      },
      getApplicationNode: {
        type: { name: "func" },
        required: false,
        defaultValue: "() => document.getElementById('app')",
        description: (
          <p>
            A function that should the primary application node, which should be
            <code>aria-hidden</code> when the modal is open. By default, returns
            <code>document.getElementById('app')</code>.
          </p>
        )
      },
      size: {
        type: {
          name: "enum",
          value: [
            { value: "'small'", computed: false },
            { value: "'large'", computed: false },
            { value: "'auto'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'large'",
        description: (
          <p>
            Modal container size. Options are <code>small</code>,{" "}
            <code>large</code>, or <code>auto</code>. If <code>auto</code>
            is provided, a width is not specified.
          </p>
        )
      },
      initialFocus: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Selector for a specific element that should receive initial focus.
            The value will be passed to <code>querySelector</code>.
          </p>
        )
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <p>The content of the modal.</p>
      },
      padding: {
        type: {
          name: "enum",
          value: [
            { value: "'large'", computed: false },
            { value: "'none'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'large'",
        description: (
          <p>
            <code>'large'</code> or <code>'none'</code>.
          </p>
        )
      },
      alert: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            If <code>true</code>, the modal will have the accessibility props of
            an alert modal. (Only affects screen readers.)
          </p>
        )
      },
      primaryAction: {
        type: {
          name: "shape",
          value: {
            text: { name: "string", required: true },
            callback: { name: "func", required: true },
            destructive: { name: "bool", required: false }
          }
        },
        required: false,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              The modal's primary action. If this is provided, an encouraging
              button will be rendered at the bottom of the modal.
            </p>
            <p>
              Provide this and other action props if you want a standard button
              arrangement at the bottom of the modal. If you need a more custom
              arrangement, leave them out and insert your buttons into the
              content.
            </p>
            <p>The value is an object with the following properties:</p>
            <ul>
              <li>
                <code>text</code>: <strong>(required)</strong> The text of the
                button.
              </li>
              <li>
                <code>callback</code>: <strong>(required)</strong> Invoked when
                the button is clicked.
              </li>
              <li>
                <code>destructive</code>: If <code>true</code>, the{" "}
                <a href="#button">Button</a> will be primed for desctruction.
              </li>
            </ul>
          </div>
        )
      },
      secondaryAction: {
        type: {
          name: "shape",
          value: {
            text: { name: "string", required: true },
            callback: { name: "func", required: true }
          }
        },
        required: false,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              The modal's secondary action. If this is provided, a discouraging
              button will be rendered at the bottom of the modal. See the
              description of
              <code>primaryAction</code>.
            </p>
            <p>
              <strong>
                Can only be used in combination with <code>primaryAction</code>.
              </strong>
            </p>
            <p>The value is an object with the following properties:</p>
            <ul>
              <li>
                <code>text</code>: <strong>(required)</strong> The text of the
                button.
              </li>
              <li>
                <code>callback</code>: <strong>(required)</strong> Invoked when
                the button is clicked.
              </li>
            </ul>
          </div>
        )
      },
      tertiaryAction: {
        type: {
          name: "shape",
          value: {
            text: { name: "string", required: true },
            callback: { name: "func", required: true }
          }
        },
        required: false,
        defaultValue: undefined,
        description: (
          <div>
            <p>
              The modal's tertiary action.{" "}
              <strong>You should rarely if ever need this.</strong>
              If this is provided, a <em>very</em> discouraging button will be
              rendered at the bottom of the modal. See the description of
              <code>primaryAction</code>.
            </p>
            <p>
              <strong>
                Can only be used in combination with <code>primaryAction</code>{" "}
                and
                <code>secondaryAction</code>.
              </strong>
            </p>
            <p>The value is an object with the following properties:</p>
            <ul>
              <li>
                <code>text</code>: <strong>(required)</strong> The text of the
                button.
              </li>
              <li>
                <code>callback</code>: <strong>(required)</strong> Invoked when
                the button is clicked.
              </li>
            </ul>
          </div>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/modal/examples/modal-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/modal'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> modalOpen<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>openModal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>openModal<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>closeModal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>closeModal<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">openModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> modalOpen<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> modalOpen<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">renderModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>modalOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
        <span class="token attr-name">accessibleTitle</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Animals<span class="token punctuation">"</span></span>
        <span class="token attr-name">onExit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>closeModal<span class="token punctuation">}</span></span>
        <span class="token attr-name">primaryAction</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">'Okay'</span><span class="token punctuation">,</span> callback<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>closeModal <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">secondaryAction</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">'Not sure'</span><span class="token punctuation">,</span> callback<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>closeModal <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prose<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span><span class="token plain-text">Animals</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Humpback whale</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Rufous hummingbird</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Sea otter</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Snowshoe hare</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>openModal<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Show modal
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>The standard modal.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/modal/examples/modal-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/modal'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> modalOpen<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>openModal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>openModal<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>closeModal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>closeModal<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">openModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> modalOpen<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> modalOpen<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">renderModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>modalOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
        <span class="token attr-name">accessibleTitle</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Animals<span class="token punctuation">"</span></span>
        <span class="token attr-name">onExit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>closeModal<span class="token punctuation">}</span></span>
        <span class="token attr-name">padding</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
        <span class="token attr-name">initialFocus</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#modal-input<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px24 py24 bg-gray-dark color-white txt-h4 txt-fancy round-t<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Animals!
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px24 py24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prose<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Type an animal name. Here are some suggestions:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Humpback whale</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Rufous hummingbird</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Sea otter</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Snowshoe hare</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>align-center mt24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>input mb12<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-input<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>closeModal<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
              Ok, done
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>openModal<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Show modal
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <p>
            A small modal, unpadded to allow for custom background coloring,
            with initial focus set on an input. Also features its own action
            special button.
          </p>
        )
      }
    ]
  },
  {
    name: "NewTabLink",
    description: (
      <div>
        <p>A simple new tab link wrapper component.</p>
        <p>
          This component applies an opinionated relationship (rel) attribute to
          prevent the new tab from accessing the originating tab's content.
        </p>
      </div>
    ),
    props: {
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <p>The content of the new tab link.</p>
      },
      href: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>The new tab location path.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/new-tab-link/examples/new-tab-link-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> NewTabLink <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/new-tab-link'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NewTabLink</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Hello explorer!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NewTabLink</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/new-tab-link/examples/new-tab-link-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> NewTabLink <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/new-tab-link'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NewTabLink</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link link--pink<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.mapbox.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        Hello explorer!
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NewTabLink</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>NewTabLink with options.</p>
      }
    ]
  },
  {
    name: "Popover",
    description: (
      <div>
        <p>
          Display a popover. The popover is positioned relative to an anchor
          element, and the preferred position determined by props is adjusted
          according to the available space.
        </p>
        <p>
          <strong>
            Usually you won't need to use this low-level component.
          </strong>{" "}
          You should have a look at <a href="#tooltip">Tooltip</a> and{" "}
          <a href="#popovertrigger">PopoverTrigger</a>.
        </p>
        <p>
          If you are using this component directly, you need to manage its
          open-closed state. Use <code>onExit</code> to do that.
        </p>
        <p>
          The static function <code>Popover.repositionPopovers()</code> can be
          used to automatically reposition{" "}
          <em>all the popovers that are currently open</em>. This is useful if
          some state change other than a scroll or resize may have caused the
          popover's anchor to move or the space available to the popover to
          change.
        </p>
      </div>
    ),
    props: {
      getAnchorElement: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            A function that returns the DOM node to which this Popover should be
            anchored. <code>placement</code> and <code>alignment</code> values
            are related to this anchor.
          </p>
        )
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <p>The content of the popover.</p>
      },
      placement: {
        type: {
          name: "enum",
          value: [
            { value: "'top'", computed: false },
            { value: "'bottom'", computed: false },
            { value: "'left'", computed: false },
            { value: "'right'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'right'",
        description: (
          <p>
            Preferred placement of the popover in relation to the anchor.
            Adjusted according to available space.
          </p>
        )
      },
      alignment: {
        type: {
          name: "enum",
          value: [
            { value: "'top'", computed: false },
            { value: "'bottom'", computed: false },
            { value: "'left'", computed: false },
            { value: "'right'", computed: false },
            { value: "'center'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'top'",
        description: (
          <p>
            Alignment of the popover relative to the side of the anchor on which
            it's placed. If <code>placement</code> is <code>left</code> or{" "}
            <code>right</code>, meaningful <code>alignment</code>
            values are <code>top</code>, <code>bottom</code>, and{" "}
            <code>center</code>. If <code>placement</code> is <code>top</code>{" "}
            or
            <code>bottom</code>, meaningful <code>alignment</code> values are{" "}
            <code>left</code>, <code>right</code>, and <code>center</code>.
            Adjusted according to available space.
          </p>
        )
      },
      coloring: {
        type: {
          name: "enum",
          value: [
            { value: "'light'", computed: false },
            { value: "'dark'", computed: false },
            { value: "'warning'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'light'",
        description: (
          <p>
            <code>'light'</code>, <code>'dark'</code>, or <code>'warning'</code>.
          </p>
        )
      },
      padding: {
        type: {
          name: "enum",
          value: [
            { value: "'medium'", computed: false },
            { value: "'small'", computed: false },
            { value: "'none'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'medium'",
        description: (
          <p>
            <code>'medium'</code>, <code>'small'</code>, or <code>'none'</code>.
          </p>
        )
      },
      hasPointer: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: <p>Whether or not the popover has a triangle pointer.</p>
      },
      hideWhenAnchorIsOffscreen: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <div>
            <p>
              If <code>true</code>, the popover will hide when its anchor is
              scrolled offscreen. By default, the popover will follow its anchor
              wherever it goes.
            </p>
            <p>
              If your anchor is within an internally scrolling area, you may
              want to use <code>true</code>, so the popover doesn't existing in
              a disembodied state after its anchor is scrolled away.
            </p>
          </div>
        )
      },
      allowPlacementAxisChange: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: (
          <p>
            If <code>false</code>, the popover is <em>not</em> allowed to change
            axes on the anchor when modifying its position to fit available
            space. By default, popovers on the
            <code>left</code> and <code>right</code>, for example, might change
            to <code>bottom</code> is there is neither space on the left nor the
            right.
          </p>
        )
      },
      containWithinViewport: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: (
          <p>
            If <code>false</code>, the tooltip is allowed to leave the viewport.
            By default, it will stick to the edge of the viewport as its anchor
            scrolls out of sight.
          </p>
        )
      },
      clickOutsideCloses: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: (
          <p>
            If <code>false</code>, clicking outside the popver will not close
            it. By default, it does.
          </p>
        )
      },
      escapeCloses: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: (
          <p>
            If <code>false</code>, hitting Escape will not close the popover. By
            default, it does.
          </p>
        )
      },
      receiveFocus: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: (
          <p>
            If <code>true</code>, the popover will not receive focus when it
            opens.
          </p>
        )
      },
      trapFocus: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If <code>true</code>, the popover will receive <em>and trap</em>{" "}
            focus when it opens.
          </p>
        )
      },
      onExit: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A function called when popover is dismissed. You need to use this
            callback to remove the Popover from the rendered page.
          </p>
        )
      },
      onElement: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A function to call as soon as popover element is rendered. Returns
            the DOM node of the popover body.
          </p>
        )
      },
      getInitialFocus: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A function that returns a DOM node. Use to specify which element
            should receive focus when popover is first rendered.
          </p>
        )
      },
      ignoreClickWithinElement: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A function called when an element within the popover is clicked.
          </p>
        )
      },
      getContainingElement: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A function that returns a DOM node that should contain the popover
            within it. The popover's position will be calculated relative to
            this container, rather than the viewport.
          </p>
        )
      },
      offsetFromAnchor: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Number of pixels by which the popover should be offset from its
            anchor.
          </p>
        )
      },
      passthroughProps: {
        type: { name: "object" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Props to pass directly to the <code>&lt;div&gt;</code> that will
            wrap your popover content.
          </p>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/popover/examples/popover-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Popover <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/popover'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> popoverOpen<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>setAnchor <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>setAnchor<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>getAnchor <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getAnchor<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ignore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ignore<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">togglePopover</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> popoverOpen<span class="token punctuation">:</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>popoverOpen <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setAnchor</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>anchor <span class="token operator">=</span> el<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getAnchor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>anchor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">ignore</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> el <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAnchor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">renderPopover</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>popoverOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>
        <span class="token attr-name">getAnchorElement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>getAnchor<span class="token punctuation">}</span></span>
        <span class="token attr-name">onExit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover<span class="token punctuation">}</span></span>
        <span class="token attr-name">ignoreClickWithinElement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ignore<span class="token punctuation">}</span></span>
        <span class="token attr-name">alignment</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        This is a popover.
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover<span class="token punctuation">}</span></span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span>
          <span class="token attr-name">passthroughProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            ref<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>setAnchor
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          Toggle popover
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderPopover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Standard popover.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/popover/examples/popover-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Popover <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/popover'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> popoverOpen<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>setAnchor <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>setAnchor<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>getAnchor <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getAnchor<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ignore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ignore<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">togglePopover</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> popoverOpen<span class="token punctuation">:</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>popoverOpen <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setAnchor</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>anchor <span class="token operator">=</span> el<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getAnchor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>anchor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">ignore</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> el <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAnchor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">renderPopover</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>popoverOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>
        <span class="token attr-name">coloring</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
        <span class="token attr-name">getAnchorElement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>getAnchor<span class="token punctuation">}</span></span>
        <span class="token attr-name">onExit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover<span class="token punctuation">}</span></span>
        <span class="token attr-name">ignoreClickWithinElement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ignore<span class="token punctuation">}</span></span>
        <span class="token attr-name">alignment</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        This is a dark popover.
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover<span class="token punctuation">}</span></span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span>
          <span class="token attr-name">passthroughProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            ref<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>setAnchor
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          Toggle popover
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderPopover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Dark popover.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/popover/examples/popover-c.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Popover <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/popover'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> popoverOpen<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>setAnchor <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>setAnchor<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>getAnchor <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getAnchor<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ignore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ignore<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">togglePopover</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> popoverOpen<span class="token punctuation">:</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>popoverOpen <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setAnchor</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>anchor <span class="token operator">=</span> el<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getAnchor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>anchor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">ignore</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> el <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAnchor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">renderPopover</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>popoverOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>
        <span class="token attr-name">coloring</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span>
        <span class="token attr-name">getAnchorElement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>getAnchor<span class="token punctuation">}</span></span>
        <span class="token attr-name">onExit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover<span class="token punctuation">}</span></span>
        <span class="token attr-name">ignoreClickWithinElement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ignore<span class="token punctuation">}</span></span>
        <span class="token attr-name">alignment</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        This is a warning popover.
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>togglePopover<span class="token punctuation">}</span></span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span>
          <span class="token attr-name">passthroughProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            ref<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>setAnchor
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          Toggle popover
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderPopover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Warning popover.</p>
      }
    ]
  },
  {
    name: "PopoverTrigger",
    description: (
      <div>
        <p>
          A smart trigger for managing the state of a{" "}
          <a href="#popover">Popover</a>.
        </p>
        <p>
          If you want to manage the open-closed state of the Popover yourself,
          use <a href="#popover">Popover</a> directly.
        </p>
        <p>
          <code>respondsToClick</code>, <code>respondsToHover</code>, and{" "}
          <code>respondsToFocus</code> props determine the means of opening and
          closing the Popover with interactions. If you open the Popover with a
          hover or focus, you can also close it by hovering away or blurring.
          If, however, you open the Popover with a click, you can only close it
          with another click, on the trigger or outside the Popover. If you open
          the Popover with a hover and <em>then</em> you click, this is
          equivalent to opening it with a click directly, so it will only close
          with another click (not from just hovering away).
        </p>
      </div>
    ),
    props: {
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>The trigger content. This can either be a string or valid JSX.</p>
        )
      },
      block: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <div>
            <p>
              If <code>true</code>, the element will be <code>block</code>{" "}
              displayed instead of <code>inline-block</code>.
            </p>
            <p>This is sometimes necessary to get your pixel-perfect layout.</p>
          </div>
        )
      },
      content: {
        type: { name: "union", value: [{ name: "func" }, { name: "node" }] },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            The popover content. This can either be a string, valid JSX, or a
            function returning either.
          </p>
        )
      },
      renderHiddenContent: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <div>
            <p>
              <strong>You will not need to use this.</strong> This prop is used
              by
              <a href="#tooltip">Tooltip</a> for improved accessbility.
            </p>
            <p>
              If <code>true</code>, the popover will always be rendered{" "}
              <em>but it will be visually hidden when inactive</em>.
            </p>
            <p>
              By default, the popover is added to and removed from the DOM
              dynamically.
            </p>
          </div>
        )
      },
      receiveFocus: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: (
          <div>
            <p>Whether or not the popover receives focus when it opens.</p>
            <p>
              This will <em>only</em> happen if the trigger is opened with a
              click.
            </p>
          </div>
        )
      },
      trapFocus: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <div>
            <p>
              Whether or not the popover receives <em>and traps</em> focus when
              it opens.
            </p>
            <p>
              This will <em>only</em> happen if the trigger is opened with a
              click.
            </p>
          </div>
        )
      },
      respondsToClick: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: (
          <div>
            <p>Whether or not the trigger responds to clicks.</p>
            <p>
              <strong>Warning</strong>: You probably don't want to use{" "}
              <code>respondsToClick</code> and
              <code>receivesFocus</code> <em>and</em>{" "}
              <code>respondsToFocus</code> all together, because they can have
              clashing interactions. For example, when the popover that trapped
              focus closes, it returns focus to the trigger, which then causes
              the popover to open again.
            </p>
          </div>
        )
      },
      respondsToHover: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            Whether or not the trigger responds to <code>mouseenter</code> and{" "}
            <code>mouseleave</code> events.
          </p>
        )
      },
      respondsToFocus: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            Whether or not the trigger responds to <code>focus</code> and{" "}
            <code>blur</code> events.
          </p>
        )
      },
      disabled: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <p>Whether or not the trigger is disabled.</p>
      },
      popoverProps: {
        type: { name: "object" },
        required: false,
        defaultValue: "{}",
        description: (
          <p>
            Props to pass directly to the <a href="#popover">Popover</a>{" "}
            component. See Popover's documentation for details.
          </p>
        )
      },
      passthroughTriggerProps: {
        type: { name: "object" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Props to pass directly to the <code>&lt;div&gt;</code> that will
            wrap your trigger content.
          </p>
        )
      },
      onPopoverOpen: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <p>Callback that is invoked when the popover opens.</p>
      },
      onPopoverClose: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <p>Callback that is invoked when the popover closes.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/popover-trigger/examples/popover-trigger-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PopoverTrigger <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/popover-trigger'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">getPopoverContent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">The popover has been opened</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopoverTrigger</span> <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>getPopoverContent<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Trigger</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PopoverTrigger</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>A standard PopoverTrigger.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/popover-trigger/examples/popover-trigger-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PopoverTrigger <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/popover-trigger'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> popoverOpen<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handlePopoverOpen <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handlePopoverOpen<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handlePopoverClose <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handlePopoverClose<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handlePopoverOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> popoverOpen<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handlePopoverClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> popoverOpen<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getPopoverContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">htmlFor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ptb-input<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>txt-bold txt-xs block mb3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Type in here
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ptb-input<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>input input--s bg-white<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopoverTrigger</span>
          <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>getPopoverContent<span class="token punctuation">}</span></span>
          <span class="token attr-name">onPopoverOpen</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlePopoverOpen<span class="token punctuation">}</span></span>
          <span class="token attr-name">onPopoverClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlePopoverClose<span class="token punctuation">}</span></span>
          <span class="token attr-name">trapFocus</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">popoverProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            coloring<span class="token punctuation">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span>
            alignment<span class="token punctuation">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
            placement<span class="token punctuation">:</span> <span class="token string">'top'</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">passthroughTriggerProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token string">'data-test'</span><span class="token punctuation">:</span> <span class="token string">'trigger-container'</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Trigger</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PopoverTrigger</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <p>
            A PopoverTrigger that opens a dark popover and traps focus inside
            its content.
          </p>
        )
      }
    ]
  },
  {
    name: "TabList",
    description: null,
    props: {
      items: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              id: {
                name: "string",
                description: "Identifying value for tab list item.",
                required: true
              },
              label: {
                name: "string",
                description: "The name of the tab to be displayed.",
                required: true
              },
              active: {
                name: "bool",
                description:
                  "Determines if the state of the tab list item is active.",
                required: false
              },
              href: {
                name: "string",
                description:
                  "Link to the page the lab list item should take you to when clicked.",
                required: false
              },
              disabled: {
                name: "bool",
                description:
                  "Flag to disable the clickability of an tab list item.",
                required: false
              }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      onChange: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Callback when an tab list header item is clicked. Note that this
            should be a function that is passed an <code>id</code> argument.
          </p>
        )
      },
      activeItem: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Value should coorespond to an <code>id</code> within the items
            array.
          </p>
        )
      },
      truncateBy: {
        type: { name: "number" },
        required: false,
        defaultValue: "2",
        description: (
          <p>
            Index of the first item in the <code>items</code> array that should
            move to the dropdown on narrow screens.
          </p>
        )
      },
      themeItem: {
        type: { name: "string" },
        required: false,
        defaultValue: "'border-b-mm border-b--2'",
        description: <p>CSS classes to apply to the tab list item.</p>
      },
      themeItemActive: {
        type: { name: "string" },
        required: false,
        defaultValue: "'border--blue txt-bold'",
        description: <p>CSS classes to apply to the active tab list item.</p>
      },
      themeItemTruncated: {
        type: { name: "string" },
        required: false,
        defaultValue: "'border-b--0'",
        description: (
          <p>CSS classes to apply to items when they are truncated.</p>
        )
      },
      themeItemActivePopover: {
        type: { name: "string" },
        required: false,
        defaultValue: "'border-b block'",
        description: <p>CSS classes to apply to the active tab list item.</p>
      },
      themeItemContainer: {
        type: { name: "string" },
        required: false,
        defaultValue: "''",
        description: <p>CSS classes to apply to the tab list item container.</p>
      },
      themeItemDisabled: {
        type: { name: "string" },
        required: false,
        defaultValue: "'color-gray-light'",
        description: (
          <p>
            CSS classes to apply to the tab list item when <code>disabled</code>{" "}
            is true
          </p>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/tab-list/examples/tab-list-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TabList <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/tab-list'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    activeItem<span class="token punctuation">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> id <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      activeItem<span class="token punctuation">:</span> id <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>activeItem <span class="token operator">?</span> <span class="token string">''</span> <span class="token punctuation">:</span> id
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabList</span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">activeItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>activeItem<span class="token punctuation">}</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">'one'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">'Label one'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">'two'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">'Label two'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">'three'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">'Label three'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">'four'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">'Label four'</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "Tooltip",
    description: (
      <div>
        <p>
          Wrap a trigger element so that when it is hovered or focused a tooltip
          appears.
        </p>
        <p>
          Tooltip extends <a href="#popovertrigger">PopoverTrigger</a> and
          configures the popover and trigger for accessibility.
        </p>
      </div>
    ),
    props: {
      children: {
        type: { name: "union", value: [{ name: "func" }, { name: "node" }] },
        required: true,
        defaultValue: undefined,
        description: (
          <div>
            <p>The trigger element.</p>
            <p>
              If your element is a DOM element (e.g. <code>&lt;button&gt;</code>,{" "}
              <code>&lt;a&gt;</code>, <code>&lt;span&gt;</code>,{" "}
              <code>&lt;div&gt;</code>), you can pass it directly and it will
              have accessibility-related props automatically added to it.
            </p>
            <p>
              If your element is a custom React component, you need to provide a
              function as the child. The function will be invoked with a{" "}
              <code>triggerProps</code>
              object, and you need to apply those <code>triggerProps</code> in
              such a way that they end up on the DOM element of the trigger.
            </p>
          </div>
        )
      },
      content: {
        type: { name: "union", value: [{ name: "func" }, { name: "node" }] },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            The tooltip content. This can either be a string, valid JSX, or a
            function returning either.
          </p>
        )
      },
      placement: {
        type: {
          name: "enum",
          value: [
            { value: "'top'", computed: false },
            { value: "'bottom'", computed: false },
            { value: "'left'", computed: false },
            { value: "'right'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'top'",
        description: (
          <p>Placement of the tooltip in relation to the trigger element.</p>
        )
      },
      alignment: {
        type: {
          name: "enum",
          value: [
            { value: "'top'", computed: false },
            { value: "'bottom'", computed: false },
            { value: "'left'", computed: false },
            { value: "'right'", computed: false },
            { value: "'center'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'center'",
        description: (
          <p>
            Alignment of the tooltip's edge in relation to the trigger element.
          </p>
        )
      },
      disabled: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If <code>true</code>, the tooltip will not appear.
          </p>
        )
      },
      coloring: {
        type: {
          name: "enum",
          value: [
            { value: "'light'", computed: false },
            { value: "'dark'", computed: false },
            { value: "'warning'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'light'",
        description: (
          <p>
            <code>'light'</code>, <code>'dark'</code>, or <code>'warning'</code>.
          </p>
        )
      },
      textSize: {
        type: {
          name: "enum",
          value: [
            { value: "'xs'", computed: false },
            { value: "'s'", computed: false },
            { value: "'none'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'s'",
        description: (
          <p>
            <code>'xs'</code> (extra small), <code>'s'</code> (small), or{" "}
            <code>'none'</code> (no size class).
          </p>
        )
      },
      maxWidth: {
        type: {
          name: "enum",
          value: [
            { value: "'small'", computed: false },
            { value: "'medium'", computed: false },
            { value: "'none'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'medium'",
        description: (
          <p>
            <code>'small'</code>, <code>'medium'</code>, or <code>'none'</code>{" "}
            (no <code>wmax*</code> class).
          </p>
        )
      },
      padding: {
        type: {
          name: "enum",
          value: [
            { value: "'small'", computed: false },
            { value: "'none'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'small'",
        description: (
          <p>
            <code>'small'</code> or <code>'none'</code>.
          </p>
        )
      },
      respondsToClick: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If <code>true</code>, tooltip can be opened with a mouse click.
          </p>
        )
      },
      block: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <div>
            <p>
              If <code>true</code>, the element will be <code>block</code>{" "}
              displayed instead of <code>inline-block</code>.
            </p>
            <p>
              This is sometimes necessary to get your pixel-perfect layout, if
              you don't want the extra line-height that wraps inline elements.
              Typically, you should only set <code>block</code> to{" "}
              <code>true</code> if the parent element is controlling width (in a
              layout that uses flexbox, absolute positioning, or floats).
            </p>
          </div>
        )
      },
      testId: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Added as <code>data-test</code> to the tooltip element.
          </p>
        )
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/tooltip/examples/tooltip-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Tooltip <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/tooltip'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Here<span class="token punctuation">'</span>s your tooltip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Basic</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>A standard tooltip.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/tooltip/examples/tooltip-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Tooltip <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/tooltip'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">renderTooltipContent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
        Some words with </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>txt-bold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">some style</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span>
        <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>renderTooltipContent<span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>
        <span class="token attr-name">alignment</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span>
        <span class="token attr-name">coloring</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
        <span class="token attr-name">maxWidth</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>triggerProps <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomTrigger</span> <span class="token attr-name">spanProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>triggerProps<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">CustomTrigger</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>txt-h4 txt-fancy cursor-default<span class="token punctuation">"</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">.</span><span class="token attr-value">spanProps</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      custom trigger
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`,
        description: (
          <p>
            A dark tooltip with custom placement, which uses a function child to
            render a custom component as the trigger and a function for its
            <code>content</code> prop. Also limits itself to a small width.
          </p>
        )
      }
    ]
  },
  {
    name: "UncontrolledAccordion",
    description: null,
    props: {
      items: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              id: {
                name: "string",
                description: "Identifying value for accordion item.",
                required: true
              },
              header: {
                name: "func",
                description: "Contents that are always shown.",
                required: true
              },
              body: {
                name: "node",
                description:
                  "Contents that shown when the accordion is active.",
                required: true
              },
              disabled: {
                name: "bool",
                description:
                  "Flag to disable the clickability of an accordion item.",
                required: false
              }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      onToggle: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <p>Callback when an accordion header item is clicked.</p>
      },
      initiallyActiveItem: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Value should coorespond to an <code>id</code> within the items
            array.
          </p>
        )
      },
      themeItem: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>CSS classes to apply to the accordion item container</p>
      },
      themeItemHeader: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>CSS classes to apply to the accordion header</p>
      },
      themeItemBody: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <p>CSS classes to apply to the accordion body</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/uncontrolled-accordion/examples/uncontrolled-accordion-example-basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UncontrolledAccordion <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/uncontrolled-accordion'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UncontrolledAccordion</span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">'one'</span><span class="token punctuation">,</span> header<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">one</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string">'First body'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">'two'</span><span class="token punctuation">,</span> header<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">two</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string">'Second body'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">'three'</span><span class="token punctuation">,</span> header<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">three</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string">'Third body'</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "UnderlineTabs",
    description: (
      <div>
        <p>For navigation between pages or sections.</p>
        <p>
          Items will be <code>&lt;button&gt;</code>s or <code>&lt;a&gt;</code>s,
          depending on whether they have <code>href</code> props or not.
        </p>
      </div>
    ),
    props: {
      items: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              id: { name: "string", required: true },
              label: { name: "node", required: false },
              href: { name: "string", required: false },
              disabled: { name: "bool", required: false }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: (
          <div>
            <p>Each item is an object with the following properties:</p>
            <ul>
              <li>
                <code>id</code> (required): A string ID.
              </li>
              <li>
                <code>label</code>: Text or React element. If <code>label</code>{" "}
                is not provided, <code>id</code> will be used, with its first
                letter capitalized. (You should provide your own{" "}
                <code>label</code> unless your <code>id</code>s are single
                words.)
              </li>
              <li>
                <code>href</code>: A URL. If <code>href</code> is provided, the
                items will be <code>&lt;a&gt;</code>s. If not, the items will be{" "}
                <code>&lt;button&gt;</code>s.
              </li>
              <li>
                <code>disabled</code>: Boolean.
              </li>
            </ul>
          </div>
        )
      },
      active: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            The ID of the active item. Value must correspond with an{" "}
            <code>id</code> property in the <code>items</code> array.
          </p>
        )
      },
      onChange: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A callback that will be invoked when an item is clicked. It will
            receive the ID of the clicked item and the click <code>event</code>{" "}
            itself as arguments.
          </p>
        )
      },
      size: {
        type: {
          name: "enum",
          value: [
            { value: "'small'", computed: false },
            { value: "'medium'", computed: false },
            { value: "'large'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'medium'",
        description: <p>Three sizes: "small", "medium", or "large".</p>
      },
      overlapBorder: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: (
          <p>
            If <code>true</code>, the element will extend down one pixel so the
            underline beneath the active item overlaps the bottom border of a
            container.
            <strong>You must provide your own bottom border,</strong> by setting
            it on a container element.
          </p>
        )
      },
      inactiveColor: {
        type: { name: "string" },
        required: false,
        defaultValue: "'gray'",
        description: <p>The Assembly color of inactive items.</p>
      },
      activeColor: {
        type: { name: "string" },
        required: false,
        defaultValue: "'gray-dark'",
        description: <p>The Assembly color of active items.</p>
      },
      hoverColor: {
        type: { name: "string" },
        required: false,
        defaultValue: "'blue'",
        description: <p>The Assembly color of hovered inactive items.</p>
      },
      bold: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: <p>Whether or not the text is bold.</p>
      }
    },
    examples: [
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/underline-tabs/examples/underline-tabs-a.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UnderlineTabs <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/underline-tabs'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token punctuation">:</span> <span class="token string">'Breakfast'</span><span class="token punctuation">,</span>
    id<span class="token punctuation">:</span> <span class="token string">'bf'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token punctuation">:</span> <span class="token string">'Lunch'</span><span class="token punctuation">,</span>
    id<span class="token punctuation">:</span> <span class="token string">'ln'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token punctuation">:</span> <span class="token string">'Dinner'</span><span class="token punctuation">,</span>
    id<span class="token punctuation">:</span> <span class="token string">'dr'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token punctuation">:</span> <span class="token string">'Link here'</span><span class="token punctuation">,</span>
    id<span class="token punctuation">:</span> <span class="token string">'link'</span><span class="token punctuation">,</span>
    href<span class="token punctuation">:</span> <span class="token string">'#underline-tabs-a'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token string">'bf'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">changeTab</span> <span class="token operator">=</span> id <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> active<span class="token punctuation">:</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>underline-tabs-a<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-b border--gray-light<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UnderlineTabs</span>
          <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
          <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeTab<span class="token punctuation">}</span></span>
          <span class="token attr-name">overlapBorder</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Standard usage.</p>
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/underline-tabs/examples/underline-tabs-b.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UnderlineTabs <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/underline-tabs'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token punctuation">:</span> <span class="token string">'colors'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token punctuation">:</span> <span class="token string">'sizes'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token punctuation">:</span> <span class="token string">'shapes'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token string">'sizes'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">changeTab</span> <span class="token operator">=</span> id <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> active<span class="token punctuation">:</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px12 py12 bg-gray-faint<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-b border--gray-light w300 flex-parent flex-parent--end-main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-child<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UnderlineTabs</span>
              <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
              <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span>
              <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeTab<span class="token punctuation">}</span></span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
              <span class="token attr-name">overlapBorder</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">bold</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <div>
            <p>Small, unbolded tabs, as in Studio's style editor.</p>
            <p>
              Each item's label is derived from its ID instead of separately
              provided.
            </p>
            <p>
              Also, the container's layout classes illustrate one way that you
              can right-align the tabs.
            </p>
          </div>
        )
      },
      {
        exampleModule: require("/Users/dan/Documents/github/mr-ui/src/components/underline-tabs/examples/underline-tabs-c.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UnderlineTabs <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/underline-tabs'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token punctuation">:</span> <span class="token string">'Robots'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token punctuation">:</span> <span class="token string">'Animals'</span><span class="token punctuation">,</span>
    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token punctuation">:</span> <span class="token string">'Clouds'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token punctuation">:</span> <span class="token string">'Messes'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token string">'Clouds'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">changeTab</span> <span class="token operator">=</span> id <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> active<span class="token punctuation">:</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UnderlineTabs</span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
        <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeTab<span class="token punctuation">}</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>
        <span class="token attr-name">activeColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pink<span class="token punctuation">"</span></span>
        <span class="token attr-name">inactiveColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>purple<span class="token punctuation">"</span></span>
        <span class="token attr-name">hoverColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>purple-dark<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <p>
            Large tabs with custom colors, a disabled item, and a container
            without a bottom border.
          </p>
        )
      }
    ]
  }
];
