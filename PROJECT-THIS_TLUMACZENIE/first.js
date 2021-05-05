let wzor = {
  sth: function(){
    return console.log(this.imie +  " " + this.nazwisko)
  }
}

let object1 = {
  imie: "test1",
  nazwisko: "test1"
}
let object2 = {
  imie: "test2",
  nazwisko: "test2"
}
let object3 = {
  imie: "test3",
  nazwisko: "test3"
}
wzor.sth.call(object1)
//napisanie po 2 przyklady z call, apply i z bind
//1 prosty, 2 zlozony
