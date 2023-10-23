console.log(`======================27_reduceAssignB======================================`);

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
 
const arrayEmployees=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinayak,empMahesh];

console.log(`step 1 : Find all the employees from 'Wipro' company ==>`);

const arrayEmpOfWipro = arrayEmployees.filter((employee)=>{
     return employee.empCompany=="Wipro";
});
//console.log(arrayEmpOfWipro);

const arrayEmpNameOfWipro = arrayEmpOfWipro.map((employee)=>{
    return employee.empName;
});
console.log(`Employees Name : ${arrayEmpNameOfWipro}`);

console.log(`-----------------------------------------------------------------------------`);

console.log(`step 2 : Find all the employees from 'IT' or 'HR' department ==>`);

const arrayEmpOfDept = arrayEmployees.filter((employee)=>{
     return employee.empDept=="IT" ||  employee.empDept=="HR";
});
//console.log(arrayEmpOfDept);

const arrayEmpNameOfDept = arrayEmpOfDept.map((employee)=>{
    return employee.empName;
});
console.log(`Employees Name : ${arrayEmpNameOfDept}`);

console.log(`-----------------------------------------------------------------------------`);

console.log(`step 3 : Find all the employees whose emp id's are greater than 50 ==>`);

const arrayEmpId = arrayEmployees.filter((employee)=>{
      return employee.empId>50;
});
//console.log(arrayEmpId);

const arrayEmpName = arrayEmpId.map((employee)=>{
    return employee.empName;
});
console.log(`Employees Name : ${arrayEmpName}`);

console.log(`-----------------------------------------------------------------------------`);

console.log(`step 4 : Find all the employees whose names start with letter 'A' or 'V' or 'M' ==>`);

const arrayEmpNames = arrayEmployees.filter((employee)=>{
   return employee.empName.startsWith('A') || employee.empName.startsWith('V') || employee.empName.startsWith('M');
});
//console.log(arrayEmpNames);

const arrayEmpNamesStartWith = arrayEmpNames.map((employee)=>{
      return employee.empName;
});
console.log(`Employees Name : ${arrayEmpNamesStartWith}`);

console.log(`-----------------------------------------------------------------------------`);

console.log(`step 5 : Find the average salary of the employee for all the department ==>`);

const arrayEmpSalary = arrayEmployees.map((employee)=>{
     return employee.empSalary;
});
console.log(arrayEmpSalary );

const sum = arrayEmpSalary.reduce((runningTotal,value)=>{
   return runningTotal+value;
}, 0);
console.log(`Total salary of all department : ${sum}`);
console.log(`The average salary of all department : ${sum/arrayEmpSalary.length}`);

console.log(`-----------------------------------------------------------------------------`);

console.log(`step 6 : Find the average salary of the 'IT' department ==>`);

const arrayEmpOfITDept = arrayEmployees.filter((employee)=>{
    return employee.empDept=='IT';
});
//console.log(arrayEmpOfITDept);

const arrayEmpOfITDeptSalary = arrayEmpOfITDept.map((employee)=>{
     return employee.empSalary;
});
console.log(arrayEmpOfITDeptSalary);

const sum1 = arrayEmpOfITDeptSalary.reduce((runningTotal,value)=>{
    return runningTotal+value;
}, 0);
console.log(`Total salary of 'IT' department : ${sum1}`);
console.log(`The average salary of 'IT' department : ${sum1/arrayEmpOfITDeptSalary.length}`);

