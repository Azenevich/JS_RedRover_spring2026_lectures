//https://tc39.es/ecma262/

class Car { // Car - родительский класс, либо Супер класс -159
    constructor(name) {
        this.name = name;
    }
    
    getName(){
        return `This is a ${this.name} .`;
    }
}

class Color extends Car { // Color - дочерний класс. зарезервированное слово "extends" (наследуем)
    constructor(name, color) {
        super(name) ; // мы используем зарезервированное слово "super"
                        // и передаем все свойства родительского класса

    this.color = color;
    }

    getColor() {
        return "The color is ${this.color}.";
    }
}

const myCar = new Car("Toyota");
console.log(myCar.getName());

const myColor = new Color("Toyota", "Red");
console.log(myColor.getName());
console.log(myColor.getColor());   

/*
от класса Car может так же наследовать и другой класс, Model - диаграмма 2
*/

class Model extends Gar {
    constructor(name, model) {
        super(name);
        this.model = model;
    }

    getModel() {
        return `Model is ${this.model}.`;
    }
}

const myModel = new Model("Toyota", "Camry");
console.log(myModel.getModel());

console.log(myModel.getName());
console.log(myModel.name);

/*
а от Model может наследоваться класс Туре - диаграмма 3
*/

class Type extends Model {
    constructor(name, model, type) {
        super(name, model);
        this. type = type;
    }

    getType() {
        return `Type is ${this.type} .`;
    }
}
const myType = new Type("Toyota", "Camry", "sedan");
console.log(myType.getType());
console.log(myType.getModel());
console.log(myType.getName());

/*

Правила:

- Дочерний класс может наследовать только от одного родителя, от нескольких одновременно нельзя. - диаграмма 4
- Несклолько дочерных классов могут наследовать от одного родителя.
- Можно безгранично увеличивать цепочку наследования,
устанавливая родительский, «дедовский», «прадедовский» и так далее классы.

- Если дочерний класс наследует какие-либо свойства от родительского,
то он сначала должен присвоить эти свойства через вызов функции super()
и лишь затем устанавливать свои.
- При наследовании все родительские методы и поля переходят к потомку.

*/

/* конструктор в наследнике не нужен, если в него ничего не передаем. Если передаем
параметры - пишем конструктор и super обязательно*/

//======== 2. Инкапсуляция (encapsulation)
/*
Инкапсуляция - означает способность объекта/класса «решать»,
какую информацию он будет раскрывать для внешнего мира, а какую нет.
Реализуется этот принцип через публичные и приватные свойства и методы.

Мы рассматривали приватные методы на прошлом занятии, повторим еще раз

*/

class Model {
    #pricePrivate; //объявляем приватное свойство используя #

    constructor(model) {
        this.model = model;
        this.#pricePrivate = 25000; // присваеваем значение приватному свойству
    }

    getModel() {
        return `Model is ${this.model}.`;
    }
    // приватный метод, не виден снаружи
    #calculatePrice() {
        return this.#pricePrivate + 5000; // используем приватное свойство, не видно снаружи
    }
}

const myModel1 = new Model("Camry");
console.log(myModel1.getModel());

/*
Помним:

- Инкапсуляция полезна в случаях, когда нам требуются определенные свойства или методы
исключительно для внутренних процессов объекта, и мы не хотим раскрывать их из вне.
Наличие закрытых свойств/методов гарантирует, что мы «случайно» не раскроем эту информацию.
*/

//==================3. Абстракция (abstraction)
/*
Абстракция - это принцип, который гласит, что класс должен представлять лишь ту
информацию, которая нужна для конкретной задачи.

Т.е, объекты предоставляют только те методы и поля, которые собираемся использовать.
Если же что-то не нужно, то оно не раскрывается.

Таким образом мы фокусируемся на то, что объект делает а не как он это делает.
не путаем с инкапсуляцией, они могут работать вместе (этоочень часто)
*/

class Employee {
    #monthlyBonus

    constructor(name, age, baseSalary) {
        this.name = name;
        this.age = age;
        this.baseSalary = baseSalary;
        this.#monthlyBonus = 1000;
    }

    getDetails() {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    }

    #calculateSalary() {
        const finalSalary = this.baseSalary + this.#monthlyBonus;
        console.log(`Final salary is $${finalSalary}.`);
    }
}

const e1 = new Employee("John", 30, 2000);

e1.getDetails();
e1.calculateSalary();

/*здесь 2 проблемы:
- мы видим метод calculateSalary() снаружи, что не должно быть, мы должны видеть снаружи
О только полную зарплату работника, а не детали как эта зарплата рассчитывается
- мы можем изменить monthlyBonus снаружи и тем изменить полную зарплату
*/

e1.monthlyBonus = 2000;
e1.calculateSalary();

/*
Пример 2: абстрактынй класс

В JavaScript нет встроенных абстрактных классов, но можно их имитировать, создав базовый класс
и выдавая ошибки для методов, которые должны быть реализованы дочерными классами.

*/

//реальная обстракция на примере двух классов:

class Shape {
    constructor() {

// в данном случае, конструктор НЕ имеет аргументов
// проверяем если класс был вызван напрямую

        if (new.target === Shape) {
            throw new Error("Shape cannot be instantiated directly.");
        }
    }

    // Abstract method (должен быть реализован дочерними классами)
    draw() {
        throw new Error("draw() method must be implemented.");
    }
}

const shape = new Shape(); //закоментить при вызове
console.log(shape.draw());

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    draw() {
        return `Drawing a circle with a radius of ${this.radius}`;
    }
}

const circle = new Circle(5);
console.log(circle.draw());

//конец примера

/* TypeScript example

abstract class Animal {
  abstract makeSound(): void;

  move() {
    console.log("moving");
  }
}

*/

/*
Помним:

- Абстракция - это процесс сокрытия сложных деталей реализации и предоставления
пользователю только необходимой информации. Она фокусируется на том,
«что» делает объект, а не на том, «как» он это делает.
- В нашем примере 1, мы скрываем некоторую информацию и предоставляем только необходимую

- В нашем примере 2, Shape - абстрактный класс, а draw - абстрактный метод.
Таким образом мы создаем только структуру, которую нужно придерживаться и
заставляем дочерние классы исполнять эту структуру.
- Дочерний класс Circle должен иметь свое собственное выполнение метода draw
- Мы не можем вызывать класс Shape напрямую и вместо этого должны использовать
дочерний класс Circle

- Абстракция и инкапсуляция часто работают вместе (и так же часто путают).
Инкапсуляция помогает добиться абстракции пряча детали работы класса,
а абстракция определяет путь как работать с классами.

*/

//реализация обстрактных классов осуществляется в дочерних классах
//Абстракные классы для того чтобы обойти ограниечение наследования только от одного класса
//Реализация/Имплементация Абстрактного класса осуществляется непосредственно в Дочерних классах от Абстрактного класса

/*
==================4. Полиморфизм (polymorphism)
Полиморфизм - означает "множество форм" и означает способность метода
возвращать разные значения, согласно определённым условиям.

Полиморфизм заключается в способности вызывать один и тот же метод
для разных объектов, и при этом каждый объект реагирует по-своему.

*/

class Human {
    constructor(name) {
        this.name = name;
    }

    sayHi(a) {
        return `Hello, my name is ${this.name} and I like travelling.`;
    }
}

const h = new Human("John");
console.log(h.sayHi());

class Programmer extends Human {
    constructor(name) {
        super(name);
    }

    sayHi(b, c) {
        return `Hello, my name is ${this.name} and I build websites. `;
    }
}

const p = new Programmer("Mary");
console.log(p.sayHi());

/*
Помним:

- Полиморфизм - возможность метода/поля иметь одно и то же имя, но разную реализацию в разных классах.
- Дочерние классы могут переопределять родительские методы и поля.
- Если одинаково-именнованные методы имеют аргументы, аргументы могут тоже быть разные.
*/


/*
Итак:

- ООП - это подход к программированию, где программа рассматривается как набор объектов.
- Каждый из объектов работает с другими объектами.
- Каждый из объектов имеет свои характеристики и поведение.
- Нам не нужно знать как объект работает, только какие аргументы принимает и что возвращает.
- ООП имеет 4 основных принципа.
- Принципы могут применяться вместе или раздельно.
*/

/*
=====================Прототипы

когда мы создаем почти любой объект в Javascript, к объекту автоматически добавляется еще один объект
под названием Prototype

все объекты наследуют свои свойства от Prototype

Prototype объект может иметь свой собственный Prototype объект, что называется Цепочка Прототипов

диаграмма и пример (в браузере)
Prototype- объект, который автоматически добавляется к любому другому объекту и имеет свои свойства
*/

//чтобы метод попал в функцию-конструктор например, нужно добавлять через prototype
// в противном случае метод будет статическим (видет только в функции, но в созданной переменной)
function Person(name) {
    this. name = name;
}

Person.greet = function() { //добавляем в Person функцию
    return "hi";
}

const p1 = new Person("John"); // здесь наша функция greet не будет видна
//console.log(p1.greet()); //будет ошибка

Person.greet() // 'hi" - ошибки не будет
Person.prototype.greetttt = function() { //добавляем через prototype чтобы у р1 был этот метод
    return "hihihi";
}

p1.greetttt() //'hihihi'

//то же самое и с классами

class MyClass {
    constructor() {
        this.value = 10;
    }

    add(num) {
        return this.value + num;
    }
}

MyClass.greet = function() {
    return 'hi'
}

const m = new MyClass(); // здесь наша функция greet не будет видна
//console.log(m.greet()); //console.log(p1.greet()); //будет ошибка
console.log(MyClass.greet());

MyClass.prototype.greeting = function() {
    return 'hello'
}

console.log(m.greeting());

//JS язык ПРОТОТИПОВ








