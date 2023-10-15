/**
 * Takes n and s and returns the number of times the user when downhill and came back to base surface
 * @param {Number} n number of units moved - 8
 * @param {String} s a string denoting the dirrection eg UUDDDDUU
 * @returns {Number} number of times person when downhil
 */
function countingValleys(n, s) {
    let current = 0;
    let previous = 0;
    let counter = 0;

    for (let letter of s) {
        if (letter === 'U') {
            current += 1
            previous = current - 1
        }
        if (letter === 'D') {
            current -= 1;
            previous = current + 1
        }
        if (current < 0 && previous > current) {
            console.log('going down')
        }

        if (current > previous) {
            console.log('going up')
        }

        if (current === 0 && previous < 0) {
            counter += 1
            console.log('Back to surface, volley count: ', counter)
        }
    }
    return counter

}

console.log(countingValleys(8, 'DDUUDUDUU')) // returns 3