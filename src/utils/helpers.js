// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.


const intervalTimer = (timer, time, set, timeSetter, setSetter) => {
    const originalTime = time;
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
                // TO DO:  maybe return a "done" status?
            }
        }, 1000);
    } else {
        timeSetter(time);
        setSetter(set);
    }
}


const countDown = (timer, setter, newTime) => {
    clearInterval(timer.current);
    if (newTime > 0) {
        console.log(`running countDown`);
        timer.current = setInterval(() => {
            setter(newTime--);
            if (newTime < 0) {
                clearInterval(timer.current);
            }
        }, 1000);
    } else {
        setter(newTime);
    }
}

// TO DO:  refactor to merge with countUp?
const countUp = (timer, setter, newTime, endTime) => {
    clearInterval(timer.current);
    if (newTime === 0) {
        console.log(`running countUp`);
        timer.current = setInterval(() => {
            setter(newTime++);
            if (newTime > endTime) {
                clearInterval(timer.current);
            }
        }, 1000);
    } else {
        setter(newTime);
    }
}

// TO DO:  can I refactor this to use a set timer as a subroutine?
const tabataTimer = (timer, time, rest, set, phase, timeSetter, setSetter, phaseSetter) => {
    const originalWorkTime = time;
    const originalRestTime = rest;
    timeSetter(originalWorkTime);

    console.log(`running tabataTimer:  set: ${set}, time: ${time}, phase: ${phase}`);
    clearInterval(timer.current);

    if (set > 0 || time > 0) {
        timer.current = setInterval(() => {
            
            if (time > 0) {
                time = time - 1;
            } else {
                // If we're at the end of a rest interval, start a new set.  Otherwise, start the rest phase.
                if (phase === 'rest') {
                    phase = 'work'
                    time = originalWorkTime;
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