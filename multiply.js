const multiply = (a, b) => {

    if (isNaN(a) || isNaN(b)) {
        return "error"
    } else {
        return a * b;
    }
}

console.log("The Products of two number is:", multiply(3, "m"));