// create an event listener for all seven buttons with a function that generates the sound files
let numberDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i<numberDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tomOne = new Audio("sounds/tom-1.mp3");
                tomOne.play();
                break;
            case "j":
                var tomTwo = new Audio("sounds/tom-2.mp3");
                tomTwo.play();
                break;
            case "k":
                var tomThree = new Audio("sounds/tom-3.mp3");
                tomThree.play();
                break;
            // case "l":
            //     var tomFour = new Audio("sounds/tom-4.mp3");
            //     tomFour.play();
            //     break;
            case "x":
                var spoon = new Audio("sounds/1152.mp3");
                spoon.play();
                break;
            default:
                alert("Uh oh, something went wrong. We'll get the 'x' for this, but in the meantime, try again.");
                console.log("Ritsu's Drumkit: The " + buttonInnerHTML + " button was pressed and something went wrong.")
                break;
        }
    });
}

