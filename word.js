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
            thisLetter.ifGuess(char);
            
            if(thisLetter.gussedYet){
                correctGuess++;
            }
        }
        if(correctGuess === this.value.length){
            this.allGussed = true;
        }
    };
};

module.exports = Word;