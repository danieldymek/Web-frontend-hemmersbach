function a(){
    //dochodzenie do elementow
    var getTBody = document.getElementsByTagName("tbody")[0]
    var newTrElement =  document.createElement("tr")
    newTrElement.className = "newTrElement"
    getTBody.appendChild(newTrElement)
    var getTrElementByClassName = document.getElementsByClassName("newTrElement")
    console.log(getTrElementByClassName.length)//debug ilosci elementow o id newTrElement(tagi <tr>)
    var getTrElementLenght = getTrElementByClassName.length
    var getTrElement = document.getElementsByTagName("tr")[getTrElementLenght]
    // id
    var newTdElement5 = document.createElement("td")
    newTdElement5.innerHTML = getTrElementLenght - 1
    //imie
    var newTdElement1 = document.createElement("td")
    var getInput0 = document.getElementById("input0")
    newTdElement1.innerHTML = getInput0.value
    //nazwisko
    var newTdElement2 = document.createElement("td")
    var getInput1 = document.getElementById("input1")
    newTdElement2.innerHTML = getInput1.value
    //wiek
    var newTdElement3 = document.createElement("td")
    var getInput2 = document.getElementById("input2")
    newTdElement3.innerHTML = getInput2.value
    //dostepnosc
    var newTdElement4 = document.createElement("td")
    var getInput3 = document.getElementById("input3Select")
    newTdElement4.innerHTML = getInput3.value
    //sprawdza czy pola nie sa puste i usuwa niepotrzebne <tr>
    if(getInput0.value != "" && getInput1.value != "" && getInput2.value != "" ){
        getTBody.appendChild(newTrElement)
    }else{
        getTBody.removeChild(newTrElement)
    }
    if(getInput0.value == "" || getInput1.value == "" || getInput2.value == "" ){
        alert("sprawdź pola i dodaj użytkowników jeszcze raz!")
    }
    getTrElement.appendChild(newTdElement5)//id
    getTrElement.appendChild(newTdElement1)//imie
    getTrElement.appendChild(newTdElement2)//nazwisko
    getTrElement.appendChild(newTdElement3)//wiek
    getTrElement.appendChild(newTdElement4)//dostepnosc

}
//usuwanie userów buttonem
function b(){
    var getTrElement = document.getElementsByTagName("tr")
    var getTrElementsCount = getTrElement.length
    var getDeletorInputValue = document.getElementById("userDeletorInput").value
    var getIntoTBody = document.getElementsByTagName("tbody")[0]
    if(getDeletorInputValue == "" || getDeletorInputValue >= getTrElementsCount || getDeletorInputValue == 0){
        alert("Wybierz poprawną wartość (int) lub dodaj użytkowników i potem usuwaj")

    }else if(getDeletorInputValue != 0){
    getIntoTBody.removeChild(getTrElement[getDeletorInputValue])

    }

}