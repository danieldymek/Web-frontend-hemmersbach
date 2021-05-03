var dist = 2250;
var kmph = 50;
var loadWeight = 10020; //kilograms
var loading = Math.round(loadWeight * 0.0048);
var unloading = Math.round(loadWeight * 0.0036);
var distTime = (dist/kmph * 60);
var breakTime = 45;
var sleepTime = 540;
var maxDriveTimeInOneRun = 270
var breakCount = Math.floor(distTime / maxDriveTimeInOneRun);
var breakTimePenalty = breakTime * breakCount;
function driver() {
      var AtoBdriveWithBreakPen = distTime + breakTimePenalty;
      AtoBTotal = AtoBdriveWithBreakPen + loading + unloading;
      var BtoAdriveWithBreakPen = distTime + breakTimePenalty;
      BtoATotal = BtoAdriveWithBreakPen
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

    };

driver();
