describe('Game', function(){

	var bowling;

	beforeEach(function(){
		bowling = new Game();
	});

	function rollMany(number, pins){
		for(var i = 0; i < number; i++){bowling.roll(pins)}
	}

	function rollSpare(){
		bowling.roll(5)
		bowling.roll(5)
	}

	function rollStrike(){
		bowling.roll(10)
	}

	it('can have a gutter game', function(){
		rollMany(20, 0)
		expect(bowling.totalScore()).toEqual(0)
	});

	it('the total score can change', function(){
		rollMany(20, 1)
		expect(bowling.totalScore()).toEqual(20)
	});

	it('test score with a spare', function(){
		rollSpare()
		bowling.roll(3)
		rollMany(17, 0)
		expect(bowling.totalScore()).toEqual(16)
	});

	it('test score with strike', function(){
		rollStrike()
		bowling.roll(3)
		bowling.roll(4)
		rollMany(16, 0)
		expect(bowling.totalScore()).toEqual(24)
	});

	it('test perfect game', function(){
		rollMany(12, 10)
		expect(bowling.totalScore()).toEqual(300)
	});

});