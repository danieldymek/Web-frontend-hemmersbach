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
var credits = 0;
var creditsPerClick = 1;
var upgradeStep = 0;
var upgradeCosts = [];
var idleValue = 0;
var idleUpgradeCosts = [];
var idleUpgradeStep = 0;
var interval = 100
var power = 0
var idleCreditsBuffor = 0;
genIdleUpgradeCosts();
genClickUpgradeCosts();

//appending elements
var midContentElement = document.getElementsByClassName('midContent')[0];
var balanceElement = document.createElement('h2');
balanceElement.textContent = "credits: " + credits;
balanceElement.className = "balance"

midContentElement.appendChild(balanceElement);

var creditsPerClickElement = document.createElement('h3')
creditsPerClickElement.textContent = "credits per click: " + creditsPerClick;
midContentElement.appendChild(creditsPerClickElement)

var clickUpgradeCostElement = document.createElement('h3')
clickUpgradeCostElement.textContent = "click power upgrade cost: " + upgradeCosts[upgradeStep]
midContentElement.appendChild(clickUpgradeCostElement)

var idleValueElement = document.createElement('h3')
idleValueElement.textContent = "credits generator tier: " + idleValue;
midContentElement.appendChild(idleValueElement)

var idleUpgradeElement = document.createElement('h3')
idleUpgradeElement.textContent = "credits generator tier upgrade: " + idleUpgradeCosts[idleUpgradeStep]
midContentElement.appendChild(idleUpgradeElement)

var idleBufforElement = document.createElement('h3')
idleBufforElement.textContent = "credits do odebrania: " + idleCreditsBuffor
midContentElement.appendChild(idleBufforElement)

balanceElement.style.position = "static"
creditsPerClickElement.style.position = "static"
clickUpgradeCostElement.style.position = "static"
idleValueElement.style.position = "static"
idleUpgradeElement.style.position = "static"

setInterval(function () {
  if(idleValue > 0){
    idleCreditsBuffor = idleCreditsBuffor + idleValue

  }
}, interval);

function genClickUpgradeCosts() {
  upgradeCosts.push(Math.floor(5 +(credits * 1.4)))
}
function genIdleUpgradeCosts() {
  idleUpgradeCosts.push(Math.floor(25 +(credits * 1.8)))
}

function a() { //clicker
  credits = credits + creditsPerClick
  balanceElement.textContent = "credits: " + credits;
}
function b() { // clickAmountUpgrade
 let upgradeFailFlag = false
  if (credits >= upgradeCosts[upgradeStep]) {
    genClickUpgradeCosts()
    credits = credits - upgradeCosts[upgradeStep]
    upgradeStep++
    creditsPerClick++
    balanceElement.textContent = "credits: " + credits;
    clickUpgradeCostElement.textContent = "click power upgrade cost: " + upgradeCosts[upgradeStep]
    creditsPerClickElement.textContent = "credits per click: " + creditsPerClick;

  }else{
    if(upgradeFailFlag == false){
      upgradeFailFlag = true
      balanceElement.style.transition = "0.8s"
      balanceElement.style.backgroundColor = "#ff0000"
      balanceElement.textContent = "brakuje: " + (upgradeCosts[upgradeStep] - credits) + " credits"
      setTimeout(function () {
        balanceElement.style.backgroundColor = "transparent"
        balanceElement.textContent = "credits: " + credits;
      }, 1200);
      upgradeFailFlag = false

    }



  }
}
function c() { //idle upgrade
  if (credits >= idleUpgradeCosts[idleUpgradeStep]) {
    // credits = credits + idleCreditsBuffor
    // idleCreditsBuffor = 0;
    genIdleUpgradeCosts();
    credits = credits - idleUpgradeCosts[idleUpgradeStep]
    idleUpgradeStep++
    power++
    idleValue =  idleValue + 1 + (Math.pow(2, power))
    balanceElement.textContent = "credits: " + credits;
    idleValueElement.textContent = "credits generator tier: " + idleValue;
    idleUpgradeElement.textContent = "credits generator tier upgrade: " + idleUpgradeCosts[idleUpgradeStep]

  }else{
    idleUpgradeElement.textContent = "credits generator tier upgrade: " + idleUpgradeCosts[idleUpgradeStep]
  }
}
function d() {
  credits = credits + idleCreditsBuffor
  idleCreditsBuffor = 0;
  balanceElement.textContent = "credits: " + credits;
  if (idleCreditsBuffor == 0) {
    idleBufforElement.textContent = "Nie ma nic do odebrania"
    idleBufforElement.style.transition = "0.8s"
    idleBufforElement.style.backgroundColor = "#ff0000"
    setTimeout(function () {
      idleBufforElement.textContent = "credits do odebrania: " + idleCreditsBuffor
      /////////
    }, 1200);
  }
}
