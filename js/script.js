// Produce a random number
var answer = (Math.floor(Math.random() * 100) + 1);

//counter for guesses
var i = 0;

//Check number from user input
$('#enter').click(function(){
	var guess = $('#field').val();
	var diff = Math.abs(guess);
	//If text is empty or is not a number
	if(isNaN(guess)){
		$('#display').text("Please enter a number between 1 and 100");
	}

	//if number is or below 0 or over 100
	else if(guess < 1 || guess > 100) {
		$('#display').text("it is between 1 and 100");
	}

	/*if user guess the number correctly disable "enter" and the 
	"get awnser" buttons*/
	else if(diff == 0){
		$('#count').text(++i);
		$('#enter').prop('disable', true);
		$('#getAnswer').prop('disable', true);
		$('#display').text("YOU GOT IT!!!");
	}

	//all ranges of guesses and hints
	else if (diff < 2) {
		$('#counter').text(++i);
		$('#display').text("Burning up");
	}

	else if (diff < 10) {
		$('#counter').text(++i);
		$('#display').text("Hot");
	}

	else if (diff < 15) {
		$('#counter').text(++i);
		$('#display').text("Warm");
	}

	else if (diff < 20) {
		$('#counter').text(++i);
		$('#display').text("Almost Warm");
	}

	else if (diff < 30) {
		$('#counter').text(++i);
		$('#display').text("Mild");
	}

	else if (diff < 40) {
		$('#counter').text(++i);
		$('#display').text("Chilly");
	}

	else if (diff < 50) {
		$('#counter').text(++i);
		$('#display').text("It's freezing here");
	}

	else if (diff < 60) {
		$('#counter').text(++i);
		$('#display').text("Brrr");
	}

	else if (diff < 70) {
		$('#counter').text(++i);
		$('#display').text("North Pole");
	}

	else if (diff < 80) {
		$('#counter').text(++i);
		$('#display').text("The Polar bears are enjoying this weather");
	}

	else if (diff < 90) {
		$('#counter').text(++i);
		$('#display').text("Zero degrees");
	}

	else if (diff < 100) {
		$('#counter').text(++i);
		$('#display').text("Below Zero degrees");
	}

});

//restarts game enables "enter" and "get answer" buttons
$('#restart').click(function(){
	$('#enter').prop('disable', false);
	$('#getAnswer').prop('disable', false);
	$('#field').val("");
	location.reload();	
});
//show correct answer
$('#getAnswer').click(function(){
	$('#count').text("The answer is " + answer);
});
//



