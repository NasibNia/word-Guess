<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# word-Guess

<!-- Put a description of what the project is -->
This fun fruity hangman game is all about the constructors, and the logic to create a series of options for the game. the game is made using node.js and is run through terminal.

The main file is index.js, and in order for it to run properly, the set of modular dependencies are required to be included in its same directory. the list of dependencies contain "inquirer" which makes it possible to interact with user through terminal, as well as two other npm packages named chulk and cFonts which make it possible to bring some color and style to the terminal and make it more alive.
Index.js also include another file "word.js" that actually is a constructor for the word object which itself points to another constructor named "letter.js". 

Letter.js Contains a constructor, Letter. This constructor should be able to either display an underlying character or an underscore placeholder, depending on whether or not the user has guessed the letter. Therefore the constructor contains:

A string value to store the underlying character for the letter
A boolean value that stores whether that letter has been guessed yet
A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


Word.js also Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor has the following methods and properties:

An array of new Letter objects representing the letters of the underlying word
A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)



The logic of the game is made inside index.js and is as follows:
In every round of the game, a  random fruit name is picked by the code, the word would be saved as a Word object, which itself, as mentioned above ,contains an array of letters which each is an object of Letter. for each word, player gets a specific numebr of chances to guess the word.

If there are guesses left ; the game asks the player to make a guess. then would take this guess and checks it against all the letter objects inside the word object; if any of them change their guessed status from false to true, that would be considered as a correct guess. the display would also be updated accordingly to reveal the letter value. if not, the gamen continues until whether all the letters in the word are guessed correctly or player runs out of eligible number of guesses. In either case, player would be informed and new word will be created to continue the game. The function which picks random words, is set up such that once it provides one word to the player, rules that out from the further option so that player doesn't get redundant words. This has been done by setting up a tracker object at the very begining of the game. When all the words in our list are played by the user, the game reset the tracker object and goes through the list again.

 

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->


# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
![gif](/snapshot.gif)



# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->

<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->
- javascript
- node.js
- npm
- constructors
- call back functions
- promise function
- node libraries like inquirer and chalk




# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->
```
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
```
# Explanation of Code
This block of the code shows the constructor for the Letter object
this object will own these properties: value which its content, and gussedYet which is a boolean describing whether this letter is gussed or not.
The object also owns two methods:
Show which displays the letter content or empty space on the screen depending on whether the letter is guessed or not, and the second method is ifGuess which actually updated the gussedYet property

```
function playGame (newWord){

    
    if(guessLeft>0) {
        console.log("guesses left " + guessLeft);
        
        
        inquirer.prompt([
            {
                type: "input",
                message: "guess a letter?",
                name: "guess"
            }
        ]).then (function(response){           
            
            guessLeft--;
            
            userGuess = response.guess;           
            
            newWord.check(userGuess);
           
            newWord.toString();
            console.log (newWord.toString()); 

            
            if (areSameArr(previousState , newWord.correct)){
                console.log (chalk.red("Incorrect!!!!!"));
            } else {
                previousState = newWord.correct;
                console.log (chalk.green("Correct"));               
            }

            if (!newWord.allGussed){
                playGame(newWord);
            }
            else{

                console.log(chalk.bgCyan.bold("You got it right! Next word!"));
                console.log("\n-------------------------\n");

                newWord = initialize();
                playGame(newWord);
            }
        });
    }  
    else {
        console.log (chalk.red.bold.bgYellow("you have no guess left"));
        console.log (chalk.red.bold("it was   ") + chalk.blue.bold(newWord.value));
        console.log(chalk.green.bold("That's Ok, We have lots of other fruits for you to guess"));
        console.log("\n-------------------------\n");

        newWord = initialize();
        playGame(newWord);
    }
}
```
# Explanation of Code

This block of code is the function that takes a word object parameter, and does the play!
the logic is as follows:
if there are guesses left ; the game asks the player to make a guess. then would take this guess and checks it against all the letter objects inside the word object; if any of the letters change their guess status from false to true, that would be considered as a correct guess. the display would also be updated accordingly to reveal the letter value. if not, the play continues until whether all the letters in the word are guessed correctly or player runs out of eligible number of guesses. In either case, player would be informed and new word will be created to continue the game.

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
- javascript
- node.js
- npm
- constructors
- call back functions
- promise function
- node libraries like inquirer and chalk




# Author 
<!-- make a link to the deployed site and have your name as the link -->
Nasibeh Nourbakhshnia
(www.linkedin.com/in/nasibehnourbakhshnia)

# License