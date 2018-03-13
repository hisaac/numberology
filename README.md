# numberology

This repo contains simple implementations of basic [numerology](https://en.wikipedia.org/wiki/Numerology) in as many programming languages as I can learn. (Inspired by [The Hello World Collection](https://helloworldcollection.github.io))

<div style="text-align: center;">
  <p><a href="https://en.wikipedia.org/wiki/Augustine_of_Hippo#/media/File:Gerard_Seghers_(attr\)_-_The_Four_Doctors_of_the_Western_Church,_Saint_Augustine_of_Hippo_(354–430\).jpg">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Gerard_Seghers_%28attr%29_-_The_Four_Doctors_of_the_Western_Church%2C_Saint_Augustine_of_Hippo_%28354–430%29.jpg" alt="A painting by Gerard Seghers called 'The Four Doctors of the Western Church, Saint Augustine of Hippo'"/>
  </a><br />
  <small>"The Four Doctors of the Western Church, Saint Augustine of Hippo" by <a href="https://en.wikipedia.org/wiki/Gerard_Seghers">Gerard Seghers</a></small></p>
</div>

## What?

According to [Wikipedia](https://en.wikipedia.org/wiki/Numerology):

> Numerology is the study of the numerical value of the letters in words, names and ideas. It is often associated with the paranormal, alongside astrology and similar divinatory arts.

The ideas numerology is based off of come from [Pythagoras](https://en.wikipedia.org/wiki/Pythagoras) (c. 570–495 BC) — yes, [*the* Pythagorus](https://en.wikipedia.org/wiki/Pythagorean_theorem) — and [Augustine of Hippo](https://en.wikipedia.org/wiki/Augustine_of_Hippo) (A.D. 354–430) whose theories date back to c. 570–495 BC. Modern numerology dates back to the 1930s, and is merely "inspired" by Pythagoras' work. I'm not sure Pythagoras himself would agree with the system and the conclusions it draws.

I don't personally believe in numerology's paranormal aspects, but the first part of that definition, *the study of the numerical value of the letters in words*, provides a fun little programming challenge. The algorithm exercises a lot of the fundamental parts of programming languages: math, string manipulation, iterators, loops, conditional logic, user input, and even date logic if the language supports it.

## Why?

I was learning Python over a weekend recently, and I came up with writing a numerology algorithm as a fun way to learn some of the basics of the language. It's got some fun and simple arithmetic and language components that are interesting to think about, and interesting to implement within code.

Writing it in Python made me want to do the same in the other languages I knew at the time (JavaScript, C#, and Swift), which then made me want to expand the scope outward. I've found that this simple algorithm is a great way to learn the basic numerical and string based methods of a language. And because we also calculate the *Life Number*, I can use a language's built-in date logic as well (if the language has that).

## How?

The basics of numerology are simple to understand, and simple to write out on a piece of paper, but not so simple to program. There are many steps involved that our human brains can do quickly and easily that must be explicitly stated to the computer.

In numerology, each letter in the English alphabet is given a numerical value. Here is a table representing that:

  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9
 :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-:
  A  |  B  |  C  |  D  |  E  |  F  |  G  |  H  |  I
  J  |  K  |  L  |  M  |  N  |  O  |  P  |  Q  |  R
  S  |  T  |  U  |  V  |  W  |  X  |  Y  |  Z  |

The two things we calculate are a person's "Birth Number" and their "Life Number".

To find a person's "Birth Number", you first convert each letter of the person's full birth name (first, middle, and last) to their numerical value using the chart above. We then add all of those digits together. If the resulting sum has more than one digits, we repeat the summation process until we end up with a single digit number. This final single digit number is the person's "Birth Number".

```plain
Isaac Daniel Halvorson
91113 415953 813469165 → 85 → 13 → 4
```

The process process of reducing a number down to a single digit is known as finding a number's [digital root](https://en.wikipedia.org/wiki/Digital_root).

To find a user's "Life Number", we do the same process, but with the person's birth date. Only the day, month, and year are needed.

```plain
January 1 1970
      1 1 1970 → 19 → 10 → 1
```

I won't go into the supposed significance of each final number, but you can [find lots of information about them online](https://www.google.com/search?client=safari&rls=en&q=numerology&ie=UTF-8&oe=UTF-8) if you're curious.

Some numerology systems give special significance to the numbers 11, 22, and 33 (so called "Master Numbers"), but I don't plan to implement logic to check for those (yet).

## Languages

### Current Implementations

Links go to the README for that language's implementation

- [JavaScript](./code/javascript)

### Planned Implementations

Links go to the git branch for that language's implementation

- ActionScript
- Ada
- Apex
- AppleScript
- Assembly
- Bash
- BASIC
- C
- C#
- C++
- Clojure
- COBOL
- Coffeescript
- Common Lisp
- Crystal
- Dart
- Delphi
- Elm
- Erlang
- Excel
- Fortran
- Go
- Haskell
- HTML
- Java
- JavaScript
- Kotlin
- Lisp
- Lua
- MATLAB
- Objective-C
- Objective-C++
- Pascal
- Perl
- Perl 6
- PHP
- PL/I
- PL/SQL
- Processing
- Python
  - Python 2
  - [Python 3](https://github.com/hisaac/numberology/tree/python3)
- R
- Racket
- Ruby
- Rust
- Scala
- Scheme
- Scratch
- SQL
- Swift
- Typescript
- VB .NET
- Visual Basic

Have other languages that you think would be fun and/or interesting to use? Please [let me know](mailto:numberology@hisaac.net)!

## Who?

My name is Isaac Daniel Halvorson. My name number is `4` and my life number is `2`. I'm a web and iOS developer from Saint Paul, MN. Checkout [my website](http://hisaac.net/about.html) if you'd like to learn more or say hi.

## When?

This project was started on March 12, 2018 (which reduces down to `9`).
