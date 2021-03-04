// to sa przykladowe zmienne
//var home = "siema";
//var home1 = 19;

//jednego = uzywamy gdy chcemy przypisac jakas wartosc
//dwoch == uzywamy gdy chcemy cos porownac

//zadanie domowe napisz funkcje w ktorej bedzie operator logiczny if w srodku uzyj operatora logicznego przynajmniej 1 or wiecej

//OPERATORY LOGICZNE
//i (and)
//albo (or)
//zaprzeczenie (not)


//Napisz fn ktora bedzie sprawdzala czy podana przez Ciebei liczba jest parzysta
//0 = liczba parzysta
//1 = liczba parzysta

function CzyParzysta(liczba) {

    if (liczba % 2 == 0 && liczba !== 0) {
        console.log(" liczba " + liczba + " jest parzysta");
    }
    //    if (liczba % 2 == 1) {
    //        
    //        console.log("liczba " + liczba + " nie jest parzysta");
    //    }
    else {
        console.log("nieparzysta");
    }

}


//PRACA DOMOWA


function fnHOMEWORK(number) {
    if (number > 0 && number == 1) {
        console.log("podana liczba jest wieksza od zera i jest to liczba jeden");
    }
    if (number == 0 || number > 0) {
        console.log("podana liczba to zero, lub jest wieksza od 0");
    }

    if (number !== 0) {
        console.log("podana liczba to nie zero");
    }

}
//
//fnHOMEWORK(0);
//fnHOMEWORK(-20);
fnHOMEWORK(1);
