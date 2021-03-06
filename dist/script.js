const placeholder =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`;
class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder,
      editorMaximize: false,
      previewMaximize: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize =
    this.handlePreviewMaximize.bind(this);
  }
  handleChange(event) {
    this.setState({
      text: event.target.value });

  }

  handleEditorMaximize() {
    this.setState({
      editorMaximize: !this.state.editorMaximize });

  }

  handlePreviewMaximize() {
    this.setState({
      previewMaximize:
      !this.state.previewMaximize });

  }
  render() {
    const classes = this.state.editorMaximize ?
    ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress'] :
    this.state.previewMaximize ?
    ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress'] :
    ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

    return /*#__PURE__*/(

      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("div", { className: classes[0] }, /*#__PURE__*/
      React.createElement("h3", { className: "editor-title" }, " Editor:   ", /*#__PURE__*/React.createElement("i", { className: classes[2], onClick: this.handleEditorMaximize })), /*#__PURE__*/


      React.createElement("textarea", { className: "editor form-control p-3 rounded", id: "editor", value: this.state.text, onChange: this.handleChange }, " "))), /*#__PURE__*/




      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("div", { className: classes[1] }, /*#__PURE__*/
      React.createElement("h3", { className: "previewer-title" }, "Preview: ", /*#__PURE__*/React.createElement("i", { className: classes[2], onClick: this.handlePreviewMaximize })), /*#__PURE__*/

      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.text, { breaks: true }) } }))))));






  }}



ReactDOM.render( /*#__PURE__*/React.createElement(APP, null), document.getElementById('app'));