function Editor({markdownText, setMarkdownText}) {
    const handleInput = (event) => {
        setMarkdownText(event.target.value);
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