function Game(){
  this.allFrames = []
  this.bonus = 0
};

Game.prototype.totalScore = function() {
  var total = 0
  for(var i = 0; i < this.allFrames.length; i++){total += this.allFrames[i]}
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
  var length = this.allFrames.length
  if(length % 2 != 0){return this.checkSumOfFrame(length, number)}
  return true
};

Game.prototype.checkSumOfFrame = function(length, number) {
  var sumOfFrame = this.allFrames[length-1] + number
  if(sumOfFrame > 10){return false}
  return true
};

Game.prototype.addScore = function(number) {
  this.allFrames.push(number)
  if(number === 10){this.allFrames.push(0)}
};

Game.prototype.checkBonus = function() {
  var length = this.allFrames.length
  if(length % 2 === 0){
    this.checkIfStrikeOrSpare(length)
  }
};

Game.prototype.checkIfStrikeOrSpare = function(length) {
  this.allFrames[length - 4] === 10 ? this.addStrikeBonus(length) : this.spareBonus(length)
};


Game.prototype.addStrikeBonus = function(length) {
  for(var i = 1; i < 3; i++){this.bonus += this.allFrames[length - i]}
};

Game.prototype.spareBonus = function(length) {
  if(this.allFrames[length-3] + this.allFrames[length-4] === 10){
    this.bonus += this.allFrames[length-2]
  }
};

Game.prototype.checkGameStatus = function() {
  if(this.allFrames.length >= 20){return false}
  return true
};

Game.prototype.checkIfGameIsOver = function(number) {
  if(this.checkGameStatus()){
    this.addScore(number)
  } else { 
    return this.checkIfStrikeOrSpareInLastFrame(number)
  }
};

Game.prototype.lastFrameSum = function() {
  return this.allFrames[19] + this.allFrames[18]
};

Game.prototype.checkIfStrikeOrSpareInLastFrame = function(number) {
  if( this.lastFrameSum() === 10 && this.allFrames.length < 22){
    this.lastFrameBonus(number)
  } else {
    return "The game is over"
  }
};

Game.prototype.lastFrameBonus = function(number) {
  this.allFrames.push(number)
  if(this.allFrames[20]!= 0){this.allFrames.push(0)}
};

