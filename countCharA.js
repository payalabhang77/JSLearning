console.log(`===========================Assignment======================================`);

function countCharA(str) {
  var count = 0;
  for (let index = 0; index <= str.length - 1; index++) {
    var char = str.charAt(index);

    if (char == "a") {
      count = count + 1;
    } else {
      if (char == "A") 
      count = count + 1;
    }
  }
  return count;
}
var count = countCharA("I AM Learning JavaScript, The Language of internet");
console.log(`given string is : "I AM Learning JavaScript, The Language of internet"`);
console.log(`total number of characters 'a' or 'A' available in given string : ${count}`);

console.log( `---------------------------------------------------------------------------`);

var count = countCharA("My favorite movie is LAggAn");
console.log(`given string is : "My favorite movie is LAggAn"`);
console.log(`total number of characters 'a' or 'A' available in given string : ${count}`);

