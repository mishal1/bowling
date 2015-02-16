describe('Roll', function(){

  var roll 

  beforeEach(function(){
    roll = new Roll()
  });

  it('a roll has a value of null when initialized', function(){
    expect(roll.value()).toEqual(null)
  });

  it('a value can be set for a roll', function(){
    roll.setValue(1)
    expect(roll.value()).toEqual(1)
  });

  it('the roll value cannot be greater than 10', function(){
    expect(roll.setValue(11)).toEqual("Invalid value")
  });

  it('the roll must be an integer', function(){
    expect(roll.setValue(0.5)).toEqual("Invalid value")
  });

  it('the roll must be greater than 0', function(){
    expect(roll.setValue(-1)).toEqual("Invalid value")
  });

});