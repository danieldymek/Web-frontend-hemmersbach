////// wyswietl jaki jest miesiac
//var Month = new Date().getMonth();
//////console.log(Month);
////
////
////
////function JakiMiesiacSwitch(input) {
////    switch (input) {
////        case 0:
////        console.log("stycznia");
////            break;
////        case 1:
////        console.log("lutego");
////            break;
////        case 2:
////        console.log("marca");
////            break;
////        case 3:
////        console.log("kwietnia");
////            break;
////        case 4:
////        console.log("maja");
////            break;
////        case 5:
////        console.log("czerwca");
////            break;
////        case 6:
////        console.log("lipca");
////            break;
////        case 7:
////        console.log("sierpnia");
////            break;
////        case 8:
////        console.log("wrzesnia");
////            break;
////        case 9:
////        console.log("pazdziernika");
////            break;
////        case 10:
////        console.log("listopada");
////            break;
////        case 11:
////        console.log("grudnia");
////            break;
////            }
////}
////        
//        
////JakiMiesiacSwitch(Month);
//
//
//
////napisz funkcje ktora bedzie mowila jaki jest dzien miesiaca i jaki jest miesiac 
//
//function JakiMiesiacSwitch2(input) {
//    switch (input) {
//        case 0:
//        return "STY";
//            break;
//        case 1:
//        return "LUT";
//            break;
//        case 2:
//        return "MAR";
//            break;
//        case 3:
//        return "KWI";
//            break;
//        case 4:
//        return "MAJ";
//            break;
//        case 5:
//        return "CZE";
//            break;
//        case 6:
//        return "LIP";
//            break;
//        case 7:
//        return "SIE";
//            break;
//        case 8:
//        return "WRZ";
//            break;
//        case 9:
//        return "PAŹ";
//            break;
//        case 10:
//        return "LIS";
//            break;
//        case 11:
//        return "GRU";
//            break;
//            }
//}
//var JakiDzienMiesiaca = new Date().getDate();
////console.log(JakiDzienMiesiaca)
//
//
//console.log("dzis jest: " + JakiDzienMiesiaca + " " + JakiMiesiacSwitch2(Month));

// zadanie domowe napisz funkcje ktora ma sie nazywac wczorajbyldzien i podac date dzien wczesniej niz tuz po wywolaniu
//luty nie ma roku przestepnego 28 dni

//var Miesiac;
//var Dzien;
//Miesiac = new Date().getMonth();
//Dzien = new Date().getDay();
//
//console.log("asd" + Miesiac + "dsa" + Dzien);
//
//
var Dzis = new Date();
var Jutro = new Date(Dzis);

function WczorajBylDzien() {
Jutro.setDate(Jutro.getUTCHours() - 1);
console.log("Wczoraj byla data: " +  Jutro)
}
WczorajBylDzien();









//
//
//// obliczanie sin@ cos@ tg@ ctg@
//
//var PrzyprostokatnaY;
//var PrzyprostokatnaZ;
//var PrzeciwprostokatnaX;
//
//PrzyprostokatnaY = 5 ;
//PrzyprostokatnaZ =  12;
////PrzeciwprostokatnaX =  ;
//
//
//var Wynik_PrzeciwprostokatnaX = (PrzyprostokatnaY * PrzyprostokatnaY) + (PrzyprostokatnaZ * PrzyprostokatnaZ);
//var test = math.round(25);
//console.log(test);
//
//console.log(Wynik_PrzeciwprostokatnaX);
//










//function dzienPoprzedni(dzien, miesiac) {
//
//    if (dzien > 1 && dzien < 32 && miesiac > 1 && miesiac < 13) {
//        console.log("Wczoraj był " + (dzien - 1) + " " + (miesiac));
//    }
//     else if (dzien == 1 && (miesiac == 2 || miesiac == 4 || miesiac == 6 || miesiac == 8 || miesiac == 9 || miesiac == 11)) {
//        console.log("Wczoraj był " + "31 " + (miesiac - 1));
//    }
//    else if (dzien == 1 && (miesiac == 5 || miesiac == 7 || miesiac == 10 || miesiac == 12)) {
//        console.log("Wczoraj był " + "30 " + (miesiac - 1));
//    }
//    else if (dzien == 1 && miesiac == 3) {
//        console.log("Wczoraj był " + "28 " + (miesiac - 1));
//    }
//    else if (dzien == 1 && miesiac == 1) {
//        console.log("Wczoraj był " + "31 " + "Grudzeiń");
//    }
//    else {
//        console.log("Podałeś niepoprawną datę");
//    }
//
//}
//
//dzienPoprzedni(12,7);
//dzienPoprzedni(1,6);
//dzienPoprzedni(1,10);
//dzienPoprzedni(1,3);
//dzienPoprzedni(1,1);
//dzienPoprzedni(2,15);
//
//
//
//function wczoraj(dzien){
//   var w = new Date(dzien.setDate(dzien.getDate() - 1)); 
//    console.log(w);
//
//}
////wczoraj(new Date());
































