console.log(`================================09_objectCloneAssign==============================================`);

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
     street : "Pune Solapur road",
     city : "pune",
     pinCode : 411028
}
console.log(bankLocation);

console.log(`---------------------------------step 3----------------------------------------------------`);

console.log(`clone bankSbi and bankLocation objects`);

const cloneBankSbiOrLocation = Object.assign(bankSbi,bankLocation);
console.table(cloneBankSbiOrLocation);

console.log(`------------------------------step 4-------------------------------------------------------`);

console.log(`create object rateOfInterest`);

const rateOfInterest = {
    homeLoanInterest : '15%',
    personalLoanInterest :'12%' ,
    dueInterest : '16%'
}
console.log(rateOfInterest);

console.log(`------------------------------step 5------------------------------------------------------`);

console.log(`merged object bankSbi,bankLocation,rateOfInterest into new object sbiDetails`);

let sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest)
console.table(sbiDetails);

console.log(`----------------------------step 6----------------------------------------------------------`);

console.log(`traverse the merged object sbiDetails using for in loop `);

for (const key in sbiDetails) {
    console.log(`${key} ==> ${sbiDetails [key]}`);
        
}






