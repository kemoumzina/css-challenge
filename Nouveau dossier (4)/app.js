// dom
const touches = [...document.querySelectorAll('.bouton')];
const listkeycode =touches.map(touche=>touches.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventlistener('keydown',(e) => {
    const valeur = e.keycode.toString();
  calculer(valeur)
})
 
document.addEventlistener('click',(e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})


const calculer =(valeur) => {
    if (listkeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent="";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent=calcul;
                break;
            default :
                const indexkeycode = listkeycode.indexof(valeur);
               const touche= touches[indexkeycode]; 
             
                ecran.textContent+=touche.innerHTML;

        }
    }
}
window.addEventListener('error',(e)=>console.log())