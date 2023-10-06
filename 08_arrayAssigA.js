console.log(`=========================08_arrayAssignA==============================================`);

const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`given array is : ${arrayFruits}`);

console.log(`-------------------------------step 1-------------------------------------`);

const firstFruit=arrayFruits[0];
console.log(`first element is : ${firstFruit}`);

const lastFruit=arrayFruits[arrayFruits.length-1];
console.log(`last element is : ${lastFruit}`);

console.log(`----------------------------------step 2------------------------------------`);

arrayFruits.unshift("papaya");
console.log(`add element "Papaya" before the element "Banana" : ${arrayFruits}`);

console.log(`-----------------------------------step 3------------------------------------`);

const removedElements=arrayFruits.splice(4,1);
console.log(`remove "mango" from the array : ${arrayFruits}`);

console.log(`--------------------------------step 4--------------------------------------`);

arrayFruits.push("Pineapple");
console.log(`add element "pineapple" at the last position : ${arrayFruits}`);

console.log(`----------------------------------------step 5---------------------------------------`);

const insertElement=arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`insert an element-"Dragon Fruit" before "Water Melon" : ${arrayFruits}`);

console.log(`-----------------------------------step 6--------------------------------`);

const replaceElement=arrayFruits.splice(2,1,"Kiwi");
console.log(`replace an element "Orange" with "Kiwi" : ${arrayFruits}`);

console.log(`---------------------------------- step 7---------------------------------------`);

const slicedElements=arrayFruits.slice(1,4);
console.log(`element from index 1 to 4 : ${slicedElements}`);

console.log(`--------------------------------step 8---------------------------------------`);

const lastFirstElements=arrayFruits[arrayFruits.length-1];
const lastSecondElements=arrayFruits[arrayFruits.length-2];
const lastThirdElements=arrayFruits[arrayFruits.length-3];
console.log(`last three elements : ${lastFirstElements}, ${lastSecondElements}, ${lastThirdElements} `);
