// JavaScript for email validation
function validateEmail() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    
    if (email !== confirmEmail) {
        alert('Email addresses do not match. Please check and try again.');
        return false;
    }
    return true;
}

// Add event listener when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            if (!validateEmail()) {
                event.preventDefault();
            }
        });
    }
});
