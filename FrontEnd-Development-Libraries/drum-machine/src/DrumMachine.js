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
import audio9 from "./audio/RP4_KICK_1.mp3";

const drumPads = [
    {id: "Q", keyCode: 81, audioClip: audio1, description: "Slip"},
    {id: "W", keyCode: 87, audioClip: audio2, description: "Dash"},
    {id: "E", keyCode: 69, audioClip: audio3, description: "Rubber"},
    {id: "A", keyCode: 65, audioClip: audio4, description: "Bite"},
    {id: "S", keyCode: 83, audioClip: audio5, description: "Stealth"},
    {id: "D", keyCode: 68, audioClip: audio6, description: "Running"},
    {id: "Z", keyCode: 90, audioClip: audio7, description: "Dash 2"},
    {id: "X", keyCode: 88, audioClip: audio8, description: "Trumpet"},
    {id: "C", keyCode: 67, audioClip: audio9, description: "Kick"},
];

function DrumMachine() {
    const [displayedText, setDisplayedText] = useState("");
    const [activePad, setActivePad] = useState(null);

    // Key pressing and clicking

    const handleKeyPress = (event) => {
        event.preventDefault();
        const keyPressed = event.key.toUpperCase();
        const drumPad = drumPads.find((pad) => pad.id === keyPressed);
        if (drumPad) {
            const audio = new Audio(drumPad.audioClip);
            audio.play();
            setDisplayedText(drumPad.description);
            setActivePad(keyPressed);
        }
    };

    const handleKeyUp = () => {
        setActivePad(null);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            handleKeyPress(event);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    const handlePadClick = (audioClip, description) => {
        const audio = new Audio(audioClip);
        audio.play();
        setDisplayedText(description);
    };

    return (
        <div
            id="drum-machine"
            className="DrumMachine d-flex align-items-center justify-content-center min-vh-100"
        >
            <div class="row justify-content-between">
                {drumPads.map((pad) => (
                        <div
                            key={pad.id}
                            className="drum-pad col-4 text-center mb-3"
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
                    {displayedText}
                </div>
            </div>
        </div>
    );
}

export default DrumMachine;
