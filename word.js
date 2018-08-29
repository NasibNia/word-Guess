var letterConst  = require ('./letter.js');

var Word = function (value) {
    this.value = value;
    this.wordLetters = []; 
    this.makeLetters = function (){
        for(var i = 0; i < this.value.length ; i ++){
            var letter = new letterConst(this.value[i]);
            this.wordLetters.push(letter);      
        }
    };
    this.toString = function(){       
        var str = "";
        for(var i = 0; i < this.value.length ; i ++){
            str = str + this.wordLetters[i].show(); 
            console.log("this.wordLetters is " , this.wordLetters[i].value);   
        }
        return str;
    };
    this.check = function(char){
        console.log("inside");
        for (var i = 0 ; i < this.value.length ; i++){
            console.log("this.wordLetters[i]  " , this.wordLetters[i]);
            this.wordLetters[i].guess(char);
        }
        // console.log("this.wordLetters " , this.wordLetters );
    };
};

module.exports = Word;