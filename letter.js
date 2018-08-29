var Letter = function (value){
    this.value = value;
    this.guessedYet = false; 
    this.display = function (){
        if (this.guessedYet) {
            return this.value;
        } else {
            return "_";
        }      
    };
    this.guess = function(char){
        if (this.value === char){
            this.guessedYet  = true;
        }
    };
};

module.exports =  Letter;