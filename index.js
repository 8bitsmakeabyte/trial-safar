// Select elements
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

// Animate intro logo
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    });
});

// Handle OTP sending
document.getElementById("send-otp").addEventListener("click", function () {
    const phoneNumber = document.getElementById("phone-number").value.trim(); // Trim spaces

    // Validate phone number
    if (phoneNumber === "" || phoneNumber.length < 10 || isNaN(phoneNumber)) {
        alert("Please enter a valid phone number (at least 10 digits).");
        return;
    }

    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
    localStorage.setItem("otp", otp); // Store OTP in localStorage
    console.log("Generated OTP: ", otp); // Log OTP for debugging
    alert("Your OTP is: " + otp); // Display OTP for testing purposes

    // Redirect to OTP page
    window.location.href = "otp.html"; // Adjust path if needed
});
