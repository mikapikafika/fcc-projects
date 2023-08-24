import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {reset, startStop, tick} from "../redux/actions";

function Timer() {
    const dispatch = useDispatch();
    const {
        breakLength,
        sessionLength,
        isRunning,
        timeLeft
    } = useSelector(state => state);

    useEffect(() => {
        let interval;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                dispatch(tick());
            }, 1000);
        } else if (timeLeft === 0) {
            const beepSound = document.getElementById("beep");
            beepSound.currentTime = 0;
            beepSound.play();

            // Switching between sessions

        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft, dispatch]);

    const handleStartStop = () => {
        dispatch(startStop())
    };

    const handleReset = () => {
        dispatch(reset());
        const beepSound = document.getElementById("beep");
        beepSound.pause();
        beepSound.currentTime = 0;
    };

    return (
      <div className="Timer">
          <button id="start_stop" onClick={handleStartStop}>
              {isRunning ? "Pause" : "Start"}
          </button>
          <button id="reset" onClick={handleReset}>Reset</button>
          <audio id="beep" src="."/>
      </div>
    );
}

export default Timer