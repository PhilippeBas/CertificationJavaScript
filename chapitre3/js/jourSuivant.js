/*

---- Jour Suivant ---

Le programme donne le nom du jour suivant  en fonction du jours inscrit et Les erreurs de saisie (jour incorrect) seront gérées.
*/


/*
Cas : If
*/

var jour = prompt("Quel jour sommes nous ? : ");
if ((jour === "dimanche") || (jour === "Dimanche")){
    console.log("Demain c'est Lundi");
} else if ((jour === "lundi") || (jour === "Lundi")){
     console.log("Demain c'est Mardi");
} else if ((jour === "mardi") || (jour === "Mardi")){
     console.log("Demain c'est Mercredi");
} else if ((jour === "mercredi") || (jour === "Mercredi")){
     console.log("Demain c'est Jeudi");
} else if ((jour === "jeudi") || (jour === "Jeudi")){
     console.log("Demain c'est Vendredi");
} else if ((jour === "vendredi") || (jour === "Vendredi")){
     console.log("Demain c'est Samedi");
} else if ((jour === "samedi") || (jour === "Samedi")){
     console.log("Demain c'est Dimanche");
} else {
    console.log("Je n'ai pas très bien compris le jour !");
}



