function jakieMaszSamochody() {
    var auto1 = document.getElementById("auto1")

    var auto1Text = document.createElement("p");
    auto1Text.textContent = "auto1";
    auto1Text.className = "auto1Text"
    var getAuto1Element = document.getElementsByClassName("auto1Text")

    var auto2Text = document.createElement("p");
    auto2Text.textContent = "auto2";
    auto2Text.className = "auto2Text"
    var getAuto2Element = document.getElementsByClassName("auto2Text")

    var auto3Text = document.createElement("p");
    auto3Text.textContent = "auto3";
    auto3Text.className = "auto3Text"
    var getAuto3Element = document.getElementsByClassName("auto3Text")

    var auto4Text = document.createElement("p");
    auto4Text.textContent = "auto4";
    auto4Text.className = "auto4Text"
    var getAuto4Element = document.getElementsByClassName("auto4Text")

    var getAfterButton = document.getElementById("afterButton")
    var getSubmitButton = document.getElementById("buttonClick")
    var getDivNavbar = document.getElementsByClassName("navbar")
    var queryAuto1 = document.querySelector("#auto1");
    var queryAuto2 = document.querySelector("#auto2");
    var queryAuto3 = document.querySelector("#auto3");
    var queryAuto4 = document.querySelector("#auto4");
    var arrChecker = [];
    if (queryAuto1.checked == true) {
        console.log("auto1 true")
        arrChecker.push("check")
        getAfterButton.appendChild(auto1Text)
        if (getAuto1Element.length == 2) {
            getAfterButton.removeChild(auto1Text)
        }


    } else if(queryAuto1.checked == false) {
        console.log("auto1 false")
    }
        
    if (queryAuto2.checked == true) {
        console.log("auto2 true")
        arrChecker.push("check")
        getAfterButton.appendChild(auto2Text)
        if (getAuto2Element.length == 2) {
            getAfterButton.removeChild(auto2Text)
        }

    } else
        console.log("auto2 false")
    if (queryAuto3.checked == true) {
        console.log("auto3 true")
        arrChecker.push("check")
        getAfterButton.appendChild(auto3Text)
        if (getAuto3Element.length == 2) {
            getAfterButton.removeChild(auto3Text)
        }


    } else
        console.log("auto3 false")
    if (queryAuto4.checked == true) {
        console.log("auto4 true")
        getAfterButton.appendChild(auto4Text)

        if (getAuto4Element.length == 2) {
            getAfterButton.removeChild(auto4Text)
        }

    } else
        console.log("auto4 false")
    if(queryAuto1.checked == false && queryAuto2.checked == false && queryAuto3.checked == false && queryAuto4.checked == false) {
        window.location.reload(true)
    }

    
    
};
