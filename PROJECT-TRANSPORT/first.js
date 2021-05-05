var dist = 870;
var kmph = 50;
var loadWeight = 10020; //kilograms
var loading = Math.round(loadWeight * 0.0048);
var unloading = Math.round(loadWeight * 0.0036);
var distTime = (dist/kmph * 60);
var breakTime = 45;
var sleepTime = 540;
var maxDriveTimeInOneRun = 270
var maxDriveDaily = 540;
var breakCount = Math.floor(distTime / maxDriveTimeInOneRun);
var breakTimePenalty = breakTime * breakCount;
function driver() {
      var AtoBdriveWithBreakPen = distTime + breakTimePenalty;
      AtoBTotal = AtoBdriveWithBreakPen + loading + unloading;
      var BtoAdriveWithBreakPen = distTime + breakTimePenalty;
      BtoATotal = BtoAdriveWithBreakPen
      var shouldSleepCount = Math.floor(AtoBTotal / maxDriveDaily)
      var sleep = sleepTime * shouldSleepCount

      if (AtoBTotal >= maxDriveDaily) {

        var AB = (AtoBTotal = AtoBTotal +  sleep)
          AtoBTotal = AB
      }
      if (BtoATotal >= maxDriveDaily) {
        console.log(sleep)
        var BA = (BtoATotal = BtoATotal +  sleep)
        console.log()
          BtoATotal = BA
      }
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
        var sleep = sleepTime * shouldSleepCount
        var hrs = Math.floor(sleep / 60) + "h "
        var mins = Math.floor(sleep % 60) + "m"
        console.log("\x1b[35m" + hrs + mins + "\x1b[36m -> Laczny czas spania")
      }
      driverSleepTime()

    };

driver();
