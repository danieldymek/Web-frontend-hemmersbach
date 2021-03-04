function aleshen(){
    var arrList = [];
    var arrListCalculated = [];
    for (var i = 0; i < 6570; i++) {
        arrList.push(i * 10);
        
        
    }
    var sum = arrList.reduce(function(a, b){
        return a + b;
    }, 0);
    
    console.log(sum);
}
aleshen()