
var tablica = ["pomidor", "rzodkiewka", "masło"];
//wyswietlanie calej tablicy
console.log(tablica);
//wyswietlanie danego elementu z tablicy
console.log(tablica[2]);
//dodawanie elementu
//push dodaje na koniec listy
tablica.push("ogórek", "petitki");
// unshift dodaje na poczatek tablicy
tablica.unshift("szynka");
console.log(tablica);
tablica[4] = "chleb"; 
console.log(tablica);
//zamienianie elementow

tablica[2] = "margaryna";
console.log(tablica);



//sprawdzenie dlugosci tablicy ile jest elementow
console.log(tablica.length);


//łączenie / oddzielanie

console.log(tablica.join("<<<<>>>>"));
//sortowanie alfabetycznie
console.log(tablica.sort());

//odwracanie
console.log(tablica.reverse());

//usuwanie ostatniego elementu
tablica.pop(); tablica
console.log(tablica);


//usuwanie elementow
//3 index startu, 2 ile od tego indeksu
tablica.splice(3,2);

console.log(tablica);


// dodaj tabele do funkcji i ogarnij operacje na tablicach

function dzienPoprzedni(dzien, miesiac) {
  
    if (dzien > 1 && dzien < 32 && miesiac > 1 && miesiac < 13) {
        console.log("Wczoraj był " + (dzien - 1) + " " + (miesiac));
    }
     else if (dzien == 1 && (miesiac == 2 || miesiac == 4 || miesiac == 6 || miesiac == 8 || miesiac == 9 || miesiac == 11)) {
        console.log("Wczoraj był " + "31 " + (miesiac - 1));
    }
    else if (dzien == 1 && (miesiac == 5 || miesiac == 7 || miesiac == 10 || miesiac == 12)) {
        console.log("Wczoraj był " + "30 " + (miesiac - 1));
    }
    else if (dzien == 1 && miesiac == 3) {
        console.log("Wczoraj był " + "28 " + (miesiac - 1));
    }
    else if (dzien == 1 && miesiac == 1) {
        console.log("Wczoraj był " + "31 " + "Grudzeiń");
    }
    else {
        console.log("Podałeś niepoprawną datę");
    }

}

dzienPoprzedni(12,7);
dzienPoprzedni(1,6);
dzienPoprzedni(1,10);
dzienPoprzedni(1,3);
dzienPoprzedni(1,1);
dzienPoprzedni(2,15);



function wczoraj(dzien){
   var w = new Date(dzien.setDate(dzien.getDate() - 1)); 
    console.log(w);

}
//wczoraj(new Date());







var przykladowaTablica1 = ["kamil", "michal"];
var przykladowaTablica2 = ["kamilek", "michalek"];
var przykladowaTablica3 = ["kamil12345", "michal12345"];
console.count([przykladowaTablica1, przykladowaTablica2, przykladowaTablica3]);

















