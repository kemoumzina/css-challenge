//const colegues=["Fazia","zina","kahina","karima","Fazia","samira","kahina","Fazia"]

let personnes = [
    { nom: "Alice", age: 21,city:"Tizi-ouzou"},
    { nom: "Bob", age: 20 ,city:"Tizi-ouzou"},
    { nom: "Charlie", age: 20,city:"Alger" },
  ];
  
  const result=personnes.reduce((prev,personnes,city)=>{
    prev[personnes.city]=(prev[personnes.city] || 0)+1;
    return prev;
 },{});
 console.log(result);
  