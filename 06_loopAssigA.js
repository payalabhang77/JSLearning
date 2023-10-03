console.log(`=========================06_loopAssignA========================`);

console.log(`------------------------step 1----------------------------`);

var str="I am very good IT Developer";
console.log(`Given string is : '${str}'`);

var count=0;
for (let index = 0; index <=str.length-1; index++) {
   var char= str.charAt(index);
   
   if (char=='a' || char=='e' || char=='i' || char=="o" || char=='u') {
    count = count + 1;
   } else {
    if (char=='A' || char=='E' || char=='I' || char=="O" || char=='U') {
        count = count + 1;
   }
    
}
}
console.log(`the total numbers of vowels is : ${count}`);

console.log(`-------------------------step 2------------------------------`);

function sumOfCube() {
    var result=0;
    for (let index = 0; index <=5; index++) {
       var result=result+index*index*index;
 }
console.log(`sum of cube of numbers from 1 to 5 result is: ${result}`);
}
sumOfCube();

console.log(`---------------------step 3-------------------------------`);

function OddPositionedChars(str) {
    var result="";
    for (let index = 0; index <=str.length-1; index++) {
      if (index%2!=0 && str.charAt(index)!=" ") {
        var result=result+str.charAt(index)+" "; 
    
      } 

    }
   console.log(`odd positioned characters : ${result}`);
}
console.log(`Given string is :"Hard Work always pays back" `);
OddPositionedChars("Hard Work always pays back");

console.log(`---------------------------------------------------------`);

console.log(`Given string is :"Soon I will be UI IT champ" `);
OddPositionedChars("Soon I will be UI IT champ");
