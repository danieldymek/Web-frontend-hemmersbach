function addFunction() {
    var getDigitBox = document.getElementsByClassName("digitBox");
    var arrOne = [];
    var equalsign = document.getElementById("equalSign");
    var element = document.createElement("heavy")
    element.className = "wynik"
    var getWynikElement = document.getElementsByClassName("wynik")
    for (var i = 0; i < getDigitBox.length; i++) {
        arrOne.push(parseFloat(getDigitBox[i].value))
    }
    var calc = arrOne[0] + arrOne[1];
    element.textContent = calc;
    equalsign.appendChild(element);
    if (getWynikElement.length > 1) {
        window.location.reload(true)
    }

}

function subtractionFunction() {
    var getDigitBox = document.getElementsByClassName("digitBox");
    var arrOne = [];
    var equalsign = document.getElementById("equalSign");
    var element = document.createElement("heavy")
    element.className = "wynik"
    var getWynikElement = document.getElementsByClassName("wynik")
    for (var i = 0; i < getDigitBox.length; i++) {
        arrOne.push(parseFloat(getDigitBox[i].value))
    }
    var calc = arrOne[0] - arrOne[1];
    element.textContent = calc;
    equalsign.appendChild(element);
    if (getWynikElement.length > 1) {
        window.location.reload(true)
    }
}

function multiplierFunction() {
    var getDigitBox = document.getElementsByClassName("digitBox");
    var arrOne = [];
    var equalsign = document.getElementById("equalSign");
    var element = document.createElement("heavy")
    element.className = "wynik"
    var getWynikElement = document.getElementsByClassName("wynik")
    for (var i = 0; i < getDigitBox.length; i++) {
        arrOne.push(parseFloat(getDigitBox[i].value))
    }
    var calc = arrOne[0] * arrOne[1];
    element.textContent = calc;
    equalsign.appendChild(element);
    if (getWynikElement.length > 1) {
        window.location.reload(true)
    }
}

function divideFunction() {
    var getDigitBox = document.getElementsByClassName("digitBox");
    var arrOne = [];
    var equalsign = document.getElementById("equalSign");
    var element = document.createElement("heavy")
    element.className = "wynik"
    var getWynikElement = document.getElementsByClassName("wynik")
    for (var i = 0; i < getDigitBox.length; i++) {
        arrOne.push(parseFloat(getDigitBox[i].value))
    }
    var calc = arrOne[0] / arrOne[1];
    element.textContent = calc;
    equalsign.appendChild(element);
    if (getWynikElement.length > 1) {
        window.location.reload(true)
    }
}

function refreshFunction() {
    window.location.reload(true)
}

