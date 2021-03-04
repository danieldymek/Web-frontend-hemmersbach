//napisz funkcje ktora bedzie wyszczegolniala: to sa liczby parzyste a to sa liczby niepatrzyste z listy
var arr = [756, 55, 345, 678, 32, 1, 900, 6785, 434, 5642, 111, 678, 44323, 675432, 1287721, 0];


function DefineNumberType(arr) {
    var OddContainer = [];
    var EvenContainer = [];
    for (var i = 0; i < arr.length; i++) {
        //        if (arr[i] % 2 == 0) {
        //            console.log(arr[i] + " jest liczba parzysta")
        //        }
        //        if (arr[i] % 2 == 1) {
        //            console.log(arr[i] + " jest liczba nieparzysta")
        //        }
        if (arr[i] % 2 == 0 && arr[i] !== 0) {
            EvenContainer.push(arr[i])
        }
        if (arr[i] % 2 !== 0) {
            OddContainer.push(arr[i])
        }
        if (arr[i] == 0) {
            console.log("W tabeli znajduje sie 0")
        }
    }
    console.log("parzyste liczby to: " + EvenContainer)
    console.log("nieparzyste liczby to: " + OddContainer)
}

//
//    DefineNumberType(arr);



// pierwsze 15 skokow kwalifikuje sie do drugiej serii
var skoki = [240, 234, 180, 130, 177, 144, 156, 189, 199, 201, 90, 210, 179, 190, 194, 205, 185, 180, 172, 178, 218, 176, 189, 166, 157, 211, 210, 208, 175, 187, 216, 202, 186, 157, 174, 164, 193, 234, 193];


function SkiingFunction(arr) {
    var SuppArr1 = [];
    //    for (var i = 0; i < arr.length; i++) {
    arr.sort(function (a, b) {
        return b - a;
    });
    //        arr.reverse();
    arr.splice(15, Infinity)

    //    }
    SuppArr1.push(arr);
    console.log("oto wyniki ktore zakwalifikowaly sie do przejscia do drugiego etapu " + SuppArr1)
}

//SkiingFunction(skoki)









var skoki = [240, 234, 180, 130, 177, 144, 156, 189, 199, 201, 90, 210, 179, 190, 194, 205, 185, 180, 172, 178, 218, 176, 189, 166, 157, 211, 210, 208, 175, 187, 216, 202, 186, 157, 174, 164, 193, 234, 193];









//wyswietl 3 najlepsze skoki z listy i 10 najgorszych skokow z listy


function ThreeBestAndTenWorst(arr) {
    var arrBest = [];
    var arrWorst = [];
    arr.sort(function (a, b) {
        return a - b;
    })
    console.log(arr);
    arrWorst = arr.splice(0, 10);
    arr.reverse();
    arrBest = arr.splice(0, 3);
    console.log("najlepsze wyniki to: " + arrBest);
    console.log("najgorsze wyniki to: " + arrWorst);
}
ThreeBestAndTenWorst(skoki);

//gwiazda - daj losowe NOTY(OCENY) do kazdego skoku


function WorstBestNote(arr) {
    var arrBest = [];
    var arrWorst = [];
    arr.sort(function (a, b) {
        return a - b;
    })
    arrWorst = arr.splice(0, 10)
    arrBest = arr.reverse(arr.splice(0, 3))
    for (var i = 0; i < arrBest.length; i++) {
        // random int 1-5
        var randomInt = 1 + Math.floor(Math.random() * 5)
        console.log("wynik: " + arrBest[i] + " ocena: " + randomInt + "/5")
    }
    for (var i = 0; i < arrWorst.length; i++) {
        // random int 1-5
        var randomInt = 1 + Math.floor(Math.random() * 5)
        console.log("wynik: " + arrWorst[i] + " ocena: " + randomInt + "/5")
    }
//    console.log(arrBest)
//    console.log(arrWorst)
}

//WorstBestNote(skoki)
