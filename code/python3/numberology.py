# numberology.py by Isaac Halvorson
#
# A Python 3 implementation of simple Numerology algorithms

def calculate_final_number(number_string):
	return (int(number_string) - 1) % 9 + 1


def get_character_number(character):
	if character.isnumeric():
		return character
	elif character.isalpha():
		return ord(character.lower()) - 96
	else:
		return 0


def numberology(text):
	big_number_string = ""
	
	for character in text:
		big_number_string += str(get_character_number(character))
	
	return calculate_final_number(big_number_string)


name = input("Please enter your full name: ")
name_number = numberology(name)
print("Your name number is:", name_number)

birthday = input("Please enter your birthday: ")
life_number = numberology(birthday)
print("Your life number is:", life_number)
