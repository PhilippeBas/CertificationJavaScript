var personnage = {};
personnage.nom = "Aurora";
personnage.sante = 150;
personnage.force = 25;
personnage.xp = 0;

// Renvoie les infos du personnage
personnage.description = function (){
    var description = this.nom + " a " + this.sante + " point de vie, " + this.force + " en force et " + this.xp + " en expérience";
    return description;
}//fin de la fonction


console.log(personnage.description());

// Aurora est blessé par une fléche
personnage.sante = personnage.sante -20;

// Aurora trouve une bracelet de force
personnage.force = personnage.force +10;

//Aurora apprend une nouvelle compétence
personnage.xp = personnage.xp +15;

// affichage
console.log(personnage.description());



console.log("\n");

/*
Exo 2 
Modélisation d'un chien
*/
console.log("Exo 2 : Modélisation d'un chien \n");
var chien ={
    nom: "Crockdur",
    race: "mâtin de Naples",
    taille: 75,
    
    aboyer:function (){
        var aboyer = "Grr ! Grr !";
        return aboyer;
    } 
};

// TODO : ajoutez ici la définition de l'objet chien

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());



console.log("\n");


