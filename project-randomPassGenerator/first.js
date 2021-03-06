function randomPass(initialPasswordLenght) {
    var symbolTable = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*"];

    var generatedPasswordTable = [];
    for (var i = 0; i < initialPasswordLenght; i++) {
        var randLetterIDGetter = Math.floor(Math.random() * symbolTable.length);
        generatedPasswordTable.push(symbolTable[randLetterIDGetter]);
        var passwordToString = generatedPasswordTable.join("")
    }
    console.log(passwordToString)
    // navigator.clipboard.writeText(passwordToString).then(function() {
    //     alert('Async: Copying to clipboard was successful!');
    //   }, function(err) {
    //     alert('Async: Could not copy text: ', err);
    //   });
    //    console.log(passwordToString.length)

}
setInterval(function () {
   randomPass(16);
   
}, 1000);
