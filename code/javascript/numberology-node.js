/**
 * numberology.js by Isaac Halvorson
 *
 * A simple implementation of basic Numerology written in JavaScript.
 * Load `index.html` in your web browser to run.
 */

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function numberology() {
	promptForBirthName();
}

function promptForBirthName() {
	rl.question("Enter your full birth name: ", (input) => {
		console.log("Your name number is:", getNumber(input));
		promptForBirthDate();
	});
}

function promptForBirthDate() {
	rl.question("Enter your birthdate (numbers only): ", (input) => {
		console.log("Your life number is:", getNumber(input));
		rl.close();
	});
}

function getNumber(input) {
	var fullNumber = 0;
	for (character of input) {
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
