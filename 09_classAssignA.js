console.log(`==================================09_classAssignA================================================`);

console.log(`-------------------------------------step 1-----------------------------------------------------------`);

class Vehicle {
     vehicleModel
     color
     fuelType
     maxSpeed
     numberOfDoors
     constructor (vehicleModel,color,fuelType,maxSpeed,numberOfDoors){
           this.vehicleModel = vehicleModel;
           this.color = color;
           this.fuelType=fuelType;
           this.maxSpeed =maxSpeed;
           this.numberOfDoors=numberOfDoors;
   }
}
     
const vehicleModel1= new Vehicle("Cabriolet","Red","petrol","250 mph",4);
console.log(vehicleModel1);

const vehicleModel2= new Vehicle("Micro","Black","Diesel","90 km/h",4);
console.log(vehicleModel2);

const vehicleModel3= new Vehicle("Hatchback","Blue","Diesel","270 km/h",4);
console.log(vehicleModel3);

const vehicleModel4= new Vehicle("Coupe","White","petrol","140 mph",4);
console.log(vehicleModel4);

const vehicleModel5= new Vehicle("Crossover","Silver","petrol","155 mph",4);
console.log(vehicleModel5);

console.log(`--------------------------------------------------------------------------------------------`);

console.log(`==============traverse array - arrayOfVehicle =================`);

const arrayOfVehicle=[vehicleModel1,vehicleModel2,vehicleModel3,vehicleModel4,vehicleModel5];
for (const element of arrayOfVehicle) {
    console.log(`vehicle : vehicleModel : ${element.vehicleModel}, color : ${element.color}, FuelType : ${element.fuelType}, Maximum Speed : ${element.maxSpeed}, numberOfDoors : ${element.numberOfDoors}`);

}

console.log(`--------------------------------------step 2------------------------------------------------------------`);

class College {
    collegeName
    address
    pinCode
    university
    totalNumberOfDepart
    constructor( collegeName,address,pinCode,university,totalNumberOfDepart){
            this.collegeName = collegeName;
            this.address = address;
            this.pinCode = pinCode;
            this.university = university;
            this.totalNumberOfDepart = totalNumberOfDepart;
    }
    display(){
         console.log(`College Details :- College Name : ${this.collegeName}, address : ${this.address}, pinCode : ${this.pinCode}, University : ${this.university}, total number of Departments : ${this.totalNumberOfDepart}`);
    }
}
const college1 = new College("ASC College","Indapur",413106,"Pune University",7);

const college2 = new College("Vidya Pratishthan ASC college ","Baramati",413133,"Pune University",6);

const college3 = new College("S.B patil college of Engineering ","Indapur",413106,"Pune University",9);

const college4 = new College("B J Governments Medical college","pune",411001,"pune University",5);

console.log(`====================traversing the array====================================`);

const arrayOfCollege = [college1,college2,college3,college4]
for (const element of arrayOfCollege) {
    element.display();
}

console.log(`---------------------------------------------step 3---------------------------------------------------------`);

function traverseObject(arrayOfCollege) {
    for (const key in arrayOfCollege) {
        console.log(`${key} ===> ${arrayOfCollege[key]}`);
        }
}
traverseObject(college1);
console.log(`------------------------------------------------------------------`);
traverseObject(college2);
console.log(`------------------------------------------------------------------`);
traverseObject(college3);
console.log(`---------------------------------------------------------------------`);
traverseObject(college4);



