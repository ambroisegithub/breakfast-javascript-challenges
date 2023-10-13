const reverseArray = (Input) => {

    let reversedArray = [];

    for (let index = Input.length - 1; index >= 0; index--) {

        reversedArray.push(Input[index])
    }

    return reversedArray;
}
let originalArray = [10, 20, 30, 40];
let reversed = reverseArray(originalArray);

console.log(reversed)