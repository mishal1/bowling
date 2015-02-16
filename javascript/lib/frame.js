function Frame(){
  this.rolls = []
  for(var i = 0; i < 2; i++){this.rolls.push(new Roll())}
}

Frame.prototype.sumOfFrame = function() {
  var total = 0
  for(var i = 0; i < 2; i++){total += this.rolls[i].value()}
  return total
};

Frame.prototype.firstRoll = function(value) {
  this.rolls[0].setValue(value)
};

Frame.prototype.secondRoll = function(value) {
  this.rolls[1].setValue(value)
};