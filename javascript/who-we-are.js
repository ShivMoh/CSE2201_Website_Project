//Get elements to set up dummy buttons 
var buttons = document.querySelectorAll(".btn")

buttons.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = "#";
    })
});