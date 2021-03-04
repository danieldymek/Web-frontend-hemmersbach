//var MarekWzrost2 = 174;
//
//function CzyWyzszyCzyNizszyMAREK2(myHeight) {
//
//    if (myHeight > MarekWzrost2) {
//        console.log("jestem wyzszy od Marka2");
//    }
//
//    if (myHeight < MarekWzrost2) {
//        console.log("jestem nizszy od Marka2");
//    }
//    else {
//        console.log("jestem równy z Markiem2")
//    }
//
//}
//





var MarekWzrost2 = 174;

function CzyWyzszyCzyNizszyMAREK2(myHeight) {

    if (myHeight > MarekWzrost2) {
        var wynik = myHeight - MarekWzrost2;
        console.log("Mój wzrost to: " + myHeight + " cm." + " Jestem wyzszy od Marka2 o: " + wynik + " cm");
    }

    if (myHeight < MarekWzrost2) {
        var wynik = MarekWzrost2 - myHeight;
        console.log("Mój wzrost to: " + myHeight + " cm." + " Jestem nizszy od Marka2 o: " + wynik + " cm");
    } 
    if (myHeight == MarekWzrost2) {
        console.log("Mierzę tyle samo ile Marek2!");
    }
    

}



CzyWyzszyCzyNizszyMAREK2(174)



//napisz funckje z zastosowaniem IF