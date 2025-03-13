function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    } else {
        throw new Error("Le paramètre 'order' doit être 'asc' ou 'desc'.");
    }
}

// Exemple d'utilisation
const numbers = [5, 3, 8, 1, 2];
console.log(tri(numbers, "asc"));  // Retourne [1, 2, 3, 5, 8]
console.log(tri(numbers, "desc")); // Retourne [8, 5, 3, 2, 1]
