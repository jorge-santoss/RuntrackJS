function bisextile(année) {
    // Une année est bissextile si elle est divisible par 4,
    // sauf si elle est divisible par 100 et non divisible par 400.
    if ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0) {
        return "it's a Leap Year";
    } else {
        return "it's not a Leap Year";
    }
}

// Exemple d'utilisation

// console.log(bisextile (2024)); // true
// console.log(bisextile(2015)); // false


document.getElementById("mySubmit").addEventListener('click', function() {
    let année = document.getElementById("myYear").value;
    // année = year (année);
    console.log(bisextile(année));
    document.getElementById("myResult") .textContent = bisextile(année)
});