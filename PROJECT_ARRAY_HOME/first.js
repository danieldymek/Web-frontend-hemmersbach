//var tablica = ["pomidor", "rzodkiewka", "masło"];
////wyswietlanie calej tablicy
//console.log(tablica);
////wyswietlanie danego elementu z tablicy
//console.log(tablica[2]);
////dodawanie elementu
////push dodaje na koniec listy
//tablica.push("ogórek", "petitki");
//// unshift dodaje na poczatek tablicy
//tablica.unshift("szynka");
//console.log(tablica);
//tablica[4] = "chleb"; 
//console.log(tablica);
////zamienianie elementow
//
//tablica[2] = "margaryna";
//console.log(tablica);
//
//
//
////sprawdzenie dlugosci tablicy ile jest elementow
//console.log(tablica.length);
//
//
////łączenie / oddzielanie
//
//console.log(tablica.join("<<<<>>>>"));
////sortowanie alfabetycznie
//console.log(tablica.sort());
//
////odwracanie
//console.log(tablica.reverse());
//
////usuwanie ostatniego elementu
//tablica.pop(); tablica
//console.log(tablica);
//
//
////usuwanie elementow
////3 index startu, 2 ile od tego indeksu
//tablica.splice(3,2);
//
//console.log(tablica);
//
//// new
var tablica2 = ["imposter","tube","mistreat","log","corruption","operation","skip","estimate","miscarriage","praise","funeral","stick","push","migration","foot","colorful","use","beam"];

var arrayLenght = tablica2.length;
console.log(tablica2.length);


tablica2.sort();
console.log(tablica2);
console.table(tablica2);



// test
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log("test");
console.log(" ");


var randomowaliczba = Math.round(Math.random() * arrayLenght);

var osoba1 = {number: randomowaliczba, word: tablica2[randomowaliczba]};
var randomowaliczba = Math.round(Math.random() * arrayLenght);

var osoba2 = {number: randomowaliczba, word: tablica2[randomowaliczba]};
var randomowaliczba = Math.round(Math.random() * arrayLenght);

var osoba3 = {number: randomowaliczba, word: tablica2[randomowaliczba]};
var randomowaliczba = Math.round(Math.random() * arrayLenght);

var osoba4 = {number: randomowaliczba, word: tablica2[randomowaliczba]};
console.log('%c Test', 'color: orange;');
console.table({osoba1, osoba2, osoba3, osoba4});



