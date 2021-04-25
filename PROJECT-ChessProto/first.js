var board = [
    [1,  2,  3,  4,  5,  6,  7,  8],
    [9,  10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31, 32],
    [33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48],
    [49, 50, 51, 52, 53, 54, 55, 56],
    [57, 58, 59, 60, 61, 62, 63, 64]
  ];
  var a;
  var x;
  var y;
  var y = 0;
  var x = 0;
  a = board[x][y]
  console.log("x max: 7, y max: 7")
console.log(a)
cellname = 1

function createBoard(){
    var getTbody = document.getElementsByClassName("tbody")[0]
    for(var i = 0; i < board.length; i++){
        var newTrElement = document.createElement("tr");
        newTrElement.className = "tr" + cellname;
        getTbody.appendChild(newTrElement)

        cellname++
    }
    console.log("cells done")
}

function createCells(){
    var getTbody = document.getElementsByClassName("tbody")[0]

    for(var i = 1; i < 9; i++){

        var getTrElements = document.getElementsByClassName("tr" + i)[0]

            var newTdElement = document.createElement("td");
            newTdElement.innerHTML = "test"
            newTdElement.className = "td" + i
            var getTdElement = document.getElementsByClassName("td1")[0]
                console.log("limit")

                getTrElements.appendChild(newTdElement)
                console.log()



    }

    
}
var td8 = document.getElementById("td1")
