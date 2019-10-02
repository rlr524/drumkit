// create an event listener for all seven buttons with a function that generates the sound files
var audio = new Audio("sounds/crash.mp3");
let numberDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i<numberDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", gotClicked);
}
function gotClicked() {
    this.style.color = "white";
}
