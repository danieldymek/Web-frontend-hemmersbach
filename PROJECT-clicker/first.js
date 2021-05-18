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
var creditsPerClick = 100;
var upgradeStep = 0;
var upgradeCosts = [];
var idleValue = 0;
var idleUpgradeCosts = [];
var idleUpgradeStep = 0;
setInterval(function () {
  if(idleValue > 0){
    credits = credits + idleValue
    console.log("dodano " + idleValue + " credits");
    console.log("balance: " + credits);
  }
}, 1000);
function genClickUpgradeCosts() {
  upgradeCosts.push(Math.floor(5 +(credits * 1.8)))
}
function genIdleUpgradeCosts() {
  idleUpgradeCosts.push(Math.floor(25 +(credits * 1.4)))
}
genIdleUpgradeCosts();
genClickUpgradeCosts()
function a() { //clicker
  credits = credits + creditsPerClick
  console.log("balance: " + credits);

}
function b() { // clickAmountUpgrade
  if (credits >= upgradeCosts[upgradeStep]) {
    genClickUpgradeCosts()
    credits = credits - upgradeCosts[upgradeStep]
    upgradeStep++
    creditsPerClick = 1 * 1.2
    console.log("credits per click: " + creditsPerClick);
  }else{
    console.log("click upgradecost: " + upgradeCosts[upgradeStep]);
    console.log("issuficient balance: " + credits);
  }
}
function c() {
  if (credits >= idleUpgradeCosts[idleUpgradeStep]) {
    genIdleUpgradeCosts();
    credits = credits - idleUpgradeCosts[idleUpgradeStep]
    idleUpgradeStep++
    idleValue++
    console.log("credits per idleTick: " + idleValue);
  }else{
    console.log("idle upgrade cost: " + idleUpgradeCosts[idleUpgradeStep]);
    console.log("issuficient balance: " + credits);
  }
}
