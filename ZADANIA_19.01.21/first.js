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
    WIEK: randomInt(),
    WZROST: randomInt(),
    WAGA: randomInt()
}
var person2 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt(),
    WZROST: randomInt(),
    WAGA: randomInt()
}
var person3 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt(),
    WZROST: randomInt(),
    WAGA: randomInt()
}
var person4 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt(),
    WZROST: randomInt(),
    WAGA: randomInt()
}
var person5 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt(),
    WZROST: randomInt(),
    WAGA: randomInt()
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
        if (arrListWIEK.length >= arrName.length) {
            console.log("IMIONA")
            console.log(arrListIMIE);
            console.log("NAZWISKA")
            console.log(arrListNAZWISKO);
            console.logconsole.log("LATA")
            console.log(arrListWIEK);

        }

    }
}

// OD KOGO JESTEM WYZSZY
function OdKogoWyzszyJestem(myWeight, myHeight, objList) {
    //    wzrost
    var ifTaller = [];
    var forHowMuchAmI_Taller = [];
    // waga - ciezszy
    var ifMoreWeight = [];
    var deltaIfMoreWeight = [];
    // waga - lzejszy
    var ifLessWeight = [];
    var DeltaIfLessWeight = [];
    for (var i = 0; i < objList.length; i++) {
        if (myWeight > objList[i].WAGA) { //jestem ciezszy
            ifMoreWeight.push(objList[i].IMIE);
            var controllerWeight1 = myWeight - objList[i].WAGA;
            deltaIfMoreWeight.push(controllerWeight1)
            console.log("[DEBUG] " + objList[i].WAGA)
            console.log("Twoja waga to: " + myWeight + " kg" + "\nJestes ciezszy od " + ifMoreWeight[i] + " o: " + deltaIfMoreWeight[i] + " kg");
        }
        if (myWeight < objList[i].WAGA) { //jestem lzejszy
            ifLessWeight.push(objList[i].IMIE);
            var controllerWeight2 = objList[i].WAGA - myWeight;
            DeltaIfLessWeight.push(controllerWeight2)
            console.log("[DEBUG] " + objList[i].WAGA)
            console.log("Twoja waga to: " + myWeight + " kg" + "\nJestes lzejszy od " + ifLessWeight[i] + " o: " + DeltaIfLessWeight[i] + " kg");
        }

        if (myHeight > objList[i].WZROST) {
            ifTaller.push(objList[i].IMIE);
            var controller = myHeight - objList[i].WZROST;
            forHowMuchAmI_Taller.push(controller);
            //            if (ifTaller.length == objList.length) {
            console.log("[DEBUG] " + objList[i].WZROST)
            console.log("Twoj wzrost to: " + myHeight + " cm" + "\nJestes wyzszy od " + ifTaller[i] + " o: " + forHowMuchAmI_Taller[i] + " cm");
            //                alert("Twoj wzrost to: "+ myHeight + "\nJestes wyzszy od " + ifTaller + " o: " + forHowMuchAmI_Taller);
            //            }


        }
    }
}
//OdKogoWyzszyJestem(90, 180, userNames);

//CZTERY OBIEKTY - ZWIRZETA - NAZWA(CO TO ZA ZWIERZE) - DZWIEK JAKI WYDAJE
// JEZELI KTOS NAPISZE STRINGIEM (ALBO INNY DZWIEK)PUK PUK TO TE ZWIERZE SIE ODZYWA

var animal1 = {
    TYPE: "SWINIA",
    SOUND: "chrum chrum",
    isFRIENDLY: true,
};
var animal2 = {
    TYPE: "KROWA",
    SOUND: "muu",
    isFRIENDLY: true,
};
var animal3 = {
    TYPE: "SWINIA2",
    SOUND: "kwi kwi",
    isFRIENDLY: true,
};
var animal4 = {
    TYPE: "KOT",
    SOUND: "miau miau",
    isFRIENDLY: false,
};
var animal5 = {
    TYPE: "PIES",
    SOUND: "hauhau",
    isFRIENDLY: false,
};
// dodaj FRIENDLY TRUE,FALSE
// PO PUK PUK WYLOSUJ LOSOWE ZWIERZE
// JEZELI FRIENDLY TRUE -> LOG ZWIERZECIA + DZWIEK
// JEZELI FRIENDLY FALSE -> LOG ZWIERZECIA + DZWIEK + UCIEKAJ
var animalArr = [animal1, animal2, animal3, animal4, animal5];
//console.log(animalArr)
//console.log(animalArr[1].SOUND)

function pukpuk(stringToCheck, arrName) {
    var rand = Math.floor(Math.random() * arrName.length)
    if(stringToCheck.includes('puk puk')) {
            if(arrName[rand].isFRIENDLY == true) {
                console.log("Hej tutaj " + arrName[rand].TYPE)
                console.log('Jestem przyjazny/a')  
        }
                if(arrName[rand].isFRIENDLY == false) {
                console.log("JESTEM " + arrName[rand].TYPE)
                console.log('LEPIEJ UCIEKAJ, JESTEM ZLY')  
        }
    }
}
pukpuk('puk puk', animalArr)

//praca domowa - stworz trzy obiekty te obiekty sa osobami

var osoba1 = {
    IMIE: "daniel",
    NAZWISKO: "test123",
    WIEK: "659"
};
var osoba2 = {
    IMIE: "taniel",
    NAZWISKO: "test1123",
    WIEK: "6259"
};
var osoba3 = {
    IMIE: "aaniel",
    NAZWISKO: "test121223",
    WIEK: "6591"
};


// stworz liste z trzech osob 

var arrList = [osoba1, osoba2, osoba3];

// wypisz tylko IMIONA za pomoca funkcji;


function WypiszImiona(input) {
    for (var i = 0; i < input.length; i++) {
        console.log(input[i].IMIE);
    }
}







//WypiszImiona(arrList);


//od kogo jestem wyzszy
var testosoba1 = {
    IMIE: "testosoba1",
    WZROST: 123,
    WAGA: 80
}
var testosoba2 = {
    IMIE: "testosoba2",
    WZROST: 1231,
    WAGA: 81
}
var testosoba3 = {
    IMIE: "testosoba3",
    WZROST: 1232,
    WAGA: 82
}

var tableOsoba = [testosoba1, testosoba2, testosoba3];

function odKogoWyzszy(tabelka, mojWzrost, mojaWaga) {
    for (var i = 0; i < tabelka.length; i++) {
        // czy grubszy
        if (mojaWaga > tabelka[i].WAGA) {
            var delta = mojaWaga - tabelka[i].WAGA
            console.log("jestes ciezszy od " + tabelka[i].IMIE + "o: " + delta)
        }

    }
}
//        odKogoWyzszy(tableOsoba, 180, 92); 
// od kogo jestem wyzszy, grubszy, chudszy
