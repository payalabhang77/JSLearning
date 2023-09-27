console.log(`=======================Assign 1================================`);

console.log(`------------------------step 1-----------------------------------`);

function squareOfWordLength(str) {
      var lengthOfStr = str.length;
      var result = lengthOfStr * lengthOfStr;
      return result;
}
var result=squareOfWordLength("JavaScript");
console.log(`Given string is : "JavaScript" and its Square length is : ${result}`);

var  result=squareOfWordLength("Google Chrome");
console.log(`Given string is : "Google Chrome" and its Square length is : ${result}`);

var  result=squareOfWordLength("Developer Smart");
console.log(`Given string is : "Developer Smart" and its Square length is :${result}`);

console.log(`-----------------------------step 2-----------------------------------`);

function givenString() {
    var str = "I am Angular Developer";
    console.log(`Given string is : ${str}`);

    var lengthOfStr=str.length;
    console.log(`Given string length is : ${lengthOfStr}`);

    var word = str.split(" ");
    console.log(`Total number of words is : ${word.length}`);

    console.log(`----------------------------------------------------------`);

    var result= lengthOfStr/word.length;
    console.log(`string length divide by total number of word is : ${result}`);

    console.log(`----------------------------------------------------------`);

    var result=lengthOfStr* word.length;
    console.log(`string length multiply by total no of words is : ${result}`);

}
givenString();






