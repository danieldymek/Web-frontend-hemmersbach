var id = 0;

function a(){
    //dochodzenie do elementow
    var getTBody = document.getElementsByTagName("tbody")[0]
    var newTrElement = document.createElement("tr")
    newTrElement.className = id
    getTBody.appendChild(newTrElement)
    var getTrElementByClassName = document.getElementsByClassName(id)
    console.log(getTrElementByClassName.length)//debug ilosci elementow o id newTrElement(tagi <tr>)
    var getTrElementLenght = getTrElementByClassName.length
    var getTrElement = document.getElementsByTagName("tr")[getTrElementLenght]
        //check czy nie jest za duzo elementow w liscie
        var getTrElementsSize = document.getElementsByTagName("tr").length;

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
    }else{

    //usuwanie row po kliknieciu w x

    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "X"
    deleteButton.className = id
    //styles
    deleteButton.style.backgroundColor = "#582A72"
    deleteButton.style.color = "white"
    deleteButton.style.fontStyle = "bolder"
    deleteButton.style.display = "flex";
    deleteButton.style.justifyContent = "center";
    deleteButton.style.alignItems = "center";
    deleteButton.style.margin = "5px";
    deleteButton.style.marginLeft = "8px"
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


}
//usuwanie userów przez UI do usuwania
function b(){
    var IDValue = document.getElementById("userDeletorInput").value
    var getelement = document.getElementsByClassName(IDValue)
    var getTBody = document.getElementsByTagName("tbody")[0]
    
    var getTrElementLenght = getelement.length
    if(getTrElementLenght == 0){
        alert("NIE MA TAKIEGO ID!!")
    }else{
        for(var i = 0 ; i < 7; i ++){
            getTBody.removeChild(getelement[0])
        }
    
    
}



}




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

function d(){
    var getTrElementsSize = document.getElementsByTagName("tr")
    console.log(getTrelements.length);
}
function btnalert(){
    alert("click")
}

function checkIfFormNotEmpty(){
var getFormMessage = document.getElementsByClassName("getSupportInput")[0]
var getSubmitButton = document.getElementsByClassName("getSupportButton0")[0]
var getFormName = document.getElementById("contactName")
var getFormEmail = document.getElementById("contactEmail")
if(getFormMessage.value == "" || getFormName.value == "" || getFormEmail.value == ""){
    getSubmitButton.disabled = true
}else{
    getSubmitButton.disabled = false
}



}
setInterval(checkIfFormNotEmpty, 200);
function dataSender(){
    var getFormName = document.getElementById("contactName")
    var getFormEmail = document.getElementById("contactEmail")
    var getFormMessage = document.getElementsByClassName("getSupportInput")[0]
    var getSubmitButton = document.getElementsByClassName("getSupportButton0")[0]
    if(!(getFormName.value == ""|| getFormMessage.value == "" ||getFormEmail.value == "" )){
        if(getSubmitButton.disabled == false){
            console.log("Form has been sent...")
            console.log("Sender: " + getFormName.value + ", Senders email: " + getFormEmail.value )
            console.log("senders message: " + getFormMessage.value)
        }
        
    }
    if(getFormName.value == "" || getFormEmail.value == ""){
        getSubmitButton.disabled = true
    }else{
        getSubmitButton.disabled = false
    }
}
function deleteFormData(){
    var getCancelButton = document.getElementsByClassName("getSupportButton1")[0]
    var getFormName = document.getElementById("contactName")
    var getFormEmail = document.getElementById("contactEmail")
    var getFormMessage = document.getElementsByClassName("getSupportInput")[0]
    getFormEmail.value = ""
    getFormMessage.value = ""
    getFormName.value = ""

}