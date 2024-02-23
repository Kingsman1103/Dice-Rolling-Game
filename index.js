
var randomnumber1 =  Math.random();
var randomDiceImage = Math.ceil(randomnumber1*6);
var imageSource = "images/dice" + randomDiceImage + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , imageSource); //for img1

var randomnumber2 = Math.random();
var randomDiceImage2 = Math.ceil(randomnumber2*6);
var imageSource2 = "images/dice" + randomDiceImage2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , imageSource2); //for img2

if(randomDiceImage > randomDiceImage2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}
else if(randomDiceImage < randomDiceImage2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}
else {
    document.querySelector("h1").innerHTML = "Game Draw";
}
