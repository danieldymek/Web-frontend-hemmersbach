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



setInterval(function () {
  balanceElement.textContent = "credits: " + credits;
}, 100);

setInterval(function () {
  if(idleValue > 0){
    credits = credits + idleValue
    console.log("dodano " + idleValue + " credits");
    console.log("balance: " + credits);
  }
}, 100);
function genClickUpgradeCosts() {
  upgradeCosts.push(Math.floor(5 +(credits * 1.8)))
}
function genIdleUpgradeCosts() {
  idleUpgradeCosts.push(Math.floor(25 +(credits * 1.4)))
}

function a() { //clicker
  credits = credits + creditsPerClick
  console.log("balance: " + credits);
  balanceElement.textContent = "credits: " + credits;
}
function b() { // clickAmountUpgrade

  if (credits >= upgradeCosts[upgradeStep]) {
    genClickUpgradeCosts()
    credits = credits - upgradeCosts[upgradeStep]
    upgradeStep++
    creditsPerClick++
    console.log("credits per click: " + creditsPerClick);
    balanceElement.textContent = "credits: " + credits;
    clickUpgradeCostElement.textContent = "click power upgrade cost: " + upgradeCosts[upgradeStep]
    creditsPerClickElement.textContent = "credits per click: " + creditsPerClick;

  }else{
    console.log("click upgradecost: " + upgradeCosts[upgradeStep]);
    console.log("issuficient balance: " + credits);
    balanceElement.textContent = "credits: " + credits;
    clickUpgradeCostElement.textContent = "click power upgrade cost: " + upgradeCosts[upgradeStep]
    creditsPerClickElement.textContent = "credits per click: " + creditsPerClick;

  }
}
function c() {
  if (credits >= idleUpgradeCosts[idleUpgradeStep]) {
    genIdleUpgradeCosts();
    credits = credits - idleUpgradeCosts[idleUpgradeStep]
    idleUpgradeStep++
    idleValue++
    console.log("credits per idleTick: " + idleValue);
    balanceElement.textContent = "credits: " + credits;

  }else{
    console.log("idle upgrade cost: " + idleUpgradeCosts[idleUpgradeStep]);
    console.log("issuficient balance: " + credits);
    balanceElement.textContent = "credits: " + credits;


  }
}
