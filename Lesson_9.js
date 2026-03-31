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

console.log("starting ... ");

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

let promise = new Promise(function(success, failure) { //аргументы это функции
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

let promise1 = new Promise(function(success, failure) {
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


/*
Пример, где промис возвращает негативный результат:
>> так делать нельзя, будет ошибка (об этом позже)
*/

console.log("Start");

let promise2 = new Promise(function(success, failure) {
    // опять симулируем долгое выполнение чего-то
    setTimeout(()=> {
        return failure(console.log("Oops, error"));
    }, 3000);
});

console.log("Finish");

// вернет или успет или провал

console.log("Start");
let ii = 0;

let promise4 = new Promise(function(result, reject) {
    // эта функция выполнится автоматически, при вызове new Promise

    // симулируем долгое выполнение чего-то:
    // через 3 секунды задача выполнена с положительным результатом
    setTimeout(() => {
        if (ii % 2 === 0) {
            return result(console.log("Completed successfully"));
        } 
        else {
            return reject(console.log("Oops"));
        }

    }, 3000);

});

console.log("Finish");


/*
Промис может возвращать что-то одно: либо результат, либо ошибку.
Все последующие вызовы будут проигнорированы.
*/

let promise5 = new Promise(function(success, failure) {
    success(),
    failure() // игнорируется
})


/*
Подведем предварительные итоги:

У нас есть функции-исполнители (success/failpre), которые вызываются либо при успехе, либо при ошибке.
У нас есть промис - это объект, который служит связующим звеном между функциями-исполнителями и потребителями

Остается вопрос: Как использовать промисы? Что такое "потребители" и как они работают?


Потребители - это тоже функции! Методы класса Promise.

then()
catch()
finally()

*/

// ================= then()

// существует какой-то промис. он возвращает либо положительный либо ошибочный результат.
let promise6 = new Promise(function(success, failure) {
    success(),
    failure()
})
// мы може написать:

promise6.then(
    function(result) {
        // здесь обрабатываем выполнение
    },
    
    function(error) {
        // здесь обрабатываем ошибку
    }
);

/*
then() имеет два аргумента:
- функция которая выполняется, когда промис был успешно выполнен, и получает результат как параметер функции
- функция которая выполняется, когда промис был выполнен с ошибкой, и получает ошибку как параметер функции

then() возвращает новый промис - это может быть полезно в некоторых ситуациях. 
then() сам по себе это тоже промис

*/

//Example
// кто-то написал вот такой промис

let promise7 = new Promise(function(success, failure) {
    setTimeout(() => {
        // if (2 > 0) {
        //     return success("promise is done!")
        // }
        // else {
        //     return failure("opps");
        // }
        return success("promise is doneee!");
    }, 1500);
});

// мы можем написать:

promise7.then(
    function(result) {
        return console.log(result); // выведет "promise is doneee!" через 1.5 секунды
    },
    function(error) {
        return console.log(error); // не будет запущена
    }
);


// // либо, со стрелочной функцией:

let promise8 = new Promise(function(success, failure) {
    setTimeout(() => {
        return success("promise is doneee!");
    }, 1500);
});

promise8.then(
    (result) => console.log(result), // выведет "promise is doneee!" через 1.5 секунду
    (error) => console.log(error) // не будет запущена
);
 
/*
Если мы заинтересованы только в результате успешного выполнения задачи,
то в then можно использовать только одну функцию:
*/

let promise9 = new Promise(function(success) {
    setTimeout(() => {
        return success("promise is doneee!");
    }, 1000);
});

promise.then(
    (result) => console.log(result)

);

// // promise.then(console.log); // сокращение

/* Еще сокращение ... Часто испольуется именно так. */

let promise10 = new Promise(function(success) {
    setTimeout(() => {
        return success("promise is doneee !! ");
    }, 1000);
}).then((result) => {
    return console.log(result);
})

//=============== цепочка промисов (then chaining)
/* представим ситуацию:
у нас есть несколько асинхронных задач (например, загрузка скриптов),
которые нам нужно вызвать одну за другой,
в определенном порядке. скрипт 2 не может быть вызван до скрипта 1, а скрипт 3 до скрипта 2.
как это сделать?
мы можем использовать цепочку промисов
 каждый раз мы используем then, он возвращает новый промис, результат предыдущего промиса
*/

const promise11 = new Promise(function(resolve) {
    setTimelout(()=> resolve(2), 1000);
}). then(function(result) {
    let r = result * 2;
    console.log(r); // 4
    return r;

}). then(function(result) {
    let r = result * 2;
    console.log(r); // 8
    return r;

}).then(function(result) {
    let r = result * 2;
    console.log(r); // 16
    return r;
});


// распространенная ошибка!
const promise12 = new Promise(function(resolve, reject) {
    setTimeout(()=> resolve(2), 1000);
});

promise12.then(function(result) {
    let r = result * 2;
    console.log(r); // ?
    return r;
});

promise12.then(function(result) {
    let r = result * 2;
    console.log(r); // ?
    return r;
});

promise12.then(function(result) {
    let r = result * 2;
    console.log(r); // ?
    return r;
});


// =============== catch
// catch нужен если нужно обработать ошибку
// работает так же как и then
let promise13 = new Promise(function(success, failure) {
    setTimeout(() => {
        return failure("error, sorry :(");
    }, 1000);

});
promise13.catch(console.log);T

// либо
let promise14 = new Promise(function(success, failure) {
    setTimeout(() => {
        return failure("error, sorry :(");
    }, 1000);
}).catch((error) => {
    return console. log(error);
});

// ======================== finally
/* метод вызывается после завершения промиса, не важно положительного или нет.
если нужно что-то доделать после промиса, остановить счетчик, очистить код,
закрыть какие то соединения и т.д.
finally не имеет аргументов
может быть вызван до или после then/catch
*/

const num = 1;

new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (num % 2 === 0) {
            resolve("sum is even");
        }
        else {
            reject("sum is odd");
        }
    }, 1000);
})
.then(result => console.log(result))
.then(result => console.log(result)) //можем использовать несколько then
.catch(err => console.log(err))
.finally(() => console.log("Промис завершен"))
















