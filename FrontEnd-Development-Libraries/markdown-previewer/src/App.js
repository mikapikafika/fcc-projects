import './App.scss';
import Editor from "./Editor";
import Preview from "./Preview";
import {useState} from "react";

function App() {
    const [markdownText, setMarkdownText] = useState("");

    return (
        <div className="App">
            <Editor
                markdownText={markdownText}
                setMarkdownText={setMarkdownText}
            />
            <Preview
                markdownText={markdownText}
            />
        </div>
    );
}

export default App;
