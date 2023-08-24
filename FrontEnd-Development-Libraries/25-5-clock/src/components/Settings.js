import {useDispatch, useSelector} from "react-redux";
import {decrementBreak, decrementSession, incrementBreak, incrementSession} from "../redux/actions";

function Settings() {
    const dispatch = useDispatch();
    const {breakLength, sessionLength} = useSelector(state => state);

    const handleBreakIncrement = () => {
        dispatch(incrementBreak());
    };

    const handleBreakDecrement = () => {
        dispatch(decrementBreak());
    };

    const handleSessionIncrement = () => {
        dispatch(incrementSession());
    };

    const handleSessionDecrement = () => {
        dispatch(decrementSession());
    };

    return (
        <div className="Settings">
            <div className="setting">
                <h2>Break Length</h2>
                <div className="controls">
                    <button id="break-decrement" className="btn" onClick={handleBreakDecrement}>-</button>
                    <span id="break-length">{breakLength}</span>
                    <button id="break-increment" className="btn" onClick={handleBreakIncrement}>+</button>
                </div>
            </div>

            <div className="setting">
                <h2>Session Length</h2>
                <div className="controls">
                    <button id="session-decrement" className="btn" onClick={handleSessionDecrement}>-</button>
                    <span id="session-length">{sessionLength}</span>
                    <button id="session-increment" className="btn" onClick={handleSessionIncrement}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;