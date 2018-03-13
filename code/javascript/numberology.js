/**
 * numberology.js by Isaac Halvorson
 *
 * A simple implementation of basic Numerology theory written in JavaScript
 */

function numberology() {

	// Alert the user as to what Numberology is
	alert(
		"Welcome to Numberology!\n\nNumberology is a simple implementation of Numerology theory written in JavaScript by Isaac Halvorson"
	);

	// Prompt the user for required data
	const fullName = prompt("To start things off, I'm going to need your full name (including your middle name). Please type it in here and hit enter:");
	const birthYear = prompt("Ok, now please enter the year in which you were born and hit enter:");
	const birthMonth = prompt("Next, I'll need the month (you can enter the full month name, an abbreviation, or the month's number):");
	const birthDay = prompt("Finally, please enter the day of your birth:");
}

function getCharacterNumber() {

}

numberology();