function Game(){
	this.total = 0
	this.frameCount = 1
};

Game.prototype.roll = function(number) {
	if(this.validateNumber(number)){ return this.addScore(number) }
	return 'Give me a whole number which is between 1 and 10'
};

Game.prototype.addScore = function(number) {
	this.total += number
};

Game.prototype.validateNumber = function(number) {
	return number <=10 && number % 1 === 0 && number >= 0
};