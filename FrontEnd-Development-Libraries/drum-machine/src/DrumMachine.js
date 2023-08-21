import {useEffect, useState} from "react";
import "./DrumMachine.scss";
import audio1 from "./audio/slip.mp3";
import audio2 from "./audio/dash.mp3";
import audio3 from "./audio/rubber.mp3";
import audio4 from "./audio/bite.mp3";
import audio5 from "./audio/stealth.mp3";
import audio6 from "./audio/running.mp3";
import audio7 from "./audio/dash2.mp3";
import audio8 from "./audio/trumpet.mp3";
import audio9 from "./audio/boink.mp3";

const drumPads = [
    {id: "Q", keyCode: 81, audioClip: audio1, description: "Slip"},
    {id: "W", keyCode: 87, audioClip: audio2, description: "Dash"},
    {id: "E", keyCode: 69, audioClip: audio3, description: "Rubber"},
    {id: "A", keyCode: 65, audioClip: audio4, description: "Bite"},
    {id: "S", keyCode: 83, audioClip: audio5, description: "Stealth"},
    {id: "D", keyCode: 68, audioClip: audio6, description: "Running"},
    {id: "Z", keyCode: 90, audioClip: audio7, description: "Dash 2"},
    {id: "X", keyCode: 88, audioClip: audio8, description: "Trumpet"},
    {id: "C", keyCode: 67, audioClip: audio9, description: "Boink"},
];

function DrumMachine() {
    const [displayedText, setDisplayedText] = useState("");
    const [activePad, setActivePad] = useState(null);

    const handleKeyPress = (event) => {
        event.preventDefault();
        // Retrieving the pressed key and finding a drumPad with such ID
        const keyPressed = event.key.toUpperCase();
        const drumPad = drumPads.find((pad) => pad.id === keyPressed);

        if (drumPad) {
            // A new Audio object with associated audioClip
            const audio = new Audio(drumPad.audioClip);
            audio.play();
            setDisplayedText(drumPad.description);
            setActivePad(keyPressed);   //  needed for CSS reasons
        }
    };

    const handlePadClick = (audioClip, description) => {
        const audio = new Audio(audioClip);
        audio.play();
        setDisplayedText(description);
    };

    // A side effect to appear after the component renders
    useEffect(() => {
        const handleKeyDown = (event) => {
            handleKeyPress(event);
        };

        // When a key is released
        const handleKeyUp = () => {
            setActivePad(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []); // should run once, not each time the component is rendered

    return (
        <div
            id="drum-machine"
            className="DrumMachine d-flex align-items-center justify-content-center min-vh-100"
        >
            <div className="row justify-content-between">
                {drumPads.map((pad) => (
                        <div
                            key={pad.id}
                            className={`drum-pad col-4 text-center mb-3 ${activePad === pad.id ? "active" : ""}`}
                            id={pad.id}
                            onClick={() => handlePadClick(pad.audioClip, pad.description)}
                        >
                            {pad.id}
                            <audio
                                className="clip"
                                id={pad.id}
                                src={pad.audioClip}
                            />
                        </div>
                    )
                )}
                <div id="display" className="Display text-center mt-4">
                    {displayedText || "Click/press a letter"}
                </div>
            </div>
        </div>
    );
}

export default DrumMachine;
