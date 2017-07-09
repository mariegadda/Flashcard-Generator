var input = process.argv[3];
var inquirer = require("inquirer");

//startgame functions asks if user wants to play friends trivia or seinfeld - seinfeld not working yet. 
function startGame() {
    inquirer.prompt([{
        type: "list",
        message: "Welcome to Trivia! Would you like to play Friends Basic Flashcard or Seinfeld Cloze Flashcard? \n ",
        name: "ForS",
        choices: ["Friends", "Seinfeld"]

    }]).then(function(answers) {
        if (answers.ForS === "Friends") {
            console.log("Guess which Friends character said it!");
            var BasicCard = require('./BasicCard');
            BasicCard;
        } else {
            console.log("Seinfeld trivia coming soon!");

        }
    });
}

startGame();
