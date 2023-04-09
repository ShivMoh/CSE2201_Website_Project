//Initializing variables
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

//Prevents default action to happen
myFunction = function(e) {
    e.preventDefault();
    
}

stepTransition(0);
function stepTransition(n)
{   
    current_status+=n;
    
    if(current_status == 0) {
        if(sub_stage!="") removeValidate();
        sub_stage = document.getElementsByClassName("shipping");
        // manageState(0);
        switchTabs(0);
    } else if (current_status == 1) {
        if(sub_stage.className == "shipping") removeValidate();
        sub_stage = document.getElementsByClassName("payment");
        // manageState(1);
        switchTabs(0);
    } else if (current_status == 2) {
        sub_stage = document.getElementsByClassName("payment-confirm");
        // manageState(2);
    } else {
        sub_stage = document.getElementsByClassName("review");
        
    }

    manageState(current_status)

    progress(n)  
}

function manageState(n)
{
    for(var x = 0; x < state.length; x++)
    {
        if(x != n) {
            state[x].style.color = "#65707A"
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

    removeValidate();

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

    if(current_tab == 1) {
        const creditCardNum = document.getElementById('credit-card-num');
        const securityPin = document.getElementById('security-pin');

        creditCardNum.addEventListener('input', (e) => {
            // Get the input value and remove any non-numeric characters
            let value = e.target.value.replace(/\D/g, '');
            
            // Add dashes between every 4 digits
            value = value.replace(/(\d{4})(?=\d)/g, '$1-');
            
            // Set the input value to the formatted value
            e.target.value = value;
        })

        securityPin.addEventListener('input', (e) => {
            // Get the input value and limit the length to 4 digits
            let value = e.target.value.slice(0, 4);
            
            // Set the input value to the limited value
            e.target.value = value;
        });
    }

    addValidate();
}

// the unmodified version of this code was sourced from w3schools. 
// code was altered and modified for use in project
// W3Schools. (n.d.). How To Create a Form With Multiple Steps. Retrieved March 29, 2023, from https://www.w3schools.com/howto/howto_js_form_steps.asp
function progress(n) {

    // checks to see if length of credit card num and security pin are valid
    if(current_tab == 1) {
        const creditCardNum = document.getElementById('credit-card-num');
        const securityPin = document.getElementById('security-pin');

        if(creditCardNum.value.length != 19 && n>0)
        {
            alert("Please ensure that your credit card number is valid");
            current_status-=n;
            return
        }

        if(securityPin.value.length != 4 && n > 0) {
            alert("Please ensure that your security pin is valid");
            current_status-=n;
            return
        }
    }

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
        document.getElementById("next-btn").innerText = "Next";
    } else if(step == (stage.length - 1)) {
        document.getElementById("next-btn").innerText = "Confirm";
        document.getElementById("form-content").onsubmit = (e) => {
            e.preventDefault();
            window.location.href = "../html/home.html";
        }
    } else {
        document.getElementById("prev-btn").style.display = "inline"
        document.getElementById("back-to-cart").style.display = "none"
        document.getElementById("next-btn").innerText = "Next";
    } 

    

}
