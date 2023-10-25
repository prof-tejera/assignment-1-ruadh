import React from "react";
import { useState, useRef } from "react";
import Button from "../generic/Button"
import Input from "../generic/Input"
import DisplayTime from "../generic/DisplayTime";
import { tabataTimer } from "../../utils/helpers";


// Tabata is 20 on, 10 off, but I made it configurable for future flexibility
const Tabata = ({ work, rest }) => {
    const [currentSet, setCurrentSet] = useState('');               // Tracks which set we're on (counting down)
    const [currentTime, setCurrentTime] = useState(work);         // Tracks the current time within the current phase
    const [currentPhase, setCurrentPhase] = useState('work');     // Tracks whether we're in the work or rest phase of the set.  I opted to track this in state instead of the function so we can display it on screen
    const timer = useRef(null);

    return <div className="timer">
        <div className="display">
            <DisplayTime text={currentSet}>Set: </DisplayTime>
            <DisplayTime text={currentTime}>Time: </DisplayTime>
            <DisplayTime text={currentPhase}>Phase:  </DisplayTime>
        </div>
        <div className="inputs">
            <Input value={currentSet} onChange={(e) => { setCurrentSet(e.target.value) }} />
        </div>
        <div className="buttons">
            <Button text="Start" onClick={() => tabataTimer(timer, currentTime, rest, currentSet, currentPhase, setCurrentTime, setCurrentSet, setCurrentPhase)} />
            <Button text="Reset" onClick={() => tabataTimer(timer, '', '', '', 'rest', setCurrentTime, setCurrentSet, setCurrentPhase)} />
            <Button text=">>" onClick={() => tabataTimer(timer, 0, 0, 0, 'rest', setCurrentTime, setCurrentSet, setCurrentPhase)} />
        </div>
    </div>;

};

export default Tabata;
