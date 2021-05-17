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
function genUpgradeCosts() {
  upgradeCosts.push(5 +(credits * 1.8))
}
genUpgradeCosts()
function a() { //clicker
  credits = credits + creditsPerClick
  console.log("balance: " + credits);

}
function b() { // clickAmountUpgrade
  console.log(upgradeCosts[upgradeStep]);
  if (credits >= upgradeCosts[upgradeStep]) {
    genUpgradeCosts()
    upgradeStep++
    console.log(credits);
    credits = credits - upgradeCosts[upgradeStep]
    creditsPerClick++
    console.log("credits per click: " + creditsPerClick);
  }else{
    console.log("upgradecost: " + upgradeCosts[upgradeStep]);
    console.log("issuficient balance: " + credits);
  }
}
