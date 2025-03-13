

document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('keylogger');

    document.addEventListener('keydown', function (event) {
        const letter = event.key.toLowerCase();
        if (letter >= 'a' && letter <= 'z') {
            if (document.activeElement === textarea) {
                // If the focus is in the textarea, add the letter as usual
                // textarea.value += letter;  
            } else {
                // If the focus is outside the textarea, add the letter twice
                textarea.value += letter + letter;
            }
        }
    });
});

