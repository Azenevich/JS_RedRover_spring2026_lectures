const cars = [
    {
        model: "Tayota",
        color: "red",
        year: 2020,
        price: 4000
    },
    {
        model: "Honda",
        color: "blue",
        year: 2021,
        price: 3000
    },
    {
        model: "BMW",
        color: "black",
        year: 2022,
        price: 4000
    },
];

let maxPrice = Math.max(...cars.map(car => car.price)); 
let expCar = cars.filter(car => car.price === maxPrice)
console.log(expCar);

// console.log(cars);

// let price = cars.map(car => car.price);
// console.log(price);
// let maxPrice = Math.max(...price);
// console.log(maxPrice);

let newCar = cars.reduce((prev, carrent) => {
    return (prev.price > carrent.price) ? prev : carrent;
}) //reduce not usefull in this operation if price the same

console.log(newCar);



let maxCar = cars.reduce((acc, cur, i) => {
    // console.log((Array.isArray(acc)));
    console.log('acc: ', i, ': ', acc, cur);

    if (acc[0].price === cur.price) {
        acc.push(cur);
        return acc;
        
    }
    else if (acc[0].price < cur.price) {
        return [cur]
    } 
    else {
        return acc;
    }

}, [[]])
console.log(maxCar);