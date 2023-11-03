let count = 0;

function onMinusClicked() {
    // count = count - 1;
    count -= 1;
    document.querySelector("#count").textContent = count;
}

function onPlusClicked() {
    // count = count + 1;
    count += 1;
    document.querySelector("#count").textContent = count;
}