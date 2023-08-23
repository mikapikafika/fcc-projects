import ClockWrapper from "./components/ClockWrapper";
import Clock from "./components/Clock";
import {useState} from "react";
import Button from "./components/Button";

function App() {
    const handleIncrement = (setter) => {
        setter(prevVal => prevVal + 1);
    };

    const handleDecrement = (setter) => {
        setter(prevVal => (prevVal > 1 ? prevVal - 1 : prevVal));
    };

    return (
        <ClockWrapper>
            <Clock
            />
            <Button
                id="break-decrement"
                className={"dec-inc-btn"}
                value={"-1"}
                onClick={handleDecrement}
            />
            <Button
                id="break-increment"
                className={"dec-inc-btn"}
                value={"+1"}
                onClick={handleIncrement}
            />
            <Button
                id="session-decrement"
                className={"dec-inc-btn"}
                value={"-1"}
                onClick={handleDecrement}
            />
            <Button
                id="session-increment"
                className={"dec-inc-btn"}
                value={"+1"}
                onClick={handleIncrement}
            />
            <Button
                id="start_stop"
                className={"start-stop-btn"}
                value={">"}
                onClick={handleIncrement}
            />
            <Button
                id="reset"
                className={"start-stop-btn"}
                value={"R"}
                onClick={handleIncrement}
            />
        </ClockWrapper>
    );
}

export default App;
