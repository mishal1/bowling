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
  this.score = 0
  this.frameIndex = 0
  for(var frame = 0; frame < 10; frame++){ 
    if(this.isStrike(this.frameIndex)){
      this.addStrikeBonus()
    } else if (this.isSpare(this.frameIndex)) {
      this.addSpareBonus()
    } else {
      this.addScore()
    }
  }
  return this.score;
};

Game.prototype.isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
};

Game.prototype.isStrike = function(frameIndex) {
  return this.rolls[frameIndex] === 10;
};

Game.prototype.addStrikeBonus = function() {
  this.score += 10 + this.rolls[this.frameIndex + 1] + this.rolls[this.frameIndex + 2];
  this.frameIndex ++;
};

Game.prototype.addSpareBonus = function() {
  this.score += 10 + this.rolls[this.frameIndex + 2];
  this.frameIndex += 2;
};

Game.prototype.addScore = function() {
  this.score += this.rolls[this.frameIndex] + this.rolls[this.frameIndex + 1];
  this.frameIndex += 2;
};