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
        }
        else {console.log('nie znaleziono zadnego przedmiotu');}
    }
    
}



//PrintSpecificItemName("asduhyasd");

function SearchByPhrase(itemName) {
    console.log('Oto wyniki wyszukiwania dla frazy ' + "'" + itemName + "'")
    for (var i = 0; i < sklep.length; i++) {
        if (sklep[i].NAZWA.includes(itemName)) {
            
            console.log(sklep[i].NAZWA +  " cena: " + sklep[i].CENA +  ", ram: " + sklep[i].RAM);
            
        }
    }
    
}

SearchByPhrase("Dell");