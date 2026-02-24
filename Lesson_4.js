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

// // ну и как сравнивать? существуют несколько способов:
// // 1. использовать итерацию по элементам массивов и сравнивать их поочередно
let arrM = [1, 2, 3];
let arrN = [1, 2, 3];
let result = false;

if (arrM.length === arrN.length) {
    result = true;

    for (let i = 0; i < arrM.length; i++) {
        if (arrM[i] !== arrN[i]) {
            result = false;
            break;
        }
    }
}

console.log(result);

// 3. в Javascript-e, массив можно переобразовать в строчную структуру
// (string representation), а потом сравнивать. как?

// так же как мы использовали Math, существует встроенное в Javascript слово JSON
// более про JSON - мы поговорим позже, но пока:
// JSON рашифровывается как Javascript Object Notation и
//      это текстовой формат передачи или обмена данных.
// JSON используется очень часто, особенно при
//  передачи данных с API/базы данных для работы в фронтенде
// внутри JSON существует метод stringify() который и переобразовывает массив в строку

let myArr = [1, 2, 3];
console.log(myArr);
console.log(JSON.stringify(myArr));
console.log(typeof JSON.stringify(myArr));

// Теперь, с нашим примером,

let arrG = [1, 2, 3, ['a', 'b']];
let arrD = [1, 2, 3, ['a', 'b']];

console.log(JSON.stringify(arrG) === JSON.stringify(arrD));


//-----------------------------------
// spread operator ( ... )
//-----------------------------------
// начиная с ES6 (нынешняя стандартизированная версия Javascript-a), существует понятие спред орератора
// спред оператор это возможность "расскрыть" массив для далнейшей работы с ним.
// это позволяет передавать элементы массива как отдельные части/аргументы
// используется часто для работы с массивами и не только
// Примеры:

// =

// Пример 1. Соединение массивов

let arr4 = [1, 2, 3];
let arr5 = [4, 5,6];

// - задача - соеденить два массива. как?
// циклы
let arr6= [1, 2, 3];
let arr7 = [4, 5, 6];
let arr8 = [];

for (let i = 0; i < arr6.length; i++) {
    arr8.push(arr6[i]);
}

for (let i = 0; i < arr7.length; i++) {
    arr8.push(arr7[i]);
}

console.log(arr6);
console.log(arr7);
console.log(arr8);


// // метод concat()
let arr9 = [1, 2, 3];
let arr10 = [4, 5, 6];
let arr11 = arr9.concat(arr10);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// // а что если соединить нужно 5 массивов?
// // было бы не плохо просто "добавлять" массивы друг за другом
// // типа так:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [arr1, arr2];
// console.log(arr3);
// // но это даст массив из 2х массивов. не совсем то ...

// // поэтому "разварачиваем" оба массива 1 и 2

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [ ...arr1, ...arr2];

console.log(arr1);
console.log(arr2);

console.log(arr3);


// // можно применять логические операторы для работы с массивами

const allAroundFruits = ["banana", "apple"];
const summerFruits = ["watermelon"];
const isSummer = true;

const fruits = [ ...allAroundFruits, ...(isSummer ? summerFruits : [])];
console.log(fruits);

// // ========== Пример 2. Создать массив из строки

// // мы уже знаем о методе split(), который берет строку и делает из него массив
let str = "hello";
console.log(str.split(""));
// так вот можно то же сделать с спред оператором
// (в Javascript, тип данных строка - в некоторых моментах похож на тип данных массив и работает похоже)
console.log([ ...str]);

//------------------------------
// копирование массивов
//------------------------------

// для строк:

let strA = "Hello";
let strB = strA;

console.log(strA);
console.log(strB);

// для массивов:

let arrAA = [1, 2, 3];
let arrBB = arrAA;

console.log(arrAA);
console.log(arrBB);


// // для строк:
let strAQ = "Hello";
let strBA = strAQ;

strA = "Wqrld";
console.log(strAQ);
console.log(strBA);

// // для массивов:

// let arrA = [1, 2, 3];
// let arrB = arrA;

// arrB.push(4);

// console.log(arrA);
// console.log(arrB);


// ---- копирование массивов

/*
Есть несколько способов. Можно делать поверхностное копирование или глубокое копирование

1. Поверхностное копирование.

Поверхностное копирование создает новый массив

Эти методы, как правило, быстры и подходят для массивов примитивных значений (таких как числа или строки).

-> цикл через original и копирование элементов в сору ** (долго!)
** если копировать отдельно вложенные массивы, то копируется как глубокое
-> copy = original.slice();
-> copy = Array.from(original);
-> copy = [].concat(original);

*/
// let arrA = [1, 2, 3];
// let arrB = arrA;
// console.log(arrA);
// console.log(arrB);

// // Самый используемый способ: spread opearator

let ofiginal = [1, 2, 3];
let copy = [...original];

console.log("original: ", original);
console.log("copy: ", copy, "\n");

copy.push(4);

console.log("original: ", original);
console.log("copy: ", copy);

// Все эти способы имеют одну проблему:
// если в оригинале имеется вложенные массив, то копируется не его значение,
// а ссылка на него, поэтому оригинал тоже меняется

let original = [1, 2, 3, ["a", "b"]]
let copy1 = [...original];

console.log("original: ", original);
console.log("copy: ", copy1, "\n");

copy1.push(4);
copy1[3][0] = "A";

console.log("original: ", original);
console.log("copy: ", copy1);

// Глубокое копирование создает полностью независимую копию, копируя все вложенные массивы,
// так что изменения в копии никак не влияют на оригинал.

// Есть два популярных способа:

/*
- structuredClone()
- JSON.parse(JSON.stringify())
*/

// -- самый популярный метод: structuredClone
let originall = [1, 2, 3, ["a", "b"]];
let copyy = structuredClone(originall);

console.log("original: ", originall);
console.log("copy:  ", copyy, "\n");

copyy.push(4);
copyy[3][0] = "A";

console.log("original: ", originall);


// Hack (метод-взлом) для глубокого копирования, существовавшии до появления structuredCIone().
// Он работает медленнее, чем другие методы, и функционирует не со всеми типами данных,
// а только с JSON-сериализуемым (string, number, массивы с простыми типами данных, др.)

// JSON-сериализуемое типы - типы которые можно безопасно перевести в JSON-строку
// с помощью метода JSON.stringify() без потери данных.
// JSON-не-сериализуемые типы либо не могут быть переведены в JSON-строку,
// либо теряют свое первоначальное значение/структуру в процессе перевода. (позже)

let original1 = [1, 2, 3, ["a", "b"]];
let copyMy = JSON.parse(JSON.stringify(original1));
console.log("original: ", original1);
console.log("copy: ", copyMy, "\n");

copyMy.push (4);
copyMy[3][0] = "A";

console.log("original: ", original1);
console.log("copy: ", copyMy);