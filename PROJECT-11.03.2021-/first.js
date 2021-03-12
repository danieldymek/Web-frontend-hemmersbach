//instr warunkowa ? :
function ToggleFun(){
    var osobaPelnoletnia = false;

    var instruction = (osobaPelnoletnia == true) ? console.log("osoba jest pelnoletnia") : console.log("osoba nie jest pelnoletnia") 
    console.log(instruction)
}

// koszyk function elements
var koszyk000 = ['jablko', 'kefir','pomarancze'];
var koszyk001 = ['ananas', 'ziemniak','mandarynka','banan'];
var koszyk002 = ['mieso', 'maslo','jogurt'];
var koszyk003 = ['cola', 'redbull','pepsi'];
var koszyk004 = ['zelki', 'smiejzelki','rtx3090'];
var koszyk005 = ['rx580', 'asrock btc','pomidor'];
var koszyk006 = ['mullermilch', 'danio','ogorek'];
var koszyk007 = ['mleko', 'gazeta'];

const koszykDB = [koszyk000,koszyk001,koszyk002,koszyk004,koszyk005,koszyk006,koszyk007];
function koszykChecker(){
    for(var i = 0; i < koszykDB.length; i ++) {
        if(koszykDB[i].length > 3) {
            console.log("ponizej koszyk ktory ma więcej niz 3 produkty")
            console.log(koszykDB[i])
        }else if(koszykDB[i].length <= 3){
            console.log("ponizej koszyk ktory ma mniej niz 3 produkty")
            console.log(koszykDB[i])
        }
    }
}
// koszykChecker()

//proto
// const usersBaskets = {
//     klient0: koszyk000 = ['jablko', 'kefir','pomarancze'],
//     klient1: koszyk001 = ['ananas', 'ziemniak','mandarynka','banan'],
//     klient2: koszyk002 = ['mieso', 'maslo','jogurt'],
//     klient3: koszyk003 = ['cola', 'redbull','pepsi'],
//     klient4: koszyk004 = ['zelki', 'smiejzelki','rtx3090'],
//     klient5: koszyk005 = ['rx580', 'asrock btc','pomidor'],
//     klient5: koszyk006 = ['mullermilch', 'danio','ogorek'],
//     klient5: koszyk007 = ['mleko', 'gazeta']

// }

//arrowfunc which prints array element count
var koszykDB1 = [koszyk000,koszyk001,koszyk002,koszyk004,koszyk005,koszyk006,koszyk007];

const printLenghtArrowFunc = (KoszykList) =>{
    var test = KoszykList.length;
    console.log(test)
}
printLenghtArrowFunc(koszykDB1)
//funkcja strzalkowa
// stworz obiekty i w tych obiektach zrobic jakie kto ma imie, ile kto ma lat i ile kto wazy i zeby wyswietlilo srednia wage osob ktore maja powyzej 18 lat



