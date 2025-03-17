const topList = [0, 100, 200];
const leftList = [0, 100, 200];

let indiceList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomIndice = 0;
let counter = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let chrono;

const $button = $("button");
const $timeDisplay = $(".time");
const $counterDisplay = $(".counter");
const $winMessage = $(".win");

// Reusable function for updating the time display
function updateTimeDisplay(hours, minutes, seconds) {
    $timeDisplay.text(`Temps: ${hours}h ${minutes}m ${seconds}s`);
}

// Reusable function for resetting the game
function resetGame() {
    indiceList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    randomIndice = 0;
    counter = 0;

    for (let t = 0; t < topList.length; t++) {
        for (let l = 0; l < leftList.length; l++) {
            randomIndice = Math.floor(Math.random() * indiceList.length);
            $(`.square-${indiceList[randomIndice]}`).css({
                top: topList[t],
                left: leftList[l]
            });
            indiceList.splice(randomIndice, 1);
        }
    }
    clearInterval(chrono);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimeDisplay(0, 0, 0);
    $counterDisplay.text("Nombre de déplacements : 0");
    $winMessage.css("padding", "0").text("");
}

// Start the chrono timer
function startChrono() {
    chrono = setInterval(function () {
        seconds++;
        if (seconds == 60) {
            ++minutes;
            seconds = 0;
        }
        if (minutes == 60) {
            ++hours;
            minutes = 0;
        }
        updateTimeDisplay(hours, minutes, seconds);
    }, 1000);
}

// Handle button click
$button.click(function () {
    if ($button.text() === "JOUER") {
        resetGame();
        $button.text("REJOUER");
        startChrono();
    } else {
        resetGame();
        $button.text("REJOUER");
    }
});

// Handle square click
$(".square").click(function () {
    if ($button.text() === "REJOUER") {
        const $this = $(this);
        const $square9 = $(".square-9");

        const top9 = $square9.css("top"); // Position of empty square
        const left9 = $square9.css("left");

        const topThis = $this.css("top");
        const leftThis = $this.css("left"); // Position of clicked square

        const ecartTop = Math.abs(parseInt(top9) - parseInt(topThis));
        const ecartLeft = Math.abs(parseInt(left9) - parseInt(leftThis));
        const ecart = ecartTop + ecartLeft;

        // Allow movement only if adjacent
        if (ecart === 100) {
            $this.animate({ top: top9, left: left9 });
            $square9.animate({ top: topThis, left: leftThis });
            $counterDisplay.text(`Nombre de déplacements : ${++counter}`);
        }

        // Check if the player has won
        if (
            $(".square-1").css("top") === "0px" && $(".square-1").css("left") === "0px" &&
            $(".square-2").css("top") === "0px" && $(".square-2").css("left") === "100px" &&
            $(".square-3").css("top") === "0px" && $(".square-3").css("left") === "200px" &&
            $(".square-4").css("top") === "100px" && $(".square-4").css("left") === "0px" &&
            $(".square-5").css("top") === "100px" && $(".square-5").css("left") === "100px" &&
            $(".square-6").css("top") === "100px" && $(".square-6").css("left") === "200px" &&
            $(".square-7").css("top") === "200px" && $(".square-7").css("left") === "0px" &&
            $(".square-8").css("top") === "200px" && $(".square-8").css("left") === "100px" &&
            $(".square-9").css("top") === "200px" && $(".square-9").css("left") === "200px"
        ) {
            setTimeout(() => clearInterval(chrono));
            $winMessage.css("padding", "10px").text("VOUS AVEZ GAGNE!");
        }
    }
});





