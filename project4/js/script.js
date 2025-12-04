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

    updateDateTime(); 
    setInterval(updateDateTime, 1000); 
});

document.getElementById("contactForm").addEventListener("submit", function(event) {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    if (name.value.trim().length < 2) {
        nameError.textContent = "Please enter your full name.";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    if (message.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const dropdownParents = document.querySelectorAll(".has-dropdown");

  // Toggle main menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  // Toggle dropdowns on mobile
  dropdownParents.forEach(item => {
    item.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // prevent default link
        item.classList.toggle("open");
      }
    });
  });
});