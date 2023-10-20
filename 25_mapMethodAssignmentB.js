console.log(`======================25_mapMethodAssignmentB==================================`);

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


const arrayAllEmpSalary = arrayEmployees.map( (employee)=> {
    return employee.empSalary;
} );
console.log(`step 1 : List of all employee salary : ${arrayAllEmpSalary}`);

console.log(`-----------------------------------------------------------------------------`);

const arrayAllEmpDepartment = arrayEmployees.map( (employee)=> {
    return employee.empDept;
} );
console.log(`step 2 : List of employee departments : ${arrayAllEmpDepartment}`);

console.log(`-----------------------------------------------------------------------------`);

const arrayAllEmpId = arrayEmployees.map( (employee)=> {
    return employee.empId;
} );
console.log(`step 3 : List of employee Id's : ${arrayAllEmpId}`);











