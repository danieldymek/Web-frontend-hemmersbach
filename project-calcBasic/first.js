////function test() {
////    if (document.getElementById("w3review").value == "poprawnehaslo") {
////        alert("zalogowano poprawnie!")
////        window.location.reload(true);
////    } else {
////        alert("wprowadz haslo jeszcze raz")
////        window.location.reload(true);
////    }
////}
////
////function createNewPElement() {
////    var TxtboxesToGenerate = document.getElementById("HowManyIntsToAdd").value;
////    if (TxtboxesToGenerate == 0 || TxtboxesToGenerate == 1) {
////        alert('wpisz liczby od 2 do nieskonczonosci');
////    }
////    for (var i = 0; i < TxtboxesToGenerate; i++) {
////        var hi = document.createElement("input");
////        var Break = document.createElement("br");
////        var pSpace = document.createElement("p");
////        var getDivName = document.getElementsByClassName("dodawanie")
////        document.createEleme
////        hi.className = 'textBoxForAdding';
//////        console.log(hi.className);
////        document.body.appendChild(hi);
////        //        document.body.appendChild(pSpace);
////        document.body.appendChild(Break);
////    }
////
////}
//////
////function getClassValues() {
////    var getClassElement = document.getElementsByClassName('textBoxForAdding');
////    var getClassLenght = getClassElement.length;
////    var getClassValuesToAnArray = [];
////    var getClassValuesToAnStringArray = [];
////    for (var i = 0; i < getClassLenght; i++) {
////        getClassValuesToAnArray.push(getClassElement[i].value);
////        console.log(getClassElement[i].value);
////        getClassValuesToAnStringArray.push(parseInt(getClassValuesToAnArray[i]))
////
////    }
////    console.log(getClassValuesToAnStringArray);
////    console.log()
////    var wynik = getClaqSssValuesToAnStringArray.reduce(function (a, b) {
////        return a + b;
////    }, 0);
////    alert("wynik dodawania to:" + wynik)
//
//
//
//}
////
////









function dodawator() {
    var getInputTagName = document.getElementsByClassName("dodawator");
    var getDivName = document.getElementsByClassName("dodawanie")
    var arrOne = [];
    var wynikDodawania = document.createElement("p")
    wynikDodawania.className = 'wynikDodawania'
    var getWynikElement = document.getElementsByClassName('wynikDodawania')
    for (var i = 0; i < getInputTagName.length; i++) {
        arrOne.push(parseInt(getInputTagName[i].value));
        var wynik = arrOne.reduce(function (a, b) {
            return a + b;
        }, 0);
    }
    if (getWynikElement.length == 1) {
        window.location.reload(true);
    }
    wynikDodawania.textContent = "wynik dodawania: " + wynik;
    getDivName[0].appendChild(wynikDodawania);

}

function wynikDodawaniaLenght() {
    var wynik = document.getElementsByClassName('wynikDodawania');
    console.log(wynik)

}

function odejmowator() {
    var getInputTagName = document.getElementsByClassName("odejmowator");
    var arrOne = [];
    var getDiv = document.getElementsByClassName("odejmowanie")
    var wynikOdejmowania = document.createElement('p');
    wynikOdejmowania.className = 'wynikOdejmowania';
    var getWynikElement = document.getElementsByClassName('wynikOdejmowania')
    for (var i = 0; i < getInputTagName.length; i++) {
        arrOne.push(parseInt(getInputTagName[i].value))
        if (arrOne.length == 2) {
            var wynik = arrOne[0] - arrOne[1];
            wynikOdejmowania.textContent = "wynik odejmowania: " + wynik;
        }
        if (getWynikElement.length == 1) {
            window.location.reload(true);
        }
    }
    getDiv[0].appendChild(wynikOdejmowania);

}

function mnożnator() {
    var getInputName = document.getElementsByClassName("mnożnator");
    var arrOne = [];
    var getDiv = document.getElementsByClassName("mnozenie");
    var wynikMnozenia = document.createElement('p');
    wynikMnozenia.className = 'wynikMnozenia';
    var getWynikElement = document.getElementsByClassName('wynikMnozenia');
    for (var i = 0; i < getInputName.length; i++) {
        arrOne.push(parseInt(getInputName[i].value))
        if (arrOne.length == 2) {
            var wynik = arrOne[0] * arrOne[1];
            wynikMnozenia.textContent = "wynik odejmowania: " + wynik;
        }
    }
    if (getWynikElement.length == 2) {
        window.location.reload(true);
    }
    getDiv[0].appendChild(wynikMnozenia);
}

function dzielnator() {
    var getInputName = document.getElementsByClassName("dzielnator");
    var arrOne = [];
    var getDiv = document.getElementsByClassName("dzielenie");
    var wynikDzielenia = document.createElement('p');
    wynikDzielenia.className = 'wynikDzielenia';
    var getWynikElement = document.getElementsByClassName('wynikDzielenia');
    for (var i = 0; i < getInputName.length; i++) {
        arrOne.push(parseInt(getInputName[i].value))
        if (arrOne.length == 2) {
            var wynik = arrOne[0] / arrOne[1];
            wynikDzielenia.textContent = "wynik dzielenia: " + wynik;
        }
    }
    if (getWynikElement.length == 2) {
        window.location.reload(true);
    }
    getDiv[0].appendChild(wynikDzielenia);
}
