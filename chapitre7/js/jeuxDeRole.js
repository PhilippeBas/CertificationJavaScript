/*
Jeux de role 
Personnage "AURORA"
*/

var perso = {
    nom: "Aurora",
    sante: 150,
    force:25
};

console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force");

//Blessé par une fléche
perso.sante = perso.sante -20;
console.log("J'ai été blessé par une fléche, il me reste " + perso.sante);

// Aurora trouve un bracelt de force
perso.force = perso.force +10;
console.log("Aurora a trouvé un bracelet de force, il a " + perso.force);

//Bilan final
console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force");



//Ajout de méthodes aux objets

console.log("\n Ajout de méthodes aux objets");
// Renvoie la description d'un personnage
function decrire(personnage) {
    var description = personnage.nom + " a " + personnage.sante + " points de vie et " + personnage.force + " en force";
    return description;
}

console.log(decrire(perso));



// ----***----

var perso ={
    nom: "Philippe",
    sante: 200,
    force: 25,
    
decrire: function(){
    var description = this.nom + " a " + this.sante + " point de vie et " + this.force + " en force";
    return description;
}
};
// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.decrire());

/*
    decrire(perso) appelle la fonction decrire() en lui passant l'objet perso en paramètre. Dans ce cas, la fonction est externe à l'objet.
    
    perso.decrire() appelle la fonction decrire() sur l'objet perso. Dans ce cas, la fonction fait partie de la définition de l'objet : il s'agit d'une méthode.
 */

//Ajout de propriété avec une méthode
console.log("\n Ajout de propiété à la méthode");
var pers = {}; //Création d'un objet sans aucune proriété
perso.nom = "Nathalie";
perso.sante = 150;
perso.force =25;

//Renvoie la description du personnage
perso.decrire = function(){
    var description = this.nom + " a " + this.sante + " en vie et " + this.force + " en force";
    return description;
};
console.log(perso.decrire());


/*

//     Bilan  --- Syntaxe Générale de la création et de l'utilisation d'un objet
//
//   var monObjet = {
//       propriete1: valeur1,
//       propriete2: valeur2,
//      // ... ,
//       methode1: function(/* ... *///) {
//         // ...
//      },
//      methode2: function(/* ... */) {
//          // ...
//      },
//      // ...
//  };   
//
//  console.log(monObjet.propriete1); // Affiche la propriété propriete1 de monObjet
//
//  console.log(monObjet.methode1(...)); // Affiche le résultat de l'appel de la    méthode methode1 de monObjet
//*/