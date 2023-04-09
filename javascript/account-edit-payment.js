var payment_option = document.getElementsByClassName('payment')
var back = document.getElementById('prev-btn')
var form = document.getElementById('form-content')
var current_tab = 0;
switchTabs(current_tab);

form.onsubmit = (e) => {
    e.preventDefault(); 
    alert("Information Successfully updated")
    window.location.href = "../html/account.html"
}

back.onclick = () => window.location.href = "../html/account.html"

function switchTabs(n) {
    payment_option[current_tab].style.display = "none";
    payment_option[n].style.display = "flex";
    current_tab = n;
}

