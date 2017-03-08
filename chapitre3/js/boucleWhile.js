var PhrasePuni = prompt("Entre ta phrase :");
var nbrLigne = Number(prompt("Entre un nombre"));
var ligneDépart = 1;
var ligneRestant = nbrLigne - ligneDépart;

while (ligneDépart <= nbrLigne){
    console.log(ligneDépart + " " + PhrasePuni + " " + " plus que" + " " +ligneRestant);
    ligneDépart++;
    ligneRestant --;
}
console.log("Terminé, je l'ai fait : " + nbrLigne);