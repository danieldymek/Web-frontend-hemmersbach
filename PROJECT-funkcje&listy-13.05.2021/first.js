var stringArr = ["banan", "jablko", "jagoda"];
console.log(stringArr); // NOTE: logging full arr
console.log(stringArr[1]); // NOTE: logging 2nd element of an array

stringArr.push("koniec"); // NOTE: adding el to the end
console.log(stringArr);

stringArr.unshift("poczatek") // NOTE: adding el on the start
console.log(stringArr);

stringArr.pop()
console.log(stringArr); // NOTE: "koniec " is deleted

stringArr.splice(2, 1)
console.log(stringArr);
// NOTE: stworz dwie listy warzywa owoce min 3 el kazda i zrobienie z tego listy ktora bedzie miala zawartosci dwoch arrayow

var warzywa = ["warzywo1", "warzywo2", "warzywo3"]
var owoce = ["owoc1", "owoc2", "owoc3"]
warzywa.push.apply(warzywa, owoce)
console.log(warzywa)
// NOTE: zadanie domowe
// NOTE: funkcja ktora sprawdza czy liczby sa parzyste
// NOTE: 324324, 324324324, 323253, 435, 435435435, 35, 43, 58, 6548, 5555, 22222
// NOTE: wsadzenie liczb patrzystych do arraya

// NOTE: funkcja ktora dodaje 50% wartosci kazdego indexu/elementu

// NOTE: lista w ktorej mamy imiona i zwracamy dlugosc kazdego imienia w literach(znakach)

// NOTE: zrobienie z randomami z listami
