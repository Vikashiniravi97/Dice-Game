//image1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Gives a Random number between 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //it will be a string from dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);

//image2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";//combined code of line 5 & 7

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);//combined code of line 9 & 11

//If Player1 wins

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
//If Player2 wins

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
