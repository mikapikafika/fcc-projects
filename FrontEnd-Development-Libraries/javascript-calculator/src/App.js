import Calculator from "./components/Calculator";
import Display from "./components/Display";
import ButtonWrapper from "./components/ButtonWrapper";
import Button from "./components/Button";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateEquation} from "./redux/actions";

const buttons = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

const toLocaleString = (number) =>
    String(number).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (number) => number.toString().replace(/\s/g, "");

function App() {
    const [equation, setEquation] = useState({
        sign: "",
        number: 0,
        result: 0,
    });

    // What happens when you click numbers
    const handleNumberClicking = (event) => {
        event.preventDefault();
        const value = event.target.innerHTML;

        if (removeSpaces(equation.number).length < 16) {
            setEquation({
                ...equation,
                number: equation.number === 0 && value === "0"
                    ? "0"
                    : removeSpaces(equation.number) % 1 === 0
                        ? toLocaleString(Number(removeSpaces(equation.number + value)))
                        : toLocaleString(equation.number + value),
                result: !equation.sign ? 0 : equation.result,
            });
        }
    };

    // What happens when you click - + * /
    const handleCalculationsBtn = (event) => {
        event.preventDefault();
        const value = event.target.innerHTML;

        setEquation({
            ...equation,
            sign: value,
            result: !equation.result && equation.number ? equation.number : equation.result,
            number: 0,
        });
    };

    const handleEqualsBtn = () => {
        if (equation.sign && equation.number) {
            const calculations = (a, b, sign) =>
                sign === "+"
                    ? a + b
                    : sign === "-"
                        ? a - b
                        : sign === "*"
                            ? a * b
                            : a / b;

            setEquation({
                ...equation,
                result: equation.number === "0" && equation.sign === "/"
                    ? "Err"
                    : calculations(Number(equation.result), Number(equation.number), equation.sign),
                sign: "",
                number: 0,
            })
        }
    }

    const handleClearBtn = () => {
        setEquation({
            ...equation,
            sign: "",
            number: 0,
            result: 0,
        });
    };

    const handleDecimalBtn = (event) => {
        event.preventDefault();
        const value = event.target.innerHTML;

        setEquation({
            ...equation,
            number: !equation.number.toString().includes(".") ? equation.number + value : equation.number,
        });
    };

    const handleInvertBtn = () => {
        setEquation({
            ...equation,
            number: equation.number ? equation.number * -1 : 0,
            result: equation.result ? equation.result * -1 : 0,
            sign: "",
        })
    }

    const handlePercentBtn = () => {
        let number = equation.number ? parseFloat(equation.number) : 0;
        let result = equation.result ? parseFloat(equation.result) : 0;

        setEquation({
            ...equation,
            number: (number /= Math.pow(100, 1)),
            result: (result /= Math.pow(100, 1)),
            sign: "",
        });
    };

    return (
        <Calculator>
            <Display value={equation.number ? equation.number : equation.result}/>
            <ButtonWrapper>
                {buttons.flat().map((btn, i) => {
                    return (
                        <Button
                            key={i}
                            className={btn === "=" ? "equals" : ""}
                            value={btn}
                            onClick={
                                btn === "C"
                                    ? handleClearBtn
                                    : btn === "+-"
                                        ? handleInvertBtn
                                        : btn === "%"
                                            ? handlePercentBtn
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