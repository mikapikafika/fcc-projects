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
    useEffect(() => {
        const preview = document.getElementById("preview");
        preview.innerHTML = marked(markdownText || initialMarkdown);
    }, [markdownText]);

    return (
        <div className="Preview">
            <div id="preview" />
        </div>
    );
}

export default Preview;