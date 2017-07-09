//cloze card constructor
function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partial = partial;
	this.fullText = fullText;
	this.error = function(){
		if (this.cloze !== input) {
			console.log('nope!');
		}
	};
}
//array of clozecard data
var clozeCardArray = [
	{
		text: "I don’t think I’ve ever been to an appointment in my life where I wanted the other guy to show up",
		cloze: "George"
	},
	{
		text: "You know what would make a great coffee table book? A coffee table book about coffee tables",
		cloze: "Kramer"
	},
	{
		text: "There’s more to life than making shallow, fairly obvious observations",
		cloze: "Jerry"
	},
	{
		text: "My life is the complete opposite of everything I want it to be. Every instinct I have, in every aspect of life, be it something to wear, something to eat – it’s all been wrong",
		cloze: "George"
	},
	{
		text: "Do you have any idea how much time I waste in this apartment?",
		cloze: "Kramer"
	}
	];


module.exports = ClozeCard;

