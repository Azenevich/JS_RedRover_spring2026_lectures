// // на прошлом занятии, мы обсуждали объекты.
// // давайте создадим наши объекты

// const person1 = {
//   firstName: "John",
//   age: 30,
//   occupation: "driver",
//   eyeColor: "green",
// };

// const person2 = {
//   firstName: "Susan",
//   age: 25,
//   occupation: "teacher",
//   eyeColor: "brown",
// };

// const person3 = {
//   firstName: "Jennifer",
//   age: 26,
//   occupation: "doctor",
//   eyeColor: "gray",
// };

/*
у них у всех одинаковые ключи, различия только в значениях.
что если нужно создать много таких объектов? они все имеют одинаковые ключи и различные значения.
это очень много работы создавать каждый объект.
вместо этого, можно использовать другую возможность: конструктор-функцию (или просто конструктор)
конструктор - это специфичная функция и используется чтобы создавать объекты автоматически. Это как шаблон для наших объектов.
конструктор-функция принимает, как аргументы, значения всех наших ключей и присваивает их к названиям ключей

давайте посмотрим:
*/

// function Person(firstNameValue, ageValue, occupationValue, eyeColorValue) {
//   // названия конструктора-функции с большой буквы!
//   firstName = firstNameValue,
//     age = ageValue,
//     occupation = occupationValue,
//     eyeColor = eyeColorValue;
// }

/*
Теперь, мы можем "вызвать" наш конструктор-функцию.
Для этого нам нужно использовать слово "new"
*/

// const person = new Person("John", 30, "driver", "green");

/*
Теперь, у нас было 3 объекта а не один. Как нам вызвать все 3 объекта одновременно?
Мы можем:
*/

// const person4 = new Person("John", 30, "driver", "green");
// const person5 = new Person("Susan", 25, "teacher", "brown");
// const person6 = new Person("Jennifer", 26, "doctor", "gray");

/*
Что здесь происходит?
Мы вызываем конструктор-функцию (шаблон), передаем туда конкретные значения (для каждого человека разные) и получаем 3 разных
объекта от одной конструктор-функции. Наши person4/person5/person6 - это объекты.


Но у нас есть одна проблема.
Мы создали 3 объекта от одного конструктора (шаблона). В памяти, мы выделили 3 отдельные коробочки, каждая коробочка для одного из наших объектов.
Но когда мы вызываем наш конструктор и передаем в него значения, Javascript не знает в какую из коробочек нужно сохранять наши значения.

Для Javascript-a, мы просто выделили коробочки; потом скинули все наши значения куда-то на пол рядом с коробочками.
Нам нужно сказать Javascript-y: скинь все значения от объекта 1 в коробочку 1, а значения от объекта 2 в коробочку 2, и т.д.

Как можно это сдлать?

Можно использовать наше любимое слово "this"

Перепишем наш конструктор
*/

// function Person1(firstNameValue, ageValue, occupationValue, eyeColorValue) {
//   // названия конструктора-функции с большой буквы!
//     this.firstName = firstNameValue,
//     this.age = ageValue,
//     this.occupation = occupationValue,
//     this.eyeColor = eyeColorValue;
// }

// const person7 = new Person1("John", 30, "driver", "green");
// const person8 = new Person1("Susan", 25, "teacher", "brown");
// const person9 = new Person1("Jennifer", 26, "doctor", "gray");
// // console.log(person7);
// console.log(typeof person7);
// console.log(person8);
// console.log(person9);

// // Можно распечатать определенные значения:

// console.log(
//   person7.firstName,
//   person7.age,
//   person7.occupation,
//   person7.eyeColor,
// );
// console.log(
//   person8.firstName,
//   person8.age,
//   person8.occupation,
//   person8.eyeColor,
// );
// console.log(
//   person9.firstName,
//   person9.age,
//   person9.occupation,
//   person9.eyeColor,
// );

/*
вот мы и создали конструктор-функцию, которая позволяет работать с разными объектами и не повторяться.
Это эквивалент классов в других языках.
теперь можно добавить метод внутри конструктора (класса)
*/

// function Person(firstNameValue, ageValue, occupationValue, eyeColorValue) {
//     this.firstName = firstNameValue,
//     this.age = ageValue,
//     this.occupation = occupationValue,
//     this.eyeColor = eyeColorValue,

//     this.profile = function () {
//         console.log(`Hello, I'm ${this.firstName} and I'm a ${this.occupation}.`);
//       // названия методов пишут camelCase, как и в объектах
//     }
// }

// const p1 = new Person("John", 30, "driver", "green");
// const p2 = new Person("Susan", 25, "teacher", "brown");
// const p3 = new Person("Jennifer", 26, "doctor", "gray");
// p1.profile();
// p2.profile();
// p3.profile();

/*
Мы так же можем немного "упростить" наш конструктор и изменить названия аргументов

*/

// function Person(firstName, age, occupation, eyeColor) {
//     this.firstName = firstName,
//     this.age = age,
//     this.occupation = occupation,
//     this.eyeColor = eyeColor,
    
//     this.profile = function () {
//       console.log(`Hello, I'm ${this.firstName} and I'm a ${this.occupation}.`);
//     };
// }

/*

Подведем итоги:
Конструктор-функция - это шаблоны для создания объектов.
Они определяют какие свойства и методы объекты этого класса (этого конструктора) будут иметь.

таким образом javascript работал очень долго.

но программисты пришедшие из других языков начали жаловаться - что за язык такой, где нет
настоящих классов, как так можно работать?

поэтому в 2015 году, когда javascript перешел на версию ESб, они добавили
"настоящие" классы в свой язык.
*/

// ----------------------
//           CLASS
// ----------------------
/*
Давайте рассмотрим как создан класс

Имя класса - всегда с заглавной буквы. Методы - camelCase
*/

// class Person {
//     constructor(firstName, lastName, age, occupation, eyeColor) {
//         this. firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.occupation = occupation;
//         this.eyeColor = eyeColor
//     }

//     greetings() {
//         return "Hello. My name is John.";
//     }
// }
/*
конструктор - это специальный метод класса, эквивалент конструктор-функции
    Он должен иметь точное имя "конструктор" (constructor).
    Он выполняется автоматически при создании нового объекта.
    Он используется для инициализации свойств объекта.
    Если вы не определите конструктор, JavaScript добавит пустой конструктор автоматически.

Методы класса:
    Создаются с тем же синтаксисом, что и методы объекта.
    Работают так же как и методы объекта

Как вызвать класс?

const person = new Persdr(;

Здесь, используем зарезервированное слово new (как и с конструктор-функцией) и вызываем класс по имени
Затем создаем переменную и присваиваем класс
наша переменная person - это конкретный объект класса Person

Так же как и с конструктор-функцией, существуют классы, и из них создаются объекты,
которые мы используем в коде.

когда мы раньше видели вот такое:

const arr = new Array(); либо
const obj = new Object(); либо
const person = new Person();

Bo вcex этих случаях Array, Object, Person - эTo классы, a переменные arr, obj, person - это объекты класса.

и когда мы создаем объект от класса, то объект имеет свойства и методы этого класса.
Пример:
*/


class Person {
    constructor() {
    }
    greetings() {
        return "Hello. My name is John.";
    }
}

const p = new Person();

console.log(p.greetings());

/*
аргументы класса
передаются через конструктор
аргументы могут быть необязательными (optional)
аргументы могут быть любого типа данных, в том числе и объекты

*/

class Person {
    constructor(name, age, eyeColor = "brown") {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
    }

    greetings() {
        return `Hello. My name is ${this.name} .`;
    }

    about() {
        return `Color of my eyes is ${this.eyeColor}.`;
    }
}

const p1 = new Person("John", 30);
console.log(p1.greetings());
console.log(p1.about());


// так же, можно передавать аргументы в методы (как мы делали и с объектами)

class Person {
    constructor(name, age) {
        this.name = name; T
        this.age = age;
    }

    greetings() {
        return `Hello. My name is ${this.name}.`;
    }
    hobby(favoriteActivity) {
        return `My favorite activity is ${favoriteActivity}. `;
    }
}

const p8 = new Person("John", 30);
console.log(p8.hobby("woodworking"));


// // аргументы можно так же менять.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        return `Hello. My name is ${this.name} .`;
    }

    hobby(favoriteActivity) {
        return `My favorite activity is ${favoriteActivity}.` ;
    }
}

const p3 = new Person("John", 30);
p3.name = "Mike";
console.log(p3.greetings());
console.log(p3.hobby('running'));

/*
private properties

иногда нужны методы, поля, и другие свойства внутри класса, которые не видны за пределами класса.
такие свойства называются приватными.

перед именем свойства ставиться #
Пример: #name = "John";
*/

class Person {
    constructor(name, hourlySalary) {

        this.name = name;
        this.hourlySalary = hourlySalary;
    }

    #calculateSalary() {
        return this.hourlySalary * 40;
    }
    //#region
    getWeeklySalary() {
        return `${this.name} earns $${this.#calculateSalary()} per week .`;
    }
    //#endregion

}

const p4 = new Person("John", 20);
// console.log(p4.#calculateSalary());//error
console.log(p4.getWeeklySalary());

// Если приватное поле, то нужно его отдельно создать

class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

}

const p3 = new Person("John");
console.log(p3.getName());
console.log(p3.#name); // не можем использовать


class Person1 {
    #age;

    constructor(name, age = 30) {
        this.name = name;
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }
}

const p3 = new Person1("John");
console.log(p3.name);


/*
Важно знать:

В Javascript-е, есть два способа обозначить приватные методы/поля:
    используя # (#myVariableName)
    используя _ (_myVariableName)

# используется для действительно приватного метода/поля.
когда метод вызывается из вне, он виден не будет, javascript предотвращает использование метода

_ используется программистами чтобы сказать другим программистам - это приватный метод,
не меняйте его и не используйте из вне.

НО, _ не предотвращает использования метода из вне. он будет виден и может быть использован

*/

/* 
================ static properties

иногда нужно создать какой то служебный метод (utility method),
математическую формулу или какую то константное значение.

для этого используют ключевое слово "static"

class MyClass {
    static myStaticMethod() {
    // Статический метод
    }
}

статическими могут быть методы или поля

>>> статические методы являются частью класса, а не частью объекта класса,
и вызываются на прямую от класса. их нельзя вызывать через объекты

*/
class Car {
    constructor(name) {
    this.name = name;
    }

    getCarName() {
        return this.name;
    }

    static getDealerName() {
        return `Dealer of San Francisco`;
    }
}

const car = new Car("Honda");
console.log(car.getCarName());
console.log(car.getDealerName()); //error
console.log(Car.getDealerName()); 

// вспомним как мы использовали методы класса Math:
// Math.min() или Math.max(b
// без ключевого слова "new".

// Эти методы - статические методы, поэтому нам не нужно было созвадать объект от Math и не нужно слово "new".

// если нужно передать переменную в статический метод, передаем как и в обычный метод
// НО, статический метод не имеет доступа к занчениям объекта, поэтому нельзя использовать this

class Car {
    constructor(carName) {
        this.carName = carName;
    }

    static getDealerName(city) {
        return `Dealer of ${city}`;
        // return `${this.carName} of ${city}`;
    }
}

const car2 = new Car("Honda");
console.log(Car.getDealerName("San Francisco"));


class Car {
    constructor(carName) {
        this.carName = carName;
    }

    static getDealerName(brand, city) {
        const dealer = new Car(brand);

        return `${dealer.carName} of ${city}`;
    }

}
const car1 = new Car("Honda");
console.log(car1.carName); //Honda
console.log(Car.getDealerName("Mazda", "San Francisco")); // Mazda of San Francisco

// Итоги:

// какой из способов использовать - конструктор-функцию или класс - решать программисту/компании.
// есть плюсы и минусы обоих методов, например класс - более структурно-организованный и чистый способ,
// а так же будет полезен в будущих темах.

// ** Приватные поля (#) **: Символ *#* используется для обозначения приватных
// полей и методов в классах. Приватные поля недоступны из вне класса, и их нельзя
// изменить или использовать вне методов класса.

// ** Статические методы и поля (static) **: Ключевое слово static используется
// для определения методов и полей класса, которые принадлежат самому классу,
// а не его экземплярам. Статические методы и поля доступны для использования
// без создания экземпляра класса, и они общие для всех экземпляров класса.



//=============== getters and setters
// рассмотрим пример:

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this. lastName = lastName;
        this.age = age;
    }
}

const person = new Person(420, 99, "pizza");
console.log(person.firstName, person.lastName, person.age);


/*
Здесь есть проблема:

Такие значения не имеют никакого смысла и мы не хотим чтобы люди использовали мусор для значения параметров.

Как избежать? Как раз getters and setters нам в этом помогут.

getters and setters - специфичные методы (функции) класса, которые запускаются при создании объекта, и которые работают за занавесью.

Они позволяют нам добавить дополнительные проверки до того, как наш объект создастся.

Они дают нам возможность контролировать значения параметров класса.

setters - метод создания/проверки (передаем данные в класс)
getters - метод использования (используем данные)

В нашем случае, мы можем сделать проверку значения параметров, переданных в класс
*/

class Person {
    #firstName
    #lastName
    #age

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(val) {
        if (val.length > 0 && typeof val === 'string') {
            this._firstName = val; //ключ обычно соответствует имени из конструктора
        }
        else {
            console.log(`Error. First name "${val}" must be a non-empty string`);
            this._firstName = "";
        }
    }

    get lastName() {
        return this._lastName;
    }
    
    set lastName(val) {
        if (val.length > 0 && typeof val === 'string') {
            this._lastName = val; //ключ обычно соответствует имени из конструктора
        }
        else {
            console.log(`Error. Last name "${val}" must be a non-empty string`);
            this._lastName = "";
        }
    }

    get age() {
        return this._age;
    }
    
    set age(val) {
        if (typeof val === 'number' && val >= 0) {
            this._age = val; //ключ обычно соответствует имени из конструктора
        }
        else {
            console.log(`Error. Age "${val}" must be a non-negative number`);
            this._age = 0;
        }
    }

    get fullName() {
        return this.#firstName + " " + this.#lastName
    }
}

const person11 = new Person(420, 99, "pizza");
console.log(person11.firstName, person11.lastName, person11.age);


const person12 = new Person('Egor', 'LastName', 26);
console.log(person12.firstName, person12.lastName, person12.age);

// console.log(p12.firstName + ' ' + p12.lastName);
console.log(p12.fullName);




