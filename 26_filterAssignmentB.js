console.log(`======================26_filterAssignmentB==================================`);

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

console.log(`step 1 : find the all employees from 'TCS' ==>`);

const arrayEmployeeOfTcs = arrayEmployees.filter((employee)=>{
    return employee.empCompany=="TCS";
});

arrayEmployeeOfTcs.map((employee)=>{
    console.log(`Employee name : ${employee.empName}, Company : ${employee.empCompany}`);
});

console.log(`---------------------------------------------------------------------------`);

console.log(`step 1 : find the average salary of employee from company 'Wipro' ==>`);

const arrayEmployeeOfWipro = arrayEmployees.filter((employee)=>{
    return employee.empCompany=="Wipro";
});

const arrayEmpOfWiproSalary = arrayEmployeeOfWipro.map((employee)=>{
    return employee.empSalary;
});
console.log(arrayEmpOfWiproSalary);

let sum=0;
for (let index = 0; index < arrayEmpOfWiproSalary.length; index++) {
    const element = arrayEmpOfWiproSalary[index];
    sum=sum+element;
}
//console.log(`the sum is : ${sum}`);

console.log(`the average salary of employee from company 'Wipro'is : ${sum/arrayEmpOfWiproSalary.length}`);

console.log(`-----------------------------------------------------------------------`);   

console.log(`step 1 : find the average salary of employee from company 'Wipro' and 'Infosys' ==>`);

const arrayEmpOfWiproOrInfosys = arrayEmployees.filter((employee)=>{
    return employee.empCompany=="Wipro" || employee.empCompany=="Infosys";
});

const arrayEmpOfWiproOrInfosysSalary = arrayEmpOfWiproOrInfosys.map((employee)=>{
    return employee.empSalary;
});
console.log(arrayEmpOfWiproOrInfosysSalary);

let sum1=0;
for (let index = 0; index < arrayEmpOfWiproOrInfosysSalary.length; index++) {
    const element=arrayEmpOfWiproOrInfosysSalary[index];
    sum1 =sum1+element; 
}
//console.log(`the sum is : ${sum1}`); 

console.log(`the average salary of employee from company 'Wipro' and 'Infosys' : ${sum1/arrayEmpOfWiproOrInfosysSalary.length}`);


