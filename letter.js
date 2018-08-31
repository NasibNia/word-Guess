function Letter (value){
    this.value = value;
    this.guessedYet = false; 
    this.show = function(){
        if (this.guessedYet) {
            return this.value+" ";
        } else {
            return "_ ";
        }      
    };
    this.ifGuess = function(char){
        if (this.value === char){
            this.guessedYet  = true;
            return true;
        } 
        return false;
    };
};

module.exports =  Letter;