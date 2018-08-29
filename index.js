//Bringing in the constructor word.js
var word = require('./word.js');

// The list of words for the computer guess
var list  = ["cherry" , "banana" , "limon"];

//============================= Selecting Random Word =====================
// create a tracker object to not select a world which is already selected
var trackObj = {};
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




