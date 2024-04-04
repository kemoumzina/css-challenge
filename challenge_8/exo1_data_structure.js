// write a function that takes an array of numbers and a new array containing only the even numbers



let arrayofnumber = [1,2,3,4,5,6,7,8,9,10];
let tab = new Array();
let longueur = arrayofnumber.length;
console.log("Nombre d'éléments dans le tableau : " + longueur);
for (i=0;i<=longueur;i++) {
    if ((arrayofnumber[i])%2==0) {
         tab[i]=arrayofnumber[i];
         console.log(tab[i]);
    }
}
function displaytab(i) {
       return displaytab(i)
}