console.log(`====================object cloning and traversing===================================`);

console.log(`--------------------------step 1----------------------------------------------------`);

console.log(`creating the object bankSbi ==>`);

let bankSbi ={
    branchName : "Hadpsar SBI",
    branchManager : "Mrs. Jenny",
    ifscCode : "SBIN0059054",
    accountNumber : 234736920297

}
console.log(bankSbi);

console.log(`--------------------------step 2----------------------------------------------------`);

console.log(`creating the object bankLocation ==>`);

let bankLocation = {
    street : "Pune Solapur road",
     city : "pune",
     pinCode : 411028
} 
console.log(bankLocation);

console.log(`--------------------------step 3----------------------------------------------------`);

console.log(`clone the step 1 and step 2 objects using - object.assign() ==>`);

let cloneObject = Object.assign({},bankSbi,bankLocation);
console.table(cloneObject);

console.log(`clone the object using Spread Operator ==>`);

let bankDetails = {...cloneObject};
console.log(bankDetails);

console.log(`--------------------------step 4----------------------------------------------------`);

console.log(`creating the object rateInterest ==>`);

let rateInterest = {
    homeLoanInterest : '10%',
    personalLoanInterest :'15%' ,
    dueInterest : '17%'
}
console.log(rateInterest);

console.log(`--------------------------step 5----------------------------------------------------`);

console.log(`merge the step 1, step 2 and step 4 objects into new object namely - sbiDetails`);

let sbiDetails = Object.assign({},bankSbi,bankLocation,rateInterest );
console.table(sbiDetails);

console.log(`--------------------------step 6----------------------------------------------------`);

console.log(`---------traverse merged object using loop--------------------`);

for (const key in sbiDetails)  {
        console.log(`${key} ==> ${sbiDetails[key]}`);
        
    }











