console.log(`=======================08_mapObjectAssignment====================================`);

class Bank {
    bankName;
    location;
    accountNo;
    interestRate;
    constructor(bankName,location,accountNo,interestRate){
          this.bankName=bankName;
          this.location=location;
          this.accountNo=accountNo;
          this.interestRate=interestRate;
    }
}

const axisBank=new Bank("Axis Bank","Satara","5467896543","10%");
console.log(`Bank name : ${axisBank.bankName}, Location : ${axisBank.location}, Account Number : ${axisBank.accountNo}, Interest Rate : ${axisBank.interestRate}`);

const sbiBank=new Bank("SBI Bank","Pune","8467896578","15%");
console.log(`Bank name : ${sbiBank.bankName}, Location :  ${sbiBank.location}, Account Number : ${sbiBank.accountNo}, Interest Rate : ${sbiBank.interestRate}`);

const iciciBank=new Bank("ICICI Bank","Mumbai","8467894536","13%");
console.log(`Bank name : ${iciciBank.bankName}, Location : ${iciciBank.location}, Account Number : ${iciciBank.accountNo}, Interest Rate : ${iciciBank.interestRate}`);

const kotakBank=new Bank("Kotak Bank","Baramati","8976896543","10%");
console.log(`Bank name : ${kotakBank.bankName}, Location : ${kotakBank.location}, Account Number : ${kotakBank.accountNo}, Interest Rate : ${kotakBank.interestRate}`);

const hdfcBank=new Bank("HDFC Bank","Indapur","9865896543","12%");
console.log(`Bank name : ${hdfcBank.bankName}, Location : ${hdfcBank.location}, Account Number : ${hdfcBank.accountNo}, Interest Rate : ${hdfcBank.interestRate}`);

const panjabBank=new Bank("Panjab Bank","Pune","8867896543","16%");
console.log(`Bank name : ${panjabBank.bankName}, Location : ${panjabBank.location}, Account Number : ${panjabBank.accountNo}, Interest Rate : ${panjabBank.interestRate}`);

console.log(`------------------------------------------------------------------------------`);

const map = new Map();
map.set(axisBank.accountNo,axisBank);
map.set(sbiBank.accountNo,sbiBank);
map.set(iciciBank.accountNo,iciciBank);
map.set(kotakBank.accountNo,kotakBank);
map.set(hdfcBank.accountNo,hdfcBank);
map.set(panjabBank.accountNo,panjabBank);
const totalKeys = map.keys();

console.log(`traverse the map ==>`);

for (const key of totalKeys) {
    const bank = map.get(key);
    console.log(`Bank name : ${bank.bankName}, Account Number : ${bank.accountNo}, Interest rate : ${bank.interestRate} `);
}











