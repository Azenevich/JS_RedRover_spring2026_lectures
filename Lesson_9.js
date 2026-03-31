// // ====== set timeout
// // setTimeout(function, interval);
// // если нужно подождать какое то время. в миллисекундах
// // возвращает timeoutId, позитивное число, индетификатор времени setTimeout, можно потом использовать
// // BCTpOeH B javascript

const timeoutId = setTimeout(function() {
    console.log("aaa");
    console.log("bbb");
}, 2000); //2 секунда

console.log("ccc");

// // ====== clearTimeout Meтод (OTMeHAeT setTimeout)
cleprTimeout(timeoutId); // отменил выполнение кода в переменной timeoutId


// // ====== set interval
// setInterval(function, setInterval);
// если нужно вызвать функцию каждые 5 секунд, например

console.log("starting ... ");]

let i = 0;
let intervalId = setInterval(function() {
    if (i === 3) {
        clearInterval(intervalId); // <-- clearInterval MeTOA (OTMeHAeT intervalId)
    }

    console.log(i);
    i++;
}, 2000);


// // ====== синхронное программирование

// Рассмотрим следующий код:
const myName = "John";
const greeting = `Hello, my name is ${myName} !`;
console.log(greeting); // Hello, my name is John!

/*
Этот код:

1. Объявляет строку с именем myName.
2. Объявляет другую строку с именем greeting, которая использует myName.
3. Выводит приветствие на консоль JavaScript.

В данном случае программа работает по одной строке за раз, в том порядке, в котором мы ее написали.
Сначало выполняется первая строка кода, прежде чем перейти к следующей строке.
Каждая строка зависит от работы, проделанной в предыдущих строках.

Это делает эту программу синхронной (synchronous program).
Код идет сверху вниз и исполняется по очереди.
*/


// Допустим у нас есть еще код:
const hello = greeting("Johnny");
console.log(hello);

function greeting(name) {
    return `Hello, my name is ${name} !`;
}

/*
Здесь greeting() это синхронная функция, поскольку вызывающая сторона должна дождаться,
пока функция завершит свою работу и вернет значение, прежде чем мы сможем продолжить.

Что делать, если синхронная функция занимает много времени? 10 секунд. 20 секунд ...

Например:
*/

console.log("Hello, everyone");
console.log("My name is ... ");
console.log(getPersonName()); // <---- Мы сидим и ждем ...
console.log("It's nice to meet you.");

function getPersonName() {
    // симулируем ожидание ...
    const end = Date.now() + 5000;
    while (Date.now() < end) {
        continue;
    }
    return "John";
}

/*

На помощь приходит асинхронное программирование / асинхронные функции

Когда код вызывает асинхронные функции, функции запускаются, но нам не нужно ждать пока функция закончит работать,
мы можем идти дальше.

А когда асинхронная функция закончит свою работу, она выдаст результат.
Когда-нибудь в будущем, точно не знаем. И когда результат выдан, мы можем его использовать.
И нет ожидания!

Теперь, в нашем примере

*/

console.log("Hello, everyone");
console.log("My name is ... ");
console.log(getPersonName());
console.log("It's nice to meet you.");
// "Hello, everyone", "My name is ... " и "It's nice to meet you." распечатуются вначале, а потом, через некоторое время, распечатается имя.
/*
Как работаю асинхронное программирование?

Основой асинхронного программирования является промисы.

*/


// ============================= промис (promise)

/*
Промис - это объект
Когда промис создаётся, она запускается автоматически.


>> Посмотрим как создается промис
>> (только для интереса, на нашем курсе мы не будем создавать промисы, мы будем только использовать уже 
созданные кем-то промисы)

Мы создаем объект от класса Promise. Класс Promise принимает как аргумент функцию.
Эта функция имеет 2 аргумента: положительный и отрицательный.
*/

let promise = new Promise(function(success, failure) {
    success(),
    failure()
});

/*

Сами аргументы - это тоже функции, "callback" функции (функции исполнители)
success(value) - используется если работа завершилась успешно. value - значение результата.
failure(error) - используется если произошла ошибка. error - значение ошибки.

Функции встроены в javascript, их нужно только исползовать.

Имена callback фунцкии могут быть любыми. success or failure, result or error, a or b (но так не надо!)
Когда промис получает результат, сейчас или позже - не важно, он всегда возвращает одну из этих функций.

Пример, где промис возвращает успех:
*/

console.log("Start");

let promise = new Promise(function(success, failure) {
    // эта функция выполнится автоматически, при вызове new Promise

    // симулируем долгое выполнение чего-то:
    // через 3 секунды задача выполнена с положительным результатом
    setTimeout(() => {
        return success(console.log("Completed successfully"));
    }, 3000);

});

console.log("Finish");

// Заметим, что мы не ждем пока исполниться примис,
// текст "Finish" виден раньше чем результат промиса.











