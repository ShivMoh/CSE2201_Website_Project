var stage = document.getElementsByClassName("multi-stage-form")
var state = document.getElementsByClassName("progress-state")
var sub_stage = "";
var current_tab = 0;
var step = 0;
var current_status = 0;

function editReview(n) {
    if(n == 0) {
        stage[step].style.display = "none"
        current_status=n;
        step=n;
        stepTransition(0);
    } else {
        stage[step].style.display = "none"
        current_status=n-1;
        step=n-1;
        stepTransition(1);
    }
}

myFunction = function(e) {
    // prevents default action to happen
    e.preventDefault();
    
    // do what ever you want to do here
    // i.e. perform a AJAX call
}

stepTransition(0);
function stepTransition(n)
{   
    // if(n>0) {
    //     console.log("Hello?")
    //     if(!validateForm()) return;
    // }
 
    current_status+=n;
    
    if(current_status == 0) {
        if(sub_stage!="") removeValidate();
        sub_stage = document.getElementsByClassName("shipping");
        // state[0].style.color = "black";
        manageState(0);
        addValidate();
        switchTabs(0);
    } else if (current_status == 1) {
        if(sub_stage.className == "shipping") removeValidate();
        sub_stage = document.getElementsByClassName("payment");
        // state[1].style.color = "black";
        manageState(1);
        addValidate();
        switchTabs(0);
    } else if (current_status == 2) {
        sub_stage = document.getElementsByClassName("payment-confirm");
    } else {
        sub_stage = document.getElementsByClassName("review");
        // state[2].style.color = "black";
        manageState(2);
    }

   
    progress(n)  
}

function manageState(n)
{
    for(var x = 0; x < state.length; x++)
    {
        if(x != n) {
            state[x].style.color = "grey"
        } else {
            state[x].style.color = "black"
        }
    }
} 

function reset() 
{
    for(var x = 0; x < sub_stage.length; x++) {
        sub_stage[x].style.display = "none";
    }
    switchTabs(0);
}

function addValidate() {
    const inputs = sub_stage[current_tab].getElementsByTagName("input");
    const labels = sub_stage[current_tab].getElementsByTagName("label")
    for (let j = 0; j < inputs.length; j++) {
      if (labels[j].innerText.includes("*")) {
        inputs[j].required = true;
      }
    }
}

function removeValidate() {
    const inputs = sub_stage[current_tab].getElementsByTagName("input");
    const labels = sub_stage[current_tab].getElementsByTagName("label")
    for (let j = 0; j < inputs.length; j++) {
      if (labels[j].innerText.includes("*")) {
        inputs[j].required = false;
      }
    }
}
function switchTabs(n) {
    sub_stage[current_tab].style.display = "none";
    sub_stage[n].style.display = "flex";
    current_tab = n;

    if(current_status == 2) {
        var paymentOption = document.getElementById("payment-selected")

        if(current_tab == 0) {
            paymentOption.src = '../Resources/Logos/paypal.png';
            paymentOption.alt = "paypal";
        } else {
            paymentOption.src = '../Resources/Logos/wipay.png';
            paymentOption.alt = "wipay";
        }
    }

    if(current_status == 1) {
        arr = ['../Resources/Logos/visa.png', '../Resources/Logos/paypal.png', '../Resources/Logos/wipay.png']

        if(current_tab == 0) {
            document.getElementById("payment-option").style.display = "none"
           document.getElementById("cash-on-arrival").style.display = "inline" 
        } else {
            document.getElementById("cash-on-arrival").style.display = "none"
            var paymentOption = document.getElementById("payment-option")
            paymentOption.style.display = "inline"

            switch(current_tab) {
                case 1:
                    paymentOption.src = arr[0]
                    paymentOption.alt = "Visa"
                break;
                case 2:
                    paymentOption.src = arr[1]
                    paymentOption.alt = "paypal"
                break;
                default:
                    paymentOption.src = arr[2]
                    paymentOption.alt = "wipay"
                break;
            }
        }
    }

    
}

// the unmodified version of this code was sourced from w3schools. 
// code was altered and modified for use in project
// W3Schools. (n.d.). How To Create a Form With Multiple Steps. Retrieved March 29, 2023, from https://www.w3schools.com/howto/howto_js_form_steps.asp
function progress(n) {
    if(n==0) {
       
        stage[step].style.display = "flex";
    } else if(step < (stage.length - 1) || n < 0) {
        if((step == 1 && current_tab < 2 && n > 0) || (step == 3)) {
            n+=n;
        }

        if(step == 1 && (current_tab == 2 || current_tab == 3)) {
            current_tab = (current_tab - 2);
            switchTabs(current_tab);
        } 
        reset()
        stage[step].style.display = "none";
        step+=n;
        stage[step].style.display = "flex";
     
    } else {
        return;
    }

    
    // changes button text appropriately to suit the current stage of the form
    if (step == 0) {
        document.getElementById("prev-btn").style.display = "none"
        document.getElementById("back-to-cart").style.display = "inline"
    } else {
        document.getElementById("prev-btn").style.display = "inline"
        document.getElementById("back-to-cart").style.display = "none"
    } 

    // // this handles the final confirm (submit) button
    // if (currentTab == (x.length - 1)) {
    //   document.getElementById("nextBtn").innerHTML = "Confirm";
    //   document.getElementById("nextBtn").onclick = () => {
    //       alert("Your purchase has been confirmed. Have a nice day :)")
    //       window.location.href = "../Html/shop.html"
    //   }
    // } else {
    //   document.getElementById("nextBtn").innerHTML = "Next";
    // }

    // updates the progress bar
    // update(n)

    // // changes title of form appropriately 
    // titleChange(currentTab)

}
// step(1);

// validates form by checking that required fields are inputted before proceeding
// function validateForm(n) {
//     var x, y, i, valid = true;
//     x = sub_stage[current_tab];
//     y = sub_stage[current_tab].getElementsByTagName("label");
//     z = sub_stage[current_tab].getElementsByTagName("input")

//     if(n < 0) return valid
   
//     // A loop that checks every input field in the current tab:
//     for (i = 0; i < y.length; i++) {
//       // If a field is empty...
//       if((y[i].innerText).includes("*")) {
     
//         if (z[i].value == "") {
//             // add an "invalid" class to the field:
//             z[i].className += "invalid";

//             // and set the current valid status to false:
//             valid = false;
//           }
//         }
//     } 

//     // checks for required fields and adds invalid if not filled
//     if(valid) {
//         for (i = 0; i < y.length; i++) {
//             if((y[i].innerText).includes("*")) {
//                 z[i].classList.remove("invalid")
//             }
//         } 
//     }

//     return valid; // return the valid status
//   }