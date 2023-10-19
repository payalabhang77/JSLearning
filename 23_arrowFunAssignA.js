console.log(`==========================23_arrowFunAssignA==========================`);

console.log(`-------------------------step 1---------------------------------------`);

const arrowFun = () =>{
        console.log(`Good Morning, Today is Wednesday`);
}
arrowFun();

console.log(`-------------------------step 2---------------------------------------`);

const multi = (num1,num2,num3=1)=>{
    let result = num1*num2*num3;
    return result;
}
const result=multi(5,5,2);
console.log(`The multiplication of 5,5 & 2 is : ${result}`);

const result1=multi(10,4);
console.log(`The multiplication of 10,4 & 1 is : ${result1}`);


console.log(`-------------------------step 3---------------------------------------`);


const addition = (value1,value2,value3,value4,value5)=>{
    let result =value1+value2+value3+value4+value5;
    return result 
}
const result3=addition(100,100,200,349,756);
console.log(`Given values is :100,100,200,349,756`);
console.log(`addition is : ${result3}`);

console.log(`-------------------------------------`);

const result4=addition("I am ","learning ","ES6 ","features ","in depth");
console.log(`Given values is :"I am ","learning ","ES6 ","features ","in depth"`);
console.log(`addition is : ${result4}`);









