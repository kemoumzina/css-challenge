//a function that takes an array of words and returns the longest word. Use the reduce() array method
 const colegues=["Fazia","zina","kahina","karima","Fazia","samira","kahina","Fazia"]
 const result=colegues.reduce((prev,nom)=>{
    prev[nom]=(prev[nom] || 0)+1;
    return prev;
 },{});
 console.log(result);
