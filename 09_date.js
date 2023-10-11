

console.log(`----------------------------------date() methods----------------------------------`);

const date = new Date();

console.log(date);
console.log(date.getDate());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.getMinutes());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMonth());
console.log(date.getSeconds());

const dt = new Date("Aug 28, 2022, 23:00:45");
console.log(dt);

const d = new Date("2020/07/24");
console.log(d);

const dd = new Date("03-25-2016");
console.log(dd);

const ddd = new Date("25 Mar 2015");
console.log(ddd);

console.log(`----------------------------math------------------------------`);

const square10 = Math.pow(10,2);
console.log(square10);

const maxNum=Math.max(23.56, 67, 89, 90.567, 45, 67);
console.log(maxNum);

const minNum=Math.min(23.56, 67, 89, 90.567, 45, 67);
console.log(minNum);


