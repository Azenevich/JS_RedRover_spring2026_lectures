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
function findMissing(arr1, arr2) {
  // Your solution here
    let arr11 = arr1.sort();
    let arr22 = arr2.sort();
    let num = 0;

    for (let i = 0; i < arr11.length; i++) {
        if (arr11[i] !== arr22[i]) {
            num = arr11[i];
            arr11.splice(i);
        }         
    }


  return num
}

console.log(findMissing([1, 2, 3], [1, 3])); // 2

//https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript
/*
Get decimal part of the given number

Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/

function getDecimal(n){
    let numberStr = Math.abs(n % 1);

    // return numberStr
  return +numberStr.toFixed(10)
}

console.log(getDecimal(5.6)); //0.6
console.log(getDecimal(-5.6)); //0.6


//https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript
/* 
Maximum Triplet Sum (Array Series #7)
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .
Array/list numbers could be a mixture of positives , negatives and zeros .
Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

*/
function maxTriSum(numbers){
  //your code here
  let num =  [...new Set(numbers.sort((a, b) => a - b))]
  let result = num.at(-1) + num.at(-2) + num.at(-3) 
  return result
}

console.log(maxTriSum([3,2,6,8,2,3])); // 17
console.log(maxTriSum([2,9,13,10,5,2,9,5])); // 32
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4])); // 18
console.log(maxTriSum([-3,-27,-4,-2,-27,-2])); // 9
console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12])); // 33
console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67])); // 232


//https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript
/*
Whose bicycle?

I am the father of three wonderful sons. before the beginning of the school year, I promised them that 
I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises 
and I count on you.
You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.
'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.
'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. Use the ageTable 
object which is preloaded:

ageTable = {
            'firstSonAge': 14,
            'secondSonAge': 9,
            'thirdSonAge': 8
           }
*/

function whoseBicycle(diary1, diary2, diary3) {
  // good luck
let ageTable = {
            'firstSonAge': 14,
            'secondSonAge': 9,
            'thirdSonAge': 8
           }

  let firstSunScore = Object.values(diary1).reduce((acc, num) => acc + num);;
  let secondSunScore = Object.values(diary2).reduce((acc, num) => acc + num);
  let thirdSunScore = Object.values(diary3).reduce((acc, num) => acc + num);

  const sons = [
    { name: 'first', sum: firstSunScore, age: ageTable.firstSonAge },
    { name: 'second', sum: secondSunScore, age: ageTable.secondSonAge },
    { name: 'third', sum: thirdSunScore, age: ageTable.thirdSonAge }
  ];

  sons.sort((a, b) => {
    if (b.sum !== a.sum) return b.sum - a.sum;
    return a.age - b.age;
  });

  return `I need to buy a bicycle for my ${sons[0].name} son.`;
}

console.log(whoseBicycle(
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 8,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10
      }
    )) // I need to buy a bicycle for my second son.

console.log(whoseBicycle(
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      }
    )) // I need to buy a bicycle for my third son.


// https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript
/*
Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".

Notes:

Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified
*/
function nicknameGenerator(name){
  const vowels = 'aeiou';
    if (name.length < 4) {
        return "Error: Name too short";
    }
    if (vowels.includes(name[2].toLowerCase())) {
        return name.slice(0, 4); // первые 4 буквы
    } else {
        return name.slice(0, 3); // первые 3 буквы
    }

}
console.log(nicknameGenerator('Robert'));
console.log(nicknameGenerator('Kimberly'));
console.log(nicknameGenerator('Samantha'));
console.log(nicknameGenerator('Jeannie'));
console.log(nicknameGenerator('Douglas'));
console.log(nicknameGenerator('Gregory'));


// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript
/*
Odd-Even String Sort
Given a string s, your task is to return another string such that even-indexed 
and odd-indexed characters of s are grouped and the groups are space-separated. 
Even-indexed group comes as first, followed by a space, and then by the odd-indexed 
part.

Examples
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas".

Notes
Tested strings are at least 8 characters long.

*/

// https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
/*

*/

// https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript
/*

*/

// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
/*

*/

// https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript
/*

*/

// https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript
/*

*/

// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript
/*

*/

// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript



