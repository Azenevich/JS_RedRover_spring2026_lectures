//--------------------------------------------
// объекты
//--------------------------------------------

// Что такое объекты?
// Объект - это еще один тип данных в Javascript.

// Объекты в Javascript похожи на объекты реальной жизни.

// Возьмем, например, человека. У человека есть имя, фамилия, возраст, интересы и т.д.

// Например,
// человек
// имя: John
// фамилия: Smith
// возраст: 30
// интересы: музыка, лыжи, вкусная еда

// т.е, мы можем сказать, что человек имеет разные свойства и каждое свойство состоит из пары: ключ/значение
// свойство 1: ключ - "имя", значение - "John"
// свойство 2: ключ - "фамилия", значение - "Smith"
// свойство 3: ключ - "возраст", значение - "30"
// и т.д.

// и таких ключ/значение пар может быть столько, сколько требуется для определения человека

// в Javascript-e, мы можем сказать, что человек - это объект. И у объекта есть свойства, которые его определяют.

// Мы так же можем представить объект в виде ящика. В этом ящике есть много коробочек.
// В каждой коробочке хранится какая то информация и на коробочке написана этикетка.
// По этикетке коробочку легко найти, посмотреть информацию в ней, удалить или добавить в неё что-либо.

// В Javascript - объкеты это всё:
// функции - объекты,
// массивы - тоже объекты (Поэтому, когда мы печатали тип массива, выходило объект)

//----------------------- определение объекта
// есть 2 способа:

// 1. Object literals (литерал объекта). используем фигурные скобки для создания объекта.
// внутри фигурных скобок - свойства объекта, как пары, ключ/значение.

const person1 = {
    firstName: "John", // под ключом "firstName" хранится значение "John". ключ всегда camelCase
    age: 30, // под ключом "age" хранится значение 30
    occupation: "teacher"
}

// 2. Constructors, (конструктор объекта). используем ключевое слово "new"

const person2 = new Object();  // создали объект
person2.firstName = "John";  // создали свойство
person2.age = 30; // создали еще одно свойство
person2.occupation = "teacher";

// т.е. на данный момент у нас есть ящик по имени "person2"
// с тремя папками подписанными "name", "age" и "occupation"

// и мы можем распечатать наш объект и посмотреть
console.log(person1);
console.log(person2);

// мы так же можем распечатать значение определенного ключа
console.log(person1.age);

// мы можем добавить в объект еще папки/свойства:
person1.hobby = "swimming";
person2.hobby = "swimming";

console.log(person1);
console.log(person2);

// либо удалить папку:
delete person1.age;

console.log(person1);
console.log(person2);

// мы уже об этом говорили с массивами и функциями, но я создавал объект как "const" могу его изменять.

// когда я изменяю объект, я на самом деле изменяю свойства объекта а не саму переменную,
// поэтому она может быть либо const, либо let.

// и так же как с функциями, если переменная не переопределяется во что-то
// другое (строку, т.д.), то const, а иначе let

// значение ключа может так же быть объектом, что дает возможность объединять свойства

const person = {
    id: 1,
    personalInfo: {
        name: "John Smith",
        age: 30,
        address: {
            address1: "1 Main Street",
            city: "Los Angeles",
            state: "CA"
        },
        phone: "123456789"
    },
    car: "Toyota",
    favoriteColors: ["red", "blue", "green"]
};

// и распечатаем
console.log(person);
console.log(person.id);
console.log(person.personalInfo.age);
console.log(person.personalInfo.address.city);

// имя свойства (ключ) может состоять из нескольких слов, но тогда обязательно ставим кавычки:

const user = {
    name: "John",
    age: 20,
    "likes birds": true
}
console.log(user);

// заметка:
// иногда мы можем наблюдать что ключ, хоть и одно слово, но все равно в кавычках.
// для Javascript - это работает, но лучше так не делать.

// обращение к объекту и свойствам

// через точку если свойство - одно слово
console.log(user.age);

// через квадратные скобки и кавычки - если свойство несколько слов
console.log(user["likes birds"]);  // "user.likes birds" - работать не будет

// // так тоже будет работать, но обычно быстрее и легче через точку
console.log(user["age"]);


// ------------------ изменить/добавить свойства объекта

// свойство из одного слова

user.car = "Tesla";
console.log(user);

// свойство из двух слов (с кавычками!)
user["great skiier"] = true; // "user.great skiier = true" - pa6oTaTb He 6yAeT
console.log(user);

//============ свойствО КАК ПЕРеМЕННАЯ

// мы так же можем использовать квадратные скобки если хотим обратиться к свойству через переменую
// без кавычек !!!

let skiier = "great skiier"; //становится названием нашего ключа
user[skiier] = true;
console.log(user);

// либо, если определяем объект как литерал объекта (используя фигурные скобки):

const fruit = "apple";
const market = {
    [fruit]: 5
}

console.log(market);

// вопрос: в чем разница?

// user[carModel] = "BMW";
// user["carModel"] = "BMW";

// ------------------как проверить существования свойства

const user2 = {
    name: "John",
    age: 20,
    "likes birds": true
};


//--------------------- npoBepka c undefined

// В отличие от многих других языков, особенность JavaScript-объектов в том, что можно получить доступ к любому свойству. 
// Даже если свойства не существует - ошибки не будет!
// При обращении к свойству, которого нет, возвращается undefined.

console.log(user.address);

// -- проверка с оператором in

console.log("age" in user2); // true
console.log("occupation" in user2); // false

// ключ в кавычках!

// ----------------------опциональная цепочка (optional chaining)

// возьмем пример
const user1 = {
    personalInfo: {
        name: "Jim",
        age: 20,
            address: {
            address1: "1 Main Street",
            city: "Boston",
            state: "MA"
        },
    },
    occupation: "driver"
};

// нам нужно взять значение ключа city но мы не знаем существует ли оно или существует ли ключ address вообще. как быть?

// 1. можно проверить каждый родительский ключ
// 2. но проверять каждый родительский ключ, по нескольку раз - долго. поэтому

console.log(user1?.personalInfo?.address?.city.toLowerCase());
console.log(user1?.personalInfo?.address?.address2);
console.log(user1?.personalInfo?.homeAddress?.city);
console.log(user1?.person?. address?.city);

// ----------------------Пример как приходит дата из базы данных?

const arr = [
    {
        id: 1,
        name: "John",
        age: 20
    },        
    {
        id: 2,
        name: "Jim",
        age: 25
    },
    {
        id: 3,
        name: "Susan",
        age: 21
    }
];

arr.map((item) => {
    console.log(item.name);
});


// ---------------------- Циклы с объектами

// Стандартные циклы "for" предназначены для перебора коллекций на основе индексов, таких как массивы.
// Однако объекты структурированы как пары ключ-значение и не имеют упорядоченного индекса.
// Поэтому для итерации по объекту используется другие возможности

// ==== for ... in

const obj = {
    a: 1,
    b: 2,
    c: 3
};


// если нужно распечатать имя каждого ключа

for (const key in obj) {    
    console.log(key);
}

// если нужно распечатать значение каждого ключа

for (const key in obj) {
    console.log(obj[key]);
    console.log(key + ": " + obj[key]);
}

// ------------------- методы ооъекта

// мы можем так же использовать несколько методов объекта, которые возвращают нам значения объекта

// ===== Object.keys()

// метод Object.keys() возвращает массив из ключей объекта
const object1 = {
    a: 1,
    b: 2,
    c: 3
}

const arrKeys = Object.keys(object1);
console.log(arrKeys);

for (let i = 0; i < arrKeys.length; i++) {
    let key = arrKeys[i];
    console.log(key + " " + object1[key]);
}


// ===== Object.values()

// метод Object.values() возвращает массив из значений объекта

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

const arrValues = Object.values(obj1);
console.log(arrValues);

for (let i = 0; i < arrValues.length; i++) {
    console.log(arrValues[i]);
}

// ==== Object. entries()

// метод Object.entries() возвращает массив из пар (ключ/значение как массив) объекта

const obj2 = {
    a: 1,
    b: 2,
    c: 3
}

const arrEntries = Object.entries(obj2);
console.log(arrEntries);

for (let i = 0; i < arrEntries.length; i++) {
    const arr = arrEntries[i];
    // console.log(arr);
    console.log(arr[0] +": " + arr[1]);
}


// -------------------- функции внутри объекта

// мы создаем объект пользователя

const personNew = {
    name: "Jim",
    eyes: "Blue",
    age: 30
}

/*
в реальном мире, пользователь может совершать действия: разговаривать, оплачивать покупки и т.п.
такие действия в объектах представлены функциями
*/

personNew.greetings = function () {
    return "Hello, everyone! What a wonderful day!";
}

console.log(personNew);
console.log(personNew.greetings());


/*
мы так же можем создать функцию отдельно и потом присвоить ее к свойству объекта
*/

function Greetings() {
    return "Hello, everyone! What a wonderful day!";
}

person.greetings = Greetings;
console.log(person.greetings());


// либо, если мы создаем свойство сразу в объекте, можно

const person2 = {
    name: "Jim",
    greetings: function() {
        return "Hello, everyone! What a wonderful day!";
    }
}

// Функцию, которая является свойством объекта, называют методом этого объекта.

// Итак, мы получили метод объекта. Мы можем переписать наш объект вот так:

const person1 = {
    name: "Jim",
    eyes: "Blue",
    age: 30,
    greetings: function() {
        return "Hello, everyone! What a wonderful day!";
    }
}
console.log(person1.greetings());


// можно сократить. Можно опустить ключевое слово function

const person = {
name: "Jim",
eyes: "Blue",
age: 30,

    greetings() {
        return "Hello, everyone! What a wonderful day!";
    }
};

console.log(person.greetings());


// // ------------------ THIS

/*
Как правило, методу объекта требуется доступ к информации, хранящейся в объекте, для выполнения своей работы.
Например, коду внутри person.greetings() может потребоваться имя или возраст, которое хранится в объекте person.
Для доступа к информации внутри объекта метод может использовать ключевое слово this. Например:
*/

const person3 = {
    name: "Jim",
    eyes: "Blue",
    age: 30,

    greetings() {
        return `Hello, everyone! My name is ${this.name}`;
    }
};

console.log(person3.greetings());

// // в данном случае this - это этот конкретный, текущий объект и значение this будет являться person.
// // Его значение вычисляется во время выполнения кода, в зависимости от контекста.
// // Пока функция не вызвана, this не имеет значения


// // Пример:

function Greetings() {
    console.log(`Hello. My name is ${this.name}` );
    }

let user3 = {
    name: "John"
}

let user4 = {
    name: "Jack"
}

user3.greetings = Greetings;
user4.greetings = Greetings;
user3.greetings(); // this внутри функции - это объект перед точкой, т.е. user1
user4.greetings(); // this внутри функции - это объект перед точкой, т.е. user2

/*
Такое использование this не очень приветсвуется, т.к. легко допустить ошибку.
Поэтому лучше декларировать методы внутри объекта.
*/

// Заметим, что у стрелочных функциях нет this.|
// Если мы ссылаемся на this внутри такой функции, то оно берётся из внешней обычной функции.
// Например, здесь метод sayHi() использует значение this из внешнего метода person.introduction():

let person = {
    name: "John",
    age: 30,

    introduction() {
        let sayHi = () => {
            return console.log(`Hello. My name is ${this.name}`);
        }
        return sayHi();
    }
}

person.introduction();

/*
Это особенность стрелочных функций. Она полезна, когда мы на самом деле не хотим иметь отдельное this, 
а хотим взять его из внешнего контекста. Например, стрелочные функции используются в функциях обратного
вызова (callback functions) для поддержания правильного контекста.
*/

//  Пример 2:

const counter = {
    count: 0,

    increment: () => {
        return this.count++;
    }

    // increment(){
    //     return ++this.count;
    // }
}

console.log(counter.count); // <-- свойство count из объекта

// "this" НЕ соответствует свойству "count", а соответсвует глобальной переменной "count" (у нас ее нет, поэтому будет ошибка)

console.log(counter.increment());

// ----------------- аргументы методов
// методы объекта могут принимать аргументы

let person = {
    name: "John",
    age: 30,

    introduction(coworkerName) {
        return `Hello ${coworkerName}. I'm ${this.name}`;
    }
}

console.log(person.introduction("Bob"));



// ==== копирование методов объекта

// методы объекта могут быть скопированы между разныме объектами. есть 3 способа:

// 1. Прямое копирование

const source1 = {
    greet: function(name) {
        return `Hello, ${name} !`;
    }
}

const target1 = {};

// Копируем метод "greet" из объекта source в объект target
target1.greet1 = source1.greet;

console.log(source1.greet("Olya"));
console.log(target1.greet1("Katya"));

// 2. Использование Object.assign() для поверхностного копирования
// примитивные свойства копируются полностью
// вложенные массивы или объекты копируются поверхностно

const source3 = {
    value: 10,
    details: {
        age: 25
    },

    sayHi: function() {
        return "Hi there!";
    }
}

const target4 = {};

// // Копируем метод "sayHi" and свойство "value" из source в target
Object.assign(target4, source3);

console.log(source3);

console.log(source3.value);
console.log(target4.value);

target4.details.age = 21;
console.log(source3.details.age);
console.log(target4.details.age);

console.log(source3);
console.log(target4);

// 3. Использование Spread Оператора ( ... ) для поверхностного копирования
// (да, Spread оператор может использоваться и с объектами, не только с массивами)

const source = {
    name: "John",
    data: { x: 1, y: 2 },

    calculate: function(a, b) {
        return a + b;
    }
}

const target = { ...source };

console.log(target.calculate(5, 3));
console.log(target.data);
console.log(source.name);
console.log(target.name);
// target.name = 'Olga'
source.name = 'Olga'
console.log(source.name);
console.log(target.name);


// Важно:
// Все эти виды копирования в JavaScript выполняет поверхностное (shallow сору), а не глубокое копирование (deep сору).
// Это означает, что, хотя и создаётся новый объект с копиями свойств верхнего уровня исходного объекта,
// если какие-либо из этих свойств сами являются объектами или массивами, копируется только ссылки на них.
// Следовательно, изменение вложенного объекта или массива в скопированном объекте также повлияет на исходный объект,
// и наоборот.

// Если нужно глубокое копирование, используются другие способы (сейчас об этом говорить не будем):
// - structuredClone
// - JSON методы
// - Lodash's cloneDeep

/*
Итак, подведем итоги:

- Методы позволяют объектам "действовать": object.doSomething().
- Методов в объекте может быть много, столько сколько нужно
- Методы могут ссылаться на объект через this.
- Значение this определяется во время исполнения кода.

- Функция может быть скопирована между объектами (из одного объекта в другой).
- При объявлении любой функции в ней можно использовать this, но этот this не имеет значения
до тех пор, пока функция не будет вызвана.
- Стрелочные функции являются особенными - у них нет this.
Когда внутри стрелочной функции обращаются к this, то его значение берётся от родителя.
*/

/*
Я могу всех поздравить

Когда мы пишем наш код, где программа вместо того чтобы писать строчку за строчкой,
использует разные объекты, взаимодействующие друг с другом, где у каждого объекта есть свои свойства
и свое поведение - то такой подход называется Объектно-Ориентированное Программирование, ООП

ООП является большой частью любого программирования и мы рассмотрим как оно работает
в дальнейших лекциях.
*/










