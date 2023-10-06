console.log(`==============================08_arrayAssign02===================================`);

const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`given array is : [${arrayNumbers}]`);

console.log(`----------------------------------step 1----------------------------------------`);

const totalLength=arrayNumbers.length;
console.log(`total elements is : ${totalLength}`);

console.log(`----------------------------------step 2----------------------------------------`);

const firstElement=arrayNumbers[0];
const lastElement=arrayNumbers[arrayNumbers.length-1];
console.log(`first element is : ${firstElement} and last element is : ${lastElement}`);

console.log(`----------------------------------step 3----------------------------------------`);

const thirdLastElement=arrayNumbers[arrayNumbers.length-3];
console.log(`third last element is : ${thirdLastElement}`);

console.log(`----------------------------------step 4----------------------------------------`);

let resultOfEvenNum='';
for (const key in arrayNumbers) {
    const element = arrayNumbers[key];
    if (element%2==0) {
        resultOfEvenNum=resultOfEvenNum+element+' ' ;
    }
}
console.log(`all even numbers is : ${resultOfEvenNum}`);

console.log(`----------------------------------step 5----------------------------------------`);

let resultOfOddNum='';
for (const key in arrayNumbers) {
    const element = arrayNumbers[key];
    if (element%2!=0) {
        //console.log(` ${element}`); 
        resultOfOddNum=resultOfOddNum+element+' ';
    }
}
console.log(`all odd numbers is : ${resultOfOddNum}`);

console.log(`----------------------------------step 6----------------------------------------`);

let sumEven=0;
let resultOfEven='';
for (let index = 0; index < arrayNumbers.length; index++) {
    
    if (index%2==0) {
        const element = arrayNumbers[index];
        //console.log(`${element}`);
        resultOfEven=resultOfEven+element+' ';
        sumEven=sumEven+element;
    }

}
console.log(`even positioned elements from array numbers is : ${resultOfEven}`);
console.log(`even positioned elements from array numbers sum is : ${sumEven}`);


console.log(`----------------------------------step 7----------------------------------------`);

let sumOdd=0;
let resultOfOdd='';
for (let index = 0; index < arrayNumbers.length-1; index++) {

    if (index%2!=0) {
        const element = arrayNumbers[index];
        //console.log(`${element}`);
        resultOfOdd=resultOfOdd+element+' ';
        sumOdd=sumOdd+element;    
    }
    
}
console.log(`odd positioned elements from array numbers is : ${resultOfOdd}`);
console.log(`odd positioned elements from array numbers sum is : ${sumOdd}`);

console.log(`----------------------------------step 8----------------------------------------`);

let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum=sum+element;
}
console.log(`the sum of all elements from array numbers is : ${sum}`);

console.log(`----------------------------------step 9----------------------------------------`);
console.log(`the numbers which are multiple of 5 : `);

    let result='';
    for (const key in arrayNumbers) {
        const element = arrayNumbers[key];
        if (element%5==0) {
            //console.log(`${element}`);
            result=result+element+' ';
        }
    }
    console.log(`${result}`);

console.log(`----------------------------------step 10----------------------------------------`);

const arrayNumbersInclude=arrayNumbers.includes(115);
console.log(`is number 115 available in arrayNumbers ? : ${arrayNumbersInclude}`);

console.log(`----------------------------------step 11----------------------------------------`);

const arrayNumbersIncl=arrayNumbers.includes(23);
console.log(`is number 23 available in arrayNumbers ? : ${arrayNumbersIncl}`);

console.log(`----------------------------------step 12----------------------------------------`);

arrayNumbers.splice(3,0,55,66);
console.log(`insert numbers- 55,66 before index 3 : [${arrayNumbers}]`);

console.log(`----------------------------------step 13----------------------------------------`);

arrayNumbers.splice(4,3);
console.log(`delete 3 element starting from index 4 : [${arrayNumbers}]`);

