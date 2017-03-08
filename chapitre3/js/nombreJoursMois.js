var nbrJourMois = prompt("Entrez le numéro du mois concerné pour connaitre le nombre de jours de celui ci");
switch (nbrJourMois){
    case "1":
        console.log("Vous avez choisi le mois de Janvier, il y a 31 jours");
        break;
    case "2":
        console.log("Vous avez choisi le mois de Février, il y a 28 jours");
        break;
    case "3":
        console.log("Vous avez choisi le mois de Mars, il y a 31 jours");
        break;
    case "4":
        console.log("Vous avez choisi le mois de Avril, il y a 30 jours");
        break;
    case "5":
        console.log("Vous avez choisi le mois de Mai, il y a 31 jours");
        break;
    case "6":
        console.log("Vous avez choisi le mois de Juin, il y a 30 jours");
        break;
    case "7":
        console.log("Vous avez choisi le mois de Juillet, il y a 31 jours");
        break;
    case "8":
        console.log("Vous avez choisi le mois de Aout, il y a 31 jours");
        break;
    case "9":
        console.log("Vous avez choisi le mois de Septembre, il y a 30 jours");
        break;
    case "10":
        console.log("Vous avez choisi le mois de Octobre, il y a 31 jours");
        break;
    case "11":
        console.log("Vous avez choisi le mois de Novemebre, il y a 30 jours");
        break;
    case "12":
        console.log("Vous avez choisi le mois de Décembre, il y a 31 jours");
        break;
    default:
        console.log("Je n'ai pas compris le chiffre du mois que vous avez choisi");
}