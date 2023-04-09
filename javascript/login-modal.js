// Get the modal and the trigger element
var loginModal = document.getElementById("login-modal");
var signupModal = document.getElementById("signup-modal");
var trigger = document.getElementById("modal-trigger");
var loginForm = document.querySelector(".login")
var gmail = document.querySelectorAll(".gmail")
var facebook = document.querySelectorAll(".facebook")
var profile = document.getElementById("profile")
var loggedIn = false

function login() {
  signupModal.style.display = "none";
  loginModal.style.display = "none";
  trigger.src = "../Resources/Icons/Logged-In.png"
  loggedIn = true
  profile.classList.add("cart-link");
  console.log(loggedIn)

}

  gmail.forEach(element => {
    element.onclick = login
  });
  
  facebook.forEach(element => {
    element.onclick = login
  });
  
  // window.location.href = "../html/account.html"
  loginForm.onsubmit = (e) => {
    e.preventDefault();
    login()
  }
  
  // When the user clicks the trigger, show the modal
  trigger.addEventListener("click", function() {
    if(loggedIn) return
    loginModal.style.display = "block";
  });
  
  // When the user clicks the close button, hide the modal
  var loginClose = document.getElementsByClassName("close")[0];
  loginClose.addEventListener("click", function() {
      if(loggedIn) return
      loginModal.style.display = "none";
  });
  
  var signupClose = document.getElementsByClassName("close")[1];
  signupClose.addEventListener("click", function(){
      if(loggedIn) return
      signupModal.style.display = "none";
  });
  
  // Get the sign-up link
  const signupLink = document.getElementById("signup-link");
  
  // When the user clicks on the sign-up link, show the sign-up modal
  signupLink.onclick = function() {
      if(loggedIn) return
      loginModal.style.display = "none";
      signupModal.style.display = "block";
    }
  
  // Controlling the visibility of the "OK" button
  const signupForm = document.querySelector('#signup-modal form');
  const confirmationMessage = document.querySelector('.signup-confirmation');
  const okayButton = document.querySelector('.ok-button');
  
  signupForm.addEventListener('submit', function(event) {
      if(loggedIn) return
      event.preventDefault();
      confirmationMessage.style.display = 'block';
  });
  
  okayButton.onclick = () => {
    if(loggedIn) return
    login()
  }
  
  // Adding an event listener to the "back to login page" button so that it returns the user to the login modal 
  const returnToSignUp = document.getElementById("return-to-login-btn");
  
  returnToSignUp.onclick = function () {
    if(loggedIn) return
    signupModal.style.display = "none";
    loginModal.style.display = "block";
  }
   

var viewProfile = document.getElementById("view-profile")
var logout = document.getElementById("logout")

viewProfile.onclick = () => window.location.href = '../html/account.html'

logout.addEventListener('click', () => {
  loggedIn = false
  profile.classList.remove("cart-link")
  trigger.src = "../Resources/Navigation-Bar/profile-icon.png"
  console.log("It worked")
})


// When the user clicks the OK button in the confirmation message, hide the sign-up modal and show the login modal
// const okButton = confirmationMessage.querySelector("#login-btn");

// okButton.addEventListener("click", function() {
//   signupModal.style.display = "none";
//   loginModal.style.display = "block";
//   confirmationMessage.style.display = "none";
// });

// // Add a class name to the OK button
// okButton.classList.add("ok-button");