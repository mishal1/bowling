function Game(){
	this.total = 0
};

Game.prototype.roll = function(number) {
	if(number <=10 && number % 1 === 0 && number >= 0){
		this.total += number
		console.log(typeof number)
	} else {
		return 'Give me a whole number which is between 1 and 10'
	}
};