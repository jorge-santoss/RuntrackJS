// function afficherJoursSemaines(jours){
//     let jours = ["Lundi" , "Mardi" , "Mercredi" , "Jeudi" , "Vendredi" , "Samedi" , "Dimanche"];
//     for (let i = 0; i < jours.lengh; i++) {
//         console.log(afficherJoursSemaines[i]);
//     }
// }


function afficherJoursSemaines() {
    // Tableau contenant les jours de la semaine
    const joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    // Boucle for pour afficher chaque jour
    for (let i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]);
    }
}

// Appelle la fonction pour afficher les jours de la semaine
afficherJoursSemaines();
