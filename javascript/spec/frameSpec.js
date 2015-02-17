describe('Frame', function(){

  var roll, frame, content

  beforeEach(function(){
    frame = new Frame("Roll")
  });

  it('a frame is initialized with two rolls', function(){
    expect(frame.rolls.length).toEqual(2)
  });

  it('can work out the sum of the rolls', function(){
    expect(frame.sumOfFrame()).toEqual(0)
  });

  it('can set the value of the first roll', function(){
    frame.firstRoll(1)
    expect(frame.sumOfFrame()).toEqual(1)
  })

    it('can set the value of the second roll', function(){
    frame.firstRoll(1)
    frame.secondRoll(1)
    expect(frame.sumOfFrame()).toEqual(2)
  })

});