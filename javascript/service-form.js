var form = document.querySelector('.form')


form.onsubmit = (e) => {
    e.preventDefault();
    window.location.href = '../html/request-services-confirmation.html'
}

