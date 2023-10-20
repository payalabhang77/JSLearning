console.log(`===========================Remove Duplicate element in array==============================`);

const arrays = [11,3,4,11,4,7,3];
console.log(`Given array is : [${arrays}]`);

console.log(`Remove Duplicate element in array using set() ==>`);

const arrayNumber = [...new Set(arrays)];
console.log(arrayNumber);

console.log(`-----------------------------------------------------------------------`);

console.log(`Remove Duplicate element in array ==> `);

let uniqueArr = [];
function duplicateElement(arr) {
   
    for (let i of arr) {
        if (uniqueArr.indexOf(i)===-1) {
            uniqueArr.push(i);
        }
        
    }
    console.log(uniqueArr);
    
}
const array = [11,3,4,11,4,7,3]; 
duplicateElement(array);

console.log(`------------------------------------------------------------`);

console.log(`Given String value are :"How are you mate"`);

// const str = "How are You mate";


function alternateCase(str) {
   
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}

const str = "How are you mate";
const stringOutput = alternateCase(str);
console.log(`given output is : ${stringOutput}`); 







