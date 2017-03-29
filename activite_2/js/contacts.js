/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

/*
Chaque contact a un nom et un prénom. Le programme gère un tableau de contacts et offre à l’utilisateur le choix entre les fonctionnalités suivantes :

Afficher chaque contact du tableau.
Quitter.
Le programme doit “boucler” jusqu’à ce que l’utilisateur choisisse de quitter. Il doit également utiliser des objets pour gérer les contacts.

Les deux contacts à insérer initialement dans le tableau sont :

Carole Lévisse
Mélodie Nelsonne
Pour obtenir le maximum de points possibles, ajoutez la possibilité pour l’utilisateur de saisir un nouveau contact qui sera inséré dans le tableau.
*/

 
  

//Objet COntact
var Contact ={
    // initialisation  : Contact
    init: function (nom, prenom) {
        this.prenom = prenom;
        this.nom = nom;
    }
};


// les 2 contact a insérer : Carole Lévisse & Mélodie c

var contact1 = Object.create (Contact);
    contact1.init("Carole", "Lévisse");
var contact2 = Object.create (Contact);
    contact2.init("Mélodie", "Mélodie");


// j'ai besoin d'un tableau pour mettre mes objects de contact
// je l'initialise et l'appel : "listeContact"
var listeContact = [];

// je le remplie le tableau maintenant 
listeContact.push(contact1);
listeContact.push(contact2);
//----------------------------------------------------------------------
//                                Début
//---------------------------------------------------------------------
console.log("----------------------------------------");
console.log("--*-- Mon Gestionnaire de Contacts --*--");
console.log("----------------------------------------");

console.log("\n Bienvenue dans le gestionnaire de contact");

// Création du menu contenant les options
 
console.log("\n Choix du Gestionnaire de Contact !\n\n1 : Liste des contacts\n2 : Ajouter un contact\n0 : Quitter");

var choix = Number(prompt("Quel est votre choix : "));

// si je rentre un choix différent du choix menu
while (choix > 2) {
         console.log("Je n'ai pas compris, votre choix !");
         var choix = Number(prompt("\nQuel est votre choix : "));
}


/* je vais privilégier un boucle while  (tant que  choix quitter pas sélectionneé je boucle)
*/

while ( choix <= 2 && choix >= 0){
   
    if (choix === 2){
        
    //pour ajouter un contact
        
        console.log("-- Ajouter un nouveau contact -- \n");
        var nom = prompt("Entrer le Nom : ");
        var prenom = prompt("Entrer le prénom : ");
        
        var newContact = Object.create(Contact);
        newContact.init(nom, prenom);
        listeContact.push(newContact);
        
        console.log("\n Votre nouveau contact à été ajouté ");
        
         var choix = Number(prompt("\nQuel est votre choix : "));
        
    } else if (choix === 1){
        
    //pour la liste des contacts
        //affiche le nombre de contacts
        console.log("\n-------------------------------------------");
        console.log("\n Le Gestionnaire de contact à " + listeContact.length + " contact(s). ");
        console.log("-------------------------------------------");
        
        // affiche la liste des contacts
        listeContact.forEach(function (contact){
        console.log( " Nom : " + contact.nom + " , Prénom : " + contact.prenom); 
        });    
        
         var choix = Number(prompt("\nQuel est votre choix : "));
        
    }  else  {
        // pour quiter
        console.log("\nAu revoir ! \n\n");
       break;
        
    }
}// fin de la boucle while
  

