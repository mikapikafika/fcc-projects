import {useEffect} from "react";
import {marked} from "marked";

const initialMarkdown = `
# Heading 1
## Sub Heading
[Link](https://www.example.com)
Inline \`code\`

\`\`\`
// Code Block
function example() {
  return 'Hello, World!';
}
\`\`\`

- List Item 1
- List Item 2

> Blockquote

![Image](https://via.placeholder.com/150)
**Bolded Text**
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