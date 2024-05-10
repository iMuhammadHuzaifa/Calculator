function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var value = document.getElementById("result").value;
    var result = eval(value);
    document.getElementById("result").value = result;
}