const greet = () => console.log('Hello, World!');

/**
 *! runWhen(greet, 1)
 ** Hello World! once after 1 second
 */

/**
 *! runWhen(greet, 2, 3)
 ** Hello World! three times - every 2 seconds
 */

/**
 *! runWhen(greet, 0.1, Infinity)
 ** Hello World! every 100ms until stopped
 */

/**
 *! interval = [10]
 *! runWhen(greet, interval, -1)
 *! runWhen(() => interval.changeTo(3), 4)
 ** Hello World! after 10 seconds and then every 3 seconds until stopped
 */

/**
 *! runWhen(greet, 0)
 ** Hello World! immediately but asynchronously
 */

/**
 *! runWhen(greet)
 ** Hello World! on next animation frame
 */

/**
 *! runWhen(greet, null, Infinity)
 ** Hello World! on every animation frame until stopped
 */

/**
 * A replacement for setTimeout, setInterval and requestAnimationFrame
 *
 * @param {function} callback - a function to be called when it is time to run
 * @param {number | [number] | null} seconds - the number of seconds to wait before calling the callback, use decimals for fractions of a second, wrap in an array to change interval later, omit or pass null to use requestAnimationFrame
 * @param {number} count - the number of times to call the callback, pass Infinity for infinite
 * @returns {function} a cancel-function that can be called to cancel the run-when
 */

function runWhen(callback, seconds, count)
