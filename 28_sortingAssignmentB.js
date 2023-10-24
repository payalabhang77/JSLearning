console.log(`======================28_sortingAssignmentB======================================`);

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

console.log(`step 1 : sort the 'arrayEmployees' in descending order of employee Id's ==>`);

console.log(`---------------------------------------------------------------------------`);

const empIds = arrayEmployees.sort( (emp1,emp2) => {
    return emp1.empId > emp2.empId ? -1 : 1 ;
} );
empIds.map((employee)=>{
   console.log(`Employee Id : ${employee.empId}, Employee Name : ${employee.empName}, Employee Department : ${employee.empDept}`);
});

console.log(`----------------------------------------------------------------------------------`);

console.log(`step 2 : sort the 'arrayEmployees' in ascending order of employee department ==>`);

console.log(`---------------------------------------------------------------------------`);

const empDept = arrayEmployees.sort( (emp1,emp2) => {
    return emp1.empDept > emp2.empDept ? 1 : -1 ;
} );
empDept.map((employee)=>{
   console.log(`Employee Id : ${employee.empId}, Employee Department : ${employee.empDept}, Employee company : ${employee.empCompany}`);
});

console.log(`----------------------------------------------------------------------------------`);

console.log(`step 3 : sort the employees array  in descending order of employee salary ==>`);

console.log(`---------------------------------------------------------------------------`);

const empSalary = arrayEmployees.sort( (emp1,emp2) => {
    return emp1.empSalary > emp2.empSalary ? -1 : 1 ;
} );
empSalary.map((employee)=>{
   console.log(`Employee Name : ${employee.empName}, Employee salary : ${employee.empSalary}, Employee Department : ${employee.empCompany}`);
});


