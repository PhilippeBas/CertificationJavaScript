/*
Prototypage
*/

// création de l'objet persnnage
// par convention le nom de l'objet commence toujours par une majuscule
var Personnage = {
    nom: "",
    sante: 0,
    force: 0,
    xp: 0,
    
    // Renvoie la description du personnage
    decrire: function (){
        var description = this.nom + " a " + this.sante + " point de vie, " +this.force + " en force et " + this.xp + " point d'expérience" ;
        return description;
    }
};

// personnage 1 et 2 son créé avec l'objet Personnage comme prototype
// personnage 1
var perso1 = Object.create(Personnage);
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.force = 25;

// personnage 2
var perso2 = Object.create(Personnage);
perso2.nom = "Glacius";
perso2.sante = 130;
perso2.force = 35;

console.log(perso1.decrire()); // affiche personnage 1
console.log(perso2.decrire()); // affiche personnage 2



console.log("----------------------------------------");
/*
Amélioration en créant
une Fonction d'initialisation dans l'objet Personnage
*/

var Personnage ={
  //initialise le personage
    init: function (nom, sante, force){
        this.nom = nom; // "this.nom"  c'est la proriétés nom
        this.sante = sante;// "non" correspond à un paramètre de la méthode
        this.force = force;
        this.xp = 0;
    },
    
    //Renvoie la description du personnage
    decrire: function (){
        var description = this.nom + " a " + this.sante + " point de vie, " + this.force + " point de force et " +  this.xp + " point d'expérience";
        return description;
    }
    
};

var perso3 = Object.create(Personnage);
perso3.init("Philipus", 250, 45); 
// initialisation des propriète de la fonction init( de l'objet Personnage)

var perso4 = Object.create(Personnage);
perso4.init("Nathalus", 250, 75);


console.log(perso3.decrire());
console.log(perso4.decrire());




console.log("----------------------------------------");
/*
Nouvelle Modélisation (Joueur et adversaire) avec point commun et spécifités qui les distinguent
*/

var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    },
    
    /*
    -----------------------------
    Nouvelle Méthode : ( objet personnage) 
    Ajout de la fonction attaquer
    -----------------------------
    */
    attaquer: function (cible){
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom  + " attaque " + cible.nom + " et lui fait  " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0 ){
                console.log(cible.nom + " a encore " + cible.sante + " point de vie");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort !");
            }    
        } else { 
            console.log(this.nom + " ne peut pas attaquer : il est mort ...");
        }
    }
};

var Joueur = Object.create(Personnage);
// initialise le joueur
Joueur.initJoueur = function (nom, sante, force){
  this.initPerso(nom, sante, force);
    this.xp = 0;
    //l'expéreince du joueur est toujours initialisé à 0
};

//Renvoie la description du joueur
Joueur.decrire = function (){
  var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};


 
    /*
    -----------------------------
    Nouvelle Méthode : ( objet joueur) 
    Ajout de la fonction Combattre
    -----------------------------
    */
Joueur.combattre = function (adversaire){
  this.attaquer(adversaire);
    if (adversaire.sante === 0){
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur + " point d'expérience");
        this.xp  += adversaire.valeur;
    } 
};



var Adverssaire = Object.create(Personnage); 
  // initialise l'adversaire
    Adverssaire.initAdversaire = function (nom, sante, force, race, valeur){
      this.initPerso(nom, sante, force);
        this.race = race;
        this.valeur = valeur; 
};

// Maintenant création de Joueur et d'un monstre

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Philippe", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Nathalie", 130, 30);

console.log("Bienvenu dans ce jeu d'adventure ! Voici nos courgeux héros : ");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adverssaire);
monstre.initAdversaire("ZOG-ZOG",40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);


// Attaque simulation
monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());
