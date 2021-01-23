let heuresDiv = document.querySelector('.heures');
let dateDiv = document.querySelector('.date');

let affichageHeure = function(){
    //Déclaration des variables qui seront utilisées :
    let today, annee, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres;

    //Récupérer la date actuelle :
    today = new Date();

    //Récupérer l'année :
    annee = today.getFullYear();

    //Récupérer le mois :
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeMois[today.getMonth()]; //getMonth() donne l'index 1 comme on est en Février (Au moment du tuto), ce qui donne la valeur "Février" depuis notre liste.

    //Récupérer le numéro du jour du mois :
    jourNumero = today.getDate(); // Donne 29 (Jour du tuto)

    //Récupérer le jour. Attention la semaine commence un dimanche en JS:
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()]; // getDay() donne index 6, donc samedi (Jour du tuto)

    //Afficher les heures, minutes et secondes  toujours avec deux chiffres :
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

    //Récupérer les heures: 
    heures = deuxChiffres(today.getHours());

    //Récupérer les minutes:
    minutes = deuxChiffres(today.getMinutes());

    //Récupérer les secondes:
    secondes = deuxChiffres(today.getSeconds());

    //Affichage dans nos DIV du Html:
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + ", " + jourNumero +  " " + mois + " " + annee;

    //Lancer la fonction affichage heure toutes les 1000ms, soit toutes les secondes:
    setTimeout(affichageHeure, 1000);

}

//lancer la fonction une fois au début :
affichageHeure();
