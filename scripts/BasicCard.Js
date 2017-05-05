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
		front: "Sure I peed on her, and if I had to, I'd pee on any one of you!",
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
		front: "They don't know we know they know we know",
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
//vars for keeping track of the count of which question we are on in the function, and the score.
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
