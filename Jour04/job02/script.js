// Function definition: jsonValueKey
// This function takes two parameters:
// - jsonString: A string in JSON format.
// - key: The specific key for which the corresponding value is to be retrieved.
function jsonValueKey(jsonString, key) {
    // Parse the JSON string into a JavaScript object
    // JSON.parse() is used here to convert the JSON-formatted string (jsonString)
    // into an actual JavaScript object so it can be accessed like a regular object.
    let jsonObject = JSON.parse(jsonString);
    
    // Return the value associated with the provided key
    // jsonObject[key] accesses the value corresponding to the key in the parsed JSON object.
    return jsonObject[key];
}

// Example usage of the function:
const jsonStr = `{
    "name": "La Plateforme_",          // Key-value pair: "name" is the key, "La Plateforme_" is the value
    "address": "8 rue d'Hozier",       // Key-value pair: "address" is the key, "8 rue d'Hozier" is the value
    "city": "Marseille",               // Key-value pair: "city" is the key, "Marseille" is the value
    "nb_staff": "11",                  // Key-value pair: "nb_staff" is the key, "11" is the value
    "creation": "2019"                 // Key-value pair: "creation" is the key, "2019" is the value
}`;
const key = "city"; // Define the key for which we want the value, here it is "city"

// Call the jsonValueKey function and log the output to the console
// jsonValueKey(jsonStr, key) will extract the value for the key "city" from the JSON string
// In this case, the value is "Marseille".
console.log(jsonValueKey(jsonStr, key)); // Output: "Marseille"
