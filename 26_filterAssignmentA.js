console.log(`======================26_filterAssignmentA==================================`);

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given array is : [${arrayNumbers}]`);

console.log(`--------------------------------------------------------------------------`);

const arrayNum = arrayNumbers.filter( (currentValue )=> {
    return currentValue > 50;
} );
console.log(`step 1 : The all numbers which are greater than 50 is : [${arrayNum}]`);

console.log(`--------------------------------------------------------------------------`);

const arrayEvenNum = arrayNumbers.filter( (currentValue)=> {
    return currentValue%2==0;
} );
console.log(`step 2 : The all even numbers is : [${arrayEvenNum}]`);

console.log(`--------------------------------------------------------------------------`);

const arrayOddNum = arrayNumbers.filter( (currentValue)=> {
    return currentValue%2!=0;
} );
console.log(`step 3 : The all odd numbers is : [${arrayOddNum}]`);

console.log(`--------------------------------------------------------------------------`);

const arrayNumOfMulti = arrayNumbers.filter((currentValue)=>{
     return currentValue%5==0;
});
console.log(`step 4 : The all numbers which are multiple of 5 is : [${arrayNumOfMulti}]`);

console.log(`--------------------------------------------------------------------------`);

const arrayNumber = arrayNumbers.filter((currentValue)=>{
    return currentValue>=20 && currentValue<=50;
});
console.log(`step 5 : The all numbers which are between 20 and 50 is : [${arrayNumber}]`);





