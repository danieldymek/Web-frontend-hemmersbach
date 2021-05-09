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
// NOTE: 2 bind methods, one simple, the second little more advanced
// NOTE: bind - i do not really understand that

// NOTE: 2 apply methods, one simple, the second little more advanced
// NOTE: apply - i do not really understand that
























//napisanie po 2 przyklady z call, apply i z bind
//1H
