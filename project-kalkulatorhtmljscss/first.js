function test() {
    if (document.getElementById("w3review").value == "poprawnehaslo") {
        alert("zalogowano poprawnie!")
        window.location.reload(true);
    } else {
        alert("wprowadz haslo jeszcze raz")
        window.location.reload(true);
    }
}

function createNewPElement() {
    var TxtboxesToGenerate = document.getElementById("HowManyIntsToAdd").value;
    if (TxtboxesToGenerate < 2 ) {
        alert('wpisz liczby od 2 do nieskonczonosci');
        window.location.reload(true);
    }
    for (var i = 0; i < TxtboxesToGenerate; i++) {
        var hi = document.createElement("input");
        var Break = document.createElement("br");
        var pSpace = document.createElement("p");
        hi.className = 'textBoxForAdding';
        console.log(hi.className);
        document.body.appendChild(hi);
//        document.body.appendChild(pSpace);
        document.body.appendChild(Break);
    }

}

function getClassValues() {
    var getClassElement = document.getElementsByClassName('textBoxForAdding');
    var getClassLenght = getClassElement.length;
    var getClassValuesToAnArray = [];
    var getClassValuesToAnStringArray = [];
    for (var i = 0; i < getClassLenght; i++) {
        getClassValuesToAnArray.push(getClassElement[i].value);
        console.log(getClassElement[i].value);
        getClassValuesToAnStringArray.push(parseInt(getClassValuesToAnArray[i]))

    }
    console.log(getClassValuesToAnStringArray);
    console.log()
        var wynik = getClassValuesToAnStringArray.reduce(function (a, b) {
            return a + b;
        }, 0);
        alert("wynik dodawania to: " + wynik)


}
