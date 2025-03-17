$(document).ready(function() {
    // Shuffle images
    $('#shuffleBtn').on('click', function() {
        var container = $('#container');
        var images = container.children();
        while (images.length) {
            container.append(images.splice(Math.floor(Math.random() * images.length), 1)[0]);
        }
    });

    // Check order
    $('#checkOrderBtn').on('click', function() {
        var isCorrect = true;
        $('#container img').each(function(index) {
            if ($(this).data('order') !== index + 1) {
                isCorrect = false;
                return false;
            }
        });

        if (isCorrect) {
            $('#result').text('Vous avez gagné').css('color', 'green');
        } else {
            $('#result').text('Vous avez perdu').css('color', 'red');
        }
    });
});
