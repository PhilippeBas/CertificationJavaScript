/*
Les Chaines de caractères
*/

console.log("ABC".length); // Affiche 3
console.log("Je suis une chaîne".length); // Affiche 18

var mot = "kangourou";
var longueurMot = mot.length;
console.log(longueurMot);

/*
Convertir une chaîne en minuscules ou en majuscules
*/

var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules)
var motEnMajucules = motInitial.toUpperCase();
console.log(motEnMajucules);

/*
Comparer deux chaînes
*/
var chaine = "azerty";
console.log(chaine === "azerty");
console.log(chaine === "qsdfr");