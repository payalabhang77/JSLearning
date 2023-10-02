console.log(`-------------leap year or not leap year-------------`);

var leapYear=function (year){
   if (year%400==0 || year%100!=0 && year%4==0) {
     console.log(`The ${year} is leap year`);
   } else {
    console.log(`The ${year} is not leap year`);
   }
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("twenty twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);

