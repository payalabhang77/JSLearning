console.log(`==============================09_ObjectCloneAssign====================================`);

console.log(`------------------------------step 1------------------------------------------------`);

console.log(`Personal details ==>`);

let personalDetails = {
       firstName : "Payal",
       lastName : "Abhang",
       graduation : "BCA",
       age : 24,
       mobileNo : 7688594736,

}
console.log(personalDetails);

console.log(`------------------------------step 2 --------------------------------------------------`);

console.log(`college details ==>`);

let collegeDetails = {
    collegeName : "ASC college",
    location : "Indapur",
    totalNoOfDepart : 6,
    university : "Pune University"
}
console.log(collegeDetails);

console.log(`------------------------------step 3--------------------------------------------------`);
 
console.log(`merge the object personalDetails and collegeDetails ==>`);

let personalOrCollegeDetails = Object.assign({},personalDetails,collegeDetails);
console.table(personalOrCollegeDetails);

console.log(`------------------------------step 4------------------------------------------------`);

console.log(`creating array - friendsName and freeze ==>`);

let friendsName = ["Stew","Jenny","Winy","Elon"];
Object.freeze(friendsName);
console.log(friendsName);

console.log(`------------------------------step 5------------------------------------------------`);

console.log(`Iterate friendsName array using for of loop ==>`);

for (const key of friendsName) {
    console.log(key);
}

console.log(`------------------------------step 6------------------------------------------------`);

let company = "Codemind Technology";
console.log(`Given string is : ${company}`);

let reverse="";
for (let index = company.length-1; index >=0; index--) {
    let char=company.charAt(index);
    if (char==" ") {
        break;
    }
    else{
      reverse=reverse+char;
    }

}
console.log(`reverse only word Technology output is : ${reverse}`);



