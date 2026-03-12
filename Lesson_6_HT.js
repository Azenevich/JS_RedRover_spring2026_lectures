// // Материал к прочтению

// // Объекты
// // https://www.w3schools.com/js/js_objects.asp
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
// // https://learn.javascript.ru/object

// // Задачки:

// // 1. Создайте объект cars, где будут 3-4 разные машины с их названиями, моделями, годом выпуска и цветом.

// const car = {
//     fiat: {
//         name: "punto",
//         color: "red",
//         model: "universal",
//         year: 1989,
//     },
//     volvo: {
//         name: "S8",
//         color: "black",
//         model: "mini",
//         year: 2010,
//     },
//     opel: {
//         name: "astra",
//         color: "white",
//         model: "universal",
//         year: 2009,
//     },
// };

// const newCar = new Object();
// newCar.fiat = {
//     name: "punto",
//     color: "red",
//     model: "universal",
//     year: 1989,
// };

// newCar.volvo = {
//     name: "S8",
//     color: "black",
//     model: "mini",
//     year: 2010,
// };

// newCar.opel = {
//     name: "astra",
//     color: "white",
//     model: "universal",
//     year: 2009,
// };

// console.log(car);
// console.log(newCar);

// // 2. Работа с объектом room. Выполняйте пошагово.
// //     а. Создайте объект room и его параметры:
// //         	ключ height со значением 3
// //         	ключ tv со значением samsung
// //         	ключ big со значением true
// //     b. Выведите в console все параметры объекта room по очереди
// //     c. Выведите в console тип данных параметра big
// //     d. Выведите в console количество символов в строке параметра tv (длину строки)
// //     e. Выведите в console результат расчёта: длина строки параметра tv минус 1
// //     f. Поменяйте samsung на все заглавные буквы и выведите в console.
// //     g. Замените samsung на LG в нашем объекте room
// //     h. Добавьте в наш объект room ещё одну пару ключ-значение:
// //         ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"
// //     i. выведите chair в console (путем обращения к массиву)
// //     j. Удалите из нашего объекта room параметр big

// const room = {
//     'height': 3,
//     'tv': 'samsung',
//     'big': true
// };

// console.log(room.height);
// console.log(room.tv);
// console.log(room.big);
// console.log(typeof room.big);
// console.log(room.tv.length);
// console.log(room.tv.length - 1);
// room.tv = room.tv.toUpperCase();
// console.log(room.tv);
// room.tv = 'LG'
// room.furniture = ["table", "chair", "sofa"]
// console.log(room);
// console.log(room.furniture[1]);

// delete room.big
// console.log(room);

// // 3. Создайте функцию, которая принимает следующий объект как параметр:
// //     {name: "dog", legs: 4, color: "yellow"}
// //     Возвратите строку: "This yellow dog has 4 legs."
// const dogDescription = {
//     name: "dog", 
//     legs: 4, 
//     color: "yellow" 
// };

// function returnDogDescription(object) {
//     return `This ${object.color} ${object.name} has ${object.legs} legs`
// }

// console.log(returnDogDescription(dogDescription));

// // 4. Что произойдет при выполнении следующего кода и почему?

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (let key in person) {
//     console.log(key);
// }

// // Варианты ответа:
// // 1. Будут выведены все значения свойств объекта “person”.
// // 2. Будут выведены все ключи свойств объекта “person”. - This is a rigth answer
// // 3. Будет выведено количество свойств объекта “person”.
// // 4. Будет выведена ошибка.

// // 5. Что будет результатом работы кода и почему?

// const person = {
//     name: "John",
//     age: 30,
//     occupation: "Engineer",
//     sayHello: function () {
//         console.log(
//         `Hello, my name is ${this.name} and I am ${this.age} years old.`,
//         );
//     },
// };

// person.sayHello();

// // Варианты ответов:
// // 1. Hello, my name is John and I am 30 years old.  - This is a rigth answer
// // 2. Hello, my name is ${person.name} and I am ${person.age} years old.
// // 3. Hello, my name is ${this.name} and I am ${this.age} years old.
// // 4. Hello, my name is undefined and I am undefined years old.

// 6. Есть список людей, которые подписались на международную встречу разработчиков.

 var developers = [
     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
     { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
     { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
     { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
     { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
     { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
     { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
 ];

//     Вопрос: есть ли хоть один разработчик, работающий на JavaScript? Возвратите да или нет. Будьте внимательны.

// 7. Задача для сладкоежек. Есть массив десертов. Выведите самый дешевый десерт и самый дорогой десерт.

//     const desserts = [
//         { name: "Пирожное", price: 65 },
//         { name: "Мороженое", price: 35 },
//         { name: "Торт Наполеон", price: 250 },
//         { name: "Песочное Печенье", price: 50 },
//         { name: "Пудинг", price: 80 },
//         { name: "Фруктовый Тарт", price: 40 },
//         { name: "Желе Земляничное", price: 40 },
//         { name: "Вафли Шоколадные", price: 36 },
//         { name: "Булочка с Изюмом", price: 28 }
//     ];

// 8. Креативное задание.

// Создайте библиотеку книг Стивена Кинга, Марка Твена и Александра Сергеевича. В библиотеке должно быть по 5 книг каждого писателя. Каждая книга должна иметь идентификатор (isbn), имя книги, имя автора, год выпуска, жанр, количество страниц, популярность книги у этого автора (от 1 до 5) и
// первое предложение/строку.

//     a. Выведите в console названия всех книг.
//     b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
//     c. Отсортируйте библиотеку по году выпуска книг



// 1. У вас есть массив чисел, нужно наполнить массив числами первого массива, умноженными на 2.
// const nums = [3, 88, 65, 5, 9]; через мап

//Преобразуйте многомерный массив в одномерный массив разными способами (классический for, for in, for of).
// const multiArr = [[1,2], [3,4], [5,6]];