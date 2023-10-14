//11 - 2 3 4 5 6 7 8 9 10

console.log(`----------------------------isPrimeNumber----------------------------`);

function isPrimeNumber(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}
const resultNo11 = isPrimeNumber(11);
console.log(`Given Number 11 is Prime: ${resultNo11}`);

const resultNo6 = isPrimeNumber(6);
console.log(`Given Number 6 is Prime: ${resultNo6}`);

const resultNo45 = isPrimeNumber(45);
console.log(`Given Number 45 is Prime: ${resultNo45}`);

const resultNo13 = isPrimeNumber(13);
console.log(`Given Number 13 is Prime: ${resultNo13}`);

console.log(`--------------------------------------------------------------`);

const array = [11,3,6,10,43,29,50];
console.log(array);

function isPrimeNumber(num) {
   
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}
const result0thIndex = isPrimeNumber(array[0]);
console.log(`Given number ${array[0]} is Prime number : ${result0thIndex}`);

const result1thIndex = isPrimeNumber(array[1]);
console.log(`Given number ${array[1]} is Prime number : ${result1thIndex}`);

const result2thIndex = isPrimeNumber(array[2]);
console.log(`Given number ${array[2]} is Prime number : ${result2thIndex}`);

const result3thIndex = isPrimeNumber(array[3]);
console.log(`Given number ${array[3]} is Prime number : ${result3thIndex}`);

const result4thIndex = isPrimeNumber(array[4]);
console.log(`Given number ${array[4]} is Prime number : ${result4thIndex}`);

const result5thIndex = isPrimeNumber(array[5]);
console.log(`Given number ${array[5]} is Prime number : ${result5thIndex}`);

const result6thIndex = isPrimeNumber(array[6]);
console.log(`Given number ${array[6]} is Prime number : ${result6thIndex}`);

console.log(`---------------------------------------------------------------`);

const arrays = [11,3,6,10,43,29,50];
console.log(`Given array is : [${array}]`);

function isPrime(number) {
    for (let index = 2; index < number; index++) {
        if (number%index==0) {
            return false;
        }
    }
    return number;
}
let result = arrays.filter(isPrimeNumber);
console.log(`prime numbers of given array are : ${result}`);



