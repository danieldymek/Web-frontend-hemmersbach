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

//rand weight with minimum weight control
const randomWeight = (minimumWeight) =>{
    let toReturn = Math.floor(minimumWeight + (Math.random() * 50) );
    return toReturn
}
//rand age but not lower than 18
const randomAgeButMinimum18 = () =>{
    let toReturn = Math.floor(18 + (Math.random() * 60) );
    return toReturn
}
// rand age up to 90
const randomAge = () =>{
    let toReturn = Math.floor(Math.random() * 90 );
    return toReturn
}
//users with pseudo random ages and random weights
const userParameters_000 = {
    IMIE: "ROBERT",
    WIEK: randomAgeButMinimum18(),
    WAGA: randomWeight(50),
}
const userParameters_001 = {
    IMIE: "KRYSTIAN",
    WIEK: randomAge(),
    WAGA: randomWeight(40),
}
const userParameters_002 = {
    IMIE: "IRENEUSZ",
    WIEK: randomAgeButMinimum18(),
    WAGA: randomWeight(40),
}
const userParameters_003 = {
    IMIE: "NORBERT",
    WIEK: randomAge(),
    WAGA: randomWeight(30),
}
const userParameters_004 = {
    IMIE: "LUKAS",
    WIEK: randomAge(),
    WAGA: randomWeight(30),
}

const groupAllUsers = [userParameters_000,userParameters_001,userParameters_002,userParameters_003,userParameters_004];

const fromObjectsAvgWeightGetter = (obj) =>{
    // var weightTable = [];
    var legalAgeWeightTable = [];
    //pushes weigths of all obj
    // var calc = obj.map(newArr =>{
    //     weightTable.push(newArr.WAGA)
    // })
    // adds weights from weightTable
    // var weightOfAllUsers = weightTable.reduce((a, b) => a + b, 0);
    // //avg
    // var avgWeightOfAllUsers = weightOfAllUsers / obj.length;
    // var message = "srednia wagowa wszystkich uzytkownikow(" + obj.length + ") to: " + avgWeightOfAllUsers
    // console.log(message)

    //finds all users above 18 and pushes to legalAgeWeightTable
    
    var find18 = obj.map(newArr =>{
        if(newArr.WIEK >= 18) {
            legalAgeWeightTable.push(newArr.WAGA)
        
        }
    })
    //sums values from legalAgeWeightTable
    var sumTotal18Users = legalAgeWeightTable.reduce((a, b) => a + b, 0);
//avg and message
    var avgOver18 = sumTotal18Users / legalAgeWeightTable.length
    var messageOver18 = "srednia wagowa wszystkich pelnoletnich uzytkownikow(" + legalAgeWeightTable.length + ") to: " + avgOver18
//display in html body
    var newElement = document.createElement("p");
    var showWeightsElement = document.createElement("p");
    showWeightsElement.innerHTML = legalAgeWeightTable
    newElement.innerHTML = messageOver18;
    document.body.appendChild(newElement)
    document.body.appendChild(showWeightsElement)


} 
fromObjectsAvgWeightGetter(groupAllUsers)
