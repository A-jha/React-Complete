import React, { useState } from "react";
import Editor from "./components/editor";
import Previewer from "./components/previewer";

const placeholder = `# Welcome to my React Markdown Previewer!

## marked is a npm library
### we used mark in this project 

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

<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
> ### &copy; by Avinash Jha and Create for free code camp
`;
const App = () => {
  const [markdown, setMarkdown] = useState(placeholder);

  return (
    <div className="main-container">
      <h1 align="center">MarkDown Previewer By Avinash Jha</h1>
      <hr />
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Previewer markdown={markdown} />
    </div>
  );
};

export default App;
