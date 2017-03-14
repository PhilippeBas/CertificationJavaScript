
/*
Aire & Périmètre d'un cercle
*/

function aireCercle(rayon){
  // L'aire d'un cercle est égale à son rayon au carré multiplié par π (environ 3,14).
  //A = rayon au carré * par pi
    aire = (rayon * rayon) * Math.PI;
    return aire;
}

function perimetreCercle(rayon){
  //périmètre du cercle = pi * diamètre
  // p = pi * (rayon*2)
    perimetre = Math.pow(rayon, 2) * Math.PI;
  return perimetre;  
}

var rayon = Number(prompt("Entrer le rayon du Cercle : "));
console.log("Son périmètre vaut : " + perimetreCercle(rayon));
console.log("Saon aire est de : " + aireCercle(rayon));
