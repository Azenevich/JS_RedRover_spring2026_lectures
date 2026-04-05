// https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript
/*
Take an Arrow to the knee, Functionally
Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method 
to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the 
corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

const arrowFunc = function(arr) {
  return arr.map( el => String.fromCharCode(el)).join(''); //Complete this function
}

arrayFirst = [84,101,115,116]; //'Test'
arraySecond = [70,85,83,32,82,79,72,32,68,65,72]; //'FUS ROH DAH'

console.log(arrowFunc(arrayFirst));
console.log(arrowFunc(arraySecond));

//https://www.codewars.com/kata/merge-two-sorted-arrays-into-one
/*Merge two sorted arrays into one
You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending 
or descending order. Your task is to merge them into a single array, ensuring that:

The resulting array is sorted in ascending order.
Any duplicate values are removed, so each integer appears only once.
If both input arrays are empty, return an empty array.
No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!
*/

function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2).sort((a, b) => a - b))]
}

console.log(mergeArrays([1,2,3,4], [5,6,7,8]));
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));

//https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
/*For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:
In simple terms, our method does not like the principle of carrying over numbers and just writes down 
every number it calculates :-)

You may assume both integers are positive integers.

Examples

*/
function add(num1, num2) {

  let num11 = num1.toString();
  let num22 = num2.toString();

  let i = num11.length - 1;
  let j = num22.length - 1;

  let result = "";

  while (i >= 0 || j >= 0) {

    let digit1 = i >= 0 ? +num11[i] : 0;
    let digit2 = j >= 0 ? +num22[j] : 0;

    result = (digit1 + digit2) + result;

    i--;
    j--;
  }

  return +result;
}

console.log(add(1222, 30277)); //31499
console.log(add(1236, 30977)); //31111013
console.log(add(38810, 1383)); //391193
console.log(add(49999, 49999)); //818181818


// https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript
/*
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
The questions array is already defined for you and is not the same as the one in the example.
*/

function addNewProp(arr) {
    return arr.forEach( que => {que.usersAnswer = null})
}

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

addNewProp(questions);
console.log(questions);

// https://www.codewars.com/kata/56d6b7e43e8186c228000637/train/javascript
/* 
Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain 
colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return 
the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

function colourAssociation(array){  
  let arr = [];

  array.forEach(el => {
    let obj = {};
    obj[el[0]] = el[1];
    arr.push(obj);
  });

  return arr;
}

//second solution
function colourAssociation(array) {
  return array.map(el => ({ [el[0]]: el[1] }));
}

//third solution
const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}))

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]])); //[{white:"goodness"},{blue:"tranquility"}]
console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]])); //[{white:"goodness"},{blue:"tranquility"}]
console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]])); //[{white:"goodness"},{blue:"tranquility"}]
console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]])); 
//[{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}])


//https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
/*
Count the Digit

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
Square all numbers k (0 <= k <= n) between 0 and n.
Count the numbers of digits d used in the writing of all the k**2.
Implement the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.

*/

function nbDig(n, d) {
    // your code
    let arr = [];
    for (let i = 0; i <= n; i++) {
        let number = i ** 2;
        arr.push(number)
    }
    let stringNew = arr.toString();
    let counter = 0;

    for (let i = 0; i < stringNew.length; i++) {
        if (stringNew[i].includes(d)) {
            counter++
        }
        
    }

    return counter
}

console.log(nbDig(25, 1));

let n = 25;
let d = 1;

//https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript
/*
Find the missing element between two arrays

Given two integer arrays where the second array is a shuffled duplicate of the first array with one 
element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one 
and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.
*/



