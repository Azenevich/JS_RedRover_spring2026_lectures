// Материал к прочтению

// Функции
// https://www.w3schools.com/js/js_functions.asp 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions  
// https://learn.javascript.ru/function-basics  


// Задачки:

// 1.	Как объявить функцию в JavaScript и почему?

// ФУНКЦИЯ checkAnswer() {
//       console.log(“Hello World”)
// };

// Варианты ответов:
// a.	def checkAnswer() {}
// b.	void checkAnswer() {}
// c.	function checkAnswer() {} //this is a correct answer
// d.	func checkAnswer() {}



// 2.	Какой результат работы кода и почему? Выберите один ответ.

function greet(name) {
    if (name === undefined) {
        return "Hello, stranger!";
    }
    else {
        return "Hello, " + name + "!";
    }
}
console.log(greet());

// Варианты ответов:
//     a. "Hello, stranger!" // this is correct answer
//     b. "Hello, undefined!"
//     c. Ошибка: "name is not defined"
//     d. Ошибка: "greet() takes exactly 1 argument (0 given)"



// 3.	Что вернет вызов функции и почему?

function FindLongestString(arr) {
	let longest = "";

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			const nestedLongest = FindLongestString(arr[i]);

			if (nestedLongest.length > longest.length) {
				longest = nestedLongest;
			}
		} else if (typeof arr[i] === "string") {
			if (arr[i].length > longest.length) {
				longest = arr[i];
			}
		}
	}

	return longest;
}

console.log(FindLongestString(['apple', 'strawberry', ['banana', 'mandarin'], 'grape', ['orange', 'pear']]));

// 	Варианты ответов: 

// Вариант ответа 1:
// Результатом будет ошибка, так как функция FindLongestString не определена внутри цикла.

// Вариант ответа 2:
// Результатом будет 'banana', так как это самая длинная строка в первом вложенном массиве.

// Вариант ответа 3:
// Результатом будет 'orange', так как это самая длинная строка во втором вложенном массиве.

// Вариант ответа 4:
// Результатом будет 'strawberry', так как это самая длинная строка в массиве. // this is a correct answer

// Вариант ответа 5:
// Результатом будет ничего, так как мы не вызываем функцию




// 4.	О стрелочных функциях JavaScript:

// // Пример стрелочной функции
const add = (a, b) => a + b;
console.log(add(2, 3));    // Выведет 5

// Вопрос: Что такое стрелочная функция в JavaScript и почему?

// Варианты ответов:
// a. Стрелочная функция - это метод, который позволяет перемещаться по элементам массива.
// b. Стрелочная функция - это способ определения функции в JavaScript с использованием стрелочного синтаксиса `=>`. //this is a correct answer
// c. Стрелочная функция - это особый тип данных в JavaScript, предназначенный для хранения и передачи функциональности.
// d. Стрелочная функция - это ключевое слово в JavaScript, используемое для создания псевдонимов функций.


// 5.	Напишите функцию, которая выводит в консоль индивидуальное приветствие с именем, которое вы передаете в функцию
function greetingNew(name) {
    let greetingForUser = `Hello dear user ${name}`;
    if (name == undefined) {
        greetingForUser = 'Hello ghost';
        return greetingForUser
    }
    return greetingForUser
}

console.log(greetingNew());

// 6.	Напишите функцию с калькулятором (можно использовать код с предыдущей домашней работы), в которую, 
// в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). 
// Проверьте работу функции.

// Пример:  
// function calculate(a, b, operator)
// {
//    //code
// }

function calculation(firstNumber, secondNumber, operator) {
  if (
    typeof firstNumber !== "number" || isNaN(firstNumber) ||
    typeof secondNumber !== "number" || isNaN(secondNumber)
  ) {
    return "Both arguments must be valid numbers";
  }

  let result;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;

    case "-":
      result = firstNumber - secondNumber;
      break;

    case "*":
      result = firstNumber * secondNumber;
      break;

    case "/":
      if (secondNumber === 0) {
        return "Division by 0 is not allowed!";
      }
      result = firstNumber / secondNumber;
      break;

    case "%":
      result = firstNumber % secondNumber;
      break;

    case "**":
      result = firstNumber ** secondNumber;
      break;

    default:
      return "Enter a valid operator: +, -, /, *, %, **";
  }

  return result;
}

console.log(calculation(12, 2, "+"));  // 14
console.log(calculation(12, 0, "/"));  // Division by 0 is not allowed!
console.log(calculation(12, 'v', "+"));  // Both arguments must be valid numbers


// 7.	Создать функцию getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.

//     "Hello world!"
//     "!Hola mundo!"
//     "Hallo wereld!"
//     "Пpивeт мир!"

function getGreetings() {
    let arrayOfGreetings = ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"]

    return arrayOfGreetings
}

console.log(getGreetings());

const greetings = () => ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"]
console.log(greetings()); // переменная, но вызываем с () так как в ней функция

// Создать декларируемую функцию (function Declaration), функцию выражение (function Expression) и стрелочную функцию.

function buyingProduct(product, shop) {
  return `I bougth ${product} in the ${shop}`;
};
console.log(buyingProduct("phone", "Amason"));

const listOfClothers = function myClothers(...args) {
  return args;
};
console.log(listOfClothers('shorts', 't-short', 'jins'));

const sumTwoNumbers = (a, b) => a + b;
console.log(sumTwoNumbers(2, 4));

// 8.	Заполнить остаток таблички методов массивов

// 9.	Какой метод был использован в данном коде (на месте *****), чтобы перевести метры в футы и почему?  

const distanceInMeters = [2, 5, 13, 44, 100];

const distanceInFeet = distanceInMeters.map(function(i) {
     return Math.round(i * 3.28084);
});

console.log(distanceInFeet);    // Вывод: [ 7, 16, 43, 144, 328 ]

// 10.	Внедрите в свой код с Кофе (из дз 3, задача 11), как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.
let coffeeLatte = 'Latte'; // 'Latte'
let coffeeRaf = 'Raf'; // 'Raf'
let ingredients = ['milk', 'water', 'shugar', 'vanilla'];
let cups = ['small', 'medium', 'large']


let smallCupPriceLatte = 1;
let mediumCupPriceLatte = 2;
let largeCupPriceLatte = 3;

let smallCupPriceRaf = 4;
let mediumCupPriceRaf = 5;
let largeCupPriceRaf = 6;

function selectCoffe(coffeType, coffeCup) {
  if (coffeType === coffeeLatte && coffeCup == cups[0]) {
    return `The coffe is ${coffeType}. The cup is ${cups[0]}. The price is ${smallCupPriceLatte} \$, ingridients: ${ingredients.slice(0, 3).join(', ')}`;
  } else if (coffeType === coffeeLatte && coffeCup === cups[1]) {
    return `The coffe is ${coffeType}. The cup is ${cups[1]}. The price is ${mediumCupPriceLatte} \$, ingridients: ${ingredients.slice(0, 3).join(', ')}`;
  } else if (coffeType === coffeeLatte && coffeCup === cups[2]) {
    return `The coffe is ${coffeType}. The cup is ${cups[2]}. The price is ${largeCupPriceLatte} \$, ingridients: ${ingredients.slice(0, 3).join(', ')}`;
  } else if (coffeType === coffeeRaf && coffeCup === cups[0]) {
    return `The coffe is ${coffeType}. The cup is ${cups[0]}. The price is ${smallCupPriceRaf} \$, ingridients: ${ingredients.join(', ')}`;
  } else if (coffeType === coffeeRaf && coffeCup === cups[1]) {
    return `The coffe is ${coffeType}. The cup is ${cups[1]}. The price is ${mediumCupPriceRaf} \$, ingridients: ${ingredients.join(', ')}`;
  } else if (coffeType === coffeeRaf && coffeCup === cups[2]) {
    return `The coffe is ${coffeType}. The cup is ${cups[2]}. The price is ${largeCupPriceRaf} \$, ingridients: ${ingredients.join(', ')}`;
  }
}

console.log(selectCoffe('Latte', 'medium'));


// 11.	Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции)
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. 
// За сколько дней она доползет до вершины стены.

// 12.	Напишите функцию, которая принимает массив чисел как параметр и возвращает сумму всех чисел этого массива. 
// Если элемент массива не число, пропускаем этот элемент

// 13.	Напишите функцию, которая принимает массива строк как параметр и возвращает строки длиннее 5 букв.


