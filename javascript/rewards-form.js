var form = document.querySelector('.form')

var back = document.getElementById("prev-btn")

back.onclick = () => {
    window.location.href = "../html/services.html"
}

form.onsubmit = (e) => {
    e.preventDefault();
    alert("Your request has been made")
    window.location.href = '../html/home.html'
}

