import {marked} from "marked";
import './EditorPreview.scss';

function Preview({markdownText}) {
    const convertedText = marked(markdownText);

    return (
        <div className="Preview">
            <div className="toolbar"><i className="fa fa-file-text" aria-hidden="true"></i> Preview</div>
            <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: convertedText }}
            />
        </div>
    );
}

export default Preview;