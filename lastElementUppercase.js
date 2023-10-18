function string(str) {
    let arr = str.split(' ');
    let arr1=arr.map((item)=>{
        let word = item.split('');
        let length = word.length-1;
        word[length] = word[length].toUpperCase();
        word = word.join('');
        return word;
    });
    return arr1.join(' ');
}
let str = "How are you mate";
console.log(`Given string is : ${str}`);
let outPut = string(str);
console.log(`OutPut is : ${outPut}`);