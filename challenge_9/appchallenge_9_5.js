//const colegues=["Fazia","zina","kahina","karima","Fazia","samira","kahina","Fazia"]

let personnes = [
    { nom: "Zina", age: 21,city:"Tizi-ouzou"},
    { nom: "serine", age: 20 ,city:"Alger"},
    { nom: "Samira", age: 20,city:"Alger" },
  ];
  
  const result=personnes.reduce((prev,personnes,city)=>{
    prev[personnes.city]=(prev[personnes.city] || 0)+1;
    return prev;
 },{});
 console.log(result);
  