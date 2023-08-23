import Calculator from "./components/Calculator";
import Display from "./components/Display";
import ButtonWrapper from "./components/ButtonWrapper";
import Button from "./components/Button";
import {useSelector, useDispatch} from "react-redux";
import {updateEquation} from "./redux/actions";

const buttons = [
    ["C", "+-", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

const removeSpaces = (number) => number.toString().replace(/\s/g, "");

function App() {
    const equation = useSelector((state) => state);
    const dispatch = useDispatch();

    // What happens when you click numbers
    const handleNumberClicking = (event) => {
        event.preventDefault();
        const value = event.target.innerHTML;

        // 16 is the max number of digits displayed
        if (removeSpaces(equation.number).length < 16) {
            const newNumber = equation.number === 0 && value === "0"
                ? "0"
                : removeSpaces(equation.number) % 1 === 0    // is it an integer
                    ? Number(removeSpaces(equation.number + value))
                    : equation.number + value;

            const newResult = !equation.sign ? 0 : equation.result;

            dispatch(updateEquation({
                ...equation,
                number: newNumber,
                result: newResult,
            }));
        }
    };

    // What happens when you click - + * /
    const handleCalculationsBtn = (event) => {
        event.preventDefault();
        const value = event.target.innerHTML;

        // Checking whether to a previous result is available or not
        const newResult = !equation.result && equation.number ? equation.number : equation.result;

        dispatch(updateEquation({
            ...equation,
            sign: value,
            result: newResult,
            number: 0,
        }));
    };

    // What happens when you click =
    const handleEqualsBtn = () => {
        // Checking whether there's an operator and a number and not just one number
        if (equation.sign && equation.number) {
            const calculations = (a, b, sign) =>
                sign === "+"
                    ? a + b
                    : sign === "-"
                        ? a - b
                        : sign === "*"
                            ? a * b
                            : a / b;

            const newResult = equation.number === "0" && equation.sign === "/"  // preventing dividing by 0
                ? "Err"
                : calculations(Number(equation.result), Number(equation.number), equation.sign);

            dispatch(updateEquation({
                ...equation,
                result: newResult,
                sign: "",
                number: 0,
            }));
        }
    }

    // What happens when you click C
    const handleClearBtn = () => {
        dispatch(updateEquation({
            ...equation,
            sign: "",
            number: 0,
            result: 0,
        }))
    };

    // What happens when you click .
    const handleDecimalBtn = (event) => {
        event.preventDefault();
        const value = event.target.innerHTML;

        // Checking whether number already has a "."
        const newNumber = !equation.number.toString().includes(".") ? equation.number + value : equation.number;

        dispatch(updateEquation({
            ...equation,
            number: newNumber,
        }))
    };

    // What happens when you click +-
    const handleInvertBtn = () => {
        dispatch(updateEquation({
            ...equation,
            number: equation.number ? equation.number * -1 : 0,
            result: equation.result ? equation.result * -1 : 0,
            sign: "",
        }))
    }

    return (
        <Calculator>
            <Display id="display" value={equation.number ? equation.number : equation.result}/>
            <ButtonWrapper>
                {buttons.flat().map((btn, i) => {
                    return (
                        <Button
                            key={i}
                            className={btn === "=" ? "equals" : btn === "C" ? "clear" : ""}
                            value={btn}
                            id={btn}
                            onClick={
                                btn === "C"
                                    ? handleClearBtn
                                    : btn === "+-"
                                        ? handleInvertBtn
                                        : btn === "="
                                            ? handleEqualsBtn
                                            : btn === "/" || btn === "*" || btn === "-" || btn === "+"
                                                ? handleCalculationsBtn
                                                : btn === "."
                                                    ? handleDecimalBtn
                                                    : handleNumberClicking
                            }
                        />
                    );
                })}
            </ButtonWrapper>
        </Calculator>
    )
}

export default App;