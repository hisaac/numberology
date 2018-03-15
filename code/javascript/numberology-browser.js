/**
 * numberology.js by Isaac Halvorson
 *
 * A simple implementation of basic Numerology written in JavaScript.
 * Load `index.html` in your web browser to run.
 */

function numberology() {
	// Prompt the user for required data
	const fullName = prompt("Enter your full birth name:");
	const birthDateString = prompt("Enter your birthdate (numbers only):");

	// Calculate name number
	alert("Your name number is:", getNumber(fullName));

	// Calculate life number
	alert("Your birth number is:", getNumber(birthDateString));
}

function getNumber(input) {
	var fullNumber = 0;
	for (var character of input) {
		fullNumber += getCharacterNumber(character);
	}
	return reduce(fullNumber);
}

function getCharacterNumber(character) {
	const lowerAlphaCheck = "abcdefghijklmnopqrstuvwxyz".indexOf(character) + 1;
	const upperAlphaCheck = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(character) + 1;
	const numberCheck     = "123456789".indexOf(character) + 1;
	return reduce(lowerAlphaCheck + upperAlphaCheck + numberCheck);
}

function reduce(n) {
	return (n - 1) % 9 + 1;
}

numberology();
