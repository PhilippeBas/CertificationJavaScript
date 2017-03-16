/*
Exo 3 : Modélisation d'un cercle
*/

console.log("Exo 2 : Modélisation d'un cercle \n");

var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
rayon: r,

aire: function (){
       return this.rayon * this.rayon * Math.PI;
    // ou
    //return Math.pow(this.rayon, 2)* Math.PI;
},// fin de l'aire

perimetre: function (){
    return 2 * this.rayon * Math.PI;
}// fin du perimetre
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
