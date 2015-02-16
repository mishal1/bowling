function Game(){
  this.allFrames = []
  this.bonus = 0
};

Game.prototype.totalScore = function() {
  var total = 0
  for(var i = 0; i < this.frameLength(); i++){total += this.allFrames[i]}
  return total + this.bonus
};

Game.prototype.roll = function(number) {
  if(!(this.validateNumber(number) && this.validValue(number))){return "Invalid value"}
  this.checkBonus()
  return this.checkIfGameIsOver(number)
};

Game.prototype.validateNumber = function(number) {
  return number <=10 && number % 1 === 0 && number >= 0
};

Game.prototype.validValue = function(number) {
  var length = this.frameLength()
  if(this.frameLength() % 2 != 0){return this.checkSumOfFrame(number)}
  return true
};

Game.prototype.checkSumOfFrame = function(number) {
  var sumOfFrame = this.allFrames[this.frameLength()-1] + number
  if(sumOfFrame > 10){return false}
  return true
};

Game.prototype.addScore = function(number) {
  this.allFrames.push(number)
  if(number === 10){this.allFrames.push(0)}
};

Game.prototype.checkBonus = function() {
  var length = this.frameLength()
  if(this.frameLength() % 2 === 0){this.checkIfStrikeOrSpare()}
};

Game.prototype.checkIfStrikeOrSpare = function() {
  this.allFrames[this.frameLength() - 4] === 10 ? this.addStrikeBonus() : this.spareBonus()
};


Game.prototype.addStrikeBonus = function(length) {
  for(var i = 1; i < 3; i++){this.bonus += this.allFrames[this.frameLength() - i]}
};

Game.prototype.spareBonus = function(length) {
  if(this.allFrames[this.frameLength()-3] + this.allFrames[this.frameLength()-4] === 10){ this.bonus += this.allFrames[this.frameLength()-2]}
};

Game.prototype.checkGameStatus = function() {
  if(this.frameLength()>= 20){return false}
  return true
};

Game.prototype.checkIfGameIsOver = function(number) {
  if(this.checkGameStatus()){this.addScore(number)} 
  else {return this.checkIfStrikeOrSpareInLastFrame(number)}
};

Game.prototype.lastFrameSum = function() {
  return this.allFrames[19] + this.allFrames[18]
};

Game.prototype.checkIfStrikeOrSpareInLastFrame = function(number) {
  if( this.lastFrameSum() === 10 && this.frameLength() < 22){this.lastFrameBonus(number)} 
  else {return "The game is over"}
};

Game.prototype.lastFrameBonus = function(number) {
  this.allFrames.push(number)
  if(this.allFrames[20]!= 0){this.allFrames.push(0)}
};

Game.prototype.frameLength = function() {
  return this.allFrames.length
};

