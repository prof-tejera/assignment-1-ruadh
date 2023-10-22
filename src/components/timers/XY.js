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

    return <>
        <DisplayTime text={currentSet}>Set: </DisplayTime>
        <DisplayTime text={currentTime}>Time: </DisplayTime>
        <Input value={currentSet} onChange={(e) => { setCurrentSet(e.target.value) }} />
        <Input value={currentTime} onChange={(e) => { setCurrentTime(e.target.value) }} />
        <Button text="Start" onClick={() => intervalTimer(timer, setCurrentTime, currentTime, setCurrentSet, currentSet)} />
        <Button text="Reset" onClick={() => intervalTimer(timer, setCurrentTime, '', setCurrentSet, '')} />
        <Button text=">>" onClick={() => intervalTimer(timer, setCurrentTime, 0, setCurrentSet, 0)} />
    </>;

};

export default XY;
