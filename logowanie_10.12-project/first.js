// funkcja ktora ma zamieniac liczbe ujemna na dodatnia


function NumConverter(num) {
    if (num < 0) {
        return console.log(num * -1);
    }
    if (num > 0) {
        return console.log(num)
    }
}
//NumConverter(-10.2313);
//NumConverter(-2310.2313);
//NumConverter(12110.2313);
//NumConverter(10.2313);
//NumConverter(-182210.2313);



//1pob - napsiz funkcje zeby przy otwieraniu strony wyskakiwal komunikat siemanko

function PopUp() {
    alert("siemanko")
}
//PopUp();


// imituj logowanie sie na strone


function PassCheck(pw) {
    var haslo = "slowo123";
    if (pw == haslo) {
        alert("Zostałeś pomyślnie zalogowany! ✔")
    }
    if (pw !== haslo) {
        alert("Wpisane hasło jest nieprawidłowe. Wpisz hasło ponownie! ⚠️")
    }
}
//PassCheck("slowo123");


// imituj logowanie i haslo

function LoginAndPassCheck(log, pass) {
    var login = "admin";
    var haslo = "lubieżaby123"

    if (log == login && pass == haslo) {
        alert("Zostałeś pomyślnie zalogowany! ✔")
    }
    if (log !== login && pass !== haslo) {
        alert("Wpisane hasło lub login są nieprawidłowe. Wpisz swoje dane ponownie! ⚠️")
    }
    if (log == login && pass !== haslo) {
        alert("Login jest poprawny, zaś wpisane hasło jest nieprawidłowe. Wpisz hasło ponownie! ⚠️")
    }
    if (log !== login && pass == haslo) {
        alert("Login jest nieprawidłowy. Wpisz go ponownie! ⚠️")
    }


}
//LoginAndPassCheck("admin", "lubieżaby123")

//napisz funkcje ktora bedzie liczyla silnie

//function silnia(n) {
//   if ((n == 0) || (n == 1))
//      return 1
//   else {
//      var result = (n * silnia(n-1) );
//      return result
//   }
//       console.log(result)
//}
//silnia(21)



function factorialize(num) {
    var fact = 0;
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));

  }
}
console.log(factorialize(23));

var test = prompt("siema");

