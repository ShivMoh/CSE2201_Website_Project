var stage = document.getElementsByClassName("multi-stage-form")
var sub_stage = "";
var current_tab = 0;
var step = 0;
var current_status = 0;



stepTransition(0);
function stepTransition(n)
{   

   
    current_status+=n;
    console.log("Current Status", step)

    if(current_status == 0) {
        sub_stage = document.getElementsByClassName("shipping");
        switchTabs(0);
    } else if (current_status == 1) {
        sub_stage = document.getElementsByClassName("payment");
        switchTabs(0);
    } else if (current_status == 2) {
        sub_stage = document.getElementsByClassName("payment-confirm");
    } else {
        sub_stage = document.getElementsByClassName("review");
    }

    progress(n)  
}

function reset() 
{
    for(var x = 0; x < sub_stage.length; x++) {
        sub_stage[x].style.display = "none";
    }
    switchTabs(0);
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
