console.log(`=============================================Implicit Conversion================================`);

console.log(`----------------------------------Implicit Conversion to string--------------------------------------------------------`);

var result;

result = '4' + 2;
console.log(`1.the number 2 is convert to the string and string is perform concatenation then result of '4'+ 2 is : ${result}` );

result = '4' + true;
console.log(`2.The boolean true is convert to the string and string is perform concatenation then result of '4'+ true is : ${result}` );

console.log(`--------------Implicit boolean Conversion to number---------------------------------------------------`);

result = 2 + true;
console.log(`1.if the arithmetic operator '+' is used boolean the boolean true is convert to the number then true value is 1 then result of 2 + true is : ${result}` );

result = 7 - false;
console.log(`2.if the arithmetic operator '-' is used boolean the boolean false is convert to the number then false value is 0 then result of 7 - false is : ${result}` );

console.log(`--------------Implicit string Conversion to number-----------------------------`);

result = 7 - "4";
console.log(`1.if the arithmetic operator '-' is used string the string "4" is convert to the number and then 7 - "4" result is : ${result}` );

result = 7 * "4";
console.log(`2.if the arithmetic operator '*' is used string the string "4" is convert to the number and then 7 * "4" result is : ${result}` );

console.log(`========================================Explicit Conversion==============================`);

console.log(`----------------------------------------------number()-----------------------------------`);

var result = Number("322");
console.log(`1.the explicit conversion : the string "322" is convert to the number and then result of Number("322") is : ${result}` );

var result = Number(false);
console.log(`2.the explicit conversion : the boolean false is convert to the number and then result of Number(false) is : ${result}` );

var result = Number(true);
console.log(`3.the explicit conversion : the boolean true is convert to the number and then result of Number(true) is : ${result}` );

console.log(`----------------------------------invalid explicit conversion-----------------------------------------`);
 
var result = Number(undefined);
console.log(`2.if the string is convert to number and then result of Number(undefined) is : ${result}` );

var result = Number("hello");
console.log(`3.if the string  is convert to the number and the result of Number("hello") is : ${result}` );

