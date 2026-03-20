// Материал к прочтению

// Классы
// https://learn.javascript.ru/classes  
// https://www.w3schools.com/js/js_class_intro.asp  
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript  

// Задачки:

// 1. Есть класс Song. Выведите на печать автора песни.

    class Song {
        #_author;

        constructor(name, author) {
            this.name = name;
            this.author = author;
        }

        get author() {
            return this.#_author;
        }

        set author(writer) {
            this.#_author = writer;
        }
    }

let newSong = new Song('Summer', 'Bon Jovi');
console.log(newSong.author);
console.log(newSong.name);

// 2. Определите класс Shape. 
//     - Он имеет три свойства: name, sides, и sideLength. 
//     - Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину, 
//         например квадрат или равносторонний треугольник.
//     - Добавьте конструктор в этот класс. 
//     - Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
//     - Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр 
//         (длину внешнего края фигуры) и записывает результат в консоль.
//     - Создайте новый экземпляр класса Shape с именем square. 
//     - Дайте name ему square, sides = 4 и sideLength = 5
//     - Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить, 
//         записывает ли он результаты вычислений в консоль браузера, как ожидалось.
//     - Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
//     - Вызовите triangle.calcPerimeter(), чтобы убедиться, что все работает.

class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        let perimeter = this.sides * this.sideLength;
        return perimeter;
    }
}

let square = new Shape('square', 4, 5);
let squarePerimeter = square.calcPerimeter();
console.log(squarePerimeter);

let triangle = new Shape('triangle', 3, 3);
let trianglePerimeter = triangle.calcPerimeter();
console.log(trianglePerimeter);


// 3. Создайте класс "Employee", представляющий работника. У работника должны быть следующие свойства:

//     1. "name" - строка, представляющая имя работника.
//     2. "age" - число, представляющее возраст работника.
//     3. "position" - строка, представляющая должность работника.
//     4. "salary" - число, представляющее зарплату работника.

//     Требования:

//     1. Создайте конструктор класса "Employee", который принимает аргументы 
//         "name", "age", "position", "salary" и инициализирует соответствующие свойства объекта.
//     2. Создайте геттеры и сеттеры для свойств "age", "position" и "salary".
//     3. Геттеры должны возвращать значения свойств, а сеттеры должны устанавливать 
//         новые значения свойств.

class Employee {
    #salary;

    constructor(name, age, position, salary) {
        this.name = name;
        this._age = age;
        this._position = position;
        this.#salary = salary;
    }

    get age() {
        return this._age;
    }

    set age(ageVal) {
        this._age = ageVal;
    }

    get position() {
        return this._position;
    }

    set position(positionVal) {
        this._position = positionVal;
    }

    get salary() {
        return this.#salary;
    }

    set salary(salaryVal) {
        this.#salary = salaryVal;
    }
}

let newEmployee = new Employee('Alex', 25, "Head of department", 3000);

console.log(newEmployee.salary); // 3000
newEmployee.salary = 5000;
console.log(newEmployee.salary); // 5000

console.log(newEmployee.age);
newEmployee.age = 26
console.log(newEmployee.age);


// 4. Создайте класс Person со следующими свойствами:

//     a. Конструктор который принимает 4 аргумента: 
//         - First Name (по умолчанию значение "John") 
//         - Last Name (по умолчанию значение "Doe")
//         - Age (по умолчанию значение 0) 
//         - Gender (по умолчанию значение "Male"). 
            
//     b. Метод sayFullName без аргументов и возвращает полное имя человека
//     c. Статический метод greetExtraTerrestrials который принимает один аргумент, raceName 
//         и возвращает "Welcome to Planet Earth <raceName>". 
        
//         Пример: если значение raceName "Martians", результат должен быть 
//         "Welcome to Planet Earth Martians"

class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`
    }
}

let newPerson = new Person()

console.log(newPerson.sayFullName());
console.log(Person.greetExtraTerrestrials('Martians'));
// console.log(newPerson.greetExtraTerrestrials('Martians')); // будет ошибка

// 5. Переделайте креативное задание из урока 7 в класс. Потом, используя класс, сделайте те же задания:
//     a. Выведите в console названия всех книг.
//     b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
//     c. Отсортируйте библиотеку по году выпуска книг

class Library {
    constructor(books) { //, author, isbn, bookname, genre, year, pages, popularity
        this.books = books;
    }

    booksName() {
        return this.books.map(element => element.bookname)
    }

}

class Book {
    constructor(author, isbn, bookname, genre, year, pages, popularity, firstSentence) {
        this.author = author;
        this.isbn = isbn;
        this.bookname = bookname;
        this.genre = genre;
        this.year = year;
        this.pages = pages;
        this.popularity = popularity;
        this.firstSentence = firstSentence;
    }
}

let book1 = new Book("Stephen King", "978-0-385-08695-0", "Carrie", "horror", 1974, 199, 5, "Carrie is the debut horror novel by American author Stephen King, released in 1974.",);
let book2 = new Book("Stephen King", "978-0-385-00751-1", "Salem's Lot", "horror", 1975, 439, 4, "Salem's Lot is a 1975 American horror novel by author Stephen King.");
let book3 = new Book("Stephen King", "978-0-385-12167-5", "The Shining", "horror", 1977, 447, 3, "The Shining is a 1977 horror novel by American author Stephen King.");
let book4 = new Book("Stephen King", "978-0-385-12168-2", "The Stand", ["Post-apocalyptic", "Dark fantasy"], 1978, 823, 2, "The Stand is an epic post-apocalyptic dark fantasy novel written by American author Stephen King and first published in 1978 by Doubleday.");
let book5 = new Book("Stephen King", "978-0-670-85503-2", "Insomnia", ["horror", "fantasy"], 1994, 787, 4, "Insomnia is a 1994 horror/fantasy novel by American writer Stephen King.")
let book6 = new Book("Mark Twain", "0486280616", "Adventures of Huckleberry Finn", "novel", 1876, 224, 5, 'The novel\'s preeminence derives from its wonderfully imaginative re-creation of boyhood adventures along the Mississippi River, its inspired characterization, the author\'s remarkable ear for dialogue, and the book\'s understated development of serious underlying themes: "natural" man versus "civilized" society, the evils of slavery, the innate value and dignity of human beings, and other topics.');
let book7 = new Book("Mark Twain", "0375756817", "The Adventures of Tom Sawyer", "novels", 2001, 304, 4, "This irresistible tale of the adventures of two friends growing up in frontier America is one of Mark Twain's most popular novels.");
let book8 = new Book("Mark Twain", "0140430644", "A Connecticut Yankee in King Arthur's Court", "classic", 1972, 416, 4, "Mark Twain moves from broad comedy to biting social satire in this literary classic.")
let book9 = new Book("Mark Twain", "1789430976", "Tom Sawyer & Huckleberry Finn", "adventure", 2020, 592, 4, "Mark Twain's characters are surprising, unforgettable and truly human.")
let book10 = new Book("Mark Twain", "0866119655", "The Adventures of Huckleberry Finn", "adventure", 1990, 239, 3, 'Climb aboard the raft with Huck and Jim and drift away from the "sivilized" life and into a world of adventure, excitement, danger, and self-discovery.')
let book11 = new Book("Aleksander Sergeevich", "978-5-00155-691-6", "Eugene Onegin", "novel", 1833, 288, 3, "The story is told by a narrator (a lightly fictionalized version of Pushkin's public image), whose tone is educated, worldly, and intimate.")
let book12 = new Book("Aleksander Sergeevich", "978-5-04-207769-2", "The Captain's Daughter", "novel", 1836, 192, 4, "A classic Russian historical military novel set during the Pugachev Rebellion which contrasts the human internal world with the inevitable movements of history.")
let book13 = new Book("Aleksander Sergeevich", "978-5-04-102519-9", "Boris Godunov", "drama", 1825, 256, 4, "Alexander Pushkin's dramatic work displays a scintillating variety of forms, from the historical to the metaphysical and folkloric. After Boris Godunov, they evolved into Pushkin's own unique, condensed transformations of Western European themes and traditions.")
let book14 = new Book("Aleksander Sergeevich", "978-5-699-47073-0", "Pikovaya dama", "Short stories", 1834, 74, 5, "The Queen of Spades (Russian: «Пиковая дама», romanized: Pikovaya dama) is an 1834 novella with supernatural elements by Alexander Pushkin, about human avarice.")
let book15 = new Book("Aleksander Sergeevich", "978-5-04-172862-5", "Ruslan and Lyudmila", "poem", 1820, 240, 5, "In order to rescue his beloved Lyudmila, who has been abducted by the evil wizard Chernomor, the warrior Ruslan faces an epic and perilous quest, encountering a multitude of fantastic and terrifying characters along the way.")
    
// console.log(book1);

let library = new Library([book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15])

// console.log(library.booksName());
// console.log(library);

console.log(library.mostPopularBooks());

// 6. Посмотреть и понять что такое Git, что такое Github, как они работают. Создать (если еще нет) аккаунт в Github.



// 7. Посмотреть и понять что такое css локаторы и как они работают (после лекции в Пятницу). Потренироваться искать css локаторы на веб сайте. 

// Пометка: на нашем курсе мы использовать xpath не будем, поэтому тренируемся с css локаторами (но если хотите тренироваться с xpath, тоже можно)

// Как искать css локаторы:
// -	открываем любой веб сайт в Хроме
// -	открываем DevTools/inspector (F12)
// -	кликаем на таб “Elements”
// -	на клавиатуре, нажимаем CTRL+F (Command+F на iOS)
// -	внизу окна DevTools, появляется поисковая строка
// -	пишем наши css локаторы в ней. убеждаемся что найденный элемент один на странице.

