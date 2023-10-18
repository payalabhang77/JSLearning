let person = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune",
    pin: 431202
 };
// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;
// const city = person.city;

let {name, age, isMarried, city, country="Bharat"} = person;
console.log(name, age, isMarried, city, country);


const array = ['Mona', 'Sana', 'Tina', 'Bala'];

let [element1, element2, element3, element4, element5='Khan']= array;

console.log(element1, element2, element3, element4, element5);