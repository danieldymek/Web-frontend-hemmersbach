// Trzy rzeczy potrzebne do petli for to:
// 1 od czego zacztna sie nasza patla (liczba)
// 2 warunek do kiedy biegnie pętla
// 3 iteracja zwiekszanie/zmniejszanie po przejsciu petli

// petla jest przydatna do wykonania czegos N razy


//function LoggingIntegersFrom0To10() {
//
//    for (var i = 0; i < 11; i++) {
//
//        console.log(i);
//
//    }
//}


//var table = ["Jenkins", "Pyton", "Eskuel", "Pehap", "Json"];
//
//console.log(table[2]); // wyswietli trzeci element;
//
//// napisz funkcje ktora bedzie wyswietlala wszystkie imiona z listy;
//var tableLenght = table.length; // pobiera dlugosc / ilosc elementow w tablicy;
//function LoggingNamesFromMyTable(input) {
//
//    for (var i = 0; i < input.length; i++) {
//        // uzylem tutaj tablelenght, zeby to bylo dynamiczne;
//        console.log(table[i]); // i za kazdym wywowaniem sie zwieksza, i jest stopowane przez i < tablelenght;
//
//    }
//}
//
//
//LoggingNamesFromMyTable(table);

//zrob funkcje ktora pushuje nowe elementy do arraya
// stworz liste z liczbami. liczb ma byc conajmniej 20
// napisz funkcje ktora wypisze tylko parzyste liczby z tablicy


//var table = [1,2,3,4,5,6,7,8,9,10,11,121,133,14,15,16,17,18,19,20];
//
////console.log(table[2]); // wyswietli trzeci element;
//
//// napisz funkcje ktora bedzie wyswietlala wszystkie imiona z listy;
//var tableLenght = table.length; // pobiera dlugosc / ilosc elementow w tablicy;
//function LoggingNamesFromMyTable(input) {
//
//    for (var i = 0; i < input.length; i++) {
//        // uzylem tutaj tablelenght, zeby to bylo dynamiczne;
//        console.log(input[i+++1]); // i za kazdym wywowaniem sie zwieksza, i jest stopowane przez i < tablelenght;
//
//    }
//}
//
//
//LoggingNamesFromMyTable(table);
//
//var table = [1,2,3,4,5,6,7,8,9,10,222,121,133,14,15,16,17,18,19,20];
//
////console.log(table[2]); // wyswietli trzeci element;
//
//// napisz funkcje ktora bedzie wyswietlala wszystkie imiona z listy;
//var tableLenght = table.length; // pobiera dlugosc / ilosc elementow w tablicy;
//function LoggingNamesFromMyTable(input) {
//
//    for (var i = 0; i < input.length; i++) {
//        if (input[i]%2!==0) {
//        console.log(input[i]);
//
//        }
//        
//    }
//}
//
//
//LoggingNamesFromMyTable(table);


// zapisz liste z imionami
var table = ["Jenkins", "Pyton", "Eskuel", "Pehap", "Json"];
//napisz funkcje ktora bedzie losowo wypisywac jakies imie z tablicy
var randomInteger = Math.floor(Math.random() * table.length);
console.log(randomInteger)

console.log("costam" + table.length);

function randomName(input) {
    for (var i = 0; i < input.length; i++) {
        console.log(table[randomInteger])


    }
}
randomName(table);



function TestRandom() {
    for (var i = 0; i < 100; i++) {
        if (randomInteger > 4) {
            console.log("wystapilo")
        }
    }
}
TestRandom()



/// do domu jaka jeest roznica pomiedzy: var, let, const
// co to jest i jak uzywac Math.random(), Math.floor() oraz Math.round()
// 








var randomArray = [1];



function pushRandomsIntoArray(amountOfItemsToAdd) {

    for (var i = 0; i < amountOfItemsToAdd; i++) {
        var randomInt = Math.round(Math.random());
        randomArray.push(randomInt);

    }

}




pushRandomsIntoArray(100)
console.log(randomArray)









var test123 = Math.round(0.6); //zaokrągla
var test321 = Math.floor(0.6); // wybiera najniższą liczbę całkowitą
console.log(test123)
console.log(test321)
