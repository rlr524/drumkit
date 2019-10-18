// detect press of on-screen buttons with mouse clicks
$(".drum").on("click", function() {
    var buttonInnerHTML = $(this).text();
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    headerAnimation(buttonInnerHTML);
});

// need to reference the whole document here as there is no direct reference to the innerHTML...but because we've already called the
// .drum click unction above, they still work correctly
$(document).on("keydown", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
    headerAnimation(e.key);
});

// this the old code, pre jQuery refactor
// let numberDrumButtons = $(".drum").length;
// for (let i = 0; i<numberDrumButtons; i++) {
//     $(".drum")[i].addEventListener("click", function() {
//         var buttonInnerHTML = this.innerHTML;
//         makeSound(buttonInnerHTML);
//         buttonAnimation(buttonInnerHTML);
//         headerAnimation(buttonInnerHTML);
//     });
// }

// detect press of keyboard keys
// document.addEventListener("keydown", function(e) {
//     makeSound(e.key);
//     buttonAnimation(e.key);
//     headerAnimation(e.key);
// });
// function for all seven buttons with a that generates the sound files
function makeSound(key) {
        switch (key) {
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
            case "l":
                var tomFour = new Audio("sounds/tom-4.mp3");
                tomFour.play();
                break;
            default:
                alert("Uh oh, either you pressed a key other than w, a, s, d, j, k or l, or something went wrong. " + 
                "Try reloading the page and try again. This issue has been logged.");
                console.log("Ritsu's Drumkit: The " + "'" + key + "'" + " was pressed and something went wrong.")
                break;
        }
    }
    // function to add shading when button is pressed or clicked using .pressed class in css
    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed"); // don't need to add the class . here when naming the new class being added, as already 
        // identifying that it's a class
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100); // added a setTimeout method with anon function to remove the .pressed class after 1/10th of a second (100 milleseconds)
    }
    function headerAnimation() {
        var activeButtonHeader = document.querySelector("h1");
        activeButtonHeader.classList.add("red");
        setTimeout(function() {
            activeButtonHeader.classList.remove("red");
        }, 100);
    }


