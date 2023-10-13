console.log(`=======================jsonAssign====================================`);

const employeeInfo = `{
    "name" : "Alex Melon",
    "id" : "E00245",
    "role" : ["Dev","DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" : "32, Laham st.",
        "city" : "Innsbruck",
        "country" : "Austria"
    },
    "referredBy" : "E0012"
}`

console.log(`Converted given json string into object : `);

const employee = JSON.parse(employeeInfo);
console.table(employee);

console.log(`--------------------------------------------------------------`);

const arrayOf0thElement = employee.role[0];
console.log(`The role of employee is : ${arrayOf0thElement}`);

console.log(`--------------------------------------------------------------`);

const word = employee.name.split(" ");
console.log(`The last name of employee is : ${word[word.length-1]}`);

console.log(`--------------------------------------------------------------`);

let doj = employee.doj.split('-')[2];
console.log(`The joining year of employee is : ${doj}`);

