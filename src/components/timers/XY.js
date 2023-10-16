import React from "react";
import { useState, useRef } from "react";
import Button from "../generic/Button"
import Input from "../generic/Input"
import DisplayTime from "../generic/DisplayTime";
// import { countDown } from "../../utils/helpers";

// const text = 'Start';
// const myClick = (passed) => {
//     console.log(`${text} was clicked. ${passed}`);
// };

// const intervalTimer = (timer, timeSetter, time, setSetter, set) => {
//     console.log('interval timer');
//     if (parseInt(set) >0 && parseInt(time)===0){
//         console.log(`Decrement set: ${set}, ${time}`);
//     } else if (parseInt(time) > 0){
//         console.log(`Decrement time: ${set}, ${time}`);    
//     } else if (parseInt(set) === 0 && parseInt(time) === 0) {
//         console.log(`Done: ${set}, ${time}`);   
//     } else {
//         console.log(`Reset: ${set}, ${time}`);   
//     }
// }

const intervalTimer = (timer, timeSetter, time, setSetter, set) => {
    const originalTime = time;
    // console.log(`running intervalTimer`);
    clearInterval(timer.current);

    if ( set > 0 || time > 0) {
        timer.current = setInterval(() => {

            // Decrement the time or decrement the set and reset the time
            if (time > 0) {
                time = time - 1;
            } else {
                time = originalTime;
                set = set - 1;
            }
            setSetter(set);
            timeSetter(time);


            // Exit the loop
            if (time <= 0 && set <= 0) {
                clearInterval(timer.current);
            }
        }, 1000);
    } else {
        timeSetter(time);
        setSetter(set);
    }
}


const XY = () => {
    const [currentSet, setCurrentSet] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const timer = useRef(null);

    return <>
        <DisplayTime text={currentSet} />
        <DisplayTime text={currentTime} />
        <Input value={currentSet} onChange={(e) => { setCurrentSet(e.target.value) }} />
        <Input value={currentTime} onChange={(e) => { setCurrentTime(e.target.value) }} />
        <Button text="NEW Start" onClick={() => intervalTimer(timer, setCurrentTime, currentTime, setCurrentSet, currentSet)} />
        <Button text="Reset" onClick={() => intervalTimer(timer, setCurrentTime, '', setCurrentSet, '')} />
        <Button text=">>" onClick={() => intervalTimer(timer, setCurrentTime, 0, setCurrentSet, 0)} />
    </>;

};

export default XY;
