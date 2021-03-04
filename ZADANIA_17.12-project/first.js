// NAPISZ FUNKCJE KTORA MOWI CZY HASLO JEST SLABE CZY HASLO JEST DOBRE, HASLO KTORE BEDZIE MIALO POWYZEJ 8 ZNAKOW A PONIZEJ 8 OZNACZA ZE JEST SLABE, jesli nie wpisales nic to ma wyswietlac
//

//function PasswordCheck() {
//    var promptDisplay = prompt("Sprawdź, czy twoje hasło spełnia warunki bezpieczeństwa")
//    if (promptDisplay.length >= 8 && promptDisplay.propertyIsEnumerable) {
//        alert("twoje hasło jest w pełni bezpieczne. ma więcej niż 8 znaków i zawiera liczby.");
//    }
//    if (promptDisplay.length >= 8) {
//        alert("Twoje hasło zawiera więcej niż osiem znaków, ale do pełni bezpieczeństwa brakuje liczb.\n Spróbuj jeszcze raz");
//        PasswordCheck();
//    }
//    if (promptDisplay.length < 8 && promptDisplay.length >= 1) {
//        alert("twoje hasło nie jest  bezpieczne")
//    }
//    if (promptDisplay.length == 0) {
//        alert("nie wpisałeś żadnego hasła, podaj jeszcze raz");
//        PasswordCheck();
//    }
//
//}

//PasswordCheck()
//haslo musi zawierac cyfre duza litere i miec ponad 8 znakow
function PasswordCheck() {


    var promptDisplay = prompt("Sprawdź, czy twoje hasło spełnia warunki bezpieczeństwa")

    if (promptDisplay.length >= 8 && promptDisplay.includes(0) || promptDisplay.includes(1) || promptDisplay.includes(2) || promptDisplay.includes(3) || promptDisplay.includes(4) || promptDisplay.includes(5) || promptDisplay.includes(6) || promptDisplay.includes(7) || promptDisplay.includes(8) || promptDisplay.includes(9) && promptDisplay.includes(promptDisplay.charCodeAt(promptDisplay ))) {
alert("XDDD")

    }
    


}
//var char12 = 
//alert()
