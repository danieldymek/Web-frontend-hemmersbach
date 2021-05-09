var values = {
  dist: document.getElementById("dist"),
  kmph: document.getElementById('kmph'),
  load: document.getElementById('pkgWeight')
}
var dist = document.getElementById("dist").innerHTML;
var kmph = values.kmph.value;
var loadWeight = values.load.value; //kilograms

var loading = Math.round(loadWeight * 0.0048);
var unloading = Math.round(loadWeight * 0.0036);
var distTime = (dist/kmph * 60);
var breakTime = 45;
var sleepTime = 660;
var maxDriveTimeInOneRun = 270
var maxDriveDaily = 540;
var breakCount = Math.round(distTime / maxDriveTimeInOneRun);
var breakTimePenalty = breakTime * breakCount;
function driver() {

  if(dist == 0 || kmph == 0 || loadWeight == 0){
  alert("wprowadz poprawne dane")
  console.log(dist);
  console.log(kmph);
  console.log(loadWeight);
  }else{

      var AtoBdriveWithBreakPen = distTime + breakTimePenalty;
      AtoBTotal = AtoBdriveWithBreakPen + loading + unloading;
      var BtoAdriveWithBreakPen = distTime + breakTimePenalty;
      BtoATotal = BtoAdriveWithBreakPen
      var shouldSleepCountAB = Math.floor(AtoBTotal / maxDriveDaily)
      var shouldSleepCountBA = Math.floor(BtoATotal / maxDriveDaily)
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
      var total = BtoATotal + AtoBTotal

      function timeAtoB(){
        var hrs = Math.floor(AtoBTotal / 60) + "h "
        var mins = Math.floor(AtoBTotal % 60) + "m"
        var penaltyHrs = Math.floor(breakTimePenalty / 60) + "h"
        var penaltyMins = Math.floor(breakTimePenalty % 60) + "m"
        console.log("\x1b[35m" + penaltyHrs + penaltyMins + "\x1b[36m -> czas przerwy kierowcy przez podroz od A -> B")
        console.log("\x1b[35m" + hrs + mins + "\x1b[36m -> pelny czas jazdy kierowcy od punktu A do punktu B")
      }
      timeAtoB()
      function timeBtoA(){
        var hrs = Math.floor(BtoATotal / 60) + "h "
        var mins = Math.floor(BtoATotal % 60) + "m"
        var penaltyHrs = Math.floor(breakTimePenalty / 60) + "h"
        var penaltyMins = Math.floor(breakTimePenalty % 60) + "m"
        console.log("\x1b[35m" + penaltyHrs + penaltyMins + "\x1b[36m -> czas przerwy kierowcy przez podroz od B -> A")
        console.log("\x1b[35m" + hrs + mins + "\x1b[36m -> pelny czas jazdy kierowcy od punktu B do punktu A")
      }
      timeBtoA()
      function totalTime(){
        var hrs = Math.floor(total / 60) + "h "
        var mins = Math.floor(total % 60) + "m"
        console.log("\x1b[35m" + hrs + mins + "\x1b[36m -> Laczny czas podrozy")
      }
      totalTime()
      function driverSleepTime(){
        var hrs = Math.floor(sleepCombined / 60) + "h "
        var mins = Math.floor(sleepCombined % 60) + "m"
        console.log("\x1b[35m" + hrs + mins + "\x1b[36m -> Laczny czas spania/odpoczywania od jazdy")
      }
      driverSleepTime()
    }

    };
