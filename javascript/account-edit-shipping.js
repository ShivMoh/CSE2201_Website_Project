var shipping_option = document.getElementsByClassName('shipping')
var back = document.getElementById('prev-btn')
var form = document.getElementById('form-content')
var current_tab = 0;

switchTabs(current_tab);

form.onsubmit = (e) => {
    e.preventDefault(); 
    console.log("hello?")
    alert("Information Successfully updated")
    window.location.href = "../html/account.html"
}

back.onclick = () => window.location.href = "../html/account.html"

function switchTabs(n) {
    console.log("me works")
    shipping_option[current_tab].style.display = "none";
    shipping_option[n].style.display = "flex";
    current_tab = n;
}