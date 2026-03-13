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
  {
    firstName: "Emma",
    lastName: "Z.",
    country: "Netherlands",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "Peter",
    lastName: "B.",
    country: "Poland",
    age: 48,
    language: "Javascript",
  },
  {
    firstName: "Natasha",
    lastName: "P.",
    country: "Mexico",
    age: 25,
    language: "C#",
  },
  {
    firstName: "Josh",
    lastName: "A.",
    country: "USA",
    age: 26,
    language: "C#",
  },
  {
    firstName: "Augusto",
    lastName: "C.",
    country: "Spain",
    age: 32,
    language: "Java",
  },
  {
    firstName: "Lei Mi",
    lastName: "S.",
    country: "China",
    age: 52,
    language: "Fortran",
  },
  {
    firstName: "Mikey",
    lastName: "L.",
    country: "New Zealand",
    age: 30,
    language: "Node",
  },
];

//     Вопрос: есть ли хоть один разработчик, работающий на JavaScript? Возвратите да или нет. Будьте внимательны.

let javaScriptDevelopersList = developers.filter(
  (user) => user.language.toLowerCase() === "JavaScript".toLowerCase(),
);
let count = javaScriptDevelopersList.length > 0;
console.log(count);

// 7. Задача для сладкоежек. Есть массив десертов. Выведите самый дешевый десерт и самый дорогой десерт.

const desserts = [
  { name: "Пирожное", price: 65 },
  { name: "Мороженое", price: 35 },
  { name: "Торт Наполеон", price: 250 },
  { name: "Песочное Печенье", price: 50 },
  { name: "Пудинг", price: 80 },
  { name: "Фруктовый Тарт", price: 40 },
  { name: "Желе Земляничное", price: 40 },
  { name: "Вафли Шоколадные", price: 36 },
  { name: "Булочка c Изюмом", price: 28 },
];

let minPriceDes = desserts.reduce((previous, current) => {
  return previous.price < current.price ? previous : current;
});
console.log(minPriceDes);

let maxPriceDes = desserts.reduce((previous, current) => {
  return previous.price > current.price ? previous : current;
});
console.log(maxPriceDes);

// 8. Креативное задание.

// Создайте библиотеку книг Стивена Кинга, Марка Твена и Александра Сергеевича. В библиотеке должно быть по 5 книг каждого писателя. Каждая
// книга должна иметь идентификатор (isbn), имя книги, имя автора, год выпуска, жанр, количество страниц, популярность книги у этого
// автора (от 1 до 5) и первое предложение/строку.

const library = [
  {
    author: "Stephen King",
    isbn: "978-0-385-08695-0",
    bookname: "Carrie",
    genre: "horror",
    year: 1974,
    pages: 199,
    popularity: 5,
    "first sentense":
      "Carrie is the debut horror novel by American author Stephen King, released in 1974.",
  },
  {
    author: "Stephen King",
    isbn: "978-0-385-00751-1",
    bookname: "Salem's Lot",
    genre: "horror",
    year: 1975,
    pages: 439,
    popularity: 4,
    "first sentense":
      "Salem's Lot is a 1975 American horror novel by author Stephen King.",
  },
  {
    author: "Stephen King",
    isbn: "978-0-385-12167-5",
    bookname: "The Shining",
    genre: "horror ",
    year: 1977,
    pages: 447,
    popularity: 3,
    "first sentense":
      "The Shining is a 1977 horror novel by American author Stephen King.",
  },
  {
    author: "Stephen King",
    isbn: "978-0-385-12168-2",
    bookname: "The Stand",
    genre: ["Post-apocalyptic", "Dark fantasy"],
    year: 1978,
    pages: 823,
    popularity: 2,
    "first sentense":
      "The Stand is an epic post-apocalyptic dark fantasy novel written by American author Stephen King and first published in 1978 by Doubleday.",
  },
  {
    author: "Stephen King",
    isbn: "978-0-670-85503-2",
    bookname: "Insomnia",
    genre: ["horror", "fantasy"],
    year: 1994,
    pages: 787,
    popularity: 4,
    "first sentense":
      "Insomnia is a 1994 horror/fantasy novel by American writer Stephen King. ",
  },
  {
    isbn: "0486280616",
    bookname: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
    year: 1876,
    genre: "novel",
    "number of pages": 224,
    popularity: 5,
    "first sentense":
      'The novel\'s preeminence derives from its wonderfully imaginative re-creation of boyhood adventures along the Mississippi River, its inspired characterization, the author\'s remarkable ear for dialogue, and the book\'s understated development of serious underlying themes: "natural" man versus "civilized" society, the evils of slavery, the innate value and dignity of human beings, and other topics.',
  },
  {
    isbn: "0375756817",
    bookname: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    year: 2001,
    genre: "novels",
    "number of pages": 304,
    popularity: 4,
    "first sentense":
      "This irresistible tale of the adventures of two friends growing up in frontier America is one of Mark Twain's most popular novels.",
  },
  {
    isbn: "0140430644",
    bookname: "A Connecticut Yankee in King Arthur's Court",
    author: "Mark Twain",
    year: 1972,
    genre: "classic",
    "number of pages": 416,
    popularity: 4,
    "first sentense":
      "Mark Twain moves from broad comedy to biting social satire in this literary classic.",
  },
  {
    isbn: "1789430976",
    bookname: "Tom Sawyer & Huckleberry Finn",
    author: "Mark Twain",
    year: 2020,
    genre: "adventure",
    "number of pages": 592,
    popularity: 4,
    "first sentense":
      "Mark Twain's characters are surprising, unforgettable and truly human.",
  },
  {
    isbn: "0866119655",
    bookname: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    year: 1990,
    genre: "adventure",
    "number of pages": 239,
    popularity: 3,
    "first sentense":
      'Climb aboard the raft with Huck and Jim and drift away from the "sivilized" life and into a world of adventure, excitement, danger, and self-discovery.',
  },
  {
    isbn: "978-5-00155-691-6",
    bookname: "Eugene Onegin",
    author: "Aleksander Sergeevich",
    year: 1833,
    genre: "novel",
    "number of pages": 288,
    popularity: 3,
    "first sentense":
      "The story is told by a narrator (a lightly fictionalized version of Pushkin's public image), whose tone is educated, worldly, and intimate.",
  },
  {
    isbn: "978-5-04-207769-2",
    bookname: "The Captain's Daughter",
    author: "Aleksander Sergeevich",
    year: 1836,
    genre: "novel",
    "number of pages": 192,
    popularity: 4,
    "first sentense":
      "A classic Russian historical military novel set during the Pugachev Rebellion which contrasts the human internal world with the inevitable movements of history.",
  },
  {
    isbn: "978-5-04-102519-9",
    bookname: "Boris Godunov",
    author: "Aleksander Sergeevich",
    year: 1825,
    genre: "drama",
    "number of pages": 256,
    popularity: 4,
    "first sentense":
      "Alexander Pushkin's dramatic work displays a scintillating variety of forms, from the historical to the metaphysical and folkloric. After Boris Godunov, they evolved into Pushkin's own unique, condensed transformations of Western European themes and traditions.",
  },
  {
    isbn: "978-5-699-47073-0",
    bookname: "Pikovaya dama",
    author: "Aleksander Sergeevich",
    year: 1834,
    genre: "Short stories",
    "number of pages": 74,
    popularity: 3,
    "first sentense":
      "The Queen of Spades (Russian: «Пиковая дама», romanized: Pikovaya dama) is an 1834 novella with supernatural elements by Alexander Pushkin, about human avarice.",
  },
  {
    isbn: "978-5-04-172862-5",
    bookname: "Ruslan and Lyudmila",
    author: "Aleksander Sergeevich",
    year: 1820,
    genre: "poem",
    "number of pages": 240,
    popularity: 5,
    "first sentense":
      "In order to rescue his beloved Lyudmila, who has been abducted by the evil wizard Chernomor, the warrior Ruslan faces an epic and perilous quest, encountering a multitude of fantastic and terrifying characters along the way.",
  },
];

//     a. Выведите в console названия всех книг.

// let booksName = library.map(element => element.bookname)
// console.log(booksName);

//     b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате

function popBook(library) {
  let stivenKingBooks = library.filter(
    (author) => author.author === "Stephen King",
  );
  let popBookStivKing = stivenKingBooks.reduce((current, next) =>
    current.popularity > next.popularity ? current : next,
  );

  let markTwainBooks = library.filter(
    (author) => author.author === "Mark Twain",
  );
  let popBookmarkTwain = markTwainBooks.reduce((current, next) =>
    current.popularity > next.popularity ? current : next,
  );

  let aleksanderSergeevichBooks = library.filter(
    (author) => author.author === "Aleksander Sergeevich",
  );
  let popBookAlSerg = aleksanderSergeevichBooks.reduce((current, next) =>
    current.popularity > next.popularity ? current : next,
  );

  let result = [popBookStivKing, popBookAlSerg, popBookmarkTwain];

  return result;
}

console.log(popBook(library));

//     c. Отсортируйте библиотеку по году выпуска книг

// Задания с ревью
// 1. У вас есть массив чисел, нужно наполнить массив числами первого массива, умноженными на 2.
// const nums = [3, 88, 65, 5, 9]; через мап

// 2Преобразуйте многомерный массив в одномерный массив разными способами (классический for, for in, for of).
const multiArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let newMultArr = multiArr.flat();
console.log(newMultArr);

let newArr = [];
for (let i = 0; i < multiArr.length; i++) {
  for (let j = 0; j < multiArr[i].length; j++) {
    newArr.push(multiArr[i][j]);
  }
}
console.log(newArr);

let arrNew = [];
for (const element of multiArr) {
  for (const el of element) {
    arrNew.push(el)
  }
}
console.log(arrNew);

let thirdArr = [];
for (const key in multiArr) {
  for (const el in multiArr[key]) {
    thirdArr.push(multiArr[key][el])
  }
}
console.log(thirdArr);