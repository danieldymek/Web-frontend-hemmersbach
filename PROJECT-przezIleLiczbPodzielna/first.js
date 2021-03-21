function przezIlePodzielnaJest(integer){
    var podzielneLiczby = [];
    if(integer <= 1000000){
    console.log("Funkcja licząca przez ile liczb naturalnych podzelna jest podana liczba: " + integer);

        for(var i = 0; i < integer; i++){
            if(integer % i == 0){
                podzielneLiczby.push(i)
            }
            
        }
    console.log("liczba: " + integer + " jest podzielna przez: " + podzielneLiczby)

    }else{
        console.log("twoja liczba jest za duża. wybierz liczbę mniejszą 1000001")
    }
    

}
przezIlePodzielnaJest(1000000)