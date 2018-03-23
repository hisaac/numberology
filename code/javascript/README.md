# JavaScript Numberology

<p align="center">
	<a href="https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg">
		<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="The JavaScript logo" width="33%">
	</a>
</p>

I've implemented the Numberology algorithm here in two forms:

- [`numberology-browser.js`](./numberology-browser.js)
- [`numberology-node.js`](./numberology-node.js)

## Notes

Because I started my own programming journey with JavaScript, I decided to write the Numerology scripts in that language first. I'm currently a little rusty with the language (I've been doing iOS / Swift development for the past year), so writing the script took a lot more time than I expected, despite its pretty simple code. My goal with the code itself was to be succinct, but still readable.

Of the two different versions I wrote, the browser version was a lot easier, due to its built-in ability to prompt the user for input. The Node.js version took a little more work. I had to use Node's built-in `readline` library, and use a callback in order to wait for the user's answer before prompting them again.

I don't really like the way I'm currently checking to see if a character is a valid English letter, a number, or something else. What I've implemented is the best I could come up with, but if you know a better way to do that, I'd be really interested to hear.

There are two main things I'd like to add to the code at some point: user input validation, and implement JavaScript's built-in `Date` class to handle the date logic somehow. I skipped these initially just to get something coded up, but it would be fun to come back to it later to improve that.

## Install / Run

### Browser

To run the [web browser version of the script](./numberology-browser.js), open the included [`index.html`](./index.html) file in any web browser. You will the be prompted by the browser for the required input.

### Node.js

To run the [Node.js version of the script](./numberology-node.js), you'll first need to have Node.js installed (refer to the [Node.js website](https://nodejs.org/) for instructions on how to do that on your platform). Once you've got Node installed, open the `numberology-node.js` file from the command line, like so:

```shell
node numberology-node.js
```

You will then be prompted in the command line for the required input.

## Resources Used

- [This StackOverflow answer](https://stackoverflow.com/a/37417063/4118208) about reading user input from the command line with Node
- Other StackOverflow questions and answers related to testing if a string is a letter, number, or other special character
