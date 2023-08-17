import {marked} from "marked";

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

function Preview({markdownText}) {
    const convertedText = marked(markdownText || initialMarkdown);

    return (
        <div className="Preview">
            <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: convertedText }}
            />
        </div>
    );
}

export default Preview;