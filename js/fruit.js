//alert ("Welcome to the Fruit Machine")

document.getElementById ("b").addEventListener ("click",spin)

function spin (){
    let bet = prompt ("please bet an amount")
    let r1 = spinReel ("f1")
    let r2 = spinReel ("f2") 
    let r3 = spinReel ("f3")
    if (r1 == r2 && r2 == r3){
        alert (`You win ${bet*5}`)
    } 
    else if ( r1 == r2 || r2 == r3 || r1 == r3 ){
        alert (`You win ${bet*2}`)
    }
}

function spinReel (reel){
    let i = Math.floor(Math.random()*5)
    if (i == 0){
        document.getElementById(reel).src = "images/apple.jpg"
    }
    if (i == 1){
        document.getElementById(reel).src = "images/blackberry.jpeg"
    }
    if (i == 2){
        document.getElementById(reel).src = "images/cherry.jpg"
    }
    if (i == 3){
        document.getElementById(reel).src = "images/pineapple.jpg"
    }
    if (i == 4){
        document.getElementById(reel).src = "images/pomegranate.jpg"
    }return i
}

