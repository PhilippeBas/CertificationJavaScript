/*
Exo : mot
indiquer le nombre de caracteres
le tout en minuscule
le tout en majuscule
*/


/*
---------- Les fonctions --------
*/

//fonction renvoie le nombre de voyelles d'un mot
function compterNbVoyelles(motSaisi){
  var nbVoyelles = 0;
 for (var i = 0; i < motSaisi.length; i++){
   var lettre = motSaisi[i].toLowerCase()
    if  ((lettre === 'a') || (lettre  === 'e') || (lettre  === 'i') || (lettre  === 'o') || (lettre  === 'u') || (lettre  === 'y') ){
        nbVoyelles ++ ;
    } // fin if
    
  } // fin for
    return nbVoyelles;
}//fin de la fonction compter les voyelles




//fonction pour inverser le mot saisie
function inverser(motSaisi){
    var inverseMot = "";
    for (var i = 0 ; i < motSaisi.length; i++){
            var lettre = motSaisi[i].toLowerCase();
        inverseMot = lettre + inverseMot;
        
    } // fin for
    return inverseMot;
}//fin de la fonction inverser




// Renvoie un mot converti en "leet speak"
// fonction pour convertir en "Leet speak"
function convertirEnLeetSpeek(motSaisi) {
    var motLeet = "";
    for (var i = 0; i < motSaisi.length; i++) {
        motLeet = motLeet + trouverLettreLeet(motSaisi[i]);
    }
    return motLeet;
}


// Renvoie l'équivalent "leet speak" d'une lettre
// fonction pour trouver une lettre "leet"
function trouverLettreLeet(lettre) {
    // Par défaut, la lettre ne change pas
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
    case "a":
        lettreLeet = "4";
            break;
    case "b":
        lettreLeet = "8";
            break;
    case "c":
        lettreLeet = "(";
            break;
    case "e":
        lettreLeet = "3";
            break;
    case "f":
        lettreLeet = "|=" ;
            break;
    case "g":
        lettreLeet ="6";
            break;
    case "l":
        lettreLeet = "1";
            break;
    case "o":
        lettreLeet = "0";
            break;
    case "s":
        lettreLeet = "5";
            break;
    case "t":
        lettreLeet = "7";
            break;
    case "v":
        lettreLeet = "\/";
            break;
    case "x":
            lettreLeet ="><";
            break;
    }
    return lettreLeet;
}



/*
                              ---***---
*/

var motSaisi  = prompt("Entrez un mot : ");
var nbrCaractere = motSaisi.length;

//Nombre de caracteres
console.log("Le mot " + "'"+ motSaisi + "'" + " contient " + nbrCaractere + " caratère(s)");

//Mettre en Majuscule
console.log("Le mot " + "'"+ motSaisi + "'" + " en majuscule : " + motSaisi.toLocaleUpperCase());

// Mettre en Minuscule
console.log("Le mot " + "'"+ motSaisi + "'" + " en miniscule : " + motSaisi.toLowerCase());

//Pour connaitre le nombre de voyelles et le nombre de consonnes
var nbVoyelles = compterNbVoyelles(motSaisi);
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (nbrCaractere-nbVoyelles) + " consonne(s)");

//Inversion du mot
var inverseMot = inverser(motSaisi);
console.log("il s'écrit à l'envers :  " + inverseMot );

// Palindrome
if (motSaisi === inverseMot){
    console.log("Le mot : " + "'" + motSaisi + "'"  + " est un palindrome");
}else{
    console.log("Le mot : " + "'"  + motSaisi + "'" + " n'est pas un palindrome");
}

//Conversion en "leet speak"
var motLeetSpeak = convertirEnLeetSpeek(motSaisi);
console.log("Conversion en \"---**--- leet speak  ---**---\" : ");
console.log("Il s'écrit en leet speak : " + motLeetSpeak);

//