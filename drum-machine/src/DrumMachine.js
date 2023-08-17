import {useEffect, useState} from "react";

const drumPads = [
    {id: "Q", keyCode: 81, audioClip: "audio1.mp3", description: "Audio 1 Description" },
    {id: "W", keyCode: 87, audioClip: "audio2.mp3", description: "Audio 1 Description" },
    {id: "E", keyCode: 69, audioClip: "audio3.mp3", description: "Audio 1 Description" },
    {id: "A", keyCode: 65, audioClip: "audio4.mp3", description: "Audio 1 Description" },
    {id: "S", keyCode: 83, audioClip: "audio5.mp3", description: "Audio 1 Description" },
    {id: "D", keyCode: 68, audioClip: "audio6.mp3", description: "Audio 1 Description" },
    {id: "Z", keyCode: 90, audioClip: "audio7.mp3", description: "Audio 1 Description" },
    {id: "X", keyCode: 88, audioClip: "audio8.mp3", description: "Audio 1 Description" },
    {id: "C", keyCode: 67, audioClip: "audio9.mp3", description: "Audio 1 Description" },
];

function DrumMachine() {
    const [displayedText, setDisplayedText] = useState("");

    const handleKeyPress = (event) => {
        const keyPressed = event.key.toUpperCase();
        const drumPad = drumPads.find( (pad) => pad.id === keyPressed);
        if (drumPad) {
            const audio = new Audio(drumPad.audioClip);
            audio.play();
            setDisplayedText(drumPad.description);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
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
            className="DrumMachine"
        >
            {drumPads.map((pad) => (
                    <div
                        key={pad.id}
                        className="drum-pad"
                        id={pad.id}
                        onClick={() => handlePadClick(pad.audioClip)}
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
            <div id="display" className="Display">
                {displayedText}
            </div>
        </div>
    );
}

export default DrumMachine;
