import React from "react";
import { useState, useRef } from "react";
import Button from "../generic/Button"
import Input from "../generic/Input"
import DisplayTime from "../generic/DisplayTime";
import { countDown } from "../../utils/helpers";

// TO DO:
// Think about:  how to accept time:  hh::mm::ss, separate inputs, etc.?
// Investigate initial pause in countDown

const Countdown = () => {

    // Store current time and the countdown timer interval in state
    const [currentTime, setCurrentTime] = useState('');
    const timer = useRef(null);

    return <div className="timer">
        <div className="display">
            <DisplayTime text={currentTime} />
        </div>
        <div className="inputs">
            <Input value={currentTime} onChange={(e) => { setCurrentTime(e.target.value) }} />
        </div>
        <div className="buttons">
            <Button text="Start" onClick={() => countDown(timer, setCurrentTime, currentTime)} />
            <Button text="Reset" onClick={() => countDown(timer, setCurrentTime, '')} />
            <Button text=">>" onClick={() => countDown(timer, setCurrentTime, 0)} />
        </div>
    </div>;

};

export default Countdown;
