/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

/*
---***--- Le jeu des Devinettes en JS ---***---
*/

//les Variables
var nbrProposition = 0; // ici ma variable pour savoir compter le nbre de proposition
var nombreChoisi = 0; // Ma variable pour le nombre choisi
var compteurProposition = 6; // ma variable pour du compteur de Proposition 
                            
// --------------   Améloration choix du nombre d'essais possible ------------
// Décommentez la ligne si dessous si vous voulez choisir un nbr d'essais 
// var compteurProposition = Number(prompt("Choisi un nombre d'essai(s) : ")); 
//----------------------------------------------------------------------------

for (nbrProposition = 1; nbrProposition <= compteurProposition; nbrProposition++){
    var nombreChoisi = Number(prompt("Choisi un nombre compris entrer 1 et 100 : "));
    
        if(nombreChoisi === solution){// si le chiffre est ok 
            console.log("Bravo !  la solution était : " + solution);//j'indique qu'il a gagné et marque la solution
                console.log("tu as trouvé en " + nbrProposition + " essai(s) ");
                    break;
    }
    if((nombreChoisi < solution) && (nbrProposition !== compteurProposition)){
        console.log(nombreChoisi + " est trop petit ! "); // c'est +
    }
    if ((nombreChoisi > solution ) && (nbrProposition !== compteurProposition)){
            console.log(nombreChoisi + "est trop grand ! ");  // c'est -
    }
     else if((nombreChoisi < solution) && (nbrProposition === compteurProposition)){
            console.log("Perdu ! ... La solution était: " + solution); // c'est + ... tu n'as plus essai
    }
     else if ((nombreChoisi > solution ) && (nbrProposition === compteurProposition)){
            console.log( "Perdu ! ... La solution était: " + solution);  // c'est -  ... tu n'as plus essai
    }
}// fin de for

