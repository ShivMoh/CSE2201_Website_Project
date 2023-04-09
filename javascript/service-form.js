//Get the necessary elements required for the form submission and back button functionalities
var form = document.querySelector('.form')
var back = document.getElementById("prev-btn")

back.onclick = () => {
    window.location.href = "../html/services.html"
}

form.onsubmit = (e) => {
    e.preventDefault();
    window.location.href = '../html/request-services-confirmation.html'
}