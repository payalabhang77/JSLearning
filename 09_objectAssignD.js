
console.log(`====================================09_objectAssignD==========================================`);

let professor={
    name : "Prof. stew musk",
    position : "Assistant Professor",
    collegeName : "ASC College",
    subject : "JavaScript",
    age : 43,
    degree:{
        engineering : "CSC",
        PHD : " Adv Computing",
        
    }
    
};
console.log(professor);

console.log(`=======================add new array certificates ==================================================`);

professor.certificates = ["Hacker Rank Participation","Certificate in IFE Course","Certificate in Adv Programming"];
console.log(professor.certificates);

console.log(`=======================add new property total experience ============================================`);

professor.totalExperience="14 years";
console.log(`add new property total experience : ${professor.totalExperience} experience`);

console.log(`=========================modify - subject property ======================================================`);

professor.subject="CSS";
console.log(professor);

console.log(`=======================add one new certificate "Oracle Certified"=====================================`);

professor.certificates.push("Oracle Certified");
console.log(professor.certificates);

console.log(`======================the last element of array certificate ==========================================`);

let lastElement=professor.certificates[professor.certificates.length-1];
console.log(lastElement);

console.log(`=======================log the complete object =======================================================`);

console.log(professor);

console.log(`=====================traverse array - certificates using for of loop ================================= `);

for (const certificates of professor.certificates) {
    console.log(certificates);
}

