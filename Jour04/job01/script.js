// jquery


// Wait until the entire document is fully loaded and ready
$(document).ready(function() {
    // Attach a click event listener to the element with the ID "button"
    $("#button").click(function() {
        // Use the jQuery `$.get` method to perform an HTTP GET request to fetch the content of "expression.txt"
        // Sends an asynchronous HTTP GET request
        $.get("expression.txt", function(data) {
            // If the request is successful, create a new <p> element
            // Set the content of the <p> element to the fetched data
            // Append the <p> element to the <body> of the HTML document
            $("<p></p>").text(data).appendTo("body");
        }).fail(function() {
            // If the HTTP GET request fails, log an error message to the console
            console.error("Could not fetch the file.");
        });
    });
});











// Javascript


//   document.getElementById("button").addEventListener("click", () => {
//     fetch("expression.txt") // Fetch the contents of "expression.txt"
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.text(); // Parse the response as text
//         })
//         .then(data => {
//             const paragraph = document.createElement("p"); // Create a new <p> element
//             paragraph.textContent = data; // Set the text of <p> to the fetched data
//             document.body.appendChild(paragraph); // Append <p> to the body
//         })
//         .catch(error => {
//             console.error("There was a problem with the fetch operation:", error);
//         });
// });



