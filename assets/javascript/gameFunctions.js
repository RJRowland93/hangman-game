//html element ids: 
//id="startButton">
//id="arnoldPic">
//id="guessesLeft">
//id="phrase">
//id="guessedLetters">
  var gameRun = true;
  var played = 0;
  var score = 0;
  var chances = 6;
  var wrongGuess = [];
  var blankWord = [];
  var wordList = ["conan the barbarian", "kindergarten cop", "predator", "commando", "total recall", "the terminator"]; 
  var chosenWord = wordList[Math.floor(Math.random()*wordList.length)];
  var loseSound = new Audio("../hangman-game/assets/sounds/be_back.wav");
  var wrongSound = new Audio("../hangman-game/assets/sounds/dont_do_dat.wav");
  var winSound = new Audio("../hangman-game/assets/sounds/hasta_la_vista.wav");
  var splitWord = chosenWord.split("");

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("startButton").addEventListener("click", function() {

      for (i = 0; i < splitWord.length; i++){

      if (splitWord[i] === " ") {

        blankWord.push(" ");

      } else {

        blankWord.push("_");
      }

    };

    console.log(splitWord);
    console.log(blankWord);

    //Show blank spaces in DOM

    document.getElementById("phrase").innerHTML = blankWord.join("");

    document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);

    //if wrong guess

      if (splitWord.indexOf(userGuess) == -1) {

      wrongGuess.push(userGuess);
      chances--;
      wrongSound.play();
      
      };

      document.getElementById("guessedLetters").innerHTML = wrongGuess;
      document.getElementById("guessesLeft").innerHTML = chances;

    //if right guess
    //check array for each right guess at each spot

    for (i = 0; i < splitWord.length; i++) {

      if (splitWord[i] === userGuess) {

      blankWord[i] = userGuess;
      document.getElementById("phrase").innerHTML = blankWord.join("");

      } 
    };

      if (chances == 0) {

        played++;
        document.getElementById("arnoldPic").innerHTML = "<img src=\"assets/images/angryArnold.jpeg\" alt=\"Arnold Schwarzenegger\"><h1>ARRGH!</h1>"
        gameRun = false;
        loseSound.play();
      
      };

      if (blankWord.toString() == splitWord.toString()) { //game win if blank word matches chosen word

        score++;
        played++;
        document.getElementById("arnoldPic").innerHTML = "<img src=\"assets/images/happyArnold.jpg\" alt=\"Arnold Schwarzenegger\"><h1>Come with me!</h1>"
        gameRun = false;
        winSound.play();
        
      };   
  };
    console.log(blankWord);
    console.log(wrongGuess);
    console.log (chances);
    console.log(score);
  });
    
});

















  
    




    