 const result=colegues.reduce((prev,nom)=>{
    prev[nom]=(prev[nom] || 0)+1;
    return prev;
 },{});
 console.log(result);