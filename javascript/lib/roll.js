function Roll(){
  this.content = null
}

Roll.prototype.value = function() {
  return this.content
};

Roll.prototype.setValue = function(value) {
  if(!(this.validateValue(value))){return "Invalid value"}
  this.content = value
};

Roll.prototype.validateValue = function(value) {
  return value <=10 && value % 1 === 0 && value >= 0
};

