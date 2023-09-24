console.log("========================step 1===========================");

console.log("-----------function with no argument with no return type---------------");

function employeeDetails(){
   console.log("Employee name :jenny ");
   console.log("Employee Id : 34");
}  
employeeDetails();

 console.log("---------------------------------------------------------------------");

 function studentDetails(){
    console.log("student Id :21");
    console.log(" Mobile Number : 9875746476 ");
    console.log("Pin Code : 413132");
    
 }  
 studentDetails();

 console.log("------------------step 2------------------------------");

 function personalDetails(firstName,lastName,collegeName) {
    console.log("First Name : Payal");
    console.log("Last Name : Abhang");
    console.log("College Name : ASC College");
 }
 personalDetails();

 console.log("-----------------------step 3---------------------------");

 function swapValues(valueOne,valueTwo) {
    console.log("before swap :",valueOne,valueTwo);
    var temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    console.log("after swap :",valueOne,valueTwo);
 }
 swapValues("virat","Anushka");
 console.log("-------------------------------------------------------------");
 swapValues(1000,2000);

 console.log("-----------------------step 4----------------------------------");

function addThreeValues(valueOne,valueTwo,valueThree) {
    var result = valueOne + valueTwo + valueThree;
    return result;
}
var addThreeValues= addThreeValues(10.23,600,40);
console.log("values is 10.23,600,40 and its addition is : ", addThreeValues);

console.log("----------------------------------------------------------------");

function addThreeWords(valueOne,valueTwo,valueThree) {
    var result = valueOne + valueTwo + valueThree;
    return result;
}

var addThreeWords=addThreeWords("Hello","Good","Morning");
console.log("Words is Hello,Good,Morning and its addition is : ", addThreeWords);
