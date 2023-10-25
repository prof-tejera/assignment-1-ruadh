import React from "react";
import { useState, useRef } from "react";
import Button from "../generic/Button"
import Input from "../generic/Input"
import DisplayTime from "../generic/DisplayTime";
import { intervalTimer } from "../../utils/helpers";


const XY = () => {
    const [currentSet, setCurrentSet] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const timer = useRef(null);

    return <div className="timer">
        <div className="display">
            <DisplayTime text={currentSet}>Set: </DisplayTime>
            <DisplayTime text={currentTime}>Time: </DisplayTime>
        </div>
        <div className="inputs">
            <Input type="number" value={currentSet} onChange={(e) => { setCurrentSet(e.target.value) }} />
            <Input type="number" value={currentTime} onChange={(e) => { setCurrentTime(e.target.value) }} />
        </div>
        <div className="buttons">
            <Button text="Start" onClick={() => intervalTimer(timer, currentTime, currentSet, setCurrentTime, setCurrentSet)} />
            <Button text="Reset" onClick={() => intervalTimer(timer, '', '', setCurrentTime, setCurrentSet)} />
            <Button text=">>" onClick={() => intervalTimer(timer, 0, 0, setCurrentTime, setCurrentSet)} />
        </div>
    </div>;

};

export default XY;
