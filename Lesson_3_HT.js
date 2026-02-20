// Материал к прочтению:

// https://www.w3schools.com/js/js_strings.asp   
// https://www.w3schools.com/js/js_string_methods.asp 

// https://www.w3schools.com/js/js_array_methods.asp  
// https://learn.javascript.ru/array-methods  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift 

// https://www.w3schools.com/js/js_if_else.asp 
// https://learn.javascript.ru/ifelse 

// https://www.w3schools.com/js/js_switch.asp 
// https://learn.javascript.ru/switch 

console.log('----------------------------------------');
// Задачки:

// Строки. Установить какие методы строк изменяют начальное значение строки.
	
// Дана строка: 
// string = 'Knowledge of built-in JavaScript methods speeds up a tester\'s work.'

// // Методы:
// console.log(string.charAt()); //или с[0] //не меняет, возвращает символ под индексом
// console.log(string.charAt(string.length -1));; //не меняет, возвращает символ под индексом - отсчитывает с конца
// console.log(string.substring(1, 4)); //не меняет, возвращает новую строку с 1 по 3 символ включительно (4 не включая)
// console.log(string.substr(1, 3)); //не меняет, возвращает новую строку с 1 по 3 символ включительно
// console.log(string.slice(-3)); //не меняет, возвращает новую строку с буквами с конца
// console.log(string.indexOf('l')); //не меняет, возвращает индекс буквы
// console.log(string.lastIndexOf('l')); //не меняет, возвращает индекс буквы, отсчитывает с конца
// console.log(string.split('of')); //не меняет, разделяет по "of"
// console.log(string.replace('l', 'L')); //меняет
// console.log(string.replaceAll('l', 'L')); //меняет
// console.log(string.toUpperCase());//меняет
// console.log(string.toLowerCase());//меняет

console.log('----------------------------------------');
// Заполнить таблицу методов строк. Она находится в той же папке, где и домашние задания. Копируем табличку к себе (локально) и заполняем.
console.log('----------------------------------------');

// Массивы. Установить какие методы массивов изменяют начальное значение массива

// Дан массив: const arr = [1, 2, 3, "a", "b", "c"]

// arr = [1, 2, 3, "a", "b", [4, 5], "c"]
// str = arr.join()
// new_flat = arr.flat()
// // Методы:

// console.log(arr.at()); //не меняет
// console.log(arr.push(9)); //меняет - добавляет в конец
// console.log(arr.unshift(9));//меняет - добавляет в начало
// console.log(arr.pop()); //меняет - удаляет с конца
// console.log(arr.shift()); //меняет - удаляет в начале
// console.log(str, typeof(str)); //возвращает строку
// console.log(arr.indexOf(2)); // не меняет - возвращает индекс
// console.log(arr.lastIndexOf(2)); // не меняет - возвращает индекс (с конца)
// console.log(arr.includes('b')); // не меняет -возвращает true/false
// console.log(new_flat); //не меняет, возвращает новый
// console.log(arr.reverse()); //меняет - переворачивает
// console.log(arr.slice(0, 1)); //не меняет, возвращает извлученную строку
// console.log(arr.splice(0, 2)); //меняет исходный, возвращает удаленную часть
// console.log(arr.copyWithin(0, 1)); //меняет исходный массив, возвращает измененный массив

console.log('----------------------------------------');

// Заполнить табличку методов массивов. 
// Она находится в той же папке, где и домашние задания. Копируем табличку к себе (локально) и заполняем.

console.log('----------------------------------------');

// Область тестирования программных продуктов активно развивается и появляются новые названия профессии тестировщик. 
// С помощью какого метода можно добавить название профессии "SDET" и "Lead SDET" в конец массива testerPositions? 
// Напишите решение и распечатайте результат.

// const testerPositions = [
//     "Quality Assurance Engineer",
//     "Software Tester",
//     "Test Automation Engineer",
//     "Quality Analyst",
//     "QA Tester",
//     "Test Engineer",
//     "Quality Control Analyst",
// ];

// testerPositions.push('SDET')
// testerPositions.push('Lead SDET')
// console.log(testerPositions);

// testerPositions.push('SDET', 'Lead SDET')
// console.log(testerPositions);

console.log('----------------------------------------');

// В этом коде что-то не так. Найдите ошибки, покажите какие и переделайте код, чтобы он работал правильно

// let day = "monday";
// let message;

// if (day === "Monday".toLowerCase()) {
//      message = "It's Monday!";
// } 
// else if (day === "TUesday".toLowerCase()) {
//      message = "It's Tuesday!";
// } 
// else if (day === "Wednesday".toLowerCase()) {
//      message = "It's Wednesday!";
// } 
// else if (day === "thursday".toLowerCase()) {
//      message = "It's Thursday!";
// } 
// else if (day === "Friday".toLowerCase()) {
//      message = "It's Friday!";
// } 
// else if (day === "Saturday".toLowerCase()) {
//      message = "Its Sunday!";
// } 
// else if (day === "Sunday".toLowerCase()) {
//      message = "It's Sunday!";
// } 
// else {
//      message = "Invalid day!";
// }

// console.log(message);

console.log('----------------------------------------');

// // В этом коде ошибки. Найдите, покажите какие и почините.

// const monthNumber = 8;
// let result3 = "";

// switch (monthNumber) {
//      case 1:
//           result3 = "January";
//           break;
//      case 2:
//           result3 = "February";
//           break;
//      case 3:
//           result3 = "March";
//           break;
//      case 4:
//           result3 = "April";
//           break;
//      case 5:
//           result3 = "May";
//           break;
//      case 6:
//           result3 = "June";
//           break;
//      default:
//           result3 = "Select a number 1 - 6"
// }

// console.log(result3);

console.log('----------------------------------------');

// Используя switch, напишите программу перевода дней недели из цифр в названия (перевести дни 1-7 в Пон-Вос)
// let dayNumber = 0;
// let dayName = '';

// switch (dayNumber) {
//     case 1:
//         dayName = 'Monday';
//         break;
//     case 2:
//         dayName = 'Tuesday';
//         break;
//     case 3:
//         dayName = 'Wednesday';
//         break;
//     case 4:
//         dayName = 'Thursday';
//         break;
//     case 5:
//         dayName = 'Friday';
//         break;
//     case 6:
//         dayName = 'Saturday';
//         break;
//     case 7:
//         dayName = 'Sunday';
//         break;
//     default:
//         dayName = 'Enter a number 1 - 7';
//         break;
// }

// console.log(dayName);

console.log('----------------------------------------');

// Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, 
// то программа должна показать - “approved”, если другие месяцы, то - “denied”.
// let month = '1';
// let notVocationMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'September', 'October', 'November', 'December']
// let vocationMonth = ['July', 'August']
// let message = 'Enter a valid month'

// for (let i = 0; i < vocationMonth.length; i++) {
//     if (vocationMonth[i] == month) {
//         message = 'Approved'
//     }
// }
// for (let i = 0; i < notVocationMonth.length; i++) {
//     if (notVocationMonth[i] == month) {
//         message = 'Denied'
//     }
// }

// if (month === 'July' || month === 'August') {
//     message = 'Approved'
// } else if (month === 'January' || month === 'February' || month === 'March' || month === 'April' || month === 'May' || month === 'June' || month === 'September' || month === 'October' || month === 'November' || month === 'December') {
//     message = 'Denied'
// } else {
//     message = 'Enter a valid month'
// }

// month === 'July' || month === 'August' ? message = 'Approved' : message = 'Denied'

// console.log(message);

console.log('----------------------------------------');

// Напишите простенький калькулятор (*, /, +, -). У вас должны быть две переменные для исходных чисел и одна для оператора.
// В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль. 
// Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д.
// let firstNumber = -2.5;
// let secondNumber = 2;
// let arithmeticOperator = '***';
// let result;

// switch (arithmeticOperator) {
//     case '+':
//         result = firstNumber + secondNumber
//         break;
//     case '-':
//         result = firstNumber - secondNumber
//         break;
//     case '/':
//         result = firstNumber / secondNumber
//         break;
//     case '*':
//         result = firstNumber * secondNumber
//         break;
//     case '%':
//         result = firstNumber % secondNumber
//         break;
//     case '**':
//         result = firstNumber ** secondNumber
//         break;
//     default:
//         result = 'Enter a valid operator: +, -, /, *, %, **'
//         break;
// }

// console.log(result);

console.log('----------------------------------------');

// Напишите программу, которая определяет, является ли заданный год високосным по правилам Григорианского календаря. 
// Високосный год делится на 4, за исключением случаев, когда он делится на 100, но не на 400.
// let year = 2300;
// let finalMessage = '';

// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//     finalMessage = 'This year is a leap year'
// } else {
//     finalMessage = 'This year is not leap year'
// }

// console.log(finalMessage);

// Напишите программу, которая рассчитывает стоимость билета в зависимости от возраста.
// Дети до 2х лет - бесплатно
// Дети до 10 лет - скидка в 50%
// Пожилые (после 65) - скидка в 15%
// Студенты - скидка в 10%
// let humanAge = 66;
// let humanState;
// let price = 10;
// let discount;
// let student = false;
// let finalPrice;

// if (humanAge <= 2) {
//     humanState = 'You are a child under 2 years old'
//     discount = price
//     finalPrice =  price - discount;
// } else if (humanAge > 2 && humanAge <= 10) {
//     humanState = 'You are a child under 10 years old'
//     discount = price * 0.5;
//     finalPrice =  price - discount;
// } else if (humanAge > 10 && student) {
//     humanState = 'You are a student'
//     discount = price * 0.1;
//     finalPrice =  price - discount;
// } else if (humanAge > 65) {
//     humanState = 'You are a senior'
//     discount = price * 0.15;
//     finalPrice =  price - discount;
// } else {
//     humanState = 'You don\'t have a discount'
//     discount = 0;
//     finalPrice =  price - discount;
// }

// let messageForHuman = `${humanState}. The tiket price is ${price}. Your discount is ${discount}. The final price: ${finalPrice}`;

// console.log(messageForHuman);

console.log('----------------------------------------');

// Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. 
// За сколько дней она доползет до вершины стены.


console.log('----------------------------------------');

// Креативное задание:
// Напишите следующую программу:
// У клиента должен быть выбор из двух (или трех) видов кофе (на ваш выбор).
// Дайте названия вашим видам кофе.
// Установите цену на кофе в зависимости от величины стаканчика (small, medium, large).
// Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
// Компоненты кофе не влияют на стоимость.
// Используйте подходящую комбинацию условий - if, else if, else - для решения задачи.

// Создайте программу, которая определяет, имеет ли человек право на определенное мероприятие, на основе нескольких критериев: 
// возраста, статуса членства и посещения предыдущих мероприятий.
// Критерии участия:
// Возраст должен быть не менее 18 лет.
// Для членов клуба другие ограничения не применяются.
// Если человек не является членом клуба, необходимо посетить не менее 3 предыдущих мероприятий.
// Если человек не является членом клуба, но посетил 5 или больше предыдущих мероприятий, он получает специальный VIP-пропуск.  
let age;
let status;
let visitedEvents = true;



console.log('----------------------------------------');

// Задачки на CodeWars:
// https://www.codewars.com/kata/55a70521798b14d4750000a4  
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a 
// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a 
// https://www.codewars.com/kata/554003323fd6af1c4200004e   
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3  
// https://www.codewars.com/kata/55908aad6620c066bc00002a  
