console.log(`===========================Assign 2====================================`);

console.log(`------------------------step 1-------------------------------------------`);

function greaterNumber(num1,num2) {
     
    var greaterNum = num1 > num2 ? num1 : num2 ;
    console.log(`The greater number from ${num1} and ${num2} is : ${greaterNum}`);
     
}
greaterNumber(10,-10);

greaterNumber(800,899);

console.log(`-------------------------step 2------------------------------------`);

function isEvenOrOddNum(num) {
    var result = num%2==0 ? "even" : "odd" ;
    return result;
}
var result=isEvenOrOddNum(29);
console.log(`Given Number 29 is : ${result}`);
var result=isEvenOrOddNum(44);
console.log(`Given Number 44 is : ${result}`);
var result=isEvenOrOddNum(0);
console.log(`Given Number 0 is : ${result}`);
var result=isEvenOrOddNum(101);
console.log(`Given Number 101 is : ${result}`);

console.log(`---------------------------step 3--------------------------------------`);

function wordLength(str) {
    var wordLength=str.length;
    var result = wordLength%2==0 ? "even" : "odd" ;
    return result;
     
}
var result=wordLength("JavaScript"); 
console.log(`The length of  word "JavaScript"  is : ${result}`);
var result=wordLength("Developer");
console.log(`The length of  word "Developer" is : ${result}`);
var result=wordLength("Google");
console.log(`The length of  word "Google" is : ${result}`);

