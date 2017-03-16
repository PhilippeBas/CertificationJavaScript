/*
Bonjour amélioré
*/

// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur

var prenom = prompt("Entrer votre Prenom : ");
var nom = prompt("Entrer votre Nom : ");


// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat
console.log("Exo : Bonjour amélioré");
console.log(direBonjour(prenom, nom));


/*
Carré d'un nombre
*/
// Renvoie le carré d'un nombre
function carre(x) {
  // TODO : compléter le code de la fonction
    y = x * x;
    return (y);
}
console.log("Exo : Carré d'un nombre");
console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25


/*
Minimum de deux nombres
*/
 //TODO : écrire la fonction min()
function min(x, y){
  if (x < y){
      return x;
  }else {
      return y;     
  }
}
console.log("Exo : Minimum de deux nombres");
console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1


/*
Calculatrice
*/
console.log("Exo : Calculatrice");

// TODO : écrire la fonction calculer()
function calculer (x, y, z){
    var resultat;
    var operation = y;
    switch (operation){ 
        case "+" :
                resultat = x + z;
                break;
        case "-" :
                resultat = x - z;
                break;
        case "*" :
                resultat = x * z;
                break;
        case "/" :
                resultat = x / z;
                break;
        default:
                console.log("Désolé, j'ai pas compris");
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity



