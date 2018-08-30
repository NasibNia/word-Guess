//Bringing in the constructor word.js
var word = require('./word.js');
// Bringing in the inquirer
var inquirer = require ('inquirer');

// The list of words for the computer guess
var list  = ["caherry" , "bananay" , "limoany"];
//This variable checks if all the words in the list are already guessed
var outOfWords;
// create a tracker object to not select a world which is already selected
var trackObj = {};
var userGuess;
var wordComplete;

function initialize () {
    outOfWords = false;
    trackObj = {}; 
    wordComplete = false;
}

//============================= Selecting Random Word =====================

//randomly select a word
function randomWord (){
  // create a random number between 0 to the length of the list of words
  var indx = Math.floor(Math.random()*list.length);
  //select the random word from list
  var randWord = list[indx];
  console.log("random word is " + randWord);
  
  //check to see if random word is already selected or not
  if (randWord in trackObj){
      console.log("already selected");

      // if it is, check to see that we have covered the whole list yet or not.
      if(Object.keys(trackObj).length === list.length){
           console.log("we covered the whole list");
           outOfWords = true;
           return;
      } else {
          // if the word was already picked from the list, run the function again
        randomWord();
      }     
  } // if the random word has not already selected, add it to the trackObj for the future reference and return it.
  else {
      console.log("adding it to the tracker");
     trackObj[randWord] = true;
     return randWord;
  }  
}
// function  tst_randomWord(){
//     randomWord();
//     console.log("test " + tst_randomWord+ "\n");
//     console.log("trackObj " , trackObj );
// };
// tst_randomWord();
//============================= Selecting Random Word =====================

if (outOfWords) {
    console.log("play again?");
    //put an inquirer to ask


    //if yes 
    initialize();
    playGame();
} else {
    playGame();
}
 
var guessCount = 0;

function playGame (){
    var tmp = randomWord();
    var newWord = new word(tmp);
    //call makeLetters function on newWord to create an array of Letter objects
    newWord.makeLetters();

    inquirer.prompt([
        {
            type: "input",
            message: "guess a letter?",
            name: "guess"
        }
    ]).then (function(response){
        guessCount++;
        userGuess = response.guess;
        if (!newWord.allGussed){
            //run the check function on new word object to see if any of its letters matches the user guess.
            newWord.check(userGuess);
            newWord.toString();
            console.log (newWord.toString()); 
            
            playGame();
        }
        else{
            console.log("You got it right");
        }
    });

        

    





}










