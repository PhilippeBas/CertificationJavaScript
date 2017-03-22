/*
Les Tableaux
*/

//Création de Tableaux

var films = ["Le loupe de Wall Street", "Vice-Vers", "Baby-sitting" ];

var tab = ["Bonjour", 7, true];

//la taille
console.log(films.length);

var tableauVide =[];
console.log(tableauVide.length);

console.log(films[0]);
console.log(films[1]);
console.log(films[2]);
console.log(films[3]);


for ( var i = 0; i< films.length; i++){
    console.log(films[i]);
}


films.forEach(function (film){
              console.log (film);
              });

// ajouter un film à une liste
films.push("Les Bronzés");

 console.log(films[3]);

var films = ["Le loup de Wall Street", 2013, "Vice-Versa", 2015, "Baby-Sitting", 2013];
    
 //------------------------------------------------------------------   
    // mieux Presentation sos forme d'un Objet
    var film ={
        //initialisation du film
        init: function (titre, annee){
            this.titre = titre;
            this.annee = annee;
        },
        //Renvoie la description
        decrire: function(){
            var description = this.titre + " (" + this.annee + ")";
            return description;
        }
    };

var film1 = Object.create(film);
film1.init("Le Loup de Wall Street", 2013);

var film2 = Object.create(film);
film2.init("Vive-Versa", 2015);

var film3 = Object.create(film);
film3.init("Baby-Setting", 2013);

// création d'un tableau poue y mettre nos objets
var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function(film){
             console.log(film.decrire());
});











