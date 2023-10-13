console.log(`===========1.function type : function with argument and no return value ============`);

function swapValue(value1,value2) {
    console.log(`Before swap : ${value1} ${value2}`);
    let temp = value1;
    value1=value2;
    value2=temp;
    console.log(`After swap : ${value1} ${value2}`);
}
swapValue(100,200);
swapValue(56,78);
swapValue(35.5,56.4);
swapValue("Jenny","Stew")


console.log(`===========2.function type : function with no argument and no return value ============`);

function swap() {
    num1=600;
    num2=800;
    console.log(`Before swap : ${num1} ${num2}`);
    let temp1 = num1;
    num1=num2;
    num2=temp1;
    console.log(`After swap : ${num1} ${num2}`);
}
swap();

console.log(`===========3.function type : function with argument and return value ============`);

function swapValues(value3,value4) {
    console.log(`Before swap : ${value3} ${value4}`);
    let temp3 = value3;
    value3=value4;
    value4=temp3;
    console.log(`After swap : ${value3} ${value4}`);
    return [value3,value4];
}
let swappedValues=swapValues(4,7);
//console.log(swappedValues);

swappedValues=swapValues("Pune","Mumbai");

swappedValues=swapValues(79.7,23.5);