const dodawanie = liczba1 => {
    console.log(liczba1)
}
// dodawanie(3)

const dzielenie = (liczba1, liczba2) => {
    console.log(liczba1 / liczba2)
}
// dzielenie(3,45)

// zmienna ktora jest lista i zawiera 10 liczba1
const array1 = [0,3,8,9,3,22,1,2,8,1]

const sortArr = arr => {
  console.log("przed sortem\n" + arr);
  arr.sort((a,b) => a-b)
  console.log("po sorcie\n" + arr);
}
// sortArr(array1)
let fact = 0
const silnia = n => {
  if (n == 0 || n == 1) {
    return 1
  }
  return n*silnia(n-1);
}
// console.log(silnia(3));


//zadanie domowe
//ciag fibonacciego
const fibo = n => {
  if (n <= 2) {
    return 1;
  }
  else{
    return fibo(n - 2) + fibo(n - 1)
  }
}
// console.log(fibo(12));

const hanoi = n => {
  if (n <= 0){
    return 0;
  }
  else{
    console.log(Math.pow(2 , n) - 1)
  }
}
hanoi(10)
