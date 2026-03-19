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




// 5. Переделайте креативное задание из урока 7 в класс. Потом, используя класс, сделайте те же задания:
//     a. Выведите в console названия всех книг.
//     b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
//     c. Отсортируйте библиотеку по году выпуска книг




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

