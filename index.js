//Bringing in the constructor word.js
var word = require('./word.js');
// Bringing in the inquirer
var inquirer = require ('inquirer');
//Bringing in the chalk to change the color in terminal
var chalk = require('chalk'); 

var CFonts = require('cfonts');

//display the game header 
cFontDisplay('FRUITY | HANGMAN','block');
cFontDisplay("======================", 'chrome');
cFontDisplay("Let's get to some|fruits!",'chrome');
cFontDisplay("======================", 'chrome');



// The list of words for the computer guess
var list  = ["chry" , "ban" , "lim"];
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
//   console.log("random word is " + randWord);

//   console.log("track object " , trackObj);
  
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
        trackObj[randomWord] = true;
        randomWord();
      }     
  } // if the random word has not already selected, add it to the trackObj for the future reference and return it.
  else {
    // console.log("adding it to the tracker");
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
// Convert the gif file into text frames

var guessCount = 0;
var tmp = randomWord();
var newWord = new word(tmp);
//call makeLetters function on newWord to create an array of Letter objects
newWord.makeLetters();
newWord.toString();
console.log (newWord.toString());

// console.log ("newWord   " , newWord);
// if (outOfWords) {
//     console.log("play again?");
//     //put an inquirer to ask


//     //if yes 
//     initialize();

//     playGame();
// } else {
//     initialize();
//     playGame();
// }
initialize();
playGame(); 
var previousState = [];
for (var i  = 0 ; i< tmp.length ; i++){
    previousState.push(false);
}



function playGame (){
     
    inquirer.prompt([
        {
            type: "input",
            message: "guess a letter?",
            name: "guess"
        }
    ]).then (function(response){
        // newWord.correct = [];
        userGuess = response.guess;
        
        //run the check function on new word object to see if any of its letters matches the user guess.
        newWord.check(userGuess);
        newWord.toString();
        console.log (newWord.toString()); 


        // // console.log("correct array  " , newWord.correct);
        // console.log( " previousState  was " + previousState );
        // console.log( " currentState  was " + newWord.correct );
        // console.log(previousState === newWord.correct);


        if (areSameArr(previousState , newWord.correct)){
            console.log (chalk.red("Incorrect!!!!!"));
        } else {
            previousState = newWord.correct;
            console.log (chalk.green("Correct"));
            
        }
        
        // if (newWord.correctArr.indexOf(true) !== -1){
        //     console.log ("Correct");
        // } else {
        //     console.log ("Incorrect");
        // }
        // console.log( "flag   " + newWord.flag);
        // if (newWord.flag === 1) {
        //     console.log ("Correct");
        // } else {
        //     console.log ("Incorrect");

        // }
        
        // console.log ("newWord.allGussed   ~~~~~" , newWord.allGussed);
        // playGame();

        if (!newWord.allGussed){
            // console.log("newWord.allGuessed  " + newWord.allGussed);   
            playGame();
        }
        else{
            console.log(chalk.bgCyan.bold("You got it right! Next word!"));
            console.log("\n-------------------------\n");
            tmp = randomWord();
            newWord = new word(tmp);
            //call makeLetters function on newWord to create an array of Letter objects
            newWord.makeLetters();
            newWord.toString();
            console.log (newWord.toString());
            
            initialize();
            playGame();

        }
    });

}

function areSameArr (a,b){
    for(var i= 0 ; i < a.length ; i++){
        if (a[i] !== b[i]){
            return false;
        }
    }
    return true;
}

// function to show str in fun formats provided by CFont.
function cFontDisplay (str , format){
    CFonts.say(str, {
        font: format,              // define the font face
        align: 'center',              // define text alignment
        colors: ['magenta','blue','cyan'],         // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 0,           // define letter spacing
        lineHeight: 0,              // define the line height
        space: false,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
    });
}







