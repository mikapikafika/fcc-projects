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
            <button id="equals" onClick={() => handleButtonClick("=")}>=</button>
            <button id="zero" onClick={() => handleButtonClick("0")}>0</button>
            <button id="one" onClick={() => handleButtonClick("1")}>1</button>
            <button id="two" onClick={() => handleButtonClick("2")}>2</button>
            <button id="three" onClick={() => handleButtonClick("3")}>3</button>
            <button id="four" onClick={() => handleButtonClick("4")}>4</button>
            <button id="five" onClick={() => handleButtonClick("5")}>5</button>
            <button id="six" onClick={() => handleButtonClick("6")}>6</button>
            <button id="seven" onClick={() => handleButtonClick("7")}>7</button>
            <button id="eight" onClick={() => handleButtonClick("8")}>8</button>
            <button id="nine" onClick={() => handleButtonClick("9")}>9</button>
            <button id="add" onClick={() => handleButtonClick("+")}>+</button>
            <button id="substract" onClick={() => handleButtonClick("-")}>-</button>
            <button id="multiply" onClick={() => handleButtonClick("*")}>*</button>
            <button id="divide" onClick={() => handleButtonClick("/")}>/</button>
            <button id="decimal" onClick={() => handleButtonClick(".")}>.</button>
            <button id="clear" onClick={() => handleButtonClick("C")}>C</button>
            <div id="display">{displayedValue}</div>
        </div>
    );
}

export default Calculator;
