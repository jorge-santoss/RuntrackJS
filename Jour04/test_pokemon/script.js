
        document.getElementById('filterButton').addEventListener('click', function () {
            // Récupération des valeurs des champs
            const id = document.getElementById('id').value.toLowerCase();
            const name = document.getElementById('name').value.toLowerCase();
            const type = document.getElementById('type').value;

            // Récupération des données du fichier JSON
            fetch('./pokemon.json')
                .then(response => response.json())
                .then(data => {
                    // Filtrage des Pokémon
                    const filteredPokemon = data.filter(pokemon => {
                        return (!id || pokemon.id.toString().includes(id)) &&
                               (!name || pokemon.name.toLowerCase().includes(name)) &&
                               (!type || pokemon.type.includes(type));
                    });

                    // Affichage des résultats
                    const results = document.getElementById('results');
                    results.innerHTML = ''; // Réinitialisation des résultats
                    filteredPokemon.forEach(pokemon => {
                        const listItem = document.createElement('li');
                        listItem.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name}, Type: ${pokemon.type.join(', ')}`;
                        results.appendChild(listItem);
                    });
                })
                .catch(error => console.error('Erreur lors du chargement des données :', error));
        });
 