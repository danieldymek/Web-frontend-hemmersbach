//Napisz funkcje ktora bedzie mowila o ile jestescie nizsi
//od marka nowaka ktory ma 210 cm wzrostu

// zmienne ktorych dane moga wejsc w ciala funkcji
var OlaKowalskaWzrost = 130;
var jestemWyzszyOdOli = "jestem wyzszy od oli o: ";
var cm = "cm";

function oIleWyzszy(num1) {
    var roznicaWzrostu = num1 - OlaKowalskaWzrost;
    return roznicaWzrostu;
}


console.log(jestemWyzszyOdOli + oIleWyzszy(180) + cm);









function sprawdzenieLiczbyCzyJestDodatnia(liczba) {
    if (liczba > 0) {
        console.log("Podana liczba jest dodatnia ");


    }

    if (liczba < 0) {
        console.log("Podana liczba jest ujemna ");


    } else {
        console.log("Podana liczba jest zerem")
    }


}

sprawdzenieLiczbyCzyJestDodatnia(0);



//napisz funkcje ktora ma zwracac wiadomosc czy jestes wyzszy czy nizszy od Marka ktory ma 174 cm wzrostu







var MarekWzrost2 = 174;

function CzyWyzszyCzyNizszyMAREK2(myHeight) {
    
    if (myHeight > MarekWzrost2) {
        console.log("jestem wyzszy od Marka2")
    }
    
if (myHeight < MarekWzrost2) {
        console.log("jestem nizszy od Marka2")
    }
    
    
}

CzyWyzszyCzyNizszyMAREK2(180);