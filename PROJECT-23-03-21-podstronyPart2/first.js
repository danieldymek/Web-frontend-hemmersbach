var id = 0;

function a(){
    //dochodzenie do elementow
    var getTBody = document.getElementsByTagName("tbody")[0]
    var newTrElement =  document.createElement("tr")
    newTrElement.className = id
    getTBody.appendChild(newTrElement)
    var getTrElementByClassName = document.getElementsByClassName(id)
    console.log(getTrElementByClassName.length)//debug ilosci elementow o id newTrElement(tagi <tr>)
    var getTrElementLenght = getTrElementByClassName.length
    var getTrElement = document.getElementsByTagName("tr")[getTrElementLenght]

    // id
    var newTdElement5 = document.createElement("td")

    newTdElement5.className = id
    newTdElement5.innerHTML = id
    //imie
    var newTdElement1 = document.createElement("td")
    var getInput0 = document.getElementById("input0")
    newTdElement1.innerHTML = getInput0.value
    newTdElement1.className = id
    //nazwisko
    var newTdElement2 = document.createElement("td")
    var getInput1 = document.getElementById("input1")
    newTdElement2.innerHTML = getInput1.value
    newTdElement2.className = id
    //wiek
    var newTdElement3 = document.createElement("td")
    var getInput2 = document.getElementById("input2")
    newTdElement3.innerHTML = getInput2.value
    newTdElement3.className = id
    //dostepnosc
    var newTdElement4 = document.createElement("td")
    var getInput3 = document.getElementById("input3Select")
    newTdElement4.innerHTML = getInput3.value
    newTdElement4.className = id
    //sprawdza czy pola nie sa puste i usuwa niepotrzebne <tr>
    if(getInput0.value != "" && getInput1.value != "" && getInput2.value != "" ){
        getTBody.appendChild(newTrElement)
    }else{
        getTBody.removeChild(newTrElement)
    }
    if(getInput0.value == "" || getInput1.value == "" || getInput2.value == "" ){
        alert("sprawdź pola i dodaj użytkowników jeszcze raz!")
    }
    //usuwanie row po kliknieciu w x

    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "X"
    deleteButton.className = id
    deleteButton.onclick = function(){
    var deleteButtonID = deleteButton.className
    var getelement = document.getElementsByClassName(deleteButtonID)
    for(var i = 0 ; i < 7; i ++){
        getTBody.removeChild(getelement[0])
    }
    }
    getTBody.appendChild(newTdElement5)//id
    
    getTBody.appendChild(newTdElement1)//imie
    getTBody.appendChild(newTdElement2)//nazwisko
    getTBody.appendChild(newTdElement3)//wiek
    getTBody.appendChild(newTdElement4)//dostepnosc
    getTBody.appendChild(deleteButton)//button
    id++


}
//usuwanie userów przez UI do usuwania
function b(){
    var IDValue = document.getElementById("userDeletorInput").value
    var getelement = document.getElementsByClassName(IDValue)
    var getTBody = document.getElementsByTagName("tbody")[0]
    for(var i = 0 ; i < 7; i ++){
        getTBody.removeChild(getelement[0])
    }




}

// usuwanie userow przez button przy kazdym userze


