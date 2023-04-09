var form = document.querySelector("#contact-form");

form.onsubmit = (e) => {
    e.preventDefault();
    window.location.href = "../html/contact-confirmation.html";
}