console.log("hello")
// dom projet final 

const touches = [...document.querySelectorAll('.bouton')];
const listkeycode =touches.map(touche=>touche.dataset.key);
console.log(touches,listkeycode);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown',(e) => {
    console.log(e);
    const valeur = e.keycode.toString();
  calculer(valeur)
})
 
document.addEventListener('click',(e) => {
    console.log(e);
    const valeur = e.target.dataset.key;
    console.log(valeur);
    calculer(valeur);
})


const calculer=(valeur) => {
    if (listkeycode.includes(valeur)) {
        console.log(listkeycode);
        switch (valeur) {
            case '8':
                ecran.textContent="";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent=calcul;
                break;
            default :
                const indexKeycode = listkeycode.indexOf(valeur);
               const touche= touches[indexKeycode]; 
             
                ecran.textContent+=touche.innerHTML;

        }
    }
}
window.addEventListener('error',(e)=>console.log())