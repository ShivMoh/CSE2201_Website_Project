//Get tge search button and form and prevent submission of an empty form
var searchBtn = document.getElementById("search-button")
var form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault();
    window.location.reload();
}