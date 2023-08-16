var inputData;
function getValue0() {
    var value = 0;
    display(value)
}
function getValue1() {
    var value = 1;
    display(value)
}
function getValue2() {
    var value = 2;
    display(value)
}
function getValue3() {
    var value = 3;
    display(value)
}
function getValue4() {
    var value = 4;
    display(value)
}
function getValue5() {
    var value = 5;
    display(value)
}
function getValue6() {
    var value = 6;
    display(value)
}
function getValue7() {
    var value = 7;
    display(value)
}
function getValue8() {
    var value = 8;
    display(value)
}
function getValue9() {
    var value = 9;
    display(value)
}
function getValueFullStop() {
    var value = ".";
    display(value)
}
function plus() {
    var value = "+"
    display(value)
}
function minus() {
    var value = "-"
    display(value)
}
function multiply() {
    var value = "*"
    display(value)
}
function divide() {
    var value = "/"
    display(value)
}
function answer() {
    var value = "="
    display(value)
}
function display(v) {
    if (v === "=") {
        inputData = document.getElementById("display")
        let data = inputData.innerText
        let total = eval(data) // 1 + 1
        document.getElementById("display").innerText = total
    } else {
        document.getElementById("display").innerText += v
    }
}
document.querySelector("#currentYear").innerText = new Date().getFullYear();