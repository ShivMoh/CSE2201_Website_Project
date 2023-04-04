var stage = document.getElementsByClassName("multi-stage-form")
var sub_stage;
var current_tab = 0;
var step = 0;
var current_status = 0;

// arrange the code so that multistage simply moves from stage to stage
// and have the substages like shipping simply be controlled by the switchTabs
stepTransition(0);
function stepTransition(n)
{   

    if(current_status == 0) {
        sub_stage = document.getElementsByClassName("payment");
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

function switchTabs(n) {
    sub_stage[current_tab].style.display = "none";
    sub_stage[n].style.width = "100%";
    sub_stage[n].style.display = "flex";
    sub_stage[n].style.flexDirection = "column";
    sub_stage[n].style.alignItems = "flex-start";
}

// the unmodified version of this code was sourced from w3schools. 
// code was altered and modified for use in project
// W3Schools. (n.d.). How To Create a Form With Multiple Steps. Retrieved March 29, 2023, from https://www.w3schools.com/howto/howto_js_form_steps.asp
function progress(n) {
    if(n==0) {
        stage[step].style.display = "flex";
        stage[step].style.width = "88%";
        stage[step].style.flexDirection = "column";
        stage[step].style.alignItems = "flex-start";
    } else if(step < (stage.length - 1) || n < 0) {
        stage[step].style.display = "none";
        step+=n;
        stage[step].style.display = "flex";
        stage[step].style.flexDirection = "column";
        stage[step].style.alignItems = "flex-start";
    } else {
        return;
    }

    // changes button text appropriately to suit the current stage of the form
    // if (currentTab == 0) {
    //   document.getElementById("prevBtn").style.display = "none"
    //   document.getElementById("back-to-cart").style.display = "inline"
    // } else {
    //   document.getElementById("prevBtn").style.display = "inline"
    //   document.getElementById("back-to-cart").style.display = "none"
    // } 

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
