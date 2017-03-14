function direBonjour(){
    console.log("Bonjour !");
}

console.log("Début du programme");
direBonjour();
console.log("Fin du programme");


/*
Variante de retour
*/
function direBonjour2(){
    return "Bonjour ! ";
}

console.log("Début du programme");
var resultat = direBonjour2();
console.log(resultat);
console.log("Fin du programme");

/*
Passage d'un paramètres 
*/
function direBonjour(prenom){
    var message = "Bonjour, " + prenom + " !";
    return message;
}
console.log(direBonjour("Philippe"));
console.log(direBonjour("Nathalie"));

/*
Passage de 2 parametres
*/
function presentation(prenom, age){
    console.log("Tu t'appelles " + prenom + " et tu as " + age + " ans");
    return presentation;
}
presentation("Philippe", 45);
presentation("Nathalie", 44);
