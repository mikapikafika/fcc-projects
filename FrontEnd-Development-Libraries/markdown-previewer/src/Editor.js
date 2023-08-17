import './EditorPreview.scss';

function Editor({markdownText, setMarkdownText}) {
    const handleInput = (event) => {
        setMarkdownText(event.target.value);
    };

    return (
        <div className="Editor">
            <div className="toolbar"><i className="fa fa-file-text" aria-hidden="true"></i> Editor</div>
            <textarea
                id="editor"
                value={markdownText}
                onChange={handleInput}
            />
        </div>
    );
}

export default Editor;