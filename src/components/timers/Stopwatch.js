import React from "react";
import { useState, useRef } from "react";
import Button from "../generic/Button"
import DisplayTime from "../generic/DisplayTime";
import {countUp} from "../../utils/helpers";

// TO DO:
// Investigate initial pause

const Stopwatch = () => {

    // Store current time and the countup interval in state
    const [currentTime, setCurrentTime] = useState('');
    const interval = useRef(null);

    return <>
        <DisplayTime text={currentTime} />
        <Button text="Start" onClick={() => countUp(interval, setCurrentTime, 0)} />
        <Button text="Reset" onClick={() => countUp(interval, setCurrentTime, '')} />
        <Button text=">>" onClick={() => countUp(interval, setCurrentTime, currentTime)} />
    </>;

};

export default Stopwatch;
