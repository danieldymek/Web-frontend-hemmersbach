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

var credits = 0;
function a(){
credits++
console.log(credits)
}

function b(){
    if(credits >= 20){
        var minus =  Math.floor(Math.random() * (credits * 1/2))
        credits = credits - minus
        console.log("roll kupiony credits: " + credits)
        var rand = Math.floor(Math.random() * (credits))
        credits = credits + rand
        console.log(rand)


    }else{
        console.log("nie masz wystarczająco credits na upgrade")
    }
    
    }
