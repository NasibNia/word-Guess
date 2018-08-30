var letterConst  = require ('./letter.js');

function Word (value) {
    this.value = value;
    this.wordLetters = []; 
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
        console.log("inside");
        for (var i = 0 ; i < this.value.length ; i++){
            var thisLetter = this.wordLetters[i];
            thisLetter.ifGuess(char);
        }
    };
};

module.exports = Word;