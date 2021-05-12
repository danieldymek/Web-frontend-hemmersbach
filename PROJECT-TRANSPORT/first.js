var hadBeenRun = false;
function check() {
  setInterval(function () {
    var startButton = document.getElementById('btn')
    var dist = document.getElementById('dist').value;
    var kmph = document.getElementById('kmph').value;
    var loadWeight = document.getElementById('load').value;
    var notif = document.getElementsByClassName('warning')[0]
    if(dist == "" || dist < 0 || kmph == "" || kmph < 0 || loadWeight == "" || loadWeight < 0){
    notif.innerHTML = "Wprowadź dane"
    notif.style.color = "ORANGE"
    notif.style.visibility = "visible"
  }else if(!(dist == "" || dist < 0 || kmph == "" || kmph < 0 || loadWeight == "" || loadWeight < 0)){
        notif.style.visibility = "hidden"
    }
  }, 200);
}

function driver() {
  var dist = document.getElementById('dist').value;
  var kmph = document.getElementById('kmph').value;
  var loadWeight = document.getElementById('load').value; //kilograms
  var distToEl = document.createElement("p")
  distToEl.innerHTML = "dystans do celu(A->B): " + dist + " km"
  var kmphToEl = document.createElement("p")
  kmphToEl.innerHTML = "srednia predkosc pojazdu: " + kmph + " km/h"
  var loadWeightToEl = document.createElement("p")
  loadWeightToEl.innerHTML = "zaladowanie pojazdu w kilogramach: " + loadWeight + " kg"
  var loading = Math.round(loadWeight * 0.0048);
  var unloading = Math.round(loadWeight * 0.0036);
  var distTime = (dist/kmph * 60);
  var breakTime = 45;
  var sleepTime = 660;
  var maxDriveTimeInOneRun = 270
  var maxDriveDaily = 540;
  var breakCount = Math.round(distTime / maxDriveTimeInOneRun);
  var breakTimePenalty = breakTime * breakCount;
  var toAppend = document.body.getElementsByClassName("append")[0]
  var br = document.createElement("br")
  var dataEl = document.createElement("p")
  dataEl.innerHTML = "DANE: "
  var startButton = document.getElementById('btn')
  startButton.innerHTML = "ZATRZYMAJ"
  startButton.style.backgroundColor = "RED"
  startButton.style.disabled = "true"
  if (dist == "" || dist < 0 || kmph == "" || kmph < 0 || loadWeight == "" || loadWeight < 0 ) {
    if(dist < 0 || kmph < 0 || loadWeight < 0 ){
      startButton.innerHTML = "WARTOŚCI PONIŻEJ ZERA"
    }else{
      startButton.innerHTML = "BRAK ARGUMENTÓW"
    }
    setTimeout(function () {
      window.location.reload(true)
    }, 1000);

  }else{

  if(hadBeenRun == true ){
    window.location.reload(true)
  }else{

      var AtoBdriveWithBreakPen = distTime + breakTimePenalty;
      AtoBTotal = AtoBdriveWithBreakPen + loading + unloading;
      var BtoAdriveWithBreakPen = distTime + breakTimePenalty;
      BtoATotal = BtoAdriveWithBreakPen
      var shouldSleepCountAB = (AtoBTotal / maxDriveDaily)
      console.log(shouldSleepCountAB);

      if(shouldSleepCountAB >= 0.9){
        shouldSleepCountAB = Math.round((AtoBTotal / maxDriveDaily))
      }else{
        shouldSleepCountAB = 0
      }

      var shouldSleepCountBA = (BtoATotal / maxDriveDaily)
      console.log(shouldSleepCountBA)

      if(shouldSleepCountBA >= 0.9){
        shouldSleepCountBA = Math.round((BtoATotal / maxDriveDaily))
      }else{
        shouldSleepCountBA = 0
      }

      var sleepAB = sleepTime * shouldSleepCountAB
      var sleepBA = sleepTime * shouldSleepCountBA
      if (AtoBTotal >= maxDriveDaily) {

        var AB = (AtoBTotal = AtoBTotal +  sleepAB)
          AtoBTotal = AB
      }
      if (BtoATotal >= maxDriveDaily) {
        var BA = (BtoATotal = BtoATotal +  sleepBA)
          BtoATotal = BA
      }
      let sleepCombined = sleepBA + sleepAB
      var total = BtoATotal + AtoBTotal + sleepCombined

      setTimeout(function () {
        toAppend.appendChild(dataEl)
        toAppend.appendChild(distToEl)
      }, 200);
      setTimeout(function () {
        toAppend.appendChild(kmphToEl)
      }, 400);
      setTimeout(function () {
        toAppend.appendChild(loadWeightToEl)
      }, 600);




      function timeAtoB(){
        var hrs = Math.floor(AtoBTotal / 60) + "h "
        var mins = Math.floor(AtoBTotal % 60) + "m"
        var penaltyHrs = Math.floor(breakTimePenalty / 60) + "h"
        var penaltyMins = Math.floor(breakTimePenalty % 60) + "m"
        // console.log("\x1b[35m" + penaltyHrs + penaltyMins + "\x1b[36m -> czas przerwy kierowcy przez podroz od A -> B")
        var el = document.createElement("p");
        el.textContent = "czas pracy(+przerwa/y) kierowcy od punktu A do punktu B: " + hrs + mins
        setTimeout(function () {
          toAppend.appendChild(el);
        }, 1000);
        console.log("\x1b[35m" + hrs + mins + "\x1b[36m -> pelny czas jazdy kierowcy od punktu A do punktu B")
      }
      timeAtoB()
      function timeBtoA(){
        var hrs = Math.floor(BtoATotal / 60) + "h "
        var mins = Math.floor(BtoATotal % 60) + "m"
        var penaltyHrs = Math.floor(breakTimePenalty / 60) + "h"
        var penaltyMins = Math.floor(breakTimePenalty % 60) + "m"
        var el = document.createElement("p");
        el.textContent = " czas pracy(+przerwa/y) kierowcy od punktu B do punktu A: " + hrs + mins
        setTimeout(function () {
          toAppend.appendChild(el);
        }, 2000);
        // console.log("\x1b[35m" + penaltyHrs + penaltyMins + "\x1b[36m -> czas przerwy kierowcy przez podroz od B -> A")
        console.log("\x1b[35m" + hrs + mins + "\x1b[36m -> pelny czas jazdy kierowcy od punktu B do punktu A")
      }
      timeBtoA()
      function totalTime(){
        var hrs = Math.floor(total / 60) + "h "
        var mins = Math.floor(total % 60) + "m"
        console.log("\x1b[35m" + hrs + mins + "\x1b[36m -> Laczny czas podrozy")
        var el = document.createElement("p");
        el.textContent =  " pelny czas pracy kierowcy: "  + hrs + mins
        setTimeout(function () {
          toAppend.appendChild(el);
          startButton.innerHTML = "WYCZYŚĆ"
          startButton.style.backgroundColor = "ORANGE"
        }, 3000);
      }
      totalTime()
      function driverSleepTime(){
        var hrs = Math.floor(sleepCombined / 60) + "h "
        var mins = Math.floor(sleepCombined % 60) + "m"

        console.log("\x1b[35m" + hrs + mins + "\x1b[36m -> Laczny czas spania/odpoczywania od jazdy")
      }
      driverSleepTime()
    }
  }

hadBeenRun = true;

    };
    // test
