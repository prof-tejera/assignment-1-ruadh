import React from "react";
import { useState } from "react";
import Button from "../generic/Button"
// import Input from "../generic/Input"
import DisplayTime from "../generic/DisplayTime";

const text = 'Start';
const myClick = (passed) => {
    console.log(`${text} was clicked. ${passed}`);
};

// I'm making the intervals configurable to leave room for future dev and because I'd use that feature myself
const Tabata = ({active, rest}) => {
    const [current, setCurrent] = useState('');
    if (current === null) { setCurrent(0); }  // TEMP FOR TESTING - avoids unused vars warning

    return <>
        <DisplayTime text={current} />
        {/* <Input /> */}
        <Button text="Start" onClick={() => myClick(`${current}, ${active}, ${rest}`)} />
        <Button text="Reset" onClick={() => myClick(current)} />
        <Button text=">>" onClick={() => myClick(current)} />
    </>;

};

export default Tabata;
