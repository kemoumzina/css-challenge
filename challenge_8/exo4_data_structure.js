let arrayOfWords = ['My','Name','is','Walter','Hartwell','White','I', 'live','at','308','Negra','Arroyo','lane',
'Albuquerque','New','Mexico','87104','This','is','my','confession']
let string = ''
for (word in arrayOfWords){
  string += arrayOfWords[word]
  string += " "
}
console.log(string)