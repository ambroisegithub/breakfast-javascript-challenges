document.addEventListener("DOMContentLoaded", () => {
    let Increments = document.querySelector(".increments")
    let decrements = document.querySelector(".decrements")
    let resets = document.querySelector(".resets");
    let countDisplay = document.querySelector(".count")



    let count = 0;

    //update display

    const updateDisplay = () => {
        countDisplay.textContent = count;
    }
    Increments.addEventListener("click", () => {
        count++;
        updateDisplay();
    })

    decrements.addEventListener("click", () => {
        count--;
        updateDisplay();
    })
    resets.addEventListener("click", () => {
        count = 0;
        updateDisplay();
    })
});