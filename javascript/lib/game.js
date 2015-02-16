function Game(){
  this.rolls = new Array(21);
  for(var i = 0; i < this.rolls.length; i++){this.rolls[i] = 0}
  this.currentRoll = 0;
};

Game.prototype.roll = function(numberOfPins) {
  this.score += numberOfPins;
  this.rolls[this.currentRoll++] = numberOfPins
};

Game.prototype.totalScore = function() {
  var score = 0
  var frameIndex = 0
  for(var frame = 0; frame < 10; frame++){ 
    if(this.isStrike(frameIndex)){
      score += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
      frameIndex ++;
    } else if (this.isSpare(frameIndex)) {
      score += 10 + this.rolls[frameIndex + 2];
      frameIndex += 2;
    } else {
      score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
      frameIndex += 2;
    }
  }
  return score;
};

Game.prototype.isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
};

Game.prototype.isStrike = function(frameIndex) {
  return this.rolls[frameIndex] === 10;
};