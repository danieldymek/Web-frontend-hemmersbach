function test() {
    if(document.getElementById("w3review").value == "poprawnehaslo") {
        alert("zalogowano poprawnie!")
        window.location.reload(true);
    }else {
        alert("wprowadz haslo jeszcze raz")
        window.location.reload(true);
    } 
}

function createNewPElement(){
    var hi = document.createElement("h1");
    hi.textContent = "nowy <h1> w ktorym jest tekst";
    document.body.appendChild(hi);
}
