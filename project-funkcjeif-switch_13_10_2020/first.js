/*
if - instrukcja warunkowa
switch - instrukcja wyboru // switch z ang to zmiana
*/
//var kolor = "brązowe"
//
//function kolorowanieWlosow(kolorWlosow) {
//    var kolor = "brazowe";
//    switch (kolorWlosow) {
//        case "blond": // przypadek "blond"
//            console.log("masz blond włosy"); // komenda ktora wywola przypadek blond
//            break; //zakoncz petle
//        case "niebieskie":
//            console.log("masz niebieskie włosy-lol");
//            break;
//        case "brązowe":
//            console.log("masz brązowe włosy");
//            break;
//        default:
//            console.log("Nie znam takiego koloru, Przepraszam...");
//
//    }
//}

//kolorowanieWlosow(kolor);


//napisz funkcje ktora bedzie mowila jaki jest dzien tygodnia. uzyj instrukcji wyboru switch
//
//function TygodnikDzienny(dzienTygodnia) {
//    switch (dzienTygodnia) {
//        case "niedziela":
//            console.log("dzis jest niedziela");
//            break;
//        case "sobota":
//            console.log("dzis jest sobota");
//            break;
//        case "piatek":
//            console.log("dzis jest piatek");
//            break;
//        case "czwartek":
//            console.log("dzis jest czwartek");
//            break;
//        case "sroda":
//            console.log("dzis jest sroda");
//            break;
//        case "wtorek":
//            console.log("dzis jest wtorek");
//            break;
//        case "poniedzialek":
//            console.log("dzis jest poniedzialek");
//            break;
//        default:
//            console.log("Sorry, I couldn't understand your input! Please translate your input to polish language.");
//
//    }
//}

//TygodnikDzienny("poniedzialek");
//TygodnikDzienny("poniedziałek");
//TygodnikDzienny("asyhgudas5d");


//0 - niedziela 1 - poniedzialek 6 - sobota

//pozyskiwanie daty/dnia tygodnia z maszyny

//var jakiJestDzien = new Date().getDay();
//    console.log(jakiJestDzien);
//
//function JakiKonkretnieJestDzien() {
////    if (jakiJestDzien == 0) {
////        console.log("dzis jest niedziela");
////    }
////    if (jakiJestDzien == 1) {
////        console.log("dzis jest poniedzialek");
////    }
////    if (jakiJestDzien == 2) {
////        console.log("dzis jest wtorek");
////    }
////    if (jakiJestDzien == 3) {
////        console.log("dzis jest sroda");
////    }
////    if (jakiJestDzien == 4) {
////        console.log("dzis jest czwartek");
////    }
////    if (jakiJestDzien == 5) {
////        console.log("dzis jest piatek");
////    }
////    if (jakiJestDzien == 6) {
////        console.log("dzis jest sobota");
////    }
//    switch (jakiJestDzien) {
//        case 0:
//            console.log("dzis jest niedziela")
//            break;
//        case 1:
//            console.log("dzis jest poniedzialek")
//            break;
//        case 2:
//            console.log("dzis jest wtorek")
//            break;
//        case 3:
//            console.log("dzis jest sroda")
//            break;
//        case 4:
//            console.log("dzis jest czwartek")
//            break;
//        case 5:
//            console.log("dzis jest piatek")
//            break;
//        case 6:
//            console.log("dzis jest sobota")
//            break;
//    }
//}
//
//JakiKonkretnieJestDzien();


//zrob funkcje za pomoca switcha (jak restauracja) musi byc danie albo napoj i to danie kosztuje tyle i tyle zlotych funkcja(zestaw big mac) - ma dac input ile kasy kosztuje - i default jezeli nie ma tego co jest w menu
console.log("Witaj w restauracji Schengen Burgers");
console.log("Warianty burgerów: Austria, Belgia, Czechy, Dania, Estonia, Finlandia, Francja, Grecja, Hiszpania, Holandia, Islandia, Liechtenstein, Litwa, Luksemburg, Łotwa, Malta, Niemcy, Norwegia, Szwajcaria, Szwecja, Polska, Portugalia, Słowacja, Słowenia, Węgry, Włochy");
console.log("Syntax: SchengenBurgers(\"Wariant\");");

function SchengenBurgers(Wariant) {
    var RandomCostSchengenBurgers = "$" + Math.round(Math.random() * 100)
    switch (Wariant) {
        case "Austria":
            console.log("Burger Austria kosztuje: " + RandomCostSchengenBurgers);
            break;
            
        case "Belgia":
            console.log("Burger Belgia kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Czechy":
            console.log("Burger Czechy kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Dania":
            console.log("Burger Dania kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Estonia":
            console.log("Burger Estonia kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Finlandia":
            console.log("Burger Finlandia kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Francja":
            console.log("Burger Francja kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Grecja":
            console.log("Burger Grecja kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Hiszpania":
            console.log("Burger Hiszpania kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Holandia":
            console.log("Burger Austria kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Islandia":
            console.log("Burger Islandia kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Liechtenstein":
            console.log("Burger Liechtenstein kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Litwa":
            console.log("Burger Litwa kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Luksemburg":
            console.log("Burger Luksemburg kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Łotwa":
            console.log("Burger Łotwa kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Malta":
            console.log("Burger Malta kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Niemcy":
            console.log("Burger Niemcy kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Norwegia":
            console.log("Burger Norwegia kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Szwajcaria":
            console.log("Burger Szwajcaria kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Szwecja":
            console.log("Burger Szwecja kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Polska":
            console.log("Burger Polska kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Portugalia":
            console.log("Burger Portugalia kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Słowacja":
            console.log("Burger Słowacja kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Słowenia":
            console.log("Burger Słowenia kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Węgry":
            console.log("Burger Węgry kosztuje: " + RandomCostSchengenBurgers);
            break;
        case "Włochy":
            console.log("Burger Włochy kosztuje: " + RandomCostSchengenBurgers);
            break;
        default:
            console.log("Wprowadź nazwę kraju ze strefy Schengen lub wpisz nazwę kraju z dużej Litery...")

    }
}









