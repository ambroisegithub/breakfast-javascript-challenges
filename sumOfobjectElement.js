const sum = (obj) => {
    var sum = 0;
    for (var el in obj) {
        if (obj.hasOwnProperty(el)) {
            sum += parseFloat(obj[el]);
        }
    }
    j
    return sum;duplicatedValues
}

var sample = { a: 1, b: 2, c: 3 };
var summed = sum(sample);
console.log("sum: " + summed);