// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.


const intervalTimer = (timer, timeSetter, time, setSetter, set) => {
    const originalTime = time;
    // console.log(`running intervalTimer`);
    clearInterval(timer.current);

    if (set > 0 || time > 0) {
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


const countDown = (timer, setter, newTime) => {
    // console.log(`clearing timer ${timer.current}`);
    clearInterval(timer.current);
    if (newTime > 0) {
        console.log(`running createTimer`);
        timer.current = setInterval(() => {
            setter(newTime--);
            if (newTime < 0) {
                clearInterval(timer.current);
            }
        }, 1000);
        // console.log(`set timer ${timer.current}`);
    } else {
        setter(newTime);
    }
}

const countUp = (timer, setter, newTime) => {
    // console.log(`clearing timer ${timer.current}`);
    clearInterval(timer.current);
    if (newTime === 0) {
        // console.log(`running createTimer`);
        timer.current = setInterval(() => {
            setter(newTime++);
        }, 1000);
        // console.log(`set timer ${timer.current}`);
    } else {
        setter(newTime);
        clearInterval(timer.current);
    }
}

const tabataTimer = (timer, time, rest, set, phase, timeSetter, setSetter, phaseSetter) => {
    const originalActiveTime = time;
    const originalRestTime = rest;
    timeSetter(originalActiveTime);

    console.log(`running tabataTimer:  set: ${set}, time: ${time}, phase: ${phase}`);
    clearInterval(timer.current);

    if (set > 0 || time > 0) {
        timer.current = setInterval(() => {

            // Decrement the time or decrement the set and reset the time
            if (time > 0) {
                time = time - 1;
            } else {
                // If we're at the end of a rest interval, start a new set.  Otherwise, start the rest phase.
                if (phase === 'rest') {
                    phase = 'active'
                    time = originalActiveTime;
                    set = set - 1;
                } else {
                    phase = 'rest'
                    time = originalRestTime;
                }
            }
            setSetter(set);
            timeSetter(time);
            phaseSetter(phase);


            // Exit the loop
            if (time <= 0 && set <= 0 && phase === 'rest') {
                clearInterval(timer.current);
            }
        }, 1000);
    } else {
        timeSetter(time);
        setSetter(set);
    }
}

export {countDown, countUp, intervalTimer, tabataTimer};