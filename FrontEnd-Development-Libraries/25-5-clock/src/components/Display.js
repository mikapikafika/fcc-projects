import {useSelector} from "react-redux";
import './Display.css';

function Display() {
    const { isRunning, timeLeft } = useSelector(state => state);
    const isSession = !isRunning;

    const label = isSession ? "Session" : "Break";
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    const formattedTime = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    return (
      <div className="Display">
          <h2 id="timer-label">{label}</h2>
          <div id="time-left">{formattedTime}</div>
      </div>
    );
}

export default Display;