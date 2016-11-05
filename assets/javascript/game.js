//html element ids: 
//id="startButton">
//id="arnoldPic">
//id="guessesLeft">
//id="phrase">
//id="guessedLetters">


var game = {
    score: 0,
    chances: 6,
    //,
    wrongGuess: [],
    blankWord: [],
    wordList: ["conan the barbarian", "kindergarten cop", "predator", "commando", "total recall", "the terminator"],
    
    randomWord: function() {

  	 return this.wordList[Math.floor(Math.random()*this.wordList.length)];
 	
    },

    // seperateWord: function () {

    // 	return this.randomWord().split();
    // },

    underscoreWord: function() {

    for (i = 0; i < selectedWord.length; i++){

    	if (selectedWord.split("").indexOf[i] === " ") {

    		this.blankWord.push(" ");

    	} else {

    		this.blankWord.push("_");
    	}

    }
}

};

var selectedWord = game.randomWord().split("");

var underscore = function() {

    for (i = 0; i < selectedWord.length; i++){

    	if (selectedWord.indexOf[i] === " ") {

    		game.blankWord.push(" ");

    	} else {

    		game.blankWord.push("_");
    	}

    }
};
    


  //game start
//document.getElementById("startButton").addEventListener("click", function() {

	document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

 
  //select random word
console.log(selectedWord);
underscore();
console.log(game.blankWord);
var joinWord = game.blankWord.join("");


//gives inconsistent blanks
	
	
  //show blank letters, **leave spaces alone
  	document.getElementById("phrase").innerHTML = joinWord;
  //user input; if rightGuess - replace underscore with letter
  for (i = 0; i < selectedWord.length; i++){

  	if (userGuess === selectedWord.indexOf(i)) {

  		game.blankWord.splice(selectedWord.indexOf(i), 1, userGuess);

//else no match - decrement chances and add letters to wrongGuess
  		} else {

  			game.chances--;
  			game.wrongGuess.push(userGuess);

  		}
  	}
  
  

  
  //game ends if chances = 0, show answer, loser sound
  //or if rightGuess == selectedWord congratulation sound

  };