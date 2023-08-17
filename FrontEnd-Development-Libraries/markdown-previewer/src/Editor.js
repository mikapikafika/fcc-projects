import {useState} from "react";

function Editor({markdownText, setMarkdownText}) {
    const handleInput = (event) => {
        const text = event.target.value;
        setMarkdownText(text);
    };

    return (
        <div className="Editor">
            <textarea
                id="editor"
                value={markdownText}
                onChange={handleInput}
            />
        </div>
    );
}

export default Editor;