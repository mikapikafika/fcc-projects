import Calculator from "./components/Calculator";
import Display from "./components/Display";
import ButtonWrapper from "./components/ButtonWrapper";
import Button from "./components/Button";

const buttons = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

function App() {
    return (
        <Calculator>
            <Display value="0" />
            <ButtonWrapper>
                {buttons.flat().map( (btn, i) => {
                    return (
                      <Button
                          key={i}
                          className={btn === "=" ? "equals" : ""}
                          value={btn}
                          onClick={() => {console.log(`${btn} clicked!`);}}
                      />    
                    );
                })}
            </ButtonWrapper>
        </Calculator>
    )
}

export default App;