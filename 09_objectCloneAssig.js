console.log(`================================09_objectCloneAssig==============================================`);

console.log(`----------------------------------step 1--------------------------------------------------`);

console.log(`create the object - 'bankSbi'`);

const bankSbi={
    branchName : "Hadpsar SBI",
    branchManager : "Mr. Bansude",
    ifscCode : "SBIN0009065",
    accountNumber : 564738920291
    
}
console.log(bankSbi);

console.log(`-----------------------------------step 2----------------------------------------------------`);

console.log(`create the object - 'bankLocation'`);

const bankLocation = {
     street : "Pune solapur road",
     city : "pune",
     pinCode : 411028
}
console.log(bankLocation);

console.log(`---------------------------------step 3----------------------------------------------------`);

console.log(`clone bankSbi and bankLocation objects`);

const cloneBankSbiorLocation = Object.assign(bankSbi,bankLocation);
console.table(cloneBankSbiorLocation);

console.log(`------------------------------step 4-------------------------------------------------------`);

console.log(`create object rateofIntrest`);

const rateOfIntrest = {
    homeLoanIntrest : '15%',
    personalLoanIntrest :'12%' ,
    dueIntrest : '16%'
}
console.log(rateOfIntrest);

console.log(`------------------------------step 5------------------------------------------------------`);

console.log(`merged object bankSbi,bankLocation,rateOfIntrest into new object sbiDetails`);

let sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfIntrest)
console.table(sbiDetails);

console.log(`----------------------------step 6----------------------------------------------------------`);

console.log(`traverse the merged object sbiDetails using for in loop `);

for (const key in sbiDetails) {
    console.log(`${key} ==> ${sbiDetails [key]}`);
        
}






