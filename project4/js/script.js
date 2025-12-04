document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const now = new Date();

        const options = {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };

        const formatted = now.toLocaleString('en-US', options);

        const dateSpan = document.getElementById('current-date-time');
        if (dateSpan) {
            dateSpan.textContent = `Current Date & Time: ${formatted}`;
        }
    }

    updateDateTime(); // run immediately
    setInterval(updateDateTime, 1000); // update every second
});

document.getElementById("contactForm").addEventListener("submit", function(event) {

    // Input references
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Error display elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Reset previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    // Validate NAME
    if (name.value.trim().length < 2) {
        nameError.textContent = "Please enter your full name.";
        valid = false;
    }

    // Validate EMAIL
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Validate MESSAGE
    if (message.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        valid = false;
    }

    // Stop form submission if invalid
    if (!valid) {
        event.preventDefault();
    }
});