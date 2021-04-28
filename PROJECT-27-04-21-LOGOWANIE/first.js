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
//navigation
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
function navLogin(){
    window.location.href = 'logowanie.html'
}

function d(){
    var getTrElementsSize = document.getElementsByTagName("tr")
    console.log(getTrelements.length);
}
function btnalert(){
    alert("click")
}
// checker if form is not empty: email, name and message
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
//verifying if user is in indexKontakt.html and run textarea checker every 200 ticks
if(window.location.href == "file:///D:/OFFICE%20DATA/HTML/Web%20Frontend%20HemmersbachPoland/PROJECT-27-04-21-LOGOWANIE/indexKontakt.html"){
    setInterval(checkIfFormNotEmpty, 200);

}

//grabbing data from email, name and message and logging it to console
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

}
// deleting already written content using cancel button
function deleteFormData(){

    var getFormName = document.getElementById("contactName")
    var getFormEmail = document.getElementById("contactEmail")
    var getFormMessage = document.getElementsByClassName("getSupportInput")[0]
    getFormEmail.value = ""
    getFormMessage.value = ""
    getFormName.value = ""

}
// show image in theatre mode
function GalleryPopup(index){

    var gal = document.getElementById("galleryThing");

    if(gal.style.visibility == "visible"){
        gal.style.visibility = "hidden"
    }else if(!(gal.style.visibility == "visible")){
        gal.style.visibility = "visible"
    }
    var photo1 = document.getElementsByClassName("galImage")[index];
    var getDiv = document.getElementById("galleryThing");
    var getPhoto1Text = document.getElementsByClassName("underPhotoText")[index];
    var clonePhoto1 = photo1.cloneNode(true)
    clonePhoto1.className = "galImageNew"
    var clonePhoto1Text = getPhoto1Text.cloneNode(true)
    if(document.getElementsByClassName("galImageNew").length > 1){


    }else{
        getDiv.appendChild(clonePhoto1)
        getDiv.appendChild(clonePhoto1Text)
    }

    clonePhoto1.style.height = "500px"
    clonePhoto1.style.width = "500px"
    clonePhoto1.style.marginTop = "70px"
    clonePhoto1.style.borderRadius = "5%"
    clonePhoto1Text.style.color = "white"
    clonePhoto1Text.style.fontSize = "40px"
    
}
// reacting to div onclick and showing up image view method
if(window.location.href == "file:///D:/OFFICE%20DATA/HTML/Web%20Frontend%20HemmersbachPoland/PROJECT-27-04-21-LOGOWANIE/indexGaleria.html"){

    var stickynote = document.getElementsByClassName("stickynote")[0]
    stickynote.onclick = function(){
        GalleryPopup(0)
    }
    var stickynote = document.getElementsByClassName("stickynote")[1]
    stickynote.onclick = function(){
        GalleryPopup(1)
    }
    var stickynote = document.getElementsByClassName("stickynote")[2]
    stickynote.onclick = function(){
        GalleryPopup(2)
    }
    var stickynote = document.getElementsByClassName("stickynote")[3]
    stickynote.onclick = function(){
        GalleryPopup(3)
    }
    var stickynote = document.getElementsByClassName("stickynote")[4]
    stickynote.onclick = function(){
        GalleryPopup(4)
    }
    var stickynote = document.getElementsByClassName("stickynote")[5]
    stickynote.onclick = function(){
        GalleryPopup(5)
    }
    var stickynote = document.getElementsByClassName("stickynote")[6]
    stickynote.onclick = function(){
        GalleryPopup(6)
    }
    var stickynote = document.getElementsByClassName("stickynote")[7]
    stickynote.onclick = function(){
        GalleryPopup(7)
    }
    var stickynote = document.getElementsByClassName("stickynote")[8]
    stickynote.onclick = function(){
        GalleryPopup(8)
    }
}

//gallery toggler (button). safety feature if there are any appended elements, remove them making space for new elements after image is clicked
function GalleryToggler(){
    var gal = document.getElementById("galleryThing");

    if(gal.style.visibility == "visible"){
        gal.style.visibility = "hidden"
    }else if(!(gal.style.visibility == "visible")){
        gal.style.visibility = "visible"
    }

    for(var i = 0; i < 1; i++){
        var getNewImage = document.getElementsByClassName("galImageNew")[0]
        var getNewText = document.getElementsByClassName("underPhotoText")[0]
            gal.removeChild(getNewImage)
            gal.removeChild(getNewText)
    }

}


//login function, when login details are good, show welcome name, redirecting. if login details are not good, show text 'incorrect login details'
function loginFunction(){
    var user1 = {
        login: "Maciejoski12",
        password: "borborboraba",
        imie: "Maciej",
        nazwisko: "Kopyto"
    }
    var user2 = {
        login: "MichalD",
        password: "Douglas12",
        imie: "Michal",
        nazwisko: "Douglas"
    }
    var user3 = {
        login: "KarMarn",
        password: "Karolek12121",
        imie: "Karol",
        nazwisko: "Marnicki"
    }
    var user4 = {
        login: "AriariMan",
        password: "arianka12133",
        imie: "Arianna",
        nazwisko: "Mantel"
    }
    var user5 = {
        login: "Michealo",
        password: "Dumnaski123",
        imie: "Michael",
        nazwisko: "Dumnas"
    }
    var admin = {
        login: "admin",
        password: "admin",
        imie: "daniel",
        nazwisko: "dymek"
    }
    //references...
    var uzytkownicy = [user1, user2, user3, user4, user5,admin]
    var loginElemData = document.getElementsByClassName("login")[0].value
    var passwordElemData = document.getElementsByClassName("password")[0].value
    var postLoginPasswordElem = document.getElementsByClassName("postLoginPassword")[0]
    var postLoginLoginElem = document.getElementsByClassName("postLoginLogin")[0]
    var passwordElem = document.getElementsByClassName("password")[0]
    var loginElem = document.getElementsByClassName("login")[0];
    var loginAndPasswordLabel = document.getElementsByClassName("passLabel")
    var loginButton = document.getElementsByClassName("submitLoginBtn")[0]
    var stickynoteDiv = document.getElementsByClassName("loginThing")[0]
    var greetingsText = document.getElementsByClassName("greetingsText")[0]
    // for loop which is sorting thru uzytkownicy array and checking if input login&password is equal to any password from uzytkownicy array
    //by default login succes is set to false
    var loginSuccess = false;
    //in addition this for loop is hiding loginDiv and making space for the greeting thing
    for (var i = 0; i < uzytkownicy.length; i++){
        if(loginElemData == uzytkownicy[i].login && passwordElemData == uzytkownicy[i].password){
            console.log("Zalogowano poprawnie, " + uzytkownicy[i].imie)
            postLoginLoginElem.innerHTML = "correct login details"
            postLoginPasswordElem.innerHTML = "correct login details"
            postLoginPasswordElem.style.visibility = "visible"
            postLoginPasswordElem.style.color = "green"
            postLoginLoginElem.style.visibility = "visible"
            postLoginLoginElem.style.color = "green"

            //hiding elements and showing welcome user
            postLoginPasswordElem.style.visibility = "hidden"
            postLoginLoginElem.style.visibility = "hidden"

            stickynoteDiv.style.visibility = "hidden"
            greetingsText.style.visibility = "visible"
            //anim
            greetingsText.style.animationName = "example"
            greetingsText.style.animationDuration = "5s"
            greetingsText.innerHTML = "Welcome, " + uzytkownicy[i].imie + " " + uzytkownicy[i].nazwisko + "\n Redirecting..."
            
            setTimeout(() => {
            window.location.href = 'index.html'
                
            }, 2000);
            //if login details are good, return loginSuccess true
           return loginSuccess = true;


        }

    }
    //if above for loop did not give true, show this if statement. its also showing "incorrect details"
    if(loginSuccess == false){
        console.log("niezalogowano, zle haslo")
        postLoginLoginElem.innerHTML = "incorrect login details"
        postLoginPasswordElem.innerHTML = "incorrect login details"
        passwordElem.value = "";
        loginElem.value = "";
        postLoginPasswordElem.style.visibility = "visible"
        postLoginPasswordElem.style.color = "red"
        postLoginLoginElem.style.visibility = "visible"
        postLoginLoginElem.style.color = "red"
        // window.location.href = 'logowanie.html'
    }


}