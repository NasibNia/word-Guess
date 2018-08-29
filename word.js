var letter  = require ('./letter.js');

var Word = function () {
    this.wordLetters = []; 
    this.addLetters = function (){
        this.wordLetters.push(new letter());
    };

    this.string = function(){       
        var str = "";
        for(var i = 0; i < this.wordLetters.length ; i ++){
            str = str + letter.display();
        }
        return str;
    };
    this.check = function (char){
        for (var i = 0 ; i < this.wordLetters ; i++){
            this.wordLetters[i].guess(char);
        }
    };
};

module.exports = Word;