//array of numbers and returns the average of all the even numbers.
let lesannees= [2000,2001,2002,2004,2006,2003,2010]
const evens=lesannees.filter(function(item) {
let newarray=item%2===0;
  return item%2===0;
});
console.log(evens);



//reduce
//const sum=[2000,2001,2002,2004,2006,2003,2010].reduce(function(result,item){
  const sum=evens.reduce(function(result,item){
return result+item;
},0);
console.log(sum)
 

 //Function to calculate the average of after filter
 function avgOfArray(evens){
  let sum=sumOfArray(levens)
  return sum/evens.length
 }

// console.log(sum)
 console.log(" the average of all the even numbers =",sum/evens.length)