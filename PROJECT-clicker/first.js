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
genIdleUpgradeCosts();
genClickUpgradeCosts();

//appending elements
var midContentElement = document.getElementsByClassName('midContent')[0];
var balanceElement = document.createElement('h2');
balanceElement.textContent = "credits: " + credits;
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


setInterval(function () {
  balanceElement.textContent = "credits: " + credits;
}, interval);

setInterval(function () {
  if(idleValue > 0){
    credits = credits + idleValue

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

  if (credits >= upgradeCosts[upgradeStep]) {
    genClickUpgradeCosts()
    credits = credits - upgradeCosts[upgradeStep]
    upgradeStep++
    creditsPerClick++
    balanceElement.textContent = "credits: " + credits;
    clickUpgradeCostElement.textContent = "click power upgrade cost: " + upgradeCosts[upgradeStep]
    creditsPerClickElement.textContent = "credits per click: " + creditsPerClick;

  }else{
    clickUpgradeCostElement.textContent = "click power upgrade cost: " + upgradeCosts[upgradeStep]
    creditsPerClickElement.textContent = "credits per click: " + creditsPerClick;

  }
}
function c() { //idle upgrade
  if (credits >= idleUpgradeCosts[idleUpgradeStep]) {
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
