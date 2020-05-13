//randamizing the first dice image
var randomNo1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randomNo1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//second randozing
var randomNo2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNo2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//changing the titles
if (randomNo1 > randomNo2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins🎆";
} else if (randomNo2 > randomNo1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins🎉";
} else {
  document.querySelector("h1").innerHTML = "What a Draw!🎃";
}
