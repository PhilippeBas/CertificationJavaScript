/*
Gestion d'un chenil
*/



var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

// je dois créer plusieurs chiens

var crockdur = Object.create(Chien);
    crockdur.init("Crockdur", "Mâtin de Naples", 75);
var chipie = Object.create(Chien);
    chipie.init("Chipie", "Bouledogue Francais", 35);
var pupuce = Object.create(Chien);
    pupuce.init("Pupuce", "Bichon", 22);
var medor = Object.create(Chien);
    medor.init("Médor", "Labrador", 58);

//j'initialise un tableau
var chenil = [];
// Je remplie le tableau
chenil.push(crockdur);
chenil.push(chipie);
chenil.push(pupuce);
chenil.push(medor);


console.log("-------------------------------");
console.log("--*-- Les Chenils Basuyau --*--");
console.log("-------------------------------");

console.log("\n Le chenil héberge " + chenil.length + " chien(s) : ");
chenil.forEach(function (chien){
   console.log( chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. Il aboie : " + chien.aboyer()); 
});


