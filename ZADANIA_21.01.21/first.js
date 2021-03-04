// switch ktory podaje cene owocu

var owoc1 = {
    NAME: 'Jablko',
    PRICE: 1.50 + "PLN"
}
var owoc2 = {
    NAME: 'Ananaz',
    PRICE: 5.50 + "PLN"
}
var owoc3 = {
    NAME: 'Gruszka',
    PRICE: 3.50 + "PLN"
}
var owoc4 = {
    NAME: 'Winogrona',
    PRICE: 6.50 + "PLN"
}

var arrOfFruits = [owoc1, owoc2, owoc3, owoc4];


function FruitsSwitchFunction(Fruit, fruitArr) {
    switch (Fruit) {
        case 'Jablko':
            console.log("Jablko kosztuje: " + fruitArr[0].PRICE);
            break;
        case 'Jablko':
            console.log("Jablko kosztuje: " + fruitArr[0].PRICE + 10);
            break;
        case 'Ananas':
            console.log("Ananas kosztuje: " + fruitArr[1].PRICE);
            break;
        case 'Gruszka':
            console.log("Gruszka kosztuje: " + fruitArr[2].PRICE);
            break;
        case 'Winogrona':
            console.log("Winogrona kosztują: " + fruitArr[3].PRICE);
            break;
        default:
            console.log("Wprowadziles zla nazwe owocu lub nie ma go w ofercie");
    }
}
//FruitsSwitchFunction('Jablko', arrOfFruits)

var data = new Date();
var day = data.getDay();

switch (day) {

    case 1:
        console.log("poniedzialek")
        break;
    case 2:
        console.log("wtorek")
        break;
    case 3:
        console.log("sroda")
        break;
    case 4:
        console.log("czwartek")
        break;
    case 5:
        console.log("piatek")
        break;
    case 6:
        console.log("sobota")
        break;
    case 0:
        console.log("niedziela")
        break;
    default:
        console.log("wartosc musi byc w przedziale [0-6]")

}
// zrob switch ktory oczaruje - inwencja tworcza
// switch ktory pobiera godzine dobranoc dzien dobry milego poludnia milego popoludnia