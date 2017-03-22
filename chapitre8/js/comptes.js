// TODO : ajoutez ici la définition des objets nécessaires

/*
Par rapport à un compte bancaire, un compte épargne a la particularité de posséder un taux d'intérêt (exemple : 0,05 = 5%). Ce taux est utilisé pour calculer le montant des intérêts, qui est ensuite ajouté au solde du compte.
*/
/*
J'ai besoin  de 2 comptes et  1 debit  et  1 crédit 
d'un systeme tuax d'interets
*/

// pour mon Objet : "Compte"

var CompteBancaire = {
    // Initialistaion de compteBancire
    initCB: function (titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    },
  //créditer un montant
    crediter: function (montant){
        this.solde = this.solde + montant;
    },
    //débit un montant
    debiter: function (montant){
        this.solde = this.solde - montant;
    },

     // Renvoie la description du compte
      decrire: function () {
          var description = " Titulaire : " + this.titulaire + " , solde : " + this.solde + " €"; 
          return description;
      }
};

//creation de lobjet CompteEpargne
var CompteEpargne = Object.create(CompteBancaire);
//initialise le CEpargne
CompteEpargne.initCE = function (titulaire, solde, tauxInteret){
    this.initCB(titulaire, solde);
    this.tauxInteret = tauxInteret;
};

//calcul de l'interet du compte
CompteEpargne.ajouterInterets = function (){
  var interets = this.solde * this.tauxInteret;
    this.solde += interets;
};



//-----------------------------------------------------------------------


var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);

var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

//----------------------------------------------------------------------

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());