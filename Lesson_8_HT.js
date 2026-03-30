// Материал к прочтению

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming 
// https://habr.com/ru/companies/ruvds/articles/665290/ 


// Задачки:

// 1.	Создать класс Машина со свойствами Модель, Цвет и Год выпуска. Создать класс Жигули, который наследует от класса Машина. 
// Класс Жигули имеет свойства Место выпуска и Максимальная скорость. Вывести на печать печать всю информацию о Жигулях.
class Car {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;        
    }
}

class Jiguli extends Car {
    constructor(model, color, year, placeOfRelease, maxSpeed) {
        super(model, color, year);
        this.placeOfRelease = placeOfRelease;
        this.maxSpeed = maxSpeed;
    }

    getJiguliInfo() {
        return `This car model is ${this.model} has ${this.color} color and max speed ${this.maxSpeed}, ${this.year} year in ${this.placeOfRelease} place of release`
    }
}

const newJiguli = new Jiguli('Vas-2101', 'black', 1975, 'Volga Automobile Plant', 145);
console.log(newJiguli);
console.log(newJiguli.getJiguliInfo());


// 2.	Дополнение к задаче №2 из предыдущего домашнего задания

// -	Создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, вычисляющий площадь квадрата. 
// -	Настройте конструктор экземпляров объекта Square так, чтобы свойству name автоматически присваивалось значение square,
// а sides для свойства автоматически устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто предоставить 
// свойство sideLength.
// -	Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств, и вызовите его методы 
// calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.
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

class Square extends Shape {
    constructor(sideLength) {
        super('square', 4, sideLength)        
    }

    calcArea() {
        let areaOfSquare = this.sideLength * this.sideLength //or this.sideLength ** 2;
        return areaOfSquare;
    }

}

const newSquare = new Square(5)
console.log(newSquare.calcPerimeter());
console.log(newSquare.calcArea());


// 3.	Создать абстрактный класс Human со свойствами Имя, Возраст и Интерес и методом info. 
// Метод Info возвращает все свойства в формате предложения. Вывести на печать печать все свойства для двух людей, Кати и Юры.

class Human {
    constructor(name, age, interest) {
        this.name = name;
        this.age = age;
        this.interest = interest;        
    }

    info() {
        return `This human is ${this.name}, ${this.age} years old. Interest is ${this.interest}`
    }
}

const humanKate = new Human('Kate', 25, 'running');
const humanJury = new Human('Jury', 32, 'painting');
console.log(humanKate.info());
console.log(humanJury.info());


// 4.	Создать метод getFood, который может принимать аргумент foodType (сухая или консервная). 
// Переписать метод так чтобы он мог также принимать аргументы количество и/или бренд.  Вывести на печать следующие фразы:

// Метод без аргументов: "All dogs love to eat!"
// Метод с foodType: "Shepherd Masha eats dry food."
// Метод с foodType и количеством: "Poodle Demi eats 2 bowls a day of wet food."
// Метод с foodType, количеством и брендом: "Corgi Henry eats 3 bowls a day of dry food by Royаl Canin."

function getFood(foodType, count = 0, brand) {

    if (!foodType) {
        return "All dogs love to eat!";
    }

    if (foodType && !count && !brand) {
        return "Shepherd Masha eats dry food.";
    }

    if (foodType && count && !brand) {
        return `Poodle Demi eats ${count} bowls a day of ${foodType} food.`;
    }

    if (foodType && count && brand) {
        return `Corgi Henry eats ${count} bowls a day of ${foodType} food by ${brand}.`;
    }
}

console.log(getFood());
console.log(getFood('dry'));
console.log(getFood('wet', 2));
console.log(getFood('dry', 3, 'Royal Canin'));


// 5.	Создать классы пользователя и администратора

// В этом задании мы будем использовать приватные свойства, чтобы скрыть определенные значения и предотвратить прямой 
// доступ к ним. Приватные свойства могут быть доступны только внутри объявления класса.

// Мы обозначаем частную переменную или функцию символом решетки (#).

// Например, если бы у нас был класс Person с номером социального страхования и функцией для расчета их налоговой 
// категории, мы бы не обязательно хотели, чтобы эта информация была общедоступной. Поэтому мы 
// можем сделать эти поля приватными, как в примере ниже:

// class Person {
//     #socialSecurityNumber;

//     #calculateTaxBracket() {
//     }
// }

// Ваша задача:

// Создайте классы User и Admin. Класс Admin расширяет класс User. Класс User 
// имеет закрытую функцию updatePassword() и публичную функцию resetPassword(). Класс Admin имеет публичную функцию deleteUser().

// Параметры для класса User
//     username: String
//     (private) password: String

// Параметры для класса Admin
//     username: String
//     (private) password: String

// Свойства класса Admin
// Следующие свойства также должны быть добавлены в класс Admin. Они не являются параметрами.
//     isAdmin = true;

// Функции класса User
// -	resetPassword(newPassword)
// Вызывает закрытую функцию updatePassword с новым паролем. 

// -	updatePassword(newPassword)
// Устанавливает пароль пользователя на newPassword. Это частная функция.

// Функции класса Admin
// -	deleteUser(userToDelete): Принимает строку userToDelete и возвращает строковое сообщение: "Пользователь [userToDelete] был удален."

class User {
    #password 

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    resetPassword(newPassword) {
        return this.#updatePassword(newPassword)
    }

    #updatePassword(newPassword) {
        this.#password = newPassword;
    }

}

class Admin extends User {
    constructor(username, password) {
        super(username, password);
        this.isAdmin = true;
    }

    deleteUser(userToDelete) {
        return `The user ${userToDelete} was deleted.`
    }
}

const testUser = new User("Masha", "1234");
const testAdmin = new Admin("Admin", "admin123");

const result = [testUser, testAdmin];

console.log(result);

// Результат
// -	[testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin

// Ограничения
// -	Пароль должен быть частной переменной
// -	updatePassword должен быть частной функцией
// -	Вы должны использовать ключевое слово extends для создания связи между пользователем и администратором


// 6.	Креативное задание. Создать структуру школы.

// ○	В школе есть люди, студенты, учителя, декан, директор школы. 
// ○	У каждого свои свойства, некоторые повторяющиеся, как например имя, возраст, пол, можно больше.
// ○	Но так же есть и не повторяющиеся, например, 
// -	студенты - номер курса (1-ый год, 2-й год, и т.д.)
// -	студенты - специальность (major)
// -	студенты - средний бал (gpa, от 1 до 4, 1 - студент плохо учиться, 4 - очень хорошо)
// -	учителя - имеют зарплату
// -	декан - зарплата в 2 раза больше чем у учителей, плюс годовой бонус в размере 1 зарплаты
// -	учитель и декан - часы работы
// -	директор школы - зарплата в 1.5 раза больше чем у декана, плюс годовой бонус в размере 2х зарплат
// ○	Использовать 4 принципа ООП
// ○	Вывести на печать имена и позицию каждого человека
// ○	Вывести на печать зарплату директора школы
// ○	Вывести на печать имя студента valedictorian (лучший студент школы, студент с лучшим gpa)

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender
    }

    getRole() {
        return "Person";
    }
}

class Student extends Person {
    constructor(name, age, gender, coursNumber, major, gpa) {
        super(name, age, gender)
        this.coursNumbeer = coursNumber;
        this.major = major;
        this.gpa = gpa;
    }

    getRole() {
        return "Student";
    }
}

class Teacher extends Person {
    constructor(name, age, gender, salary, workHours) {
        super(name, age, gender)
        this.salary = salary;
        this.workHours = workHours;
    }

    getSalary() {
        return this.salary;
    }

    getRole() {
        return "Teacher";
    }
}

class Dean extends Teacher {
    getSalary() {
        return this.salary * 2;
    }

    getYearBonus() {
        return this.salary;  
    }

    getRole() {
        return 'Dean';
    }
}

class SchoolDirector extends Dean {
    getSalary() {
        return super.getSalary() * 1.5;
    }

    getYearBonus() {
        return this.getSalary() * 2;
    }

    getRole() {
        return "School Director";
    }
}

const people = [
    new Student("Anna", 20, "F", 2, "Math", 3.9),
    new Student("Ivan", 21, "M", 3, "Physics", 4.0),
    new Teacher("Olga", 40, "F", 3000, 40),
    new Dean("Sergey", 50, "M", 3000, 45),
    new SchoolDirector("Elena", 55, "F", 3000, 50)
];

people.forEach(p =>
    console.log(`${p.name} - ${p.getRole()}`)
);

const director = people.find(p => p instanceof SchoolDirector);
console.log("Director salary:", director.getSalary());

const students = people.filter(p => p instanceof Student);
const valedictorian =
    students.reduce((best, current) =>
        current.gpa > best.gpa ? current : best
    );

console.log("Best student:", valedictorian.name);

/*
Инкапсуляция — методы getSalary()
Наследование — extends
Полиморфизм — getRole()
Абстракция — базовый Person
*/

// 7. Посмотреть и понять что такое Git, что такое Github, как они работают. Создать (если еще нет) аккаунт в Github.



// 8. Посмотреть и понять что такое css локаторы и как они работают. Потренироваться искать css локаторы на веб сайте. 

// Как искать css локаторы:
// -	открываем любой веб сайт в Хроме
// -	открываем DevTools/inspector (F12)
// -	кликаем на таб “Elements”
// -	на клавиатуре, нажимаем CTRL+F (Command+F на iOS)
// -	внизу окна DevTools, появляется поисковая строка
// -	пишем наши css локаторы в ней. убеждаемся что найденный элемент один на странице.






