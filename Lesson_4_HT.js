// Материал к прочтению:

// https://www.w3schools.com/js/js_loop_while.asp  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while  
// https://learn.javascript.ru/while-for  

// Задачки:

// 1. Задача с интервью*
// У вас есть массив со скобками 
// Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
// Решение должно работать для всех массивов внизу.

// Первая последовательность: [ '(', ')', '(', ')', ')']
// Вторая последовательность:  ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a']
// Еще: ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']

let firstArray =  ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']
let firstSymbol = '(';
let secondSymbol = ')';
let thirdSymbol ='{';
let forthSymbol = '}';
let counterBarenthesis = 0;
let counterCurlyBracket = 0;
let newArr = JSON.stringify(firstArray)

for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === firstSymbol || newArr[i] === secondSymbol) {
        counterBarenthesis++
    }
    if (newArr[i] === thirdSymbol || newArr[i] === forthSymbol) {
        counterCurlyBracket++
    }
}
console.log(counterBarenthesis, counterCurlyBracket);


if (counterBarenthesis === 0) {
    console.log('The parenthesis is missing');
} if (counterBarenthesis % 2 === 0) {
    console.log('Each parenthesis has its own pair');
} else {
    console.log('Eeach parenthesis does not have its own pair');
}

if (counterCurlyBracket === 0) {
    console.log('The curly bracket is missing');
} else {
    if (counterCurlyBracket % 2 === 0) {
    console.log('Each curly bracket has its own pair');
} else {
    console.log('Eeach curly bracket does not have its own pair');
    }
}


// 2. Найти самое маленькое число из массива [4, 81, 3, -12, 99, 14]
let minArr = [4, 81, 3, -12, 99, 14]
let minNum = 0;

for (let i = 0; i < minArr.length; i++) {
    if (minNum < minArr[i]) {
        minNum = minNum;
    } else {
        minNum = minArr[i]
    }
}

console.log(minNum);



// 3. Найти самое большое число из массива [4, 81, 3, -12, 99, 14]
let maxArr = [4, 81, 3, -12, 99, 14]
let maxNum = 0;

for (let i = 0; i < maxArr.length; i++) {
    if (maxNum < maxArr[i]) { 
        maxNum = maxArr[i];
    }
    
}

console.log(maxNum);

// 4. Найти сумму всех элементов массива 
// [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"]
let array = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];
let parsArr = array.flat()
let sum = 0

// for (let i = 0; i < parsArr.length; i++) {
//     if (typeof(parsArr[i]) !== 'string') {
//         sum += parsArr[i]
//     }
// }

// console.log(sum);

for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        for (let j = 0; j < array[i].length; j++) {
            sum += array[i][j]
        }   
    } else if (typeof(array[i]) !== 'string') {
        sum += array[i]
    }
      
}
console.log(sum);


// 5. При помощи цикла for выведите чётные числа от 2 до 10

// 6. Переделайте задачку с улиткой используя циклы
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, 
// а каждую ночь съезжает вниз на 2 метра. 
// За сколько дней она доползет до вершины стены.

// 7. Есть код. Какой будет результат этого кода и почему

// const numbers = [1, 2, 3, 4, 5];
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (i % 2 !== 0) {
//             sum += numbers[i];
//         }
//     }
//     console.log(sum);





// 8. Нарисуйте ромб (подсказка: вложенные циклы)

//   *
//  ***
// *****
//  ***
//   *


// 9. Нарисуйте прямоугольный треугольник

// *
// * * *
// * * * * *
// * * * * * * *
// * * * * * * * * *


// 10. Нарисуйте треугольник с цифрами - лево

// 0 1 2 3 4 5 6 7 8 9
// 0 1 2 3 4 5 6 7 8
// 0 1 2 3 4 5 6 7
// 0 1 2 3 4 5 6
// 0 1 2 3 4 5
// 0 1 2 3 4
// 0 1 2 3
// 0 1 2
// 0 1
// 0


// 11. Нарисуйте треугольник с цифрами - право

// 0 1 2 3 4 5 6 7 8 9
//   0 1 2 3 4 5 6 7 8
//     0 1 2 3 4 5 6 7
//       0 1 2 3 4 5 6
//         0 1 2 3 4 5
//           0 1 2 3 4
//             0 1 2 3
//               0 1 2
//                 0 1
//                   0


// 12. Нарисуйте треугольник с цифрами - вниз

// 9 8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8 9
//   8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8
//     7 6 5 4 3 2 1 0 1 2 3 4 5 6 7
//       6 5 4 3 2 1 0 1 2 3 4 5 6
//         5 4 3 2 1 0 1 2 3 4 5
//           4 3 2 1 0 1 2 3 4
//             3 2 1 0 1 2 3
//               2 1 0 1 2
//                 1 0 1
//                   0


// 13. Нарисуйте ромб из цифр (будьте внимательны!)
//                1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1

// 14. Сложнее*: Нарисуйте горизонтальный треугольник из цифр

// 1  
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


// 15. Сложно, на смекалку: Нарисуйте вертикальный треугольник из цифр

// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15

// 16. Креативное задание 1*
// Имеется зашифрованное предложение 

// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”

// Мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.
// Креативное задание 2* (посложнее)

// Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему











// Задачки на CodeWars:

// https://www.codewars.com/kata/554b4ac871d6813a03000035 
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e 
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2 
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077 

// https://www.codewars.com/kata/5932c94f6aa4d1d786000028 
// https://www.codewars.com/kata/570bcd9715944a2c8e000009 
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5 
// https://www.codewars.com/kata/5601409514fc93442500010b 
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099 
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921 
// https://www.codewars.com/kata/58acfe4ae0201e1708000075 

// https://www.codewars.com/kata/5265326f5fda8eb1160004c8 
// https://www.codewars.com/kata/544675c6f971f7399a000e79 

// https://www.codewars.com/kata/572af273a3af3836660014a1 
// https://www.codewars.com/kata/572cb264362806af46000793 
// https://www.codewars.com/kata/572df796914b5ba27c000c90 

// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296 
// https://www.codewars.com/kata/56b29582461215098d00000f 
// https://www.codewars.com/kata/5413759479ba273f8100003d 
// https://www.codewars.com/kata/515e271a311df0350d00000f 
// https://www.codewars.com/kata/5715eaedb436cf5606000381 
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3 
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c 
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7 
// https://www.codewars.com/kata/571d42206414b103dc0006a1 

// Более сложные задачи (для тех кто хочет, не обязательно):

// https://www.codewars.com/kata/555086d53eac039a2a000083
// https://www.codewars.com/kata/5865918c6b569962950002a1 
// https://www.codewars.com/kata/50654ddff44f800200000007 
// https://www.codewars.com/kata/57cc975ed542d3148f00015b
// https://www.codewars.com/kata/582e4c3406e37fcc770001ad

// https://leetcode.com/problems/fizz-buzz/ 
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/ 
// https://leetcode.com/problems/palindrome-number/description/ 

// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ https://leetcode.com/problems/search-insert-position/ 
// https://leetcode.com/problems/remove-element/ 
// https://leetcode.com/problems/two-sum/description/ 
// https://leetcode.com/problems/merge-sorted-array/description/ 

