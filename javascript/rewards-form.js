var form = document.querySelector('.form')


form.onsubmit = (e) => {
    e.preventDefault();
    alert("Your request has been made")
    window.location.href = '../html/home.html'
}

