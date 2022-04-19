  var randomNumber1 = Math.floor(Math.random()*6)+1;

  var randomDiceScource = "images/dice" + randomNumber1 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomDiceScource);

  var randomNumber2 = Math.floor(Math.random()*6)+1;

  var randomDiceScource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomDiceScource2);


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player Two Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player One Wins!🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
