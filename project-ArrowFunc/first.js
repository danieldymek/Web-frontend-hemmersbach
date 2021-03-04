function Adding(num1, num2) {
    var wynik = console.log(num1 + num2);
    return wynik;
}
//Adding(1,10);

var funkcyjka = function () {

}

//funkcja strzalkowa
const odejmowanie = (liczba1, liczba2) => {
    console.log(liczba1 - liczba2);
}
//odejmowanie(10,5);

const mnozenie = (liczba1, liczba2) => {
    console.log(liczba1 * liczba2);

}
//mnozenie(20,10);


var liczby = [12, 312, 123154, 121, 1121, 4155];
//map() przejsc przez kazdy element i cos zrobic
const podwajanie = (lista) => {
    var dwa = lista.map(element =>
        element * 2
    )
    console.log(dwa);
}

//podwajanie(liczby)


var names = ["Daniel", "Patrycja", "Dominik", "Kamil"];
//napisz fn strzalkowa ktora bedzie zwracala imiona z listy napisanych duzymi literami

const ChangeNamesFromArrToUppercase = (nameList) => {
    var help = nameList.map(downloadElement =>
        downloadElement.toUpperCase()

    )
    console.log(help)
}
//ChangeNamesFromArrToUppercase(names);
// NAPRAW TO! ! ! ! ! ! ^  ^ ^ ^^ ^ 


var numbes = [4, 6, 2, 1, 9];
// Napisz fn() strzałkową, która będzie sortowała numey z listy

const sortNums = (numList) => {

    var toSort = numList.sort((a, b) => a - b)


    console.log(toSort)
}
//sortNums(numbes);









//var obecnosc = true;
//var sprawdzam = (obecnosc == true) ? console.log("jest") : console.log("niema a");
//
//var sprawdzam = (obecnosc %2==0) ? console.log("Parzysta") : console.log("NIEparzysta");

//zadanie domowe - stworz zmienna ktora bedzie obiektem, obiekt bedzie mial osoby ktore beda mialy imie i wiek. napisz funkcjestrzalkowa ktora bedzie sprawdzala pelnoletnosc
const randFunc = () => {
    var rand = Math.floor(Math.random() * 100);
    return rand
}
const ObjectPerson0 = {
    NAME: "TestName0",
    AGE: randFunc()
};
const ObjectPerson1 = {
    NAME: "TestName1",
    AGE: randFunc()
};
const ObjectPerson2 = {
    NAME: "TestName2",
    AGE: randFunc()
};
const ObjectPerson3 = {
    NAME: "TestName3",
    AGE: randFunc()
};
const ObjectPerson4 = {
    NAME: "TestName4",
    AGE: randFunc()
};

const ObjectListArr = [ObjectPerson0, ObjectPerson1, ObjectPerson2, ObjectPerson3, ObjectPerson4];

//const ageCheckFunc = (arrList) => {
//
//    //        var check = (arrList[i].AGE >= 18) ? console.log(arrList.NAME[i] + "ma lat 18 lub więcej") : console.log(arrList.NAME[i] + "nie ma 18 lat lub więcej");
//
//}

function ageCheckFunc(arrList) {
    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i].AGE >= 18) {
            console.log(arrList[i].NAME + " ma lat 18 lub więcej" + " [Debug] " + arrList[i].AGE)
            var more = document.createElement("p")
            var moreT = arrList[i].NAME + " ma lat 18 lub więcej" + " [Debug] " + arrList[i].AGE
            more.innerHTML = moreT;
            document.body.appendChild(more);

        } else {
            console.log(arrList[i].NAME + " nie ma 18 lat lub więcej" + " [Debug] " + arrList[i].AGE);
            var less = document.createElement("p")
            var lessT = arrList[i].NAME + " nie ma 18 lat lub więcej" + " [Debug] " + arrList[i].AGE
            less.innerHTML = lessT;
            document.body.appendChild(less);


        }

    }
}
ageCheckFunc(ObjectListArr)
