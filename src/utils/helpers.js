// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

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

export {countDown, countUp};