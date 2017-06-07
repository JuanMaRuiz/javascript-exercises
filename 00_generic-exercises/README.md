# 00 - Check for Palindromes
Return ```true``` if the given string is a palindrome. Otherwise, return ```false```.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

*Note
> You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as ```racecar```, ```RaceCar```, and ```race CAR``` among others.

We'll also pass strings with special symbols, such as ```2A3*3a2```, ```2A3 3a2```, and ```2_A3*3#A2```.

List of tests
* palindrome("eye") should return a boolean.
* palindrome("eye") should return true.
* palindrome("_eye") should return true.
* palindrome("race car") should return true.
* palindrome("not a palindrome") should return false.
* palindrome("A man, a plan, a canal. Panama") should return true.
* palindrome("never odd or even") should return true.
* palindrome("nope") should return false.
* palindrome("almostomla") should return false.
* palindrome("My age is 0, 0 si ega ym.") should return true.
* palindrome("1 eye for of 1 eye.") should return false.
* palindrome("0_0 (: /-\ :) 0-0") should return true.
* palindrome("five|\_/|four") should return false.

# 01 - Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

*List of tests*

* ```findLongestWord("The quick brown fox jumped over the lazy dog")``` should return a number.
* ```findLongestWord("The quick brown fox jumped over the lazy dog")``` should return 6.
* ```findLongestWord("May the force be with you")``` should return 5.
* ```findLongestWord("Google do a barrel roll")``` should return 6.
* ```findLongestWord("What is the average airspeed velocity of an unladen swallow")``` should return 8.
* ```findLongestWord("What if we try a super-long word such as otorhinolaryngology")``` should return 19.

# 02 - Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*List of tests*

* ```titleCase("I'm a little tea pot")``` should return a ```string```.
* ```titleCase("I'm a little tea pot")``` should return ```"I'm A Little Tea Pot"```.
* ```titleCase("sHoRt AnD sToUt")``` should return ```"Short And Stout"```.
* ```titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")``` should return ```"Here Is My Handle Here Is My Spout"```.

# 03 - Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

*List of tests*

* ```largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])``` should return an ```array```.
* ```largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])``` should return ```[27,5,39,1001]```.
* ```largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])``` should return ```[9, 35, 97, 1000000]```.

# 04 - Confirm the Ending
Check if a string (first argument, ```str```) ends with the given target string (second argument, target).

*List of tests*

* ```confirmEnding("Bastian", "n")``` should return ```true```.
* ```confirmEnding("Connor", "n")``` should return ```false```.
* ```confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")``` should return ```false```.
* ```confirmEnding("He has to give me a new name", "name")``` should return ```true```.
* ```confirmEnding("Open sesame", "same")``` should return ```true```.
* ```confirmEnding("Open sesame", "pen")``` should return ```false```.
* ```confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")``` should return ```false```.
* Do not use the built-in method .endsWith() to solve the challenge.
* confirmEnding("Bastian", "n") should return true.
* confirmEnding("Connor", "n") should return false.
* confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
* confirmEnding("He has to give me a new name", "name") should return true.
* confirmEnding("Open sesame", "same") should return true.
* confirmEnding("Open sesame", "pen") should return false.
* confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
* Do not use the built-in method .endsWith() to solve the challenge..
* confirmEnding("Bastian", "n") should return true.
* confirmEnding("Connor", "n") should return false.
* confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
* confirmEnding("He has to give me a new name", "name") should return true.
* confirmEnding("Open sesame", "same") should return true.
* confirmEnding("Open sesame", "pen") should return false.
* confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
* Do not use the built-in method .endsWith() to solve the challenge..
