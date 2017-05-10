[![Build Status](https://travis-ci.org/JuanMaRuiz/javascript-exercises.png?branch=master)](https://travis-ci.org/JuanMaRuiz/javascript-exercises)
[![Build Status](https://david-dm.org/JuanMaRuiz/javascript-exercises.svg)](https://travis-ci.org/JuanMaRuiz/javascript-exercises)
Javascript Exercises
====================

This project has been created in order to practice Javascript programming form basics to more complex exercises.

I have used [mocha](https://mochajs.org/) to test the exercises.

I've extracted the exercises from:
* https://coderbyte.com/challenges
* http://www.w3resource.com/javascript-exercises/

### TODO
* More exercises [here](http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php)

### Project structure
```
.
│
├── test                     # Unit tests files (`.test.js`)
│     └── ...-test.js
├── 01-{name}                # JS Modules -> solutions
│     └── README.md          # Exercise explanation
│     └── {module-name}.js   # Exercise implementation
│
├─ .editorconfig
├─ .gitignore
├─ package.json
├─ README.md
```

### How to run tests
* Download the project
* Download dependencies ```npm install```
* Run tests ```npm test```

If you want to launch a single test you can use two approaches:

*Using ```npm test```*

For passing params to ```npm test``` script you need to execute the script with ```run``` and pass params to script test. This is the pattern to use:
```
$ npm run test -- --grep=<test to launch>
```

*Using ```mocha``` directly*

You only need to add the ```grep``` flag and put in quotes the test you want to execute. Example:
```mocha --grep 'test to launch'```

> Remember to put your 'test to launch' between quotes if it has not a single word as a name.
