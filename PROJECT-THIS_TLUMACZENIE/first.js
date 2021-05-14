let callMethod1 = {
  sth: function(){
// NOTE: prints this.imie and this.nazwisko
    return console.log("imie: " +this.imie+ " " +  "nazwisko:  " + this.nazwisko)
  }
}
let callMethod2 = {
  sth: function (){
    // NOTE: creates new object within .this object
      var obj = "obj" + 21
      this.obj = obj
      console.log("object:  " + obj + " got added to " + this.objectName + " variable");

  }
}
let object1 = {
  objectName: "object1",
  imie: "NObject1",
  nazwisko: "SObject1"
}
// NOTE: 2 call methods, one simple, the second little more advanced
console.log("\x1b[35m" + "simple call");
callMethod1.sth.call(object1)
console.log("\x1b[35m" + "advanced call");
callMethod2.sth.call(object1)
console.log(object1);
// NOTE: 2 bind methods, one simple, the second little more advanced
// NOTE: bind - i do not really understand that
// NOTE: ?????????????????????????????????
let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};
// NOTE: ?????????????????????????????????
let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};
// NOTE: ?????????????????????????????????
let run = flyer.fly.bind(runner, 20);
run();
// NOTE: ?????????????????????????????????
// NOTE: 2 apply methods, one simple, the second little more advanced
// NOTE: pushing chararr into numbarr
var numbarr = [0,1,2,3,4,5,6]
var chararr = ["g","b","w","g","d","a"]
numbarr.push.apply(numbarr, chararr)
console.log(numbarr);
// NOTE: BIND APPLY























//napisanie po 2 przyklady z call, apply i z bind
//1H
