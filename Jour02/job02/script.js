function showhide() {
    document.getElementById("button").addEventListener('click', function() {
        let myMessage = document.getElementById("myMessage");
        if (myMessage.style.display === "none") {
            myMessage.style.display = "block";
            button.textContent = "Hide Message";

        } else {
            myMessage.style.display = "none";
            button.textContent = "Show Message";
        }
        console.log(myMessage.style.display);
    });
}

showhide();
