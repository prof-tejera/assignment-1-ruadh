import React from "react";
import { useState, useRef } from "react";
import Button from "../generic/Button"
import Input from "../generic/Input"
import DisplayTime from "../generic/DisplayTime";
import { tabataTimer } from "../../utils/helpers";


// Tabata is 20 on, 10 off, but I made it configurable for future flexibility
const Tabata = ({active, rest}) => {
    const [currentSet, setCurrentSet] = useState('');               // Tracks which set we're on (counting down)
    const [currentTime, setCurrentTime] = useState(active);             // Tracks the current time within the current set
    const [currentPhase, setCurrentPhase] = useState('active');     // Tracks whether we're in the active or rest phase of the set
    const timer = useRef(null);

    return <>
        <DisplayTime text={currentSet}>Set: </DisplayTime>
        <DisplayTime text={currentTime}>Time: </DisplayTime>
        <DisplayTime text={currentPhase}>Phase:  </DisplayTime>
        <Input value={currentSet} onChange={(e) => { setCurrentSet(e.target.value) }} />
        <Button text="Start" onClick={() => tabataTimer(timer, currentTime, rest, currentSet, currentPhase, setCurrentTime, setCurrentSet, setCurrentPhase)} />
        <Button text="Reset" onClick={() => tabataTimer(timer, '', '', '', 'rest', setCurrentTime, setCurrentSet, setCurrentPhase)} />
        <Button text=">>" onClick={() => tabataTimer(timer, 0, 0, 0, 'rest', setCurrentTime, setCurrentSet, setCurrentPhase)} />
    </>;

};

export default Tabata;
