def get_word_number(word):
	wordnum = ""

	for character in word:
		wordnum += str(get_character_number(character))

	return int(wordnum)


def get_character_number(character):
	if character.isalnum():
		character = character.lower()
	else:
		return 0

	if character.isnumeric():
		return character

	if character == "a" or character == "j" or character == "s":
		return 1
	if character == "b" or character == "k" or character == "t":
		return 2
	if character == "c" or character == "l" or character == "u":
		return 3
	if character == "d" or character == "m" or character == "v":
		return 4
	if character == "e" or character == "n" or character == "w":
		return 5
	if character == "f" or character == "o" or character == "x":
		return 6
	if character == "g" or character == "p" or character == "y":
		return 7
	if character == "h" or character == "q" or character == "z":
		return 8
	if character == "i" or character == "r":
		return 9


def find_digital_root(word):
	wordnum = get_word_number(word)
	return (wordnum - 1) % 9 + 1


def main():
	birthday = input("Please enter your birthday: ")
	name = input("Please enter your full name: ")
	life_number = find_digital_root(birthday)
	name_number = find_digital_root(name)
	print("Your life number is:", life_number)
	print("Your name number is:", name_number)


if __name__ == "__main__":
	main()
