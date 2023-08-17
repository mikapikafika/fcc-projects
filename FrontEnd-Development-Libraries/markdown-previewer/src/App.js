import logo from './logo.svg';
import './App.css';
import Editor from "./Editor";
import Preview from "./Preview";
import {useState} from "react";

function App() {
    const [markdownText, setMarkdownText] = useState("");

    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
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
