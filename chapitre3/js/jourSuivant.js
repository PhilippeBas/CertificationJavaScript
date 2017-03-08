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
    console.log("Je n'ai pas très bien compris le jour que nous sommes !");
}


/*
Cas : Switch
*/
var jour = prompt("Quel jour sommes nous ? : ");
switch (jour){
    case "dimanche":
        console.log("Demain c'est Lundi");
        break;
     case "Dimanche":
        console.log("Demain c'est Lundi");
        break;
     case "lundi":
        console.log("Demain c'est Mardi");
        break;
     case "Lundi":
        console.log("Demain c'est Mardi");
        break;
     case "mardi":
        console.log("Demain c'est Lundi");
        break;
     case "Mardi":
        console.log("Demain c'est Mercredi");
        break;
      case "mercredi":
        console.log("Demain c'est Jeudi");
        break;
     case "Mercredi":
        console.log("Demain c'est Jeudi");
        break;
     case "jeudi":
        console.log("Demain c'est Vendredi");
        break;
     case "Jeudi":
        console.log("Demain c'est Vendredi");
        break;
     case "vendredi":
        console.log("Demain c'est Samedi");
        break;
     case "Vendredi":
        console.log("Demain c'est Samedi");
        break;
     case "samedi":
        console.log("Demain c'est Dimanche");
        break;
     case "Samedi":
        console.log("Demain c'est Dimanche");
        break;
default:
    console.log("Je n'ai pas très bien compris le jour que nous sommes !");
}



