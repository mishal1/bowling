describe('Bowling', function(){

	var bowling;

	beforeEach(function(){
		bowling = new Game();
	});

	it('has a total of 0 at the beginning of the game', function(){
		expect(bowling.totalScore()).toEqual(0)
	});

	it('the total score increases when a user rolls', function(){
		bowling.roll(1)
		expect(bowling.totalScore()).toEqual(1)
	});

});