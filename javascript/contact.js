var form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Hello?")
    window.location.href = "../html/contact-confirmation.html";
})