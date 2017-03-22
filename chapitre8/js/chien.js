// TODO : ajoutez ici la définition de l'objet Chien

/*
Création Objet "Chien"
*/
var Chien = {
    init: function (nom, race, taille){
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },


// fonction Aboiement du chien
aboyer: function() {
    var aboiement = " Whoua ! Whoua !";
    if (this.taille > 25){
        aboiement = "Grrr ! Grrr !";
    } else if (this.taille < 25) {
        aboiement = " Kaii ! Kaii !";
    }
    return aboiement;
}
};


//-------------------------------------------------------------------
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());