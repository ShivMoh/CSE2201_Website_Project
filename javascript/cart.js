//Transitions between the cart and checkout content
function cartCheckoutTransition(n) {
    if(n == 0) {
      window.location.href = "../html/checkout.html"
    } else {
      window.location.href = "../html/cart.html"
    }
 }

