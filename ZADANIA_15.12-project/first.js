//// stworz cztery obiekty osoby osoba ma miec imie nazwisko wiek i czy jest dostepna true/false

// napisz funkcje w ktorej bedziecie musieli podac imie, podac liste, i zeby wyswietlilo





function randomInt() {
    var rand = 1 + Math.floor(Math.random() * 100);
    return rand;
}
//console.log(randomInt());
//randomInt()

function randomBool() {
    var rand = Math.floor(Math.random() * 2)
    //    return rand;
    if (rand == 0) {
        return false
    }
    if (rand == 1) {
        return true
    }
}
//randomBool()

function randomName() {
    var arrName = ["Marek", "Janek", "Danek", "Klanek", "Manek", "Wawek", "Dadanek", "Manek"];
    var rand = Math.floor(Math.random() * arrName.length);
    return arrName[rand];
}
//alert(randomName())
//randomName();

function randomSurName() {
    var arrName = ["Oliver", "Caldwell", "Stuart", "Ferguson", "Hubbard", "Porter", "Woods", "Morgan"];
    var rand = Math.floor(Math.random() * arrName.length);

    return arrName[rand];
}
//alert(randomName())
//randomSurName();




var Object1 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt(),
    DOSTEPNA: randomBool()
};
var Object2 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt(),
    DOSTEPNA: randomBool()
};
var Object3 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt(),
    DOSTEPNA: randomBool()
};
var Object4 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt(),
    DOSTEPNA: randomBool()
};
var Object5 = {
    IMIE: randomName(),
    NAZWISKO: randomSurName(),
    WIEK: randomInt(),
    DOSTEPNA: randomBool()
};
var arrObj = [Object1, Object2, Object3, Object4, Object5];



function SearchByName(name, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].IMIE == name) {
            console.log("imie: " + arr[i].IMIE + " wiek: " + arr[i].WIEK);
        }
    }
}

//SearchByName("TESTI2", arrObj);









function WhosOnlineRN(arr) {
    var TEST = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].DOSTEPNA == true) {
            TEST.push(arr[i].IMIE + " "  + arr[i].NAZWISKO );
        }
    }
    alert("dostępne/ni użytkownicy to: " + TEST.join(", "));
    window.location.reload(true)
}
//WhosOnlineRN(arrObj);









// wypisz tylko osoby pelnoletnie, aby te osoby pokazywalo na alercie(pelnoletnie/niepelnoletnie)
//wypisz tylko osoby pelnoletnie, aby te osoby pokazywalo na alercie(pelnoletnie/niepelnoletnie) + ile brakuje do 18 roku zycia albo ile ma lat ponad 18stym rokiem zycia


function alertLegalAgeUsers(arr) {
    var arrLegalUsers = [];
    var arrIllegalUsers = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].WIEK > 18) {
            arrLegalUsers.push(arr[i].IMIE + " " + arr[i].NAZWISKO + " lat: " + arr[i].WIEK + '\n')
        }
        if (arr[i].WIEK < 18) {
            arrIllegalUsers.push(arr[i].IMIE + " " + arr[i].NAZWISKO + " lat: " + arr[i].WIEK + '\n')
        }

    }

    alert("Użytkownicy pełnoletni to:\n " + arrLegalUsers.join(' ') + "\nUżytkownicy niepełnoletni to:\n " + arrIllegalUsers.join(' '))

}

//alertLegalAgeUsers(arrObj)


function alertLegalAgeUsersWithMissingAgeInt(arr) {
    var arrLegalUsers = [];
    var arrIllegalUsers = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].WIEK > 18) {
            var formula = arr[i].IMIE + " " + arr[i].NAZWISKO + " lat: " + arr[i].WIEK;
            var IlePo18 = "Starszy od 18 lat o: " + (arr[i].WIEK - 18) + " lat/a" + "\n";
            arrLegalUsers.push(formula + '\n' + IlePo18 + '\n')
        }
        if (arr[i].WIEK < 18) {
            var IleDo18 = "Do 18 lat brakuje: " + (18 - arr[i].WIEK) + " lat/a" + "\n";
            var formula = arr[i].IMIE + " " + arr[i].NAZWISKO + " lat: " + arr[i].WIEK;
            arrIllegalUsers.push(formula + '\n' + IleDo18 + '\n')
        }
    }

    alert("Użytkownicy pełnoletni to:\n " + arrLegalUsers.join(' ') + "\nUżytkownicy niepełnoletni to:\n " + arrIllegalUsers.join(' '))

}
//alertLegalAgeUsersWithMissingAgeInt(arrObj);


function PROMPT() {
    var liczba = prompt("Podaj dzielną");
    var liczba2 = prompt("Podaj dzielnik");
    var a = parseFloat(liczba);
    var b = parseFloat(liczba2);

    var wynik = a / b;
    return alert(wynik);
}
//PROMPT()

function commandPrompt() {
    var komendyList = ["LegalUsers", "LegalUsers+", "WhoIsOnline"];
    var cmd = prompt("WPISZ KOMENDE \n" + "\n Lista komend: " + komendyList);
        if (cmd !== komendyList[0] && cmd !== komendyList[1] && cmd !== komendyList[2]) {
            alert("nie ma takiej komendy");
        
    }

    if (cmd == "LegalUsers+") {
        alertLegalAgeUsersWithMissingAgeInt(arrObj);
    } 
    if (cmd == "LegalUsers") {
        alertLegalAgeUsers(arrObj);
    } 
    if (cmd == "WhoIsOnline") {
        WhosOnlineRN(arrObj);
    }
}

//commandPrompt()
