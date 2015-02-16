function Game(){
	this.frameCount = 1
  this.allFrames = []
};

Game.prototype.totalScore = function() {
  var total = 0
  for(var i = 0; i < this.allFrames.length; i++){total += this.allFrames[i]}
  return total
};

Game.prototype.roll = function(number) {
  if(this.validateNumber(number) && this.validValue(number)){return this.allFrames.push(number)}
  return "Invalid value"
};

Game.prototype.validateNumber = function(number) {
  return number <=10 && number % 1 === 0 && number >= 0
};

Game.prototype.validValue = function(number) {
  var length = this.allFrames.length
  if(length % 2 != 0){return this.checkSumOfFrame(length, number)}
  return true
};

Game.prototype.checkSumOfFrame = function(length, score) {
  if(this.allFrames[length-1] + score > 10){return false}
  true
};