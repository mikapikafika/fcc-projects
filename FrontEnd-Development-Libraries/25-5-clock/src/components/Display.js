import {useSelector} from "react-redux";
import './Display.css';
import {useEffect, useState} from "react";

function Display() {
    const { timeLeft } = useSelector(state => state);
    const [currentStage, setCurrentStage] = useState("Session");

    useEffect(() => {
        if (timeLeft === 0) {
            setCurrentStage(currentStage === "Session" ? "Break" : "Session");
        }
    }, [timeLeft, currentStage]);

    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    const formattedTime = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    return (
      <div className="Display">
          <h2 id="timer-label">{currentStage}</h2>
          <div id="time-left">{formattedTime}</div>
      </div>
    );
}

export default Display;