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

let credits = 0;
let creditsPerClick = 122;
let upgradeStep = 0;
let upgradeCosts = [5];
let idleValue = 0;
let idleUpgradeCosts = [25];
let idleUpgradeStep = 0;
let interval = 600
let idlepower = 0
let clickpower = 0
let idleCreditsBuffor = 0;
let idleBufforLimits = [50];
let idleBufforLimitLevel = 0;

//default data
  var balanceString = "Total clicks: " + credits;
  var clicksPerClickString = "Clicks per click: " + creditsPerClick;
  var autoClickerLevelString = "Autoclicker level: " + idleUpgradeStep;
  var clicksUpgradeCostString = "Click levelup cost: " + upgradeCosts[upgradeStep];
  var autoClickerUpgradeCostString = "Autoclicker price: " + idleUpgradeCosts[idleUpgradeStep];
  var autoClickerVaultString = "Clicks vault: " + idleCreditsBuffor;

//appending elements
let midContentElement = document.getElementsByClassName('midContent')[0];
let balanceElement = document.createElement('h2');
balanceElement.textContent = balanceString
balanceElement.className = "balance"

midContentElement.appendChild(balanceElement);

let creditsPerClickElement = document.createElement('h3')
creditsPerClickElement.textContent = clicksPerClickString
midContentElement.appendChild(creditsPerClickElement)

let idleValueElement = document.createElement('h3')
idleValueElement.textContent = autoClickerLevelString

let clickUpgradeCostElement = document.createElement('h3')
clickUpgradeCostElement.textContent = clicksUpgradeCostString
midContentElement.appendChild(clickUpgradeCostElement)

let idleUpgradeElement = document.createElement('h3')
idleUpgradeElement.textContent = autoClickerUpgradeCostString
midContentElement.appendChild(idleUpgradeElement)

let idleBufforElement = document.createElement('h3')
idleBufforElement.textContent = autoClickerVaultString

//inHTML elements references

let upgradeIdleButton = document.getElementsByClassName('idleUpgradeButton')[0]

let recieveIdleButton = document.getElementsByClassName('recieveIdle')[0];

let upgradeClickButton = document.getElementsByClassName('clickUpgradeButton')[0]
const refreshUpgradeButtons = () =>{
  if(credits <= upgradeCosts[upgradeStep]){
    upgradeClickButton.disabled = true;
    upgradeClickButton.textContent = "Issuficient credits, you need to click more!"
    upgradeClickButton.style.backgroundColor = "grey"
    upgradeClickButton.style.color = "black"
    if(upgradeStep > 0){
      upgradeClickButton.textContent = "Issuficient clicks, you need " + (upgradeCosts[upgradeStep] - credits) + " more"
    }
  }
  if(credits >= upgradeCosts[upgradeStep]){
    upgradeClickButton.disabled = false;
    upgradeClickButton.textContent = "Upgrade Click Power"
    upgradeClickButton.style.backgroundColor = "lime"
  }
  if(credits <= idleUpgradeCosts[idleUpgradeStep]){
    upgradeIdleButton.disabled = true;
    upgradeIdleButton.textContent = "Issuficient credits, you need to click more!"
    upgradeIdleButton.style.backgroundColor = "grey"
    upgradeIdleButton.style.color = "black"
    if(idleUpgradeStep > 0){
      upgradeIdleButton.textContent = "Issuficient clicks, you need " + (idleUpgradeCosts[idleUpgradeStep] - credits) + " more"
    }
  }
  if(credits >= idleUpgradeCosts[idleUpgradeStep]){
    upgradeIdleButton.disabled = false;
    upgradeIdleButton.textContent = "Upgrade Autoclicker"
    upgradeIdleButton.style.backgroundColor = "lime"
  }

}
refreshUpgradeButtons()



setInterval(function () {
  var balanceString = "Total clicks: " + credits;
  var clicksPerClickString = "Clicks per click: " + creditsPerClick;
  var autoClickerLevelString = "Autoclicker level: " + idleUpgradeStep;
  var clicksUpgradeCostString = "Click levelup cost: " + upgradeCosts[upgradeStep];
  var autoClickerUpgradeCostString = "Autoclicker levelup cost: " + idleUpgradeCosts[idleUpgradeStep];
  var autoClickerVaultString = "Clicks vault: " + idleCreditsBuffor;
    if(idleValue > 0){
        if(idleCreditsBuffor < idleBufforLimits[idleBufforLimitLevel]){
          idleCreditsBuffor = idleCreditsBuffor + idleValue
          idleBufforElement.style.backgroundColor = "transparent"
          idleBufforElement.textContent = autoClickerVaultString
        }
      }

}, interval);
function valueConverter(){
    if (credits >= 1000 && credits <= 999999) {
      balanceString = "Total clicks: " + (credits / 1000).toFixed(1) + "k"
      balanceElement.textContent = balanceString;
    }
    if (Math.round(credits / 1000) == 1000) {
      balanceString = "Total clicks: " + (credits / 1000000).toFixed(1) + "m"
      balanceElement.textContent = balanceString;

    }
    if (credits >= 1000000 && credits <= 999999999) {
      balanceString = "Total clicks: " + (credits / 1000000).toFixed(1) + "m"
      balanceElement.textContent = balanceString;

    }
    if (Math.round(credits / 100000) > 1000) {
      balanceString = "Total clicks: " + (credits / 100000000).toFixed(1) + "b"
      balanceElement.textContent = balanceString;

    }
    if (credits >= 1000000000 && credits <= 1000000000 ) {
      balanceString = "Total clicks: " + (credits / 100000000).toFixed(1) + "b"
      balanceElement.textContent = balanceString;

    }
    // var balanceString = "Total clicks: " + credits
}
valueConverter()

setInterval(function () {
  // valueConverter()
}, interval);

function genClickUpgradeCosts() {
  upgradeCosts.push(Math.floor(upgradeCosts[upgradeStep] * 1.7))
  //array data optimization
  if (upgradeCosts.length > 2) {
    upgradeCosts.splice(0, (upgradeCosts.length - 2))
    upgradeStep--
  }
}
function genIdleUpgradeCosts() {
  idleUpgradeCosts.push(Math.floor(idleUpgradeCosts[idleUpgradeStep] * 2.5))
  //array data optimization
  if (idleUpgradeCosts.length > 2) {
    idleUpgradeCosts.splice(0, (idleUpgradeCosts.length - 2))
    idleUpgradeStep--
  }
}

function genIdleBufforLimit() {
  idleBufforLimits.push(Math.round(idleBufforLimits[idleBufforLimitLevel - 1] * 2.1))
  //array data optimization
  if (idleBufforLimits.length > 2) {
    idleBufforLimits.splice(0, (idleBufforLimits.length - 2))
    idleBufforLimitLevel--
  }
}

function a() { //clicker
  credits = credits + creditsPerClick
  var balanceString = "Total clicks: " + credits;
  var clicksPerClickString = "Clicks per click: " + creditsPerClick;
  var autoClickerLevelString = "Autoclicker level: " + idleUpgradeStep;
  var clicksUpgradeCostString = "Click levelup cost: " + upgradeCosts[upgradeStep];
  var autoClickerUpgradeCostString = "Autoclicker levelup cost: " + idleUpgradeCosts[idleUpgradeStep];
  var autoClickerVaultString = "Clicks vault: " + idleCreditsBuffor;
  balanceElement.style.transition = "all 1s"
  balanceElement.textContent = balanceString

  refreshUpgradeButtons()
  valueConverter()

}
function b() { // clickAmountUpgrade

  if (credits >= upgradeCosts[upgradeStep]) {
    genClickUpgradeCosts()
    credits = credits - upgradeCosts[upgradeStep]
    upgradeStep++
    clickpower++
    creditsPerClick = creditsPerClick + 1 + (Math.pow(2, clickpower))


    var balanceString = "Total clicks: " + credits;
    var clicksPerClickString = "Clicks per click: " + creditsPerClick;
    var autoClickerLevelString = "Autoclicker level: " + idleUpgradeStep;
    var clicksUpgradeCostString = "Click levelup cost: " + upgradeCosts[upgradeStep];
    var autoClickerUpgradeCostString = "Autoclicker levelup cost: " + idleUpgradeCosts[idleUpgradeStep];
    var autoClickerVaultString = "Clicks vault: " + idleCreditsBuffor;
    balanceElement.textContent = balanceString
    clickUpgradeCostElement.textContent = clicksUpgradeCostString
    creditsPerClickElement.textContent = clicksPerClickString
    valueConverter()
    refreshUpgradeButtons()


    setTimeout(function () {
      creditsPerClickElement.style.backgroundColor = "green"
      setTimeout(function () {
        creditsPerClickElement.style.backgroundColor = "transparent"
        setTimeout(function () {
          creditsPerClickElement.style.backgroundColor = "green"
          setTimeout(function () {
            creditsPerClickElement.style.backgroundColor = "transparent"

          }, 200);
        }, 200);
  }, 200);
}, 1);





  }else if (credits <= upgradeCosts[upgradeStep]){
      clickUpgradeCostElement.style.transition = "0.6s"
      clickUpgradeCostElement.style.backgroundColor = "#ff0000"
      clickUpgradeCostElement.textContent = "You need: " + (upgradeCosts[upgradeStep] - credits) + " more clicks!"
      setTimeout(function () {
        clickUpgradeCostElement.textContent = "Click levelup cost: " + upgradeCosts[upgradeStep];
        clickUpgradeCostElement.style.backgroundColor = "transparent"
      }, interval);
    }




}
var isUpgraded = false;

function c() { //idle upgrade

  if (credits >= idleUpgradeCosts[idleUpgradeStep]) {
    genIdleUpgradeCosts();
    credits = credits - idleUpgradeCosts[idleUpgradeStep]
    idleBufforLimitLevel++
    idleUpgradeStep++
    idlepower++
    genIdleBufforLimit()
    midContentElement.appendChild(idleValueElement)
    midContentElement.appendChild(idleBufforElement)
    idleValue = idleValue + 1 + (Math.pow(2, idlepower))
    var balanceString = "Total clicks: " + credits;
    var clicksPerClickString = "Clicks per click: " + creditsPerClick;
    var autoClickerLevelString = "Autoclicker level: " + idleUpgradeStep;
    var clicksUpgradeCostString = "Click levelup cost: " + upgradeCosts[upgradeStep];
    var autoClickerUpgradeCostString = "Autoclicker levelup cost: " + idleUpgradeCosts[idleUpgradeStep];
    var autoClickerVaultString = "Clicks vault: " + idleCreditsBuffor;
    balanceElement.textContent = balanceString
    idleValueElement.textContent = autoClickerLevelString
    idleUpgradeElement.textContent = "Autoclicker levelup cost: " + idleUpgradeCosts[idleUpgradeStep];
    upgradeIdleButton.textContent = "Upgrade Autoclicker"
    valueConverter()
    refreshUpgradeButtons()



    if (idleUpgradeStep > 1) {
      setTimeout(function () {
        idleValueElement.style.backgroundColor = "green"
        setTimeout(function () {
          idleValueElement.style.backgroundColor = "transparent"
          setTimeout(function () {
            idleValueElement.style.backgroundColor = "green"
            setTimeout(function () {
              idleValueElement.style.backgroundColor = "transparent"

            }, 200);
          }, 200);
      }, 200);
      }, 1);
    }



  }
  else if(credits < idleUpgradeCosts[idleUpgradeStep]){
      idleUpgradeElement.style.transition = ".6s"
      idleUpgradeElement.textContent = "You need " +(idleUpgradeCosts[idleUpgradeStep] - credits) + " more clicks to upgrade Autoclicker!"
      idleUpgradeElement.style.backgroundColor = "red"
      if (idleUpgradeStep == 0) {
        setTimeout(function () {
          idleUpgradeElement.textContent = "Autoclicker price: " + idleUpgradeCosts[idleUpgradeStep];
          idleUpgradeElement.style.backgroundColor = "transparent"

        }, interval);
    }
    setTimeout(function () {
      idleUpgradeElement.textContent = "Autoclicker levelup cost: " + idleUpgradeCosts[idleUpgradeStep];
      idleUpgradeElement.style.backgroundColor = "transparent"

    }, interval);
    {

    }
    }
      else{

    idleUpgradeElement.textContent = "Autoclicker levelup cost: " + idleUpgradeCosts[idleUpgradeStep];
  }
  if(idleUpgradeStep >= 1 && isUpgraded == false){
    recieveIdleButton.style.visibility = "visible";



    setTimeout(function () {
      idleValueElement.style.backgroundColor = "orange"
      idleUpgradeElement.style.backgroundColor = "orange"
      idleBufforElement.style.backgroundColor = "orange"
      recieveIdleButton.style.backgroundColor = "orange";

    }, 200);


    setTimeout(function () {
      idleValueElement.style.backgroundColor = "transparent"
      idleUpgradeElement.style.backgroundColor = "transparent"
      idleBufforElement.style.backgroundColor = "transparent"
      recieveIdleButton.style.backgroundColor = "lime";

}, 400);
setTimeout(function () {
  idleValueElement.style.backgroundColor = "orange"
  idleUpgradeElement.style.backgroundColor = "orange"
  idleBufforElement.style.backgroundColor = "orange"
  recieveIdleButton.style.backgroundColor = "orange";

}, 600);
setTimeout(function () {
  idleValueElement.style.backgroundColor = "transparent"
  idleUpgradeElement.style.backgroundColor = "transparent"
  idleBufforElement.style.backgroundColor = "transparent"
  recieveIdleButton.style.backgroundColor = "lime";

}, 800);

isUpgraded = true;
  }
}
function d() {

  credits = credits + idleCreditsBuffor
  idleCreditsBuffor = 0;
  var balanceString = "Total clicks: " + credits;
  var clicksPerClickString = "Clicks per click: " + creditsPerClick;
  var autoClickerLevelString = "Autoclicker level: " + idleUpgradeStep;
  var clicksUpgradeCostString = "Click levelup cost: " + upgradeCosts[upgradeStep];
  var autoClickerUpgradeCostString = "Autoclicker levelup cost: " + idleUpgradeCosts[idleUpgradeStep];
  var autoClickerVaultString = "Clicks vault: " + idleCreditsBuffor;
  balanceElement.textContent = balanceString
  valueConverter()
  refreshUpgradeButtons()


  if (idleUpgradeStep > 0) {
    idleBufforElement.textContent = autoClickerVaultString
  }
  if(idleUpgradeStep < 1 ){
    idleBufforElement.style.transition = "0.6s"
    idleBufforElement.style.backgroundColor = "#ff0000"
    setTimeout(function () {
      idleBufforElement.style.backgroundColor = "transparent"
      idleBufforElement.style.transition = ".6s"
      idleBufforElement.textContent = autoClickerVaultString
    }, interval);
  }
}
