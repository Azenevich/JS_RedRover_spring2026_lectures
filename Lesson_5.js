//--------------------------
// функции (function)
//--------------------------

// Что такое функция?
// - функция - это еще один тип данных в Javascript
// - код, который написан отдельно, который делает какую то одну определенную задачу
// Зачем нужны функции?
// - использование кода многократно, не повторятся в коде
// - объединение кода по функционалу
// - создание легко-читаемого, чистого кода
// - и т.д.

// Предположим, нужно распечатать следующие математические действия:

const a = 5;
const b = 10;

console.log("\nResult of calculations: ");
console.log("-----------------------------")
console.log(a + b);

console.log("\nResult of calculations: ");
console.log("----------------------");

console.log(a - b);

console.log("\nResult of calculations: ");
console.log("--------------------------");

console.log(a * b);

// ============== декларирование функции

function functionName () {
// тело функции
return result;
}

// слово function - зарезервированное слово.

// ИмяФункции - название функции. может быть что угодно, нужно называть понятно, о том что делает функция
// может содержать буквы, цифры (не может начинаться с цифры), некоторые др.

// круглые скобки и фигурные скобки - обязательны.
// круглые скобки - означают что это функция и исплользуются для приема аргументов (позже)
// фигурные скобки - ограничивают тело функции. весь код функции должен быть между ними.

// тело функции - будет содержать все что должна сделать функция

// слово return - зарезервированное слово. говорит что возвращать. после него, ничего
// не работает, функция останавливает действие и результат возвращается

// функция может возвращать результат (через return) или нет (void function)

// функцию нужно вызывать из кода (function invocation)

// void function
function Print() {
    console.log("Hello World printed");
}

Print();

// // function that returns some result

function Greeting() {
    return "Hello World returned";
}

Greeting();

// Теперь, нашу задачу можно переписать:

function Print() {
    console.log("\nResult of calculation:")
    console.log("----------------------------")
}

const aq = 5;
const bq = 10;

Print();
console.log(aq + bq);

Print();
console.log(aq - bq);

Print();
console.log(aq * bq);

// // переменные внутри функции
function Sum() {
    const az = 5;
    const bz = 10;

    return az + bz;
}

console.log(Sum());

// // переменные "аz" и "bz" видны только внутри этой функции!


// // ======= аргументы функции
// // что если наши а и b должны меняться?

function Sum(a, b) {
    return a + b;
}

console.log(Sum(5, 10));

// - аргументов может быть сколько нужо
// - они могут быть любыми типами данных
// - разделяются запятой
// - названия аргументов должны что-то значить
// - для названия аргументов используется camelCase

// // необязательный (optional) аргумент
function Sum(a, b = 10) {
    return a + b;
}
console.log(Sum(5));

// // функция имеет доступ к внешним параметрам
const c = 100;

function Sum(a, b) {
    return a + b + c;
}

console.log(Sum(1, 3));

// // вызов функции с присвоением к переменной
function Sum(a, b) {
    return a + b;
}
const sum = Sum(1, 2);
console.log(sum);
console.log(Sum(1, 2));

// функция может быть внутри другой функции.
// область видимости переменных -- > функция Inner() видна только внутри Outer()
function Outer(){
    function Inner() {
        return 5;
    }

    return "hello-" + Inner();
}

console.log(Outer());

// ================= рекурсивная функция (recursive function)
// // функция вызывает сама себя
// // таблица квадратов
function squareIt (number) {
//#region ...
    if (number > 4294967296) { //при получении данного чила выйдет из функции, иначе будет вызывать сама себя постоянно и зависнет
        return;
    }
//#endregion

    console.log(number);
    const square = number * number;

    squareIt(square);
}

squareIt(2);


//--------------------------------------------------------
// в Javascript есть 2 способа создавать функцию:
// - функциональное объявление (function declaration)
// - функциональное выражение (function expression)

// ====== 1. функциональное объявление (function declaration)
// это когда мы создаем функцию декларируя/объявляя ее, давая ей имя и вызывая ее по имени
// - у этой функции всегда есть имя
// - может использоваться глобально или в рамках определенной области действия

Print(); //сначала можем вызвать, потом создать - function hoisting

function Print() {
    console.log("Hello World");
}

Print(); 

// в данном случаем, мы можем создавать функцию как показано до ее вызова, но и так же после
// это называется "подъем функции (function hoisting)"
// работает только с function declaration

// // ======

// 2. функциональное выражение (function expression)

// мы уже видели, что вызывая функцию, ее результат можно присвоить переменной
function Sum(a, b) {
    return a + b;
}

let sum1 = Sum(1, 2);
// <--- переменная sum1 (с маленькой буквы), функция Sum (с большой буквы)
console.log(sum);

// мы так же можем просвоить саму функцию к переменной

const sum2 = function Sum(a, b) {
return a + b;
}
console.log(sum(1, 2));


// // // мы уже видели, что вызывая функцию, ее результат можно присвоить переменной
function Sum(a, b) {
    return a + b;
}
let slozhenie = Sum(1, 2);
let slozhenie1 = Sum(1, 2);
console.log(slozhenie);

// мы так же можем просвоить саму функцию к переменной
let slozhenie2 = function Sum(a, b) {
    return a + b;
}

const slozhenie3 = function Sum(a, b) {
    return a + b;
}

console.log(slozhenie2(1, 2));
console.log(slozhenie3(11, 12));

// это называется function expression (Функциональное Выражение)
// - в function expression ставим ";" в конце, так же как когда создаем переменную
// - function expression не поднимается наверх кода (no hoisting!), поэтому нельзя
// вызывать функцию до того как ее объявили
// // так делать НЕЛЬЗЯ:

console.log(sum22(1, 2));
const sum22 = function Sum(a, b) {
    return a + b;
};


// // -----------------чем же полезна function expression?

// / --- было:
const summ = function Sum(a, b) {
    return a + b;
};
// // --- стало:
const sum9 = function(a, b) { //без названия
    return a + b;
};
console.log(summ(1, 2));

// // есть несколько полезных вещей.
// // 1. часто, не нужно имя функции, а просто ее исполнение - анонимная функция

console.log(sum(1, 2));


// 2. гибкость function expression
// - можно упростить написание
// - часто используются для обратных вызовов (позже)

// зачем слово function? что на самом деле оно делает?
// давайте попробуем его убрать?
// // --- было:
const sum3 = function(a, b) {
    return a + b;
}
console.log(sum(1, 2));


// // --- стало:
const sum4 = (a, b) => {
    return a + b;
};
console.log(sum(1, 2));

// так работать не будет, т.к. javascript должен понимать что это все таки функция.
// поэтому придумали добавить стрелку

const sum5 = (a, b) => {
    return a + b;
}
console.log(sum(1, 2));

// и получилась "стрелочная функция" (arrow function)

//#region

// // если функция возвращает одну строку, return можнот опустить
const sum6 = (a, b) => a + b;
console.log(sum6(1, 2));

// // если один аргумент, круглые скобки вокруг аргументов можно опустить
const sum7 = (a) => a * 2; // nu6o const sum = a => a * 2;
console.log(sum7(5));

//#endregion

// Подводим итоги:
// 3 вида написания функции:

function myFunction() { // function declaration
    return ""
}

const myFunction = function() { // function expression
    return "";
}

const myFunction = () => { // arrow function
    return "";
}

// ====== функции и методы

// мы часто раньше говорили, "методы". Что такое методы?
// методы - это те же функции, только объединенные внутри какой-то определенной области действия (позже)
// когда мы раньше говорили: используй метод массива или метод строки - это функции написанные
//      за нас внутри javascript, которые мы можем вызвать и использовать. Мы не знаем как
//      написана эта функция и что происходит внутри - и нам это не нужно знать! Все
//      что нам нужно знать - это есть функция (метод), который принимает какие-то аргументы,
//      делает что-то и возвращает результат. И мы можем этот результат использовать в нашем коде.


// разберем 3 самых наиболее используемых методов массивов:
// - map, filter, reduce
// плюс еще несколько методов

// ---------------------------------
// map
//----------------------------------


// есть массив
const arr = [1, 2, 4, 10, 12];
// задача: умножить каждый элемент массива на 2

// // раньше, сделали бы так:
const newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
}

console.log(newArr);

// вместо, можно использовать метод тар
// метoд тар прокручивается через массив и создает новый, измененный массив

const arr1 = [1, 2, 4, 10, 12];

// сначало создаем функцию. функция принимает аргумент:
//      аргумент - это элемент массива
//      аргумент не меняется, ожидается именно элемент массива
//      все что мы можем изменить - название элемента
//      этот элемент будет менять свое значение

function multiply(item) {
    return item * 2;
}
// // теперь, вызываем эту функцию внутри метода тар, НО без скобок!

arr.map(multiply);

// // метод тар, как аргумент, принимает функцию (callback function)
// // эта функция и будет вызываться столько раз, сколько элементов массива
// // метод тар возвращает новый массив, можно создать переменную и присвоить ей значение метода
const newArr1 = arr.map(multiply);
console.log(newArr1);


// можно немного упрастить. на самом деле, нам сама функция отдельно написанная не нужна.
// мы можем ее написать прямо как аргумент метода тар, используя стрелочную функцию.

//#region map

const newArr2 = arr.map((item) => {
    return item * 2;
});

console.log(newArr2);

//#endregion


// Пример

const celsiusTemperfure = [0, 10, 20, 30];

const fabrenheitTemperature = celsiusTemperfure.map((celsius) => {
    return celsius * 9/5 + 32;
});

console.log(fabrenheitTemperature);


//=========== optional parameters

const res = arr.map((item, index, array) => {
    return ""
});

// item - элемент массива
// index - индекс элемента массива
// array - изначальный массив, до того как мы начали с ним работать (arr, в нашем случае)


const arr4 = [1, 2, 3, 4, 5];

// // задача: умножить каждый элемент массива на 2 КРОМЕ 3-го

const newArr4 = arr4.map((item, index) => {
    if (index !== 2) {
        return item * 2;
    }
    return item;
});

console.log(newArr4);

//------------------- forEach

// так же как и тар, принимает как параметер callback функцию.
// но не возвращает ничего и ничего не создает или меняет, просто прокручивается через элементы массива

const arr5 = [1, 2, 3];

const newItem = arr5.forEach((item) => {
    console.log(item); // вернет undefined
});


// =======================
// filter
//----------------------------------

// метод filter фильтрует элементы массива в зависимости от условия которые мы создаем.
// работает похоже на тар
// возвращает новый массив

const words = ['hello', 'afternoon', 'fun', 'paranthesis', 'hammer'];
const filteredWords = words.filter((word) => word.length > 6);

console.log(filteredWords);

// Пример
// найти и распечатать все четные цифры
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

//----------------------------------
// includes
//----------------------------------

// // ищет если есть элементы массива соответствующие условию
// // возвращает true или false

const arr6 = ['dog', 'cat', 'bird'];
console.log(arr6.includes('dog'));
console.log(arr6.includes('fish'));


// // параметры:
//  searchElement - элемент который искать
//      fromIndex - откуда искать
//          0 based

console.log(["a", "b", "c"].includes("a")); //true
console.log(["a", "b", "c"].includes("b", 1)); //true
console.log(["a", "b", "c"].includes("b", 3)); //false


//-----------------------------
// reduce
//----------------------------
const res1 = arr.reduce(callbackFunction, initialValue);

// метод принимает 2 аргумента: функцию и изначальное значение
// метод который исполняет какие то вычисления для каждого элемента массива по порядку,
// передавая результат из предыдущего вычисления следющему.

// конечный результат - одно значение, возвращается

// // задача: сложить все элементы массива

const arr8 = [1, 2, 3, 4];
const initialValue = 0;

const sum8 = arr8.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);

console.log(sum8);

// initialValue - не обязательно. первое значение.

// accumulator
// - одна из двух аргументов
// - он собирает все значения наших вычислений.
// - первый раз - либо равен начальному значению (initialValue), либо первому элементу массива
// currentValue
// - второй аргумент
// - значение элемента массива, по порядку (нынешнее значение элемента массива)






