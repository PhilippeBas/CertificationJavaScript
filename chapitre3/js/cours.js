/*
Les conditions
*/


// L'instrustion if

var nombre = Number(prompt("Entrez un nombre : "));
if (nombre >= 0) {
    console.log(nombre + " est positif ou nul");
}


// avec un if imbriqué

var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
    console.log(nombre + " est positif");
} else { // nombre <= 0
    if (nombre < 0) {
        console.log(nombre + " est négatif");
    } else { // nombre === 0
        console.log(nombre + " est nul");
    }
}


// avec un if, esle if et esle

var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
    console.log(nombre + " est positif");
} else if (nombre < 0) {
    console.log(nombre + " est négatif");
} else {
    console.log(nombre + " est nul");
}


// opérateur logique ET
var nombre = Number(prompt("Entrez un nombre : "));
//on veut vérifier si le nombre est compris entre 0 et 100)
if ((nombre >= 0) && (nombre <= 100)){
    console.log(nombre + " est compris entre 0 et 100");
}


// opérateur logique OU
var nombre = Number(prompt("Entrez un nombre : "));
//on veut vérifier si le nombre est en dehors de l'intervalle [0, 100])
if ((nombre < 0 ) || (nombre > 100)){
    console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}


// opérateur logique NON !
var nombre = Number(prompt("Entrez un nombre : "));
//on veut vérifier si le nombre est inférieur  à 100
if (!(nombre >100)){
    console.log(nombre + " est inférieur à 100")
}