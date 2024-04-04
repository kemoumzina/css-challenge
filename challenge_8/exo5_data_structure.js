let findVowel = function(letter) {

    let vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"];
    let noms= "Incontournable";
    let ind=0;
    console.log(noms.length);
   
    for (ind=0;ind<=vowels.length;ind++) {
        console.log(noms.search(vowels[ind]))
       for (j=0;j<=noms.length;j++) {

        console.log(vowels[ind]);
        
         if(vowels[ind] = noms){
            noms.splice(vowels[ind]);
            console.log(noms.pop(vowels[ind]));
            return true;
        } else {
            return false;
        }
        console.log(n1)
    }
    }
} 
    findVowel("e");