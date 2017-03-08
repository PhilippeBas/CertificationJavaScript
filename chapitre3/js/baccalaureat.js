/*
Baccalaureat 
*/

var moyenneEleve = Number(prompt("Entrez la moyenne de l'élève : "));
if (moyenneEleve < 10){
   console.log("Le candidat est RECALE");
}else if ((moyenneEleve >=10) && (moyenneEleve <= 12) ){
   console.log("Le candidat est RECU")   
}else if ((moyenneEleve > 12) && (moyenneEleve <= 20)) {
    console.log("Le candidat est RECU avec MENTION ")
}else{     
    console.log("Je n'ai pas compris la moyenne du candidat");
}