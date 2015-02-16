describe('Bowling', function(){

	var bowling;

	beforeEach(function(){
		bowling = new Game();
	});

	it('has a total of 0 at the beginning of the game', function(){
		expect(bowling.totalScore()).toEqual(0)
	});

	it('the total score increases after a user rolls', function(){
		bowling.roll(1)
		expect(bowling.totalScore()).toEqual(1)
	});

	it('the roll value cannot be greater than 10', function(){
		expect(bowling.roll(11)).toEqual("Invalid value")
	});

	it('the roll must be an integer', function(){
		expect(bowling.roll(0.5)).toEqual("Invalid value")
	});

	it('the roll must be greater than 0', function(){
		expect(bowling.roll(-1)).toEqual("Invalid value")
	});

	it('the sum of the rolls in each frame should be less than or equal to 10', function(){
		bowling.roll(9)
		expect(bowling.roll(2)).toEqual("Invalid value")
	});

});