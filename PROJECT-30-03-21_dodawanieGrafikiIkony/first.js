function a(){
    //dochodzenie do elementow
    var getTBody = document.getElementsByTagName("tbody")[0]
    var newTrElement =  document.createElement("tr")
    newTrElement.className = "newTrElement"
    getTBody.appendChild(newTrElement)
    var getTrElementByClassName = document.getElementsByClassName("newTrElement")
    // console.log(getTrElementByClassName.length)//debug ilosci elementow o id newTrElement(tagi <tr>)
    var getTrElementLenght = getTrElementByClassName.length
    var getTrElement = document.getElementsByTagName("tr")[getTrElementLenght]

    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "X"
    deleteButton.className = "deleteButton"
    // id
    var newTdElement5 = document.createElement("td")
    newTdElement5.innerHTML = getTrElementLenght - 1
    //imie
    var newTdElement1 = document.createElement("td")
    var getInput0 = document.getElementById("input0")
    //randomizacja
    var getNameRandomize = document.getElementById("randomizeName")
    if (getNameRandomize.value = true){
        newTdElement1.innerHTML = randName()
    }else{
        newTdElement1.innerHTML = getInput0.value
    }
    //nazwisko
    var newTdElement2 = document.createElement("td")
    var getInput1 = document.getElementById("input1")
    //randomizacja
    var getSurnameRandomize = document.getElementById("randomizeSurname")
    if (getSurnameRandomize.value = true){
        newTdElement2.innerHTML = randSurname()

    }else{
        newTdElement2.innerHTML = getInput1.value
    }
    //wiek
    var newTdElement3 = document.createElement("td")
    var getInput2 = document.getElementById("input2")
    //randomizacja
    var getWiekRadomize = document.getElementById("randomizeAge")
    if (getWiekRadomize.value = true){
        newTdElement3.innerHTML = randAge()
    }else {
        newTdElement3.innerHTML = getInput4.value
    }

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
    //if tr > 22 - nie generuj wiecej
    if(!(getTrElementLenght > 22)){
        getTBody.appendChild(newTrElement)
    }else{
        getTBody.removeChild(newTrElement)
        alert("Lista jest za duża. Usuń już istniejących użytkowników aby dodać nowych")
    }
    
    // if(getInput0.value == "" || getInput1.value == "" || getInput2.value == "" ){
    //     alert("sprawdź pola i dodaj użytkowników jeszcze raz!")
    // }
    getTrElement.appendChild(newTdElement5)//id
    getTrElement.appendChild(newTdElement1)//imie
    getTrElement.appendChild(newTdElement2)//nazwisko
    getTrElement.appendChild(newTdElement3)//wiek
    getTrElement.appendChild(newTdElement4)//dostepnosc
    getTrElement.appendChild(deleteButton)//button

}
//usuwanie userów przez UI do usuwania
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

// usuwanie userow przez button przy kazdym userze



// randomizacja imion
function randName(){
    
    var NameArr = ["Ilona","Liliana","Ewa","Jadwiga","Teresa","Magda","Danuta","Bogda","Felicja","Alice"]
    var rand = Math.floor(Math.random() * NameArr.length)
    return NameArr[rand]
}
function randSurname(){
    
    var NameArr = ["Kowalczyk","Stępień","Sadowska","Wójcik","Stępień","Włodarczyk","Pietrzak","Kołodziej","Adamska","Czarnecka"]
    var rand = Math.floor(Math.random() * NameArr.length)
    return NameArr[rand]
}
function randAge(){
     var rand = 18 + Math.floor(Math.random() * 60)
     return rand;
}

function navHome(){
    window.location.href = 'index.html'
}
function navUsers(){
    window.location.href = 'indexUZYTKONICY.html'
}
function navGal(){
    window.location.href = 'indexGaleria.html'
}
function navContact(){
    window.location.href = 'indexKontakt.html'
}
