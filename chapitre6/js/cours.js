/*
Les Chaines de caractères
*/
console.log("Les Chaines de caractères");
console.log("ABC".length); // Affiche 3
console.log("Je suis une chaîne".length); // Affiche 18


/*
Kangourou
*/
console.log("\n Kangourou");
var mot = "kangourou";
var longueurMot = mot.length;
console.log(longueurMot);


/*
Convertir une chaîne en minuscules ou en majuscules
*/
console.log("\n Convertir une chaîne en minuscules et en majuscules");
var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules)
var motEnMajucules = motInitial.toUpperCase();
console.log(motEnMajucules);


/*
Comparer deux chaînes
*/
console.log("\n Comparer deux chaînes");
var chaine = "azerty";
console.log(chaine === "azerty");
console.log(chaine === "qsdfr");


/*
si La 1er lettre est en majuscule la chaine sera false donc on met en minuscule
*/
console.log(" \n Quitter = quitter");
var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter");
console.log(valeurSaisie.toLowerCase() === "quitter");


/*
Accéder à un caractère d'une chaîne
*/
console.log("\n Accéder à un caractère d'une chaîne");
var sport = "Tennis-ballon";
console.log(sport.charAt(0));
console.log(sport[0]);
console.log(sport.charAt(6));
console.log(sport[6]);


/*
accéder au dernier caractère
*/
console.log("accéder au dernier caractère");
var longueurSport = sport.length;
console.log(sport[longueurSport -1]);
console.log(sport[longueurSport]);


/*
accéder au dernier caractère
*/

//sans boucle

console.log("\n accéder au dernier caractère");
console.log("Pour Philippe");

var prenom = "Philippe";
var nbrCaractere = prenom.length;

console.log("il y a " + nbrCaractere + " caracteres");
console.log("Caractere pas caractere");

console.log(prenom[0]);
console.log(prenom[1]);
console.log(prenom[2]);
console.log(prenom[3]);
console.log(prenom[4]);
console.log(prenom[5]);
console.log(prenom[6]);
console.log(prenom[7]);

// Avec une boucle
console.log("\n Même chose, mais avec une boucle");
var prenom = "Nathalie";
for (var i = 0; i < prenom.length; i++){
    console.log(prenom[i]);
}


