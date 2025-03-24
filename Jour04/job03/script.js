async function filterData() {
    try {
        // Get the values from the input fields
        const id = document.getElementById('id').value;
        const nom = document.getElementById('nom').value;
        const type = document.getElementById('type').value;

        // Fetch the data from the JSON file
        const response = await fetch('./pokemon.json');
        
        // Check if the response is not OK and throw an error
        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }

        // Parse the JSON data
        const data = await response.json();

        // Log the fetched data to the console
        
        let filtredData = [];

        for (let pokemon of data) {
            const type = pokemon.type;
            if (type.includes("Grass"))
                console.log(type);
        }

        // Add your filtering logic here (for demonstration purposes):
        const filteredData = data.filter(item => {
            return (!id || item.id === id) &&
                   (!nom || item.nom.includes(nom)) &&
                   (!type || item.type === type);
        });

        console.log('Filtered Data:', filteredData);

    } catch (error) {
        // Handle any errors that occur during the fetch or processing
        console.error(error);
    }
}

// Attach an event listener to the "Filtrer" button
document.querySelector('input[type="button"]').addEventListener('click', filterData);






