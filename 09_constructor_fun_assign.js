console.log(`================================09_constructor_function==========================================`);

function Bank(bankName,location,ifscCode,branchCode) {
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
}

const yesBank=new Bank("Yes Bank","Pune","YES000023","416593");
console.log(`Bank Name : ${yesBank.bankName}, Location : ${yesBank.location}, IFSC Code : ${yesBank.ifscCode}, Branch Code : ${yesBank.branchCode}`);

const sbiBank=new Bank("SBI Bank","Pune","SBI003523","645372");
console.log(`Bank Name : ${sbiBank.bankName}, Location : ${sbiBank.location}, IFSC Code : ${sbiBank.ifscCode}, Branch Code : ${sbiBank.branchCode}`);

const mahBank=new Bank("Maharashtra Bank","Mumbai","MAH860023","416729");
console.log(`Bank Name : ${mahBank.bankName}, Location : ${mahBank.location}, IFSC Code : ${mahBank.ifscCode}, Branch Code : ${mahBank.branchCode}`);

const axisBank=new Bank("Axis Bank","satara","AXIS005023","336542");
console.log(`Bank Name : ${axisBank.bankName}, Location : ${axisBank.location}, IFSC Code : ${axisBank.ifscCode}, Branch Code : ${axisBank.branchCode}`);

console.log(`------------------------------------------------------------------------------------`);

Bank.prototype.openTime="9 AM IST";

Bank.prototype.closeTime="6 PM IST";

console.log(`Please visit SBI Bank time is : ${sbiBank.openTime} to ${sbiBank.closeTime}`);

console.log(`-------------------------------------------------------------------------------------`);

console.log(`Please visit ${axisBank.bankName} before - ${axisBank.closeTime}`);

console.log(`-------------------------------------------------------------------------------------`);

console.log(`Please visit ${yesBank.bankName} having Branch Code is ${yesBank.branchCode} after - ${yesBank.openTime}`);
