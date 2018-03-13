#! /usr/bin/node

//defining birthdate variables
//adding some built in error checking to this section would be nice, but time consuming
//examples:
//restrict birthMonth to known months, reducing the risk of spelling errors messing up the program
//restrict birthDay to single or double digit numbers only
//and if we decide to be overachievers, we could even define a specific date range for each month
//and if we decide to be even more overachievers, we could custom define date ranges for leap years in february
//restrict birthYear to four digit numbers only
//it would be really neat if the program checked for the current date to make sure that the user is not checking for a date in the future

var birthMonth = prompt("In what month were you born?");
var birthDay = prompt("On what day in " + birthMonth + " were you born?");
var birthYear = prompt("In what year were you born?");

var fullName = prompt("What is your full name (including middle name)?");

//create an array for the birthdate variables (perhaps this should be placed within the birthNumber function?)
var birthDate = [birthMonth, birthDay, birthYear];

//this function will check to see what type of variable birthMonth is, and handle it accordingly
var birthMonthType = function(birthMonth) {
	// switch (birthMonth){
	// 	case birthMonth.
};

//this function will convert the string variable held in birthMonth into an integer
var birthMonthNum = function(birthMonth) {
	switch (birthMonth) {
		case "january":
		case "jan":
			birthMonth = 1;
			break;
		case "february":
		case "feb":
			birthMonth = 2;
			break;
		case "march":
		case "mar":
			birthMonth = 3;
			break;
		case "april":
		case "apr":
			birthMonth = 4;
			break;
		case "may":
			birthMonth = 5;
			break;
		case "june":
		case "jun":
			birthMonth = 6;
			break;
		case "july":
		case "jul":
			birthMonth = 7;
			break;
		case "august":
		case "aug":
			birthMonth = 8;
			break;
		case "september":
		case "sep":
			birthMonth = 9;
			break;
		case "october":
		case "oct":
			birthMonth = 10;
			break;
		case "november":
		case "nov":
			birthMonth = 11;
			break;
		case "december":
		case "dec":
			birthMonth = 12;
			break;
	}
};

//var fullName= function(){
//    return prompt("What is your first and last name")
//};

var calcName = function() {
	var name = fullName();
	name = name.toLowerCase();
	var nameVal = 0;
	for (i = 0; i <= name.length; i++) {
		if (name[i] === "a" || name[i] === "j" || name[i] === "s") {
			nameVal += 1;
		} else if (name[i] === "b" || name[i] === "k" || name[i] === "t") {
			nameVal += 2;
		} else if (name[i] === "c" || name[i] === "l" || name[i] === "u") {
			nameVal += 3;
		} else if (name[i] === "d" || name[i] === "m" || name[i] === "v") {
			nameVal += 4;
		} else if (name[i] === "e" || name[i] === "n" || name[i] === "w") {
			nameVal += 5;
		} else if (name[i] === "f" || name[i] === "o" || name[i] === "x") {
			nameVal += 6;
		} else if (name[i] === "g" || name[i] === "p" || name[i] === "y") {
			nameVal += 7;
		} else if (name[i] === "h" || name[i] === "q" || name[i] === "z") {
			nameVal += 8;
		} else if (name[i] === "i" || name[i] === "r") {
			nameVal += 9;
		} else {
			nameVal += 0;
		}
	}
	if (nameVal > 9) {
		var number = nameVal,
			output = [],
			sNumber = number.toString();

		for (var i = 0, len = sNumber.length; i < len; i += 1) {
			output.push(+sNumber.charAt(i));
		}

		if (output.length > 2) {
			output = output[0] + output[1] + output[2];
		} else {
			output = output[0] + output[1];
		}

		if (output > 9) {
			var number = output,
				result = [],
				sNumber = number.toString();

			for (var i = 0, len = sNumber.length; i < len; i += 1) {
				result.push(+sNumber.charAt(i));
			}

			if (result.length > 2) {
				result = result[0] + result[1] + result[2];
			} else {
				result = result[0] + result[1];
			}

			console.log("Your name number is " + result + "!");
		} else {
			console.log("Your name number is " + output + "!");
		}
	} else {
		console.log("Your name number is " + nameVal + "!");
	}
};

calcName();
