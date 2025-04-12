document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Name validation
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    // Email validation
    let email = document.getElementById("email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        valid = false;
    }

    // Message validation
    let message = document.getElementById("message").value;
    if (message.trim() === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty.";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});