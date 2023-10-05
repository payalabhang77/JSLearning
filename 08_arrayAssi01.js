console.log(`=======================08_arrayAssign01=====================================`);

let arrayNumbers=[22,11,44,55,77,33];

console.log(`----------------------------step 1------------------------------------------`);

console.log(`Even positioned of array element is :`);

for (let index = 0; index < arrayNumbers.length-1; index++) {
    if (index%2==0) {
        const element=arrayNumbers[index];
        console.log(`${element}`);
    }
    
}

console.log(`-------------------------------step 2--------------------------------------`);

let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element=arrayNumbers[index];
    sum =sum+element; 
}
console.log(`sum of array element is : ${sum}`);   

console.log(`---------------------adding element in first position------------------------`);

console.log(`before string is : [${arrayNumbers}]`);
arrayNumbers.unshift(88);
console.log(`after string is : [${arrayNumbers}]`);

console.log(`---------------------adding element in last position---------------------------`);

console.log(`before string is : [${arrayNumbers}]`);
arrayNumbers.push(99);
console.log(`after string is : [${arrayNumbers}]`);


console.log(`----------------------removing element in first position------------------------`);

console.log(`before string is : [${arrayNumbers}]`);
arrayNumbers.shift();
console.log(`after string is : [${arrayNumbers}]`);

console.log(`-----------------removing element in last position------------------------------`);

console.log(`before string is : [${arrayNumbers}]`);
arrayNumbers.pop();
console.log(`after string is : [${arrayNumbers}]`);

console.log(`-------------------------array is reverse order------------------------------`);

let reverse="";
for (let index = arrayNumbers.length-1; index>=0; index--) {
    const element = arrayNumbers[index]+",";
    reverse=reverse+element;
}
console.log(`given array is reverse order : [${reverse}]`);