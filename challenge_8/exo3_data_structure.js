//
let array=["z","i","n","a","  k","e","m","o","u","m"];
let i=0;
    let stack= [];
 for (i=0;i<=array.length;i++)  { 
        stack.push(array[i]);   
    }
console.log(array);
console.log(array.length);

let string=''
for (word in stack){
    string+=array[word];
    string+=" ";
}
//string=arrayOfWords.join(' ')
stack=string;
console.log("my name is " + stack);