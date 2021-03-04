//var lodowka = ["warzywa", "owoce" , 38883];
//
//lodowka[1];
//
//var car1 = {marka: "Lamborghini", kolor: "czerwony", prędkośćMax: 240, ilośćMiejsc: 2};
//
//
//
//car.ilośćMiejsc;
//
//console.log(car.ilośćMiejsc);
var TESTCARFAKEVALUES = {
    marka: "Lamborghini",
    kolor: "czerwony",
    prędkośćMax: 212,
    ilośćMiejsc: 22
};
var car1 = {
    marka: "Lamborghini",
    kolor: "czerwony",
    prędkośćMax: 240,
    ilośćMiejsc: 2
};
var car2 = {
    marka: "Tesla",
    kolor: "zolty",
    prędkośćMax: 220,
    ilośćMiejsc: 3
};
var car3 = {
    marka: "Mercedes",
    kolor: "pomaranczowy",
    prędkośćMax: 210,
    ilośćMiejsc: 4
};
var car4 = {
    marka: "Bugatti",
    kolor: "rozowy",
    prędkośćMax: 200,
    ilośćMiejsc: 5
};
var car5 = {
    marka: "Matiz",
    kolor: "zielony",
    prędkośćMax: 2220,
    ilośćMiejsc: 3
};

var carAll = [car1, car2, car3, car4, car5];
//stworz liste ktora bedzie zawierala wszystkie moje obiekty
//var carAll = [car1,car2,car3,car4,car5];




// napisz funkcje ktora bedzie wyswietlala wszystkie marki samochodów z podanej wcześniej listy






//function PrintAllCarTypeObjects(input) {
//    for (var i = 0; i < input.length; i++) {
//        console.log(input[i].kolor);
//
//
//    }
//}

//PrintAllCarTypeObjects(carAll);




//zdanie domowe
// wyswietl najszybszy samochód prędkość największą (dla ambitnych)
// jaka średnia ilość jest miejsc w samochodzie (moze po przecinku)[prostsze] 
// napisz funkcje która zamienią (default) centymetry na cale (arrayObject) 



//function averageSeatCount(input) {
//    for (var i = 0; i < input.length; i++) {
//        var table = [];
//        var add;
//        table.push(input[i].ilośćMiejsc);    
//
//         
//    }
//for (var i = 0; i < input.length; i++) {
//    console.log(table)
//}
//console.log(table)
//}
//averageSeatCount(carAll);






//var arr = [];
//console.log(arr);
//arr.push(2,3);
//console.log(arr);
//var eq = arr[0] + arr[1];
//console.log(eq);



//var arr = {
//    test1: 2,
//    test2: 2137
//};
//console.log(arr[1].test2)




//function Test(input) {
//    for (var i = 0; i < input.length; i++) {
//       var add = input[i].ilośćMiejsc;
//    }
//    console.log(add);
//
//}
//Test(carAll);
//function Test1(input) {
//    let test = 0;
//        for(var i = 0; i < input.length; i++) {
//            
////            let test = 0;
//            test =+ input[i].ilośćMiejsc
//            
//            
//        }
//        
////        var suma = array.reduce(function(a, b){
////            return a + b;
////        }, 0);
//    console.log(test);
//
//}
//Test1(carAll);




//console.log(carAll[1].ilośćMiejsc + carAll[2].ilośćMiejsc);






//function Test1 (input) {
//
//    for (var i = 0; i < input.length; i++) {
//    var random = Math.floor(Math.random() * input.length);
//        
//       var add =  input[random].ilośćMiejsc * input.length;
//        
//        
//    }
//    console.log(add);
//}
//Test1(carAll);
function fastCar (model){
   
    let modelnaj=0;
    for(var i=1 ;i<model.length; i++){
        if(model[i].prędkośćMax>model[modelnaj].prędkośćMax){
            modelnaj=i;
        } 
        
    }
   console.log("Najszybsze auto to : " + model[modelnaj].prędkośćMax + " " + model[modelnaj].marka);
}

fastCar(carAll);


function iloscMiejsc (model){
   
    let sumamiejsc = 0;
    for(var i=0 ;i<model.length; i++){
        sumamiejsc += model[i].ilośćMiejsc
       
        
    }
   console.log("Srednia miejsc to : " + sumamiejsc / model.length);
}

iloscMiejsc(carAll);



//napisz funkcje ktora bedzie obliczala bmi 
//przykład: BMI osoby ważącej 70 kg i mierzącej 175 cm będzie wynosiło: 70/(1,75)2=22,86.


function BMI (waga, wzrost) {
    var bmi;
    bmi = waga / wzrost^2;
    console.log(bmi)
    
}
BMI(100, 180);