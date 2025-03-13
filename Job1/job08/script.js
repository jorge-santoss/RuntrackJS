function estNombrePremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (estNombrePremier(a) && estNombrePremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Exemple d'utilisation :
const a = 7; // ajouter un nombre
const b = 10; // ajouter un nombre
console.log(sommeNombresPremiers(a, b)); // Affichera 18, car 7 et 11 sont des nombres premiers
