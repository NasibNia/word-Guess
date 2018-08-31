var letterConst  = require ('./letter.js');

function Word (value) {
    this.value = value;
    // this array will be populated by the letter objects
    this.wordLetters = []; 
    this.allGussed = false;
    //this array will be updated as true/false by the state of each letter being or not guessed
    this.correct = [];
    // populating the word with the letter objects
    for(var i = 0; i < this.value.length ; i ++){
        var letter = new letterConst(this.value[i]);
        this.wordLetters.push(letter);      
    }
    
    // the method to display the letters on the screen depending on their state of being or not guessed
    this.toString = function(){       
        var str = "";
        for(var i = 0; i < this.value.length ; i ++){
            str = str + this.wordLetters[i].show(); 
        }
        return str;
    };
    //the method that goes through each letter object and checks whether it is the same as user guess "char"
    this.check = function(char){
        var correct = [];
        var correctGuess = 0;
        for (var i = 0 ; i < this.value.length ; i++){
            var thisLetter = this.wordLetters[i];
            // check to see if the letter is gussed yet
            thisLetter.ifGuess(char); 
            if(thisLetter.guessedYet){
                correct.push(true);
                correctGuess++;
            } else{
                correct.push(false);
            }
        }
        for (var i = 0 ; i < this.value.length ; i++){
            var tmp = this.wordLetters[i];
        }
        if(correctGuess === this.value.length){
            console.log("word complete");
            this.allGussed = true;
        }
        this.correct = correct;
    };
};

// exporting the constructor Word to be used in any other script the imports this js file.
module.exports = Word;