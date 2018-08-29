











var list  = ["cherry" , "banana" , "limon"];
var list_i = 0;

// goes through the list and picks one word each time;
function makeGuess(){
   if (list_i === list.length){
    list_i = 0;
   } 
   return list[list_i];
}

// starting the game; you need to pick a name from list
function initialize(){
    var word = makeGuess();

    for (var i = 0; i < word.length ; i++) {
        console.log( "-");
        
        //the function to take the guess from user
        userGuess();

        //create the object for that letter and compare it with all the letters inside the word

        //


    }
};

//take the letter guess from user; 
var currentLetter = "i";
var guess  = "i";


//======================================= Letter =========================
var Letter = function (value){
    this.value = value;
    this.correctGuess = false; 
    this.display = function (){
        if (this.value === guess) {
            console.log("you made a correct guess");
            this.correctGuess = true;
        }
    };
    this.update= function (){
        if (this.correctGuess) {
            console.log(this.value);
        } else {
            console.log("-");
        }
    };
};

//======================================= Letter =========================


var letter1 = new Letter (currentLetter);
console.log("The guess is " + guess);
console.log("letter1.value is " + letter1.value);
console.log("letter1.correctGuess is " + letter1.correctGuess);
letter1.display();
letter1.update();
console.log("letter1.value is " + letter1.value);
console.log("letter1.correctGuess is " + letter1.correctGuess);


