import './App.scss';
import Editor from "./Editor";
import Preview from "./Preview";
import {useState} from "react";

const initialMarkdown = `
# Title Header (H1 Header)
## Sub Header (H2 header)

[Link to a hacker typer website to feel like a hacker](https://hackertyper.com)

Here's some \`inline code\`

\`\`\`
// And here's a block of code:
function example() {
  return "Hello, World!";
}
\`\`\`

- This is a list item
- This list is unordered

> Imagine a profound quote here

![Image](https://64.media.tumblr.com/25ec1da1ceb3d8c59ff61abda466e66d/tumblr_mq5iy5uA1K1s5jjtzo1_500.gif)

**This text is bold**
`;

function App() {
    const [markdownText, setMarkdownText] = useState(initialMarkdown);

    return (
        <div className="App">
            <div className="elements">
                <Editor
                    markdownText={markdownText}
                    setMarkdownText={setMarkdownText}
                />
                <Preview
                    markdownText={markdownText}
                />
            </div>
            <div className="copyright text-center mt-4">Coded by <span className="important">Michalina Wysocka</span>;
                <a href="https://github.com/mikapikafika/fcc-projects" className="text-decoration-none">
                     <i className="fa fa-github" aria-hidden="true"></i> repo</a>
            </div>
        </div>
    );
}

export default App;
