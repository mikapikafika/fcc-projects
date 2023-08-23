import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {setDisplayedValue, setEquation} from "./redux/actions";
import {evaluate} from "mathjs";

const buttons = [
  ["C", "/", "*"],
  ["7", "8", "9", "-"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "="],
  ["0", ".", "←"]
];

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
                // Performing calculations and displaying the result
                const result = evaluate(equation);      // calculating
                dispatch(setDisplayedValue(result.toString()));
                dispatch(setEquation(result.toString()));
            } catch (error) {
                // If divided by 0 or invalid equation
                dispatch(setDisplayedValue("Err"));
            }
        }

        else if (buttonId === ".") {
            // Preventing multiple .s
            if (!displayedValue.includes(".")) {
                dispatch(setDisplayedValue(displayedValue + "."));
                dispatch(setEquation(equation + "."));
            }
        }

        else if (buttonId === "←") {
            if (displayedValue.length > 1) {
                const newValue = displayedValue.slice(0, -1);
                dispatch(setDisplayedValue(newValue));
                dispatch(setEquation(equation.slice(0, -1)));
            }

            else if (displayedValue.length === 1) {
                dispatch(setDisplayedValue("0"));
                dispatch(setEquation(""));
            }
        }


        else {
            if (displayedValue === "0" || displayedValue === "Err") {
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
            {buttons.map( (row, index) => (
                <div key={index} className="btn-row">
                    {row.map( (buttonId) => (
                        <button key={buttonId} id={buttonId} onClick={() => handleButtonClick(buttonId)}>
                            {buttonId}
                        </button>
                    ))}
                </div>
            ))}
            <div id="display">{displayedValue}</div>
        </div>
    );
}

export default Calculator;
