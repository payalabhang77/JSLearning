console.log(`======================27_reduceAssignA======================================`);

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`The given array is : [${arrayNumbers}]`);

console.log(`---------------------------------------------------------------------------`);

console.log(`step 1 : Find the sum of all numbers using reduce() and traditional way ==>`);

const sumOfArrayNum = arrayNumbers.reduce((runningTotal,value)=>{
     return runningTotal+value;
}, 0);
console.log(`The sum of all numbers using reduce method : ${sumOfArrayNum}`);

let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum=sum+element;
}
console.log(`The sum of all numbers using traditional for loop : ${sum}`);

console.log(`----------------------------------------------------------------------------`);

console.log(`step 2 : Find the numbers multiple of 5 and then sum ==> ==>`);

const arrayNum = arrayNumbers.filter((currentValue)=>{
    return  currentValue%5==0;
});
console.log(`The numbers multiple of 5 : [${arrayNum}]`);

const sumOfNum = arrayNum.reduce((runningTotal,value)=>{
    return runningTotal+value;
});
console.log(`The sum of numbers multiple of 5 using reduce method : ${sumOfNum}`);




