var letterConst  = require ('./letter.js');

function Word (value) {
    this.value = value;
    this.wordLetters = []; 
    this.allGussed = false;
    this.makeLetters = function (){
        this.wordLetters = [];
        for(var i = 0; i < this.value.length ; i ++){
            var letter = new letterConst(this.value[i]);
            this.wordLetters.push(letter);      
        }
    };
    this.toString = function(){       
        var str = "";
        for(var i = 0; i < this.value.length ; i ++){
            str = str + this.wordLetters[i].show(); 
        }
        return str;
    };
    this.check = function(char){
        var correctGuess = 0;
        for (var i = 0 ; i < this.value.length ; i++){
            var thisLetter = this.wordLetters[i];
            // console.log("this Letter is "  , thisLetter.value);
            thisLetter.ifGuess(char); 

            // console.log("this Letter is "  + thisLetter.guessedYet);         
            if(thisLetter.guessedYet){
                // console.log("hey");
                correctGuess++;
                // console.log("correctGuess  "+ correctGuess);
            }
        }
        for (var i = 0 ; i < this.value.length ; i++){
            var tmp = this.wordLetters[i];
            // console.log("this Letter is "  + tmp.guessedYet);  
        }
        if(correctGuess === this.value.length){
            console.log("word complete");
            this.allGussed = true;
        }
    };
};

module.exports = Word;