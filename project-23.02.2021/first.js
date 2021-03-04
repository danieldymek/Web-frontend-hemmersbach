function randomGen() {
    var getButtonElement = document.getElementById("randomGenNumber");
    var getRandomSupportP = document.getElementById("randomSupport")
    var createRandom = document.createElement("p");
    var randomNumber = Math.floor(Math.random() * 100);
    createRandom.textContent = randomNumber;
    createRandom.className = "randomNum"
    var getGeneratedNumberByClass = document.getElementsByClassName("randomNum")
    getRandomSupportP.appendChild(createRandom)
    if(getGeneratedNumberByClass.length == 2) {
        getRandomSupportP.removeChild(createRandom)
        
    }
    
    
}

//zadanie domowe
// kości
//k6, k20
// walczysz z goblinem ktory ma 3 mocy i rzucamy mu koscia k6 wygrales przegrales, walka z trollem, troll ma 16 jesli 3-6 wygrales jezeli 1-3 przegrales

// warunek (warunek) : ?