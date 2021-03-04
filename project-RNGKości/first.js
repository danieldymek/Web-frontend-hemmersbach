for (var i = 0; i < 100; i++) {
    var randGob = 1 + Math.floor(Math.random() * 6)
    //console.log(randGob)
}

function goblinFight() {
    var randGob = 1 + Math.floor(Math.random() * 6)
    var getGobSupport = document.getElementById("supportGoblin")
    var playerMessage = document.createElement("p")
    playerMessage.className = "gobElement"
    var getResult = document.getElementsByClassName("gobElement")
    var FightStatus = document.createElement("h3");
    FightStatus.className = "fightStatusGob"


    if (randGob >= 4) {
        FightStatus.textContent = "YOU WIN"
        playerMessage.textContent = "wylosowałeś " + randGob + ", wygrałeś z goblinem"
        getGobSupport.appendChild(FightStatus)
        getGobSupport.appendChild(playerMessage)

    }
    if (randGob < 3) {
        playerMessage.textContent = "wylosowałeś " + randGob + ", przegrałeś z goblinem"
        FightStatus.textContent = "YOU LOSE"
        getGobSupport.appendChild(FightStatus)
        getGobSupport.appendChild(playerMessage)

    }
    if (randGob == 3) {
        playerMessage.textContent = "wylosowałeś " + randGob + ", zremisowałeś z goblinem"
        FightStatus.textContent = "TIE"
        getGobSupport.appendChild(FightStatus)
        getGobSupport.appendChild(playerMessage)

    }
    if (getResult.length == 2) {
        getGobSupport.removeChild(playerMessage)
        window.location.reload(true)
    }

};

function trollFight() {
    var randTroll = 1 + Math.floor(Math.random() * 20)
    var getTrollSupport = document.getElementById("supportTroll")
    var playerMessage = document.createElement("p");
    var FightStatus = document.createElement("h3");
    FightStatus.className = "fightStatusTroll"
    playerMessage.className = "trollElement"
    var getResult = document.getElementsByClassName("trollElement")

    if (randTroll > 17) {
        playerMessage.textContent = "wylosowałeś " + randTroll + ", wygrałeś z trollem"
        FightStatus.textContent = "YOU WIN"
        getTrollSupport.appendChild(FightStatus)
        getTrollSupport.appendChild(playerMessage)
    }
    if (randTroll < 17) {
        playerMessage.textContent = "wylosowałeś " + randTroll + ", przegrałeś z trollem"
        FightStatus.textContent = "YOU LOSE"
        getTrollSupport.appendChild(FightStatus)
        getTrollSupport.appendChild(playerMessage)

    }
    if (randTroll == 16) {
        playerMessage.textContent = "wylosowałeś " + randTroll + ", zremisowałeś z trollem"
        FightStatus.textContent = "TIE"
        getTrollSupport.appendChild(FightStatus)
        getTrollSupport.appendChild(playerMessage)

    }
    if (getResult.length == 2) {
        getTrollSupport.removeChild(playerMessage)
        window.location.reload(true)
    }

};
//zadanie domowe
// kości
//k6, k20
// walczysz z goblinem ktory ma 3 mocy i rzucamy mu koscia k6 wygrales przegrales, walka z trollem, troll ma 16 jesli 3-6 wygrales jezeli 1-3 przegrales

// warunek (warunek) : ?
