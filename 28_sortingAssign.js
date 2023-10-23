console.log(`======================28_sortingAssign======================================`);

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`The given array is : [${arrayRollNumbers}]`);

console.log(`---------------------------------------------------------------------------`);

const reverseArray = arrayRollNumbers.reverse();
console.log(`step 1 : The reverse array is : [${reverseArray}]`);

console.log(`---------------------------------------------------------------------------`);

console.log(`step 2 : The sort() method as it is without using custom sorting logic ==> `);

const sortArray = arrayRollNumbers.sort();
console.log(`[${sortArray}]`);

console.log(`---------------------------------------------------------------------------`);

console.log(`step 3 : Sort the array in ascending order by using custom logic ==> `);

const sortedArray = arrayRollNumbers.sort((a,b)=>{
      return a>b ? 1 : -1 ;
});
console.log(`[${sortedArray}]`);

console.log(`---------------------------------------------------------------------------`);

console.log(`step 4 : The greatest number from the array is : ${sortedArray[sortedArray.length-1]}`);

console.log(`---------------------------------------------------------------------------`);

console.log(`step 5 : The smallest number from the array is : ${sortedArray[0]}`);

console.log(`---------------------------------------------------------------------------`);

console.log(`step 6 : Remove duplicates element from array ==>`);

const removeDupleElement = [...new Set (sortedArray)];
console.log(` After remove duplicates element from array : [${removeDupleElement}]`);


