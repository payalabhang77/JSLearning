
console.log(`=======================assignment 2==============================`);

function stringHandsOn() {

    var str = "   Hey you are doing good, keep it up    ";

    console.log(`---------------------step 1------------------------------`);

    console.log(`Given string is :    Hey you are doing good, keep it up    `);

    console.log(`--------------------step 2--------------------------------`);
 
    var result = str.length;
    console.log(`length of string : ${result}`);

    console.log(`----------------------step 3-----------------------------`);
    
    var result = str.trim();
    console.log(`After string is : ${result}`);
    console.log(`After length is : ${result.length}`);

    console.log(`---------------------ste 4--------------------------------`);

    var lengthBeforeTrim = str.length;
    var result = str.trim(); 
    var lengthAfterTrim = result.length;
    var result = lengthBeforeTrim-lengthAfterTrim;
    console.log(`removed extra spaces : ${result}`);

    console.log(`---------------------step 5---------------------------------`);
    
    var str = "Hey you are doing good, keep it up";
    var firstCharAt=str.charAt(0)
    var lastCharAt=str.charAt(str.length-1)
    console.log(`first character is : ${firstCharAt} and last character is : ${lastCharAt}`);

    console.log(`-----------------------step 6-------------------------------`);

    var words=str.split(" ");
    console.log(`count of total words is : ${words.length}`);

    console.log(`-------------------------step 7------------------------------------`);

    var result = str.indexOf('good')
    console.log(`index of word "good" is :${result}`);

    console.log(`---------------------------step 8------------------------------------`);

    var result = str.slice(22);
    console.log(`substring starting from index 22 : ${result}`);

    console.log(`-----------------------------step 9---------------------------------`);
    
    str = "Hey you are doing good, keep it up";
    var result = str.includes("up");
    console.log(`string ends with word "up" : ${result}`);

    console.log(`----------------------------step 10---------------------------------`);
    var result = str.includes("Hey");
    console.log(`string start with word "Hey" : ${result}`);

}
 stringHandsOn();