import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {setDisplayedValue, setEquation} from "./redux/actions";
import {evaluate} from "mathjs";

function Calculator() {
    const displayedValue = useSelector((state) => state.displayedValue);
    const equation = useSelector((state) => state.equation);
    const dispatch = useDispatch();

    const handleButtonClick = (buttonId) => {
        // Clearing everything
        if (buttonId === "C") {
            dispatch(setDisplayedValue("0"));
            dispatch(setEquation(""));
        }


        else if (buttonId === "=") {
            try {
                const result = evaluate(equation);
                dispatch(setDisplayedValue(result.toString()));
                dispatch(setEquation(result.toString()));
            } catch (error) {
                dispatch(setDisplayedValue("Error"));
            }
        }

        else if (buttonId === ".") {
            // Preventing multiple .s
            if (!displayedValue.includes(".")) {
                dispatch(setDisplayedValue(displayedValue + "."));
                dispatch(setEquation(equation + "."));
            }
        }


        else {
            if (displayedValue === '0' || displayedValue === 'Error') {
                // Preventing multiple 0s
                if (buttonId !== "0") {
                    dispatch(setDisplayedValue(buttonId));
                    dispatch(setEquation(buttonId));
                }
            }


            else {
                if (equation && !equation.includes("=")) {
                    dispatch(setEquation(equation + buttonId));
                } else {
                    dispatch(setEquation(displayedValue + buttonId));
                }
                dispatch(setDisplayedValue(displayedValue + buttonId));
            }
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
