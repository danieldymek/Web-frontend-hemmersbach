var int1 = 123;
var str1 = "test";
var arr1 = ["test1", "test2"];
//
//console.log(int1);
//console.log(str1);
//console.log(arr1);


function sumFn1(toAdd1, toAdd2) {
    console.log(toAdd1 + toAdd2);
}


function sumFn2(toAdd1, toAdd2) {
    var final = toAdd1 + toAdd2;
    console.log(final)
}

//sumFn1(1, 10)
//sumFn2(111, 10)


function isEven(integer) {
    if (integer % 2 == 0) {
        console.log(integer + " jest parzysta")
    }
    if (integer % 2 != 0) {
        console.log(integer + " nie jest parzysta")
    }
    if (integer = 0) {
        console.log(integer + " jest parzysta")
    }
}
//isEven(121)
//isEven(122)
//isEven(0)

// stworz zmienna ktora bedzie lista i w niej 

var arrCars = ["mk1", "mk2", "mk3", "mk4", "mk5", "mk6", "mk7"];

function addCar(toAdd) {
    arrCars.push(toAdd);
    console.log(arrCars);
}
//addCar("testcar")

//console.log(arrCars);

// wypisz tabele warzywa 5 elementow

var arrVege = ["marchewka", "ziemniak", "kapusta", "salata", "kalafior"];
//console.log(arrVege);
//console.log(arrVege[0], arrVege[2]);

//napisz funkcje ale ma dodac na poczatku listy
//console.log(arrVege);

function addSthToThe1stPlace(sth) {
    arrVege.unshift(sth)
    console.log("usunieto ostatnią pozycje: " + arrVege.pop() + " oraz dodano: " + sth);
    console.log(arrVege)


}
//addSthToThe1stPlace("pierwsze miejsce")

//napsiz funkcje ktora bedzie petla ktora wypisze liczby od 1 do 62

function forLoopInts() {
    for (var i = 1; i < 63; i++) {
        //        console.log(i);
        if (i % 2 == 0 || i == 0) {
            console.log(i);
        }
    }
}

//forLoopInts();
// stworz trzy zmienne ktore sa obiektami imie nazwisko wiek lista ktora zawiera trzy osoby i funckja ktora bedzie wyswietlala tylko imiona
function randomInt() {
    var rand = 1 + Math.floor(Math.random() * 100);
    return rand;
}

function randomName() {
    var arrName = ["Marek", "Janek", "Danek", "Klanek", "Manek", "Wawek", "Dadanek", "Manek"];
    var rand = Math.floor(Math.random() * arrName.length);
    return arrName[rand];
}

//alert(randomName())
//randomName();

function randomSurName() {
    var arrName = ["Oliver", "Caldwell", "Stuart", "Ferguson", "Hubbard", "Porter", "Woods", "Morgan"];
    var rand = Math.floor(Math.random() * arrName.length);

    return arrName[rand];
}

var person1 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt()
}
var person2 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt()
}
var person3 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt()
}
var person4 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt()
}
var person5 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt()
}

var userNames = [person1, person2, person3, person4, person5];
console.log(userNames)

function getUsersName(arrName) {
    var arrListIMIE = [];
    var arrListNAZWISKO = [];
    var arrListWIEK = [];
    for (var i = 0; i < arrName.length; i++) {
        arrListIMIE.push(arrName[i].IMIE);
        arrListNAZWISKO.push(arrName[i].NAZWISKO);
        arrListWIEK.push(arrName[i].WIEK);
        if(arrListWIEK.length >= arrName.length){
        alert("IMIONA")
        alert(arrListIMIE);
        alert("NAZWISKA")
        alert(arrListNAZWISKO);
        alert("LATA")
        alert(arrListWIEK);
        }

    }
}



//praca domowa - stworz trzy obiekty te obiekty sa osobami

var osoba1 = {IMIE: "daniel", NAZWISKO: "test123", WIEK: "659"};
var osoba2 = {IMIE: "taniel", NAZWISKO: "test1123", WIEK: "6259"};
var osoba3 = {IMIE: "aaniel", NAZWISKO: "test121223", WIEK: "6591"};


// stworz liste z trzech osob 

var arrList = [osoba1, osoba2, osoba3];

// wypisz tylko IMIONA za pomoca funkcji;


function WypiszImiona(input){
    for (var i = 0; i < input.length; i++) {
        console.log(input[i].IMIE);
    }
}







WypiszImiona(arrList);















































































