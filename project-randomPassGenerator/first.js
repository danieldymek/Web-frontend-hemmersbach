//random password generator with table
function randomPass(initialPasswordLenght) {
    var symbolTable = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*"];

    var generatedPasswordTable = [];
    for (var i = 0; i < initialPasswordLenght; i++) {
        var randLetterIDGetter = Math.floor(Math.random() * symbolTable.length);
        generatedPasswordTable.push(symbolTable[randLetterIDGetter]);
        var passwordToString = generatedPasswordTable.join("")
    }
        var elementToAppend = document.createElement("p");
        elementToAppend.className = "randomPw"
        elementToAppend.innerHTML = passwordToString;
        document.body.appendChild(elementToAppend);
    

}
//function which executes function above
function gen(passLenght, passTimes){
    var generatedPass = document.getElementsByClassName("randomPw");
    for (var i = 0; i < generatedPass.length; i++) {
        generatedPass[i].remove();
 }
    if(passLenght == 0 || passTimes == 0) {
        alert("wprowadź wartości")
    }else{
        for (var i = 0; i < passTimes; i++) {
            randomPass(passLenght)
            
            }
    }
    
        console.log("command parsed")
}
// function which gets values from html <input>'s and executes above functions together
function getNumbersAndGenerate() {
    var generatedPass = document.getElementsByClassName("randomPw");
    for (var i = 0; i < generatedPass.length; i++) {
        generatedPass[i].remove();
 }
    var passLength = document.getElementById("passLength").value;
    var passCount = document.getElementById("passCount").value;
    gen(passLength, passCount)

}
function ifFocusIsLost(){
    if(document.hasFocus() == false){
        
    var generatedPass = document.getElementsByClassName("randomPw");
        for (var i = 0; i < generatedPass.length; i++) {
            generatedPass[i].remove();
            if(generatedPass.length > 0) {
                console.log("clearing... " + generatedPass.length + " left")

            }
            if(generatedPass.length == 0) {
                console.log("clearing " + "done")

            }
            
     }
    } 
}


window.setInterval(ifFocusIsLost, 1);





