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
function sortMyString(S) {
    let evenChars = '';
    let oddChars = '';
    
    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
            evenChars += S[i];
        } else {
            oddChars += S[i];
        }
    }
    
    return evenChars + ' ' + oddChars;
}

console.log(sortMyString("CodeWars"));
console.log(sortMyString("YCOLUE'VREER"));

// https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
/*
Power of two

Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is 
not a power of 2
*/
function isPowerOfTwo(n){
  //.. should return true or false ..
  // 0 не является степенью 2
    if (n === 0) return false;

    // проверка через битовую операцию:
    // число является степенью 2, если только один бит равен 1
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1024)); // true
console.log(isPowerOfTwo(4096)); // true
console.log(isPowerOfTwo(333));  // false
console.log(isPowerOfTwo(1));    // true
console.log(isPowerOfTwo(0));    // false

// https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript
/*
String Reordering
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'
*/
function sentence(arrayOfObjects) {
  // Преобразуем массив объектов в массив пар [key, value]
    const pairs = arrayOfObjects.map(obj => {
        const key = Object.keys(obj)[0]; // ключ как строка
        return [parseInt(key), obj[key]]; // преобразуем ключ в число
    });

    // Сортируем по числовому ключу
    pairs.sort((a, b) => a[0] - b[0]);

    // Извлекаем значения в порядке ключей и объединяем в строку
    return pairs.map(pair => pair[1]).join(' ');
}

/*second solution
const obj = {};
  arrayOfObjects.forEach(item => {
    const key = Object.keys(item)[0];
    obj[Number(key)] = item[key];
  });

  // Берём ключи, сортируем и соединяем значения
  return Object.keys(obj)
               .sort((a, b) => a - b)
               .map(key => obj[key])
               .join(' ');
*/

const List = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
];

console.log(sentence(List)); //

// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
*/
function minSum(arr) {
  // your code here
  const newArr = arr.sort((a, b) => a - b);
  const middle = newArr.length / 2
  let result = 0;

  for (let i = 0; i < middle; i++) {
    let multiplication = newArr[i] * newArr[newArr.length - 1 - i];
    result += multiplication   
  }

  return result;
}
console.log(minSum([5,4,2,3])); //22
console.log(minSum([12,6,10,26,3,24])); //342
console.log(minSum([9,2,8,7,5,4,0,6])); //74

// https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript
/*
Unpacking Arguments

You must create a function, spread, that takes a function and a list of arguments to be applied to that function. 
You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")
*/
function spread(func, args) {
  return func(...args)
  
}

console.log(spread(function(x, y) { return x + y; }, [1, 2]));

// https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript
/*
vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"

*/

function vowelOne(s){
  const vowels = 'aeiou';
  let newStr = []

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      newStr.push(1)
    } else {
      newStr.push(0)
    }
    
  }
  return newStr.join('')
  
}

console.log(vowelOne('vowelOne')); //01010101
console.log(vowelOne('123, arou')); //000001011


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

// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript
/*
Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

*/
const suspectInfo = {'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']};

 const dead = ['Lucas', 'Bill'];

function killer(suspectInfo, dead) {
  for (let suspect in suspectInfo) {
    const seen = suspectInfo[suspect];

    const sawAllDead = dead.every((victim) => seen.includes(victim));

    if (sawAllDead) {
      return suspect;
    }
  }
}

console.log(killer(suspectInfo, dead));


// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
/*
Data Reverse
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/
function dataReverse(data) {
  const result = [];
  const chunkSize = 8;

  // Разделяем массив на блоки по 8 элементов
  for (let i = 0; i < data.length; i += chunkSize) {
    result.push(data.slice(i, i + chunkSize));
  }

  // Разворачиваем порядок блоков
  return result.reverse().flat();
}



