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

   // NOTE: adds all randFunc() values together and multiplies this value by 5
   function randFunc(maxRandomized){
     for (var i = 0; i < 1; i++) {
       let rand = Math.floor(Math.random() * maxRandomized + 1);
       return rand
     }
   }
   let bindMethod1 = {
     sth: function () {
      let arraySum = this.values6.reduce((a, b) => a + b, 0)
      let result = arraySum * 5
      console.log(result);
     }
   }
   let bindMethod2 = {
     sth: function () {
       console.log(this);
     }
   }

    // NOTE: adds N  random values (0-100) to the values arr and then multiplies them by multiplierValue(not their count)
    let bindMethod21 = {
      sth: function (N, multiplierValue) {
        for (var i = 0; i < n; i++) {
          this.randomizedPool.push(randFunc(100))
        }
      }
    }
let object2 = {
  values6: [randFunc(100),randFunc(100),randFunc(100),randFunc(100),randFunc(100)],
  randomizedPool: []

}
bindMethod1.sth.call(object2);
bindMethod2.sth.bind(object2);























//napisanie po 2 przyklady z call, apply i z bind
//1H
