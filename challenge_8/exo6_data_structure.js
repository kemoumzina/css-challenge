//Given two arrays of numbers, write a function that returns a new array containing the unique elements from both arrays.
let array1=["1970","1978","2000","2010","2008","1967","1980"];
let array2=["1970","2015","2011","1980","2003","1978","2000"];
for (i=0;i<=array1.length;i++) {
    array1[i].includes(array2[i]);
    let elementendouble=array1.splice(i,1);
    console.log("element en double :",elementendouble);
    
}
console.log(array2);
console.log(array1);
console.log(array1 +","+ array2); 