/*
Sommes
*/

//le tableau
var valeurs = [11, 3, 7, 2, 9, 10];
var somme = 0;
var valeurMax = valeurs[0];
var valeurMini = valeurs[0];

for (var i = 0; i < valeurs.length; i++){
    somme += valeurs[i];
   // console.log(somme);
}
console.log("La somme des éléments vaut " + somme);

// Valeur max

for (var i = 0; i < valeurs.length; i++){
    if (valeurs[i] > valeurMax){
        valeurMax = valeurs[i];
    }        
}

console.log("La valeur maximun du tableau est " + valeurMax);


// Valeur mini
for (var i = 0; i < valeurs.length; i++){
    if (valeurs[i] < valeurMini){
        valeurMini = valeurs[i];
    }
}
console.log("La valeur minimun du tableau est ") + valeurMini;



