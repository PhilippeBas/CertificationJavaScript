/*
Créer un tableau 
*/

// 1° afficher le tableau avec boucle for
console.log("--- boucle for ---");
console.log("Voici les  trois mousquetaires : ");
var mousquetaires = ["Athos", "Porthos", "Aramis"];

for (i = 0 ; i < mousquetaires.length; i++){
    console.log(mousquetaires[i]);
}


//Ajout d'un mousquetaire
console.log("\n --- Ajout du mousquetaire d'Artagnan ---");
console.log("A présent, ils sont quatres ! ");
mousquetaires.push("D'Artagnan");


// afiche le tableau avec forEach()
console.log("\n --- forEach() ---");

mousquetaires.forEach(function (garde) {
   console.log(garde); 
});
