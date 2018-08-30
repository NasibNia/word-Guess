var letterConst  = require ('./letter.js');

function Word (value) {
    this.value = value;
    this.wordLetters = []; 
    this.allGussed = false;
    this.correct = [];

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
        var correct = [];
        var correctGuess = 0;
        for (var i = 0 ; i < this.value.length ; i++){
            var thisLetter = this.wordLetters[i];
            // console.log("this Letter is "  , thisLetter.value);
            thisLetter.ifGuess(char); 


            // console.log("this Letter is "  + thisLetter.guessedYet);         
            if(thisLetter.guessedYet){
                correct.push(true);
                correctGuess++;
                // console.log("correctGuess  "+ correctGuess);
            } else{
                correct.push(false);
            }


            // if(thisLetter.value in this.correct){
            //     console.log("incorrect");  
            //   } else {
            //       this.correct[thisLetter.value] = true;
            //       console.log("correct");
            //   }

        }
        for (var i = 0 ; i < this.value.length ; i++){
            var tmp = this.wordLetters[i];
            // console.log("this Letter is "  + tmp.guessedYet);  
        }
        if(correctGuess === this.value.length){
            console.log("word complete");
            this.allGussed = true;
        }
        this.correct = correct;
    };
};

module.exports = Word;