let count = 1;
const counterEl = document.getElementById("counter");
const resultEl = document.getElementById("result");


function multiply(num) {
    return num * 129;
}

export function increment() {
    count++;
    counterEl.textContent = count;
    resultEl.textContent = multiply(count);
}

export function decrement() {
    if (count > 0) {
        count--;
        counterEl.textContent = count;
        resultEl.textContent = multiply(count);
    }
}