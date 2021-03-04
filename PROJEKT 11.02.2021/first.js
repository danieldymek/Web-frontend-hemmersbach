function getInput() {
    var getElement = document.getElementsByClassName("displayInput")
    var getElementValue = getElement[0].value;

    var hi = document.createElement("h1");
    hi.textContent = getElementValue;
    document.body.appendChild(hi);


}

function checkIfUserIsAdult() {
    var getElement = document.getElementsByClassName("age");
    var getElementValue = getElement[0].value;
    if (getElementValue < 18) {
        var delta = 18 - getElementValue
        var hi = document.createElement("h1");
        hi.textContent = "nie masz 18stki, wróć za " + delta + "lat/a";
        document.body.appendChild(hi);

    }
    if(getElementValue >= 18) {
        var hi = document.createElement("h1");
        hi.textContent = "zapraszamy";
        document.body.appendChild(hi);
    }
}
// napisz kalkulator odejmowanie dzielenie mnozenie dodawanie - po dwie liczby