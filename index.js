// create an event listener for the first button with an anonymous function that generates the alert when the button is clicked
let numberDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i<numberDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked");
    });
}
