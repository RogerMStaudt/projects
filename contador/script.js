var numberField = document.querySelector('.number');

function decrementNumber() {
    numberField.innerHTML = parseInt(numberField.textContent) - 1;
}

function resetNumber() {
    numberField.innerHTML = 0;
}

function incrementNumber() {
    numberField.innerHTML = parseInt(numberField.textContent) + 1;
}