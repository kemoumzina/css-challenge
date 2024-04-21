//a function that takes an array of objects representing books
 const livres = [
    {
       name : "la coline oubliee", 
       author :"mouloud mammeri",
       pages : 240
   },
   { 
    name : "La kabylie",
    author :"Tahar Djaout",
    pages : 1000
},
{
    name : "Le fils du pauvre ",
    author :"mouloud Feraoun",
    pages : 250
},
{
    name : "La terre et le sang",
    author :"mouloud Feraoun",
    pages : 300
},
{
    name : "Nedjma",
    author :"Katteb Yacine",
    pages : 450
},

 ];
 const result =livres.reduce((prev,livre)=>{
  
    return prev + livre.pages/livres.length;

 },0);

 console.log("la moyene des pages est ",result);

// methode map
const getAverage=livres.map((pages)=>result);
console.log(getAverage);
// map methode i don't think what is correct or no



 





