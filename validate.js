function validateForm() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    let isValid = true;
    document.getElementById("username-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("password-error").innerText = "";
    document.getElementById("confirm-password-error").innerText = "";
    if (username === "") {
        document.getElementById("username-error").innerText = "Username is required.";
        isValid = false;
    }
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").innerText = "Enter a valid email.";
        isValid = false;
    }
    if (password.length < 6) {
        document.getElementById("password-error").innerText = "Password must be at least 6 characters.";
        isValid = false;
    }
    if (confirmPassword !== password) {
        document.getElementById("confirm-password-error").innerText = "Passwords do not match.";
        isValid = false;
    }
    return isValid;
    }






