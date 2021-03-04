//stworz dwie zemienne jedna wysokosc druga waga
var height = 1111;
var weight = 18282;

//napisz funkcje ktora wyswietla moj wzrost to i moja waga to

//console.log(height, weight);

function printHeightandWeight(num1, num2) {


    return console.log(num1, num2);
}


printHeightandWeight();

//napisz funkcje ktora bedzie mowila o ile jestes wyzszy, nizszy od marka ktory ma 170 wzrostu, i czy jestes ciezszy/lzejszy od marka ktory wazy 76


function PorownanieZMarkiemWzrostWaga(myHeight, myWeight) {
var MarekWzrost = 170;
var MarekWaga = 76;
    if (myHeight > MarekWzrost && myWeight > MarekWaga) {
        var wysokosci1 = myHeight - MarekWzrost;
        var wagi1 = myWeight - MarekWaga;
        console.log("jestem wyzszy o: " + wysokosci1 + " i grubszy o: " + wagi1);
    }
    if (myHeight < MarekWzrost && myWeight > MarekWaga) {
        var wysokosci2 = MarekWzrost - myHeight;
        var wagi2 = myWeight - MarekWaga;
        console.log("jestem nizszy o: " + wysokosci2 + " i grubszy o: " + wagi2);
    }
    if (myHeight > MarekWzrost && myWeight < MarekWaga) {
        var wysokosci3 = myHeight - MarekWzrost;
        var wagi3 = MarekWaga - myWeight;
        console.log("jestem wyzszy o: " + wysokosci3 + " i lzejszy o: " + wagi3);
    }
    if (myHeight < MarekWzrost && myWeight < MarekWaga) {
        var wysokosci4 = MarekWzrost - myHeight;
        var wagi4 = MarekWaga - myWeight;
        console.log("jestem nizszy o: " + wysokosci4 + " i lzejszy o: " + wagi4);
    }
    if (myHeight == MarekWzrost && myWeight == MarekWaga) {
        console.log("mierze i waze tyle samo co marek");
    }
    if (myHeight == MarekWzrost && myWeight > MarekWaga) {
        console.log("mierze tyle samo co marek, ale waze wiecej od marka");
    }
    if (myHeight == MarekWzrost && myWeight < MarekWaga) {
        console.log("mierze tyle samo co marek, ale waze mniej od marka");
    }
    if (myHeight > MarekWzrost && myWeight == MarekWaga) {
        console.log("jestem wyzszy od marka, ale waze tyle samo");
    }
    if (myHeight < MarekWzrost && myWeight == MarekWaga) {
        console.log("jestem nizszy od marka, ale waze tyle samo co on");
    }

}


PorownanieZMarkiemWzrostWaga(999, 221);
PorownanieZMarkiemWzrostWaga(169, 999);
PorownanieZMarkiemWzrostWaga(999, 75);
PorownanieZMarkiemWzrostWaga(169, 75);

PorownanieZMarkiemWzrostWaga(170, 76);

PorownanieZMarkiemWzrostWaga(170, 762);
PorownanieZMarkiemWzrostWaga(170, 71);
PorownanieZMarkiemWzrostWaga(1720, 76);
PorownanieZMarkiemWzrostWaga(12, 76);
