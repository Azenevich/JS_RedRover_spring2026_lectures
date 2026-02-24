// //вложенные циклы

// for (let i = 0; i < 5; i++) { //i = 2
//     console.log("i: ", i);

//     for (let j = 0; j < 3; j++) { //j = 3
//         console.log("\tj: ", j); // 0 1 2
//     }
// }

// // Пример:

// // // найти сумму всех элементов массива [[1, 2], [3, 4, 5], [6, 7, 8]]

// // // упражнение на вложенные циклы

// const arr = [[1, 2], [3, 4, 5], [6, 7, 8]];
// let count = 0; //1

// for (let i = 0; i < arr.length; i++) {

//     for (let j= 0; j < arr[i].length; j++) {
//         count += arr[i][j]; //i = 0; j = 1
//     }
// }

// console.log(count);

// //console.log('----------------------------------');

//Пример
/*
*
* *
* * *
* * * * 
* * * * *
*/
// //console.log('----------------------------------');

for (let i = 0; i < 5; i++) {
    let stars = '';

    for (let j = 0; j <= i; j++) {
        stars += '* ';
    }
    
    console.log(stars);
}

// // console.log('----------------------------------');

for (let stars = '', count = '* * * * * '.length ; count > 0; stars +="* ", count-=2) {
     console.log(stars);
    }

// // console.log('----------------------------------');
let stars1 = '';

for (let i = 0; i < 5; i++) {

    for (let j=0; j< i + 1; j++) {
        stars1 += '* ';
    }

    stars1 += '\n';

}

console.log(stars1);

// // ===== директивы break and continue

// // break -- > полностью прекращает выполнение цикла
// // continue -- > прерывает текущую итерацию циклов и продолжает выполнение
// // цикла со следующей итерации

// -------------- break

for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}

console.log("End");

for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

console.log("End");

//======== npuмep

// // выйти из цикла при первом негативном числе

const numbers = [10, 5, 2, -3, 8, 12];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        //негативное число, выйти из цикла
        console.log("Found negative number, exiting");
        break;
    }
    console.log(numbers[i]);
}

console.log("End");


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        if (j === 1) {
            break;
        }
        console.log(j);
    }
}

// // не возвращать негативные числа

const num = [10, 5, 2, -3, 8, 12];

for (let i = 0; i < num.length; i++) {

    if (numbers[i] < 0) {
        //негативное число, пропустить
        continue;
    }

    console. log(numbers [i]);
}

console.log("End");

// // иногда, переменную і нужно создать снаружи цикла
let i = 0; 

for (; i < 5; i++) {
    console.log(i);
}

// иногда нужно изменять счетчик внутри цикла

let j = 0;
for (; j < 5;) {
    console.log(j);
    j++;
}

//---------------------------------
// 2. while loop
//------------------------------

// while (condition) {
// operation;
//}

let index = 0;
while (index < 3) {
    console.log(index);
    index++;
}

//------------------------------
// 3. do ... while loop
//------------------------------

// // do {
    //operation;
// // }
// // while (condition];

// // будет проходить через код минимум 1 раз

// Пример:

const fruits = ['apple', 'pears', 'plums', 'grape'];

let k = 0;

do {
    console.log(fruits[k]);
    k++;
}
while (k < fruits. length);

// -------------------------------
// сравнение массивов
// -------------------------------

// // когда мы сравниваем строки или цифры, мы можем написать
const a = "Hello, my name is John";
const b = "Hello, my name is John";
console.log(a === b);

// в JavaScript мы можем сравнивать массивы.

// // когда сравниваем массивы
let arrA = [1, 2, 3];
let arrB = [1, 2, 3];
console.log(arrA === arrB); //false

// почему?

//#region
// когда мы сравниваем массивы, то сравниваются не содержимое массива
// (как в строке, например), а ссылки в ячейке памяти.
// поэтому, если мы сравниваем две разно-созданные переменные, они никогда не будут равны.

// // Два массива будут равны только тогда, когда они ссылаются на одну и ту же
// переменную. Например:
console.log(arrA === arrA); //true

// // либо

let arrC = arrA;

console.log(arrC === arrA); //true

// Заметим!
// Что мы только что сделали?
// Мы не создали новый массив.
// Мы создали новую переменную и присвоили ей значение уже существующего массива

let arrX = [1, 2, 3];
let arrV = arrX;

console.log("arrX: ", arrX);
console.log("arrV: ", arrV, "\n");

arrX.push(4); //arrV также изменится

console.log("arrX: ", arrX);
console.log("arrV: ", arrV);

//#endregion