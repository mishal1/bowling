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
  this.allFrames.push(number)
};