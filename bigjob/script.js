
// Function to hide all sections
function hideAllSections() {
    const sections = document.querySelectorAll("img, #header, #login, #signup, #request, .moderator_page");
    sections.forEach(section => {
        section.style.display = "none"; // Hide sections
        section.style.opacity = "0";   // Reset opacity
    });
}











// Function to show a section with fade-in
function showSection(sectionId) {
    hideAllSections();
    const selectedSection = document.querySelector(sectionId);
    selectedSection.style.display = "block"; // Make it visible
    setTimeout(() => {
        selectedSection.style.opacity = "1"; // Gradually increase opacity
    }, 10); // Delay for transition effect
}


window.onload = function () {
    const currentPage = window.location.hash; // Detect page state
    if (["#login", "#signup", "#request"].includes(currentPage)) {
        toggleHeader(true); // Show header
    } else {
        toggleHeader(false); // Hide header
    }

    // Transition to login after 3 seconds
    setTimeout(() => {
        showSection("#login");
    }, 3000);
};



function toggleHeader(visible) {
    const header = document.querySelector("#header");
    if (visible) {
        header.style.display = "block";
        setTimeout(() => {
            header.style.opacity = "5";
        }, 10); // Allow transition to take effect
    } else {
        header.style.opacity = "0";
        setTimeout(() => {
            header.style.display = "none";
        }, 500); // Wait for fade-out to complete
    }
}





// also works, but overrides the window.onload.

// function toggleHeader(visible) {
//     const header = document.querySelector("#header");
//     header.style.display = visible ? "none" : "block";
// }

// // Automatically show the header on pages 2 and 3
// window.onload = function() {
//     const currentPage = window.location.hash; // Example to detect page state (#page1, #page2, etc.)
//     if (["#login", "#signup", "#request"].includes(currentPage)) {
//         toggleHeader(true); // Show header
//     } else {
//         toggleHeader(false); // Hide header
//     }
// };


// // Fade transition from page 1 to login after 3 seconds
// window.onload = function() {
//     setTimeout(() => {
//         showSection("#login");
//     }, 3000);
// };





// Event listeners for actions
document.querySelector("#login .btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (email && password) {
        showSection("#request"); // Navigate to request page
    } else {
        alert("Veuillez entrer vos identifiants!");
    }
});

// // Navigate to signup if the user doesn't have an account
// document.querySelector(".inscription").addEventListener("click", function() {
//     showSection("#signup");
// });


// Navigate to "Inscription" section if the user doesn't have an account
document.querySelector("#inscriptionLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    showSection("#signup"); // Navigate to signup section
});


// Navigate to "Connexion" section if the user has already an account
document.querySelector("#connexionLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    showSection("#login"); // Navigate to login section
});






// From signup to request after account creation
document.querySelector("#signup .btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.querySelector("#signup input[type=email]").value;
    const password = document.querySelector("#signup input[type=password]").value;
    const confirmPassword = document.querySelector("#signup input[type=password]:nth-child(4)").value;
    if (email && password && password === confirmPassword) {
        showSection("#request"); // Navigate to request page
    } else {
        alert("Veuillez remplir tous les champs correctement!");
    }
});
