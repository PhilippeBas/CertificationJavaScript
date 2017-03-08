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