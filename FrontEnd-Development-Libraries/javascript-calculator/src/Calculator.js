import './App.css';
import {useState} from "react";
import {evaluate} from "mathjs";

function Calculator() {
    const [displayedValue, setDisplayedValue] = useState("0");
    const [equation, setEquation] = useState("");

    const handleButtonClick = (buttonId) => {
        if (buttonId === "clear") {
            setDisplayedValue("0");
            setEquation("");
        } else if (buttonId === "equals") {
            try {
                const result = evaluate(equation);
                setDisplayedValue(result.toString());
                setEquation(result.toString());
            } catch (error) {
                setDisplayedValue("Error");
            }
        } else {
            displayedValue === "0" ? setDisplayedValue(buttonId) : setDisplayedValue(displayedValue + buttonId);
        }
    }

    return (
        <div className="Calculator">
            <button id="equals" onClick={() => handleButtonClick('=')}>=</button>
            <button id="zero" onClick={() => handleButtonClick('0')}>0</button>
            <button id="one" onClick={() => handleButtonClick('1')}>1</button>
            <button id="two">2</button>
            <button id="three">3</button>
            <button id="four">4</button>
            <button id="five">5</button>
            <button id="six">6</button>
            <button id="seven">7</button>
            <button id="eight">8</button>
            <button id="nine">9</button>
            <button id="add">+</button>
            <button id="substract">-</button>
            <button id="multiply">*</button>
            <button id="divide">/</button>
            <button id="decimal">.</button>
            <button id="clear">C</button>
            <div id="display">{displayedValue}</div>
        </div>
    );
}

export default Calculator;
