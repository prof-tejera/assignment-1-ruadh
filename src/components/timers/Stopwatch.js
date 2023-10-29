import React from "react";
import { useState, useRef } from "react";
import Button from "../generic/Button"
import DisplayTime from "../generic/DisplayTime";
import Input from "../generic/Input"
import { countUp } from "../../utils/helpers";

// TO DO:
// Investigate initial pause

const Stopwatch = () => {

    // Store current time and countup timer (JS interval) in state
    const [currentTime, setCurrentTime] = useState(0);
    const [endTime, setEndTime] = useState('');
    const timer = useRef(null);

    return <div className="timer">
        <div className="display">
            <DisplayTime text={currentTime} />
        </div>
        <div className="inputs">
            <Input value={endTime} onChange={(e)=>setEndTime(e.target.value)} />
        </div>
        <div className="buttons">
            <Button text="Start" onClick={() => countUp(timer, setCurrentTime, 0, endTime)} />
            <Button text="Reset" onClick={() => countUp(timer, setCurrentTime, '', endTime)} />
            <Button text=">>" onClick={() => countUp(timer, setCurrentTime, endTime, endTime)} />
        </div>
    </div>;

};

export default Stopwatch;
