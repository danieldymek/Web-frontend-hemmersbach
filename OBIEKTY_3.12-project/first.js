// zrob 5 obiektów. maja to być laptopy. laptopy mają: nazwa, Ram, Cena, opinie(od 1 do 5), dostępność(dostępny, niedostępny)
// napisz funkcje ktora bedzie mowila ktore laptopy są dostępne

var LAPTOP1 = {
    NAZWA: 'Asus',
    RAM: "8GB",
    CENA: 3000,
    OPINIE: 1,
    DOSTĘPNOŚĆ: false
}
var LAPTOP2 = {
    NAZWA: 'DellV2',
    RAM: "16GB",
    CENA: 4000,
    OPINIE: 2,
    DOSTĘPNOŚĆ: true
}
var LAPTOP3 = {
    NAZWA: 'Dell',
    RAM: "24GB",
    CENA: 5000,
    OPINIE: 3,
    DOSTĘPNOŚĆ: true
}
var LAPTOP4 = {
    NAZWA: 'EasterEgg',
    RAM: "32GB",
    CENA: 6000,
    OPINIE: 4,
    DOSTĘPNOŚĆ: false
}
var LAPTOP5 = {
    NAZWA: 'Laptoponix',
    RAM: "40GB",
    CENA: 7000,
    OPINIE: 4.5,
    DOSTĘPNOŚĆ: false
}




//function SklepLaptopowyDostepne(input) {
//    var CzyDostepne = [];
//    for (var i = 0; i < input.length; i++) {
//        if (input[i].DOSTĘPNOŚĆ == true) {
//            CzyDostepne.push(input[i].NAZWA + " ");
//        }
//    }
//
//
//    console.log('Dostępne laptopy: ' +  CzyDostepne);
//
//
//}
//
//
//SklepLaptopowyDostepne(sklep);
// wyswietl wszystkie laptopy ktore maja opinie 3.5 i wieksza

//function Opiniomat(input) {
//    var ArrayOpiniowy = [];
//    for (var i = 0; i < input.length; i++) {
//        if (input[i].OPINIE >= 3.5) {
//            ArrayOpiniowy.push(input[i].NAZWA + " który kosztuje " + input[i].CENA + " i liczbą " + input[i].OPINIE + " gwiazdek");
//        }
//    }
//
//
//    console.log('Dostępne laptopy z opiniami powyżej 3.5: ' +  ArrayOpiniowy);
//
//
//}
//
//Opiniomat(sklep);


// prosta - wyswietl laptop o takiej nazwie
// z gwiazdka - wyświetl każdy laptop który w nazwie ma "Laptoponix"
var sklep = [LAPTOP1, LAPTOP2, LAPTOP3, LAPTOP4, LAPTOP5];

function PrintSpecificItemName(itemName) {
    console.log('Oto wyniki wyszukiwania dla przedmiotu ' + itemName)
    for (var i = 0; i < sklep.length; i++) {
        if (sklep[i].NAZWA == itemName) {
            console.log('Oto wyniki wyszukiwania dla przedmiotu: ' + "'" + itemName + "'")
            console.log(sklep[i].NAZWA + " " + "cena: " + sklep[i].CENA + ", " + "ram: " + sklep[i].RAM);
        } else {
            console.log('nie znaleziono zadnego przedmiotu');
        }
    }

}



//PrintSpecificItemName("asduhyasd");

function SearchByPhrase(itemName) {
    console.log('Oto wyniki wyszukiwania dla frazy ' + "'" + itemName + "'")
    for (var i = 0; i < sklep.length; i++) {
        if (sklep[i].NAZWA.includes(itemName)) {

            console.log(sklep[i].NAZWA + " cena: " + sklep[i].CENA + ", ram: " + sklep[i].RAM);

        }
    }

}

//SearchByPhrase("Dell");
var ArrayWagowy = [];
var ArrayWzrostowy = [];

function ArrayPush(wagaArray, wzrostArray, ileDodac) {
    for (var i = 0; i < ileDodac; i++) {
        var randomIntegerWaga = Math.floor(Math.random() * 1000)
        var randomIntegerWzrost = Math.floor(Math.random() * 100)
        wzrostArray.push(randomIntegerWzrost);
    }
}
//ArrayPush(ArrayWagowy, ArrayWzrostowy, 2);
//console.log(ArrayWzrostowy);









function BMI(waga, wzrost) {
    var bmi;
    var wzrostSquared = Math.pow(wzrost, 2)
    bmi = waga / wzrostSquared * 10000;
    bmi = bmi.toFixed(2)
    console.log("Twoje BMI przy wadze: " + waga + "kg" + " i wzroście: " + wzrost + "cm" + " wynosi: " + bmi)
}
//BMI(100, 180);





//Wartość	Co oznacza?
//BMI < 18,5	niedowaga
//18,5 ≤ BMI ≤ 24,9	waga prawidłowa
//25 ≤ BMI ≤ 29,9	nadwaga
//BMI > 30	
//otyłość

function WpiszWzrostIwageBMI(wzrost, waga) {
    var bmi;
    var wzrostSquared = Math.pow(wzrost, 2)
    bmi = waga / wzrostSquared * 10000;
    bmi = bmi.toFixed(2)
    console.log("Twoje BMI przy wadze: " + waga + "kg" + " i wzroście: " + wzrost + "cm" + " wynosi: " + bmi)

    if (bmi < 16.0) {
        console.log("JESTES WYGLODZONY")
    }
    if (bmi > 16.0 && bmi < 16.99) {
        console.log('JESTES WYCHUDZONY');
    }
    if (bmi > 17 && bmi < 18.49) {
        console.log('MASZ NIDOWAGE');
    }
    if (bmi > 18.5 && bmi < 24.99) {
        console.log('MIESCISZ SIE W NORMIE');
    }
    if (bmi > 25.0 && bmi < 29.99) {
        console.log('MASZ NADWAGE');
    }
    if (bmi > 30.0 && bmi < 34.99) {
        console.log('I STOPIEN OTYLOSCI!');
    }
    if (bmi > 35.0 && bmi < 39.99) {
        console.log('II STOPIEN OTYLOSCI!');
    }
    if (bmi > 40.0) {
        console.log('III STOPIEN OTYLOSCI!');
    }

}
//WpiszWzrostIwageBMI(184, 100)


//ZROB 5 OSOB, ZAPISZ W LISCIE, NAPSISZ ILE OSOB MA NADWAGE, ILE OSOB MA PRAWIDLOWA WAGE, OSOBA KTORA MA NAJWIEKSZE BMI TO
function randomWzrost() {
    var random = 150 + Math.floor(Math.random() * 40);
    return random;
}

function randomWaga() {
    var random = 50 + Math.floor(Math.random() * 40);
    return random;

}


var OSOBA1 = {
    IMIE: 'Karol',
    NAZWISKO: 'Nowak',
    WZROST: randomWzrost(),
    WAGA: randomWaga()
}
var OSOBA2 = {
    IMIE: 'Mikael',
    NAZWISKO: 'Nowak',
    WZROST: randomWzrost(),
    WAGA: randomWaga()
}
var OSOBA3 = {
    IMIE: 'Malpa',
    NAZWISKO: 'Nowak',
    WZROST: randomWzrost(),
    WAGA: randomWaga()
}
var OSOBA4 = {
    IMIE: 'DDamil',
    NAZWISKO: 'Nowak',
    WZROST: randomWzrost(),
    WAGA: randomWaga()

}
var OSOBA5 = {
    IMIE: 'Pamil',
    NAZWISKO: 'Nowak',
    WZROST: randomWzrost(),
    WAGA: randomWaga()
}

console.log(OSOBA1, OSOBA2, OSOBA3, OSOBA4, OSOBA5)
var arrObject = [OSOBA1, OSOBA2, OSOBA3, OSOBA4, OSOBA5];

function BMIFUNCTION(inputArray) {
    var BMIarr = [];
    for (var i = 0; i < inputArray.length; i++) {
        var BMI;
        var wzrostSquared = Math.pow(inputArray[i].WZROST, 2)
        BMI = inputArray[i].WAGA / wzrostSquared * 10000;
        BMI = BMI.toFixed(2)
        BMIarr.push(BMI)

        if (BMI < 18.49) {
            console.log(inputArray[i].IMIE + " " + inputArray[i].NAZWISKO + " - BMI PONIŻEJ 18.5 - " + "(" + BMI + ")");
        }
        if (BMI > 18.5 && BMI < 24.99) {
            console.log(inputArray[i].IMIE + " " + inputArray[i].NAZWISKO + " - BMI W NORMIE [18.5-24.99] - " + "(" + BMI + ")");
        }
        if (BMI > 24.99) {
            console.log(inputArray[i].IMIE + " " + inputArray[i].NAZWISKO + " - BMI POWYŻEJ 24.99 - " + "(" + BMI + ")");
        }


    }

    console.log("Największe BMI z całej grupy kontrolnej to: " + Math.max(BMIarr[0], BMIarr[1], BMIarr[2], BMIarr[3], BMIarr[4]))
    

}

BMIFUNCTION(arrObject)

