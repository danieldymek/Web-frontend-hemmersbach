var stringArr = ["banan", "jablko", "jagoda"];
// console.log(stringArr); // NOTE: logging full arr
// console.log(stringArr[1]); // NOTE: logging 2nd element of an array

stringArr.push("koniec"); // NOTE: adding el to the end
// console.log(stringArr);

stringArr.unshift("poczatek") // NOTE: adding el on the start
// console.log(stringArr);

stringArr.pop()
// console.log(stringArr); // NOTE: "koniec " is deleted

stringArr.splice(2, 1)
// console.log(stringArr);
// NOTE: stworz dwie listy warzywa owoce min 3 el kazda i zrobienie z tego listy ktora bedzie miala zawartosci dwoch arrayow

var warzywa = ["warzywo1", "warzywo2", "warzywo3"]
var owoce = ["owoc1", "owoc2", "owoc3"]
warzywa.push.apply(warzywa, owoce)
// console.log(warzywa)
// NOTE: zadanie domowe
// NOTE: funkcja ktora sprawdza czy liczby sa parzyste
// NOTE: 324324, 324324324, 323253, 435, 435435435, 35, 43, 58, 6548, 5555, 22222
// NOTE: wsadzenie liczb patrzystych do arraya
function filterEvenNumbers(){
  var arr = [324324, 324324324, 323253, 435, 435435435, 35, 43, 58, 6548, 5555, 22222];
  var evenArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] % 2 == 0){
        evenArr.push(arr[i])
      }
    }
    console.log(evenArr);
}
console.log("\x1b[36m" + "zadanie 1");
filterEvenNumbers();

// NOTE: funkcja ktora dodaje 50% wartosci kazdego indexu/elementu
function arrayMultiplier(){
  var arr = [324324, 324324324, 323253, 435, 435435435, 35, 43, 58, 6548, 5555, 22222];
  var multipliedArr = [];
  for (var i = 0; i < arr.length; i++) {
    multipliedArr.push(arr[i] * 1.5)
  }
  console.log(multipliedArr);
}
console.log("\x1b[36m" + "zadanie 2");
arrayMultiplier()
// NOTE: lista w ktorej mamy imiona i zwracamy dlugosc kazdego imienia w literach(znakach)\
// NOTE: zrobienie z randomami z listami

function loggingStringLenght() {
  function randName(){

      var NameArr = ["Ilona","Liliana","Ewa","Jadwiga","Teresa","Magda","Danuta","Bogda","Felicja","Alice"]
      var rand = Math.floor(Math.random() * NameArr.length)
      return NameArr[rand]
  }
  function randSurname(){

      var NameArr = ["Kowalczyk","Stępień","Sadowska","Wójcik","Stępień","Włodarczyk","Pietrzak","Kołodziej","Adamska","Czarnecka"]
      var rand = Math.floor(Math.random() * NameArr.length)
      return NameArr[rand]
  }
  function getStringLenght (str) {
  console.log("String: " + str);
  console.log("String.lenght: " + str.length);

  }
  getStringLenght(randSurname());
  getStringLenght(randName());

}
console.log("\x1b[36m" + "zadanie 3");
loggingStringLenght()
