/*
Création objet
*/
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "bic"
};
console.log(stylo.type);
console.log(stylo.couleur);
console.log( stylo.marque);


// autre Syntaxe pour accéder aux propriétés d'un objet
console.log(stylo['type']);
console.log(stylo['couleur']);
console.log(stylo['marque']);


console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.couleur ="rouge";

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.5;

console.log("Il coûte " + stylo.prix + " euros");





/*
Autre méthode 
Technique très proche en Java, C# ou PHP
*/

//// Constructeur MonObjet
//function MonObjet(){
//    //initialisatopn de l'objet
//    //...
//}
//// Instanciation d'un objet à partit du constructuer
//var monObj = new MonObjet();
