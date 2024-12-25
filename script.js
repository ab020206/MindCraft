// For form submission or any additional interactive functionality
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent. Thank you!");
});
