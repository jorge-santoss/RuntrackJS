function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // A readyState of 4 means the request is complete.
        // A status of 200 means the request was successful.
        if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "expression.txt", true);
    xhttp.send();
  }





//   function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // Perform some action with the response
//             console.log(this.responseText);
//         }
//     };
//     xhttp.open("GET", "expression.txt", true);
//     xhttp.send();
// }

// // Add an event listener to the button
// document.getElementById("button").addEventListener("click", loadDoc);
