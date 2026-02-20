// Почему undefined при приведении к строке будет "undefined"
let a;
console.log(a+"");
// а масив с значением "undefined" при приведении к строке превращает это значение в пустую строку?:
let arr =[];
arr.length = 1;
console.log(`[${arr.toString()}] type:${arr[0]}`);