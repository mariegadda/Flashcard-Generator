var input = process.argv[3];
var inquirer = require("inquirer");
module.exports = BasicCard;

// module.exports=cards();

//basic card constructor
function BasicCard(front, back){
	this.front = front;
	this.back = back;

}
// array of font/backs of basic cards
var basicCardArray = [
	{
		front: "sure I peed on her, and if I had to, I'd pee on any one of you!",
		back: "Joey"
	},
	{
		front: "This is brand new information!",
		back: "Phoebe"
	},
	{
		front: "Here come the meat sweats",
		back: "Joey"
	},
	{
		front: "It's like a cows opinion, it's Moo",
		back: "Joey"

	},
	{
		front: "they don't know we know they know we know",
		back: "Phoebe"
	}
];

// array for basic cards to be pushed into
var basicCardArray2 = [];

//for loop to make the values into actual basic cards using the constructor
for (var i = 0; i < basicCardArray.length; i++) {
	var newCard = new BasicCard(basicCardArray[i].front, basicCardArray[i].back);
	basicCardArray2.push(newCard);
}
//var
var score = 0;
 var count = 0;

function cards(){
  if (count < basicCardArray2.length) {
  inquirer.prompt([
  	{
      message: basicCardArray2[count].front + "\n",
      name: "question"
    },
    ])
  .then(function(answers) {
    	if (answers.question.toUpperCase() === basicCardArray2[count].back.toUpperCase()){
        console.log(" correct!\n");
        score++;
      }else{
        console.log("Wrong! Correct Answer is: " + basicCardArray[count].back+ "\n" );
      }
 count++;
  cards();
    });
    
}else{
       console.log("You're Score is: " + score);
       count = 0;
    }
  }

  cards();
//This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;
//The constructor should accept two arguments: front and back.
//The constructed object should have a front property that contains the text on the front of the card.
//The constructed object should have a back property that contains the text on the back of the card.