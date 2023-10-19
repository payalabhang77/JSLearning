console.log(`============================= assignmentB =====================================`);

class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId=empId;
        this.empName=empName;
        this.empDept=empDept;
        this.empSalary=empSalary;
        this.empCompany=empCompany;   
    }
}
const empAnil = new Employee (22,"Anil","IT",50000,"TCS");
const empRadha = new Employee (33,"Radha","HR",74000,"Wipro");
const empRishi = new Employee (55,"Rishi","Finance",47000,"TCS");
const empSonali = new Employee (66,"Sonali","Finance",45000,"Infosys");
const empMonika = new Employee (77,"Monika","IT",40000,"Wipro");
const empVinayak = new Employee (88,"Vinayak","IT",75000,"TCS");
const empMahesh = new Employee (99,"Mahesh","HR",85000,"Infosys");
 
const arrayEmployee=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinayak,empMahesh];
 
 console.log(`step 1 => show the Employee working in 'TCS' using arrow function`);
 
arrayEmployee.forEach(function(employee){
    if (employee.empCompany==="TCS") {
        console.log(`The employee name is : ${employee.empName} and department is : ${employee.empDept}`);
    }
});
  
console.log(`------------------------------------------------------------------------`);

console.log(`step 2 => show the 'Finance' department employee using arrow function `);

arrayEmployee.forEach(function(employee) {
    if (employee.empDept==="Finance") {
        console.log(`The employee name is : ${employee.empName}, company is : ${employee.empCompany}`);
    }
});

console.log(`---------------------------------------------------------------------------`);

console.log(`step 3 => show the complete employee details whose name start with 'R' `);

arrayEmployee.forEach(function(employee) {
   if (employee.empName.startsWith("R")) {
    console.log(`Employee Id : ${employee.empId}, name : ${employee.empName}, department : ${employee.empDept}, salary : ${employee.empSalary}, company : ${employee.empCompany}`);
    }
});

console.log(`---------------------------------------------------------------------------`);

console.log(`step 4 => show the all employee details whose salary is greater than 75000`);

arrayEmployee.forEach(function(employee) {
    if (employee.empSalary>75000) {
        console.log(`Employee name : ${employee.empName}, salary : ${employee.empSalary}, company : ${employee.empCompany}`);       
  }
});

console.log(`---------------------------------------------------------------------------`);

console.log(`step 5 => The employee details whose salary >= 50000 & from 'IT' department `);

arrayEmployee.forEach(function(employee) {
    if (employee.empSalary>=50000 && employee.empDept=="IT") {
        console.log(`Employee Id : ${employee.empId}, name : ${employee.empName}, department : ${employee.empDept}, salary : ${employee.empSalary}, company : ${employee.empCompany}`);
    }
});

console.log(`---------------------------------------------------------------------------`);

console.log(`step 6 => show the employee details from company 'Infosys'  `);

arrayEmployee.forEach(function(employee) {
    if (employee.empCompany=='Infosys') {
        console.log(`Employee Id : ${employee.empId}, name : ${employee.empName}, department : ${employee.empDept}, salary : ${employee.empSalary}`);
    }
});


