const maximum = (array) => {
    let max = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] > max)
            max = array[index];
    }
    return max;

}


const minimum = (array) => {
    let min = array[0]
    for (let index = 1; index < array.length; index++) {
        if (array[index] < min)
            min = array[index]
    }
    return min;
}

let array = [10, 2, 30, 40, 50, 60, 109];
console.log("The maximum number is:", maximum(array));
console.log("The mimimum number is:", minimum(array));