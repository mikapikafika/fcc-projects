import {useEffect, useState} from "react";
import "./DrumMachine.scss";
import audio1 from "./audio/Cev_H2.mp3";
import audio2 from "./audio/Dsc_Oh.mp3";
import audio3 from "./audio/Heater-1.mp3";
import audio4 from "./audio/Heater-2.mp3";
import audio5 from "./audio/Heater-3.mp3";
import audio6 from "./audio/Heater-4_1.mp3";
import audio7 from "./audio/Heater-6.mp3";
import audio8 from "./audio/Kick_n_Hat.mp3";
import audio9 from "./audio/RP4_KICK_1.mp3";

const drumPads = [
    {id: "Q", keyCode: 81, audioClip: audio1, description: "Closed HH"},
    {id: "W", keyCode: 87, audioClip: audio2, description: "Open HH"},
    {id: "E", keyCode: 69, audioClip: audio3, description: "Heater 1"},
    {id: "A", keyCode: 65, audioClip: audio4, description: "Heater 2"},
    {id: "S", keyCode: 83, audioClip: audio5, description: "Heater 3"},
    {id: "D", keyCode: 68, audioClip: audio6, description: "Heater 4"},
    {id: "Z", keyCode: 90, audioClip: audio7, description: "Clap"},
    {id: "X", keyCode: 88, audioClip: audio8, description: "Kick n' Hat"},
    {id: "C", keyCode: 67, audioClip: audio9, description: "Kick"},
];

function DrumMachine() {
    const [displayedText, setDisplayedText] = useState("");

    // Key pressing and clicking

    const handleKeyPress = (event) => {
        event.preventDefault(); // Prevent default key behavior
        const keyPressed = event.key.toUpperCase();
        const drumPad = drumPads.find((pad) => pad.id === keyPressed);
        if (drumPad) {
            const audio = new Audio(drumPad.audioClip);
            audio.play();
            setDisplayedText(drumPad.description);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            handleKeyPress(event);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
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
