console.log(`==========================08_setObjectAssignment==================================`);

class Bank{
    bankName;
    location;
    ifscCode;
    branchCode;
    constructor(bankName,location,ifscCode,branchCode){
        this.bankName=bankName;
        this.location=location;
        this.ifscCode=ifscCode;
        this.branchCode=branchCode;
    }
}
const axisBank=new Bank("Axis Bank","satara","AXIS005023","336542");
console.log(`Bank Name : ${axisBank.bankName}, Location : ${axisBank.location}, IFSC Code : ${axisBank.ifscCode}, Branch Code : ${axisBank.branchCode}`);

const sbiBank=new Bank("SBI Bank","Pune","SBI003523","645372");
console.log(`Bank Name : ${sbiBank.bankName}, Location : ${sbiBank.location}, IFSC Code : ${sbiBank.ifscCode}, Branch Code : ${sbiBank.branchCode}`);

const iciciBank=new Bank("ICICI Bank","Pune","ICICI00456","678543");
console.log(`Bank Name : ${iciciBank.bankName}, Location : ${iciciBank.location}, IFSC Code : ${iciciBank.ifscCode}, Branch Code : ${iciciBank.branchCode}`);

const kotakBank=new Bank("Kotak Bank","Indapur","KOTAK76435","459843");
console.log(`Bank Name : ${kotakBank.bankName}, Location : ${kotakBank.location}, IFSC Code : ${kotakBank.ifscCode}, Branch Code : ${kotakBank.branchCode}`);
   
const hdfcBank=new Bank("HDFC Bank","Baramati","HDFC984532","546738");
console.log(`Bank Name : ${hdfcBank.bankName}, Location : ${hdfcBank.location}, IFSC Code : ${hdfcBank.ifscCode}, Branch Code : ${hdfcBank.branchCode}`);

const panjabBank=new Bank("Panjab Bank","Pune","Panjab00478","675438");
console.log(`Bank Name : ${panjabBank.bankName}, Location : ${panjabBank.location}, IFSC Code : ${panjabBank.ifscCode}, Branch Code : ${panjabBank.branchCode}`);

console.log(`-----------------------------------------------------------------------`);

console.log(`Add all object element in a set ==>`);
const addBankObject=new Set();
addBankObject.add(axisBank);
addBankObject.add(sbiBank);
addBankObject.add(iciciBank);
addBankObject.add(kotakBank);
addBankObject.add(hdfcBank);
addBankObject.add(panjabBank);
console.log(addBankObject);

console.log(`----------------------------------------------------------------`);

console.log(`Traverse this set using for of loop ==>`);
for (const element of addBankObject) {
    console.log(`Bank Name : ${element.bankName}, Location : ${element.location}`);
}
