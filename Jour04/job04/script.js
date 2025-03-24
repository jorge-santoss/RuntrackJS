
document.getElementById('filterButton').addEventListener('click', function () {
    // Récupération des valeurs des champs
    const id = document.getElementById('id').value.toLowerCase();
    const nom = document.getElementById('nom').value.toLowerCase();
    const prenom = document.getElementById('prenom').value.toLowerCase();
    const email = document.getElementById('email').value.toLowerCase();

    // Récupération des données du fichier JSON
    fetch('./utilisateur.json')
        .then(response => response.json())
        .then(data => {
            // Filtrage des Utilisateurs
            const filteredUser = data.filter(user => {
                return (!id || user.id.toString().includes(id)) &&
                       (!nom || user.nom.toLowerCase().includes(nom)) &&
                       (!prenom || user.prenom.includes(prenom)) &&
                       (!email || user.email.includes(email));
            });

            // Affichage des résultats
            const results = document.getElementById('results');
            results.innerHTML = ''; // Réinitialisation des résultats
            filteredUser.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `ID: ${user.id}, Nom: ${user.nom}, Prenom: ${user.prenom}, Email: ${user.email}`;
                results.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des données :', error));
});









// document.getElementById('filterButton').addEventListener('click', function () {
//     // Récupération des valeurs des champs
//     const id = document.getElementById('id').value.toLowerCase();
//     const nom = document.getElementById('nom').value.toLowerCase();
//     const prenom = document.getElementById('prenom').value.toLowerCase();
//     const email = document.getElementById('email').value.toLowerCase();

//     // Récupération des données du fichier JSON
//     fetch('./utilisateur.json')
//         .then(response => response.json())
//         .then(data => {
//             // Filtrage des Pokémon
//             const filteredUtilisateur = data.filter(utilisateur => {
//                 return (!id || utilisateur.id.toString().includes(id)) &&
//                        (!nom || utilisateur.nom.toLowerCase().includes(nom)) &&
//                        (!prenom || utilisateur.prenom.includes(prenom)) &&
//                        (!email || utilisateur.email.includes(email));
//             });

//             // Affichage des résultats
//             const results = document.getElementById('results');
//             results.innerHTML = ''; // Réinitialisation des résultats
//             filteredUtilisateur.forEach(utilisateur => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `ID: ${utilisateur.id}, Nom: ${utilisateur.nom}, Prenom: ${utilisateur.prenom}, Email: ${utilisateur.email}`;
//                 results.appendChild(listItem);
//             });
//         })
//         .catch(error => console.error('Erreur lors du chargement des données :', error));
// });
