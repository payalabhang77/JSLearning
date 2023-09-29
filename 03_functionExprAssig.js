

var square = function(value) {
    return result= value * value;
}
console.log(`-----------------------------step 1---------------------------------`);

var result = square(5);
console.log(`square of 5 is : ${result}`);
var result = square(6);
console.log(`square of 6 is : ${result}`);
var result = square(25);
console.log(`square of 25 is : ${result}`);
var result = square(100);
console.log(`square of 100 is : ${result}`);
var result = square(67);
console.log(`square of 67 is : ${result}`);
var result = square(89);
console.log(`square of 89 is : ${result}`);
var result = square(59);
console.log(`square of 59 is : ${result}`);

console.log(`---------------------------step 2-----------------------------------`);

console.log(`typeof variable name is : ${typeof square}`);

console.log(`---------------------------step 3-------------------------------------`);

var areaOfRectangle = function(length,width) {
     return length * width ;
     
}
var result = areaOfRectangle( 499,917);
console.log(` Area of rectangle with length is 499 and width is 917 then result is : ${result}`);

console.log(`---------------------------step 4--------------------------------`);

var swapValues= function(value1,value2) {
    console.log(`Before swap : ${value1} ${value2}`);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log(`After swap : ${value1} ${value2}`);
}
swapValues("mahi","Raina");
swapValues("55","77");

console.log(`-------------------------------step 5-------------------------------`);

var  strHandsOn = function() {
    var str = "JS the most popular language of internet";

    var totalLength = str.length;
    console.log(`total characters available in the string is : ${totalLength}`);
    
    var charAt6 = str.charAt(6);
    console.log(`character of index 6 is : '${charAt6}'`);

    var charAt11= str.charAt(11);
    console.log(`character of index 11 is : '${charAt11}'`);

    var lastChar = str.charAt(str.length-1);
    console.log(`last character of string is : ${lastChar}`);

    var firstChar = str.charAt(0);
    console.log(`first character of string is : ${firstChar}`);

    var thirdLastChar = str.charAt(str.length-3);
    console.log(`third last character of string is : ${thirdLastChar}`);

    var Words = str.split(" ");

    var square = Words.length*Words.length;
    console.log(`total words available in string is : ${Words.length} and square is : ${square}`);

}
strHandsOn();