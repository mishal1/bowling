describe('Bowling', function(){

	var bowling;

	beforeEach(function(){
		bowling = new Game();
	});

	it('has a total of 0 at the beginning of the game', function(){
		expect(bowling.total).toEqual(0)
	});

	it('the total increases after a user rolls', function(){
		bowling.roll(1)
		expect(bowling.total).toEqual(1)
	});

	it('the roll value cannot be greater than 10', function(){
		expect(bowling.roll(11)).toEqual("Give me a whole number which is between 1 and 10")
	});

	it('the roll must be an integer', function(){
		expect(bowling.roll(0.5)).toEqual("Give me a whole number which is between 1 and 10")
	});

	it('the roll must be greater than 0', function(){
		expect(bowling.roll(-1)).toEqual("Give me a whole number which is between 1 and 10")
	});

	it('the game starts from the first frame', function(){
		expect(bowling.frameCount).toEqual(1)
	});

});