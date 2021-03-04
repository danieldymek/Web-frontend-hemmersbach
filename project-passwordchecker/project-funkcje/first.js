var stringdodawanie = "wynik dodawania to: "
var stringodejmowanie = "wynik odejmowania to: "
var stringdzielenie = "wynik dzielenia to: "
var stringmnozenie = "wynik mnozenia to: "

function dodawanie(num1, num2) {
    var wynik = num1 + num2;
    return wynik;
}

console.log(stringdodawanie + dodawanie(20, 30));
console.log(stringdodawanie + dodawanie(90, 83));

function odejmowanie(num1, num2) {
    return num1 - num2;
}

console.log(stringodejmowanie + odejmowanie(50, 20));
console.log(stringodejmowanie + odejmowanie(100, 80));


function dzielenie(num1, num2) {
    var wynik = num1 / num2;
    return wynik;
}

console.log(stringdzielenie + dzielenie(10, 0.5));
console.log(stringdzielenie + dzielenie(50, 0.000001));



function mnozenie(num1, num2) {
    return num1 * num2;
}

console.log(stringmnozenie + mnozenie(20, 5));
console.log(stringmnozenie + mnozenie(200, 50));
