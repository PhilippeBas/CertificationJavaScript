var a;              //déclartion de la variable a
a = 3.14;           //affectation de 3.14 à la variable a 
console.log(a);     //Affiche la valeur de a

var b=0;            // déclaration de la variable b
b += 1;             // b contient  la valeur 1
b++;                //b contient la valeur 2
console.log(b);     //affiche la valeur de b


/*
Travail sur les expressions
*/
// 3 est une expression dont la valeur est le nombre 3
var c = 3;
// c est une expression dont la valeur est celle de c (ici 3)
var d = c;
// (d + 1) est une expression
// Sa valeur est celle de d augmentée de 1 (ici 4)
d = d + 1; // d contient la valeur 4
console.log(d); // Affiche 4


var e = 3 + 2 * 4; // e contient la valeur 11
console.log(e);
e = (3 + 2) * 4; // e contient la valeur 20
console.log(e);

/*
Travail sur les conversions de type
*/
var f = 100; //déclaration de f et affectation à f de la valeur 100
console.log("La valeur de f contient la valeur " + f);

var g ="cinq" *2;
console.log(g);//affiche NaN (None a Number)

var h = "5";
console.log(h + 1); // Concaténation : affiche la chaîne "51"
h = Number("5");
console.log(h + 1); // Addition numérique : affiche le nombre 6