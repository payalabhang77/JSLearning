console.log(`======================25_mapMethodAssignmentA==================================`);

const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given array is : [${arrayNumbers}]`);

console.log(`----------------------------------------------------------------------------`);

console.log(`step 1 : Add 10 into each element ==>`);

const newArray = arrayNumbers.map( (currentValue)=> {
    return currentValue+10;
} );
console.log(`[${newArray}]`);

console.log(`----------------------------------------------------------------------------`);

console.log(`step 2 : cube the each array element ==>`);

const arrayNumCube = arrayNumbers.map( (currentValue)=> {
    return currentValue*currentValue*currentValue;
} );
console.log(`[${arrayNumCube}]`);

console.log(`----------------------------------------------------------------------------`);

console.log(`step 3 : Add the index value into its corresponding each array element ==>`);

const arrayNumAddOfIndex = arrayNumbers.map( (currentValue,index)=> {
    return currentValue+index;
} );
console.log(`[${arrayNumAddOfIndex}]`);





