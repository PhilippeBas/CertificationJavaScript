var compte = {
  titulaire: "Alex",
  solde: 0,
  
    // méthode créditer
    crediter: function (montant){
  this.solde = this.solde + montant;
    },
    
    //Méthode débiter
    debiter: function (montant){
    this.solde = this.solde - montant
    },
    //méthode décrire
    decrire: function (){
        var decrire = "Titulaire : " + compte.titulaire + " , " + " solde : " + compte.solde + " €";
     return decrire; 
    }
      
    
};

console.log(compte.decrire());

var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
console.log(compte.decrire());
var debit = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(debit);
console.log(compte.decrire());