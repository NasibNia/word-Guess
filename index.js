//Bringing in the constructor word.js
var word = require('./word.js');
// Bringing in the inquirer
var inquirer = require ('inquirer');
//Bringing in the chalk and cFonts to change the color in terminal
var chalk = require('chalk'); 
var CFonts = require('cfonts');

// The list of words for the computer guess
var list  = ["apple", "apricot", "avocado", "banana", "bilberry", "black sapote", "blackberry", "blackcurrant", "blueberry", "boysenberry", "cantaloupe", "cherry", "clementine", "cloudberry", "coconut", "crab apples", "cranberry", "cucumber", "currant", "damson", "date", "dragonfruit", "durian", "elderberry", "fig", "gooseberry", "grape", "grapefruit", "guava", "honeyberry", "honeydew", "huckleberry", "jackfruit", "jostaberry", "kiwi", "lemon", "lime", "mandarine", "mango", "mangosteen", "marionberry", "melon", "mulberry", "nectarine", "olive", "orange", "papaya", "passionfruit", "peach", "pear", "persimmon", "pineapple", "pineberry", "plum", "pomegranate", "prune", "raisin", "raspberry", "starfruit", "strawberry", "tangerine", "watermelon"];
//This variable checks if all the words in the list are already guessed
var outOfWords;
// create a tracker object to not select a world which is already selected
var trackObj = {};
var userGuess;
var wordComplete;
var wordCount = 0;
var MaxGuess = 12;
var guessLeft;
var previousState = [];

//display the game header 
cFontDisplay('FRUITY | HANGMAN','block');
cFontDisplay("======================", 'chrome');
cFontDisplay("Let's get to some|fruits!",'chrome');
cFontDisplay("======================", 'chrome');

//======================================================
if (outOfWords) {
    console.log("Wow, you covered all of our fruits! Let's reset the list!");
    trackObj = {};
}
var newWord = initialize();
playGame(newWord);
//======================================================

//randomly select a word
function randomWord (){
    // create a random number between 0 to the length of the list of words
    var indx = Math.floor(Math.random()*list.length);
    //select the random word from list
    var randWord = list[indx];
    //check to see if random word is already selected or not
    if (randWord in trackObj){
  
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

// function to initialize the parameters for the game
function initialize () {
    outOfWords = false;
    wordComplete = false;
    // setting up the left gesses number to the the max value defined at the begining of the code
    guessLeft = MaxGuess;
    wordCount++;
    console.log(chalk.magenta.bold.bgCyan("Word Number "+ wordCount));
    // create a random word
    var tmp = randomWord();
    // save it into an object of constructor Word
    var newWord = new word(tmp);
    newWord.toString();
    console.log (newWord.toString());

    for (var i  = 0 ; i< tmp.length ; i++){
        previousState.push(false);
    }
    return newWord;
}

//function to actually play the game with the object newWord being passed to it!
function playGame (newWord){

    // if there is still guesses left:
    if(guessLeft>0) {
        console.log("guesses left " + guessLeft);
        
        // ask for user guess
        inquirer.prompt([
            {
                type: "input",
                message: "guess a letter?",
                name: "guess"
            }
        ]).then (function(response){           
            //decrement the guess left
            guessLeft--;
            // asign the user input to the variable userGuess
            userGuess = response.guess;           
            //run the check function on new word object to see if any of its letters matches the user guess.
            newWord.check(userGuess);
            // show the either the value of letters or the _ on the screen , depending on whether user has made a correct guess
            newWord.toString();
            console.log (newWord.toString()); 

            // check to see if the guessed status of each letter object in the word has changed from its previous status ( for instance if the state [true,false,false] for a 3-letter word has changed to [true,false, true] that means the guess was correct and matched one of the letters. )
            if (areSameArr(previousState , newWord.correct)){
                console.log (chalk.red("Incorrect!!!!!"));
            } else {
                previousState = newWord.correct;
                console.log (chalk.green("Correct"));               
            }
            // user gets to continue guessing if still there are letters remained unrevealed
            if (!newWord.allGussed){
                playGame(newWord);
            }
            else{
                // console log the results and get back to the begining
                console.log(chalk.bgCyan.bold("You got it right! Next word!"));
                console.log("\n-------------------------\n");

                // initialize the parameters, pick a random fruit and play the game
                newWord = initialize();
                playGame(newWord);
            }
        });
    } // if no guess left 
    else {
        // console log the information and repeat the game
        console.log (chalk.red.bold.bgYellow("you have no guess left"));
        console.log (chalk.red.bold("it was   ") + chalk.blue.bold(newWord.value));
        console.log(chalk.green.bold("That's Ok, We have lots of other fruits for you to guess"));
        console.log("\n-------------------------\n");

        // initialize the parameters, pick a random fruit and play the game
        newWord = initialize();
        playGame(newWord);
    }
}

// function that compares two array against each other
function areSameArr (a,b){
    for(var i = 0 ; i < a.length ; i++){
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
        background: 'transparent',  // define the background color, you can also use        `backgroundColor` here as key
        letterSpacing: 0,           // define letter spacing
        lineHeight: 0,              // define the line height
        space: false,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
    });
}







