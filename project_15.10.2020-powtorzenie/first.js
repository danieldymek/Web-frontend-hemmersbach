//var godzina = new Date().getHours().toString();
//var minuty = new Date().getMinutes().toString();
//var godzinaRazem = godzina + ":" + minuty;
////*\console.log(godzina);
////console.log(minuty);
////Zapisz console.log, który wyświetli wam godzinę i munutę*
//console.log("teraz jest godzina: " + godzinaRazem);
//console.log("jest " + godzina + ":" + minuty);

//napisz funkcje ktora ma przywitac cie - jezeli bedzie godzina od 4 do 11 to ma mowic dzien dobry
//jesli bedzie 12 to ma pokazac milego poludnia
//od 13 do 17 ma pisac milego popoludnia
//od 18 do 21 dobry wieczor
//od 22 do 4 ma byc teraz jest noc, czemu nie spisz?



// od 13 do 17 miłego popołudnia
// od 18 do 21 dobry wieczór
//od 22 do 4 jest noc czemu już nie śpisz
// do każdego przypadku ma byc dopisek która jest godzina

//var PobierzGodzine = new Date().getHours();
var PobierzGodzine = 24;

function hahahahaxdxd(godzina) {
console.log(godzina);
    
    if (godzina > 4 && godzina < 12) {
        console.log("dzien dobry jest godzina: " + godzina);
    }
    if (godzina == 12) {
        console.log("milego poludnia jest godzina: " + godzina);
    }
    if (godzina > 17 && godzina < 22 ) {
        console.log("dobry wieczor jest godzina: " + godzina);
    }
    if (godzina > 12 && godzina < 18 ) {
        console.log("dobrego popoludnia jest godzina: " + godzina);
    }
    if (godzina > 21 || godzina < 5) {
        console.log("idz spac pls jest godzina: " + godzina);
    }

}
hahahahaxdxd(PobierzGodzine);








var myVar;

function myFunction() {
  myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}

























