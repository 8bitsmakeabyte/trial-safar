// Select all OTP input boxes
const inputs = document.querySelectorAll(".box input");
const button = document.getElementById("verify-otp");

// Retrieve stored OTP from localStorage
let storedOtp = localStorage.getItem("otp");

// Alert OTP on page load for testing purposes (remove in production)
window.onload = function () {
    if (storedOtp) {
        alert("Your OTP is: " + storedOtp); // Display OTP for debugging
    } else {
        alert("No OTP found. Please request a new OTP.");
        window.location.href = "index.html"; // Redirect back to request OTP if not found
    }
};

// Focus next input automatically when a user types
inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        if (e.target.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});

// Verify OTP when the button is clicked
button.addEventListener("click", function () {
    let enteredOtp = "";

    // Combine all input values to form the entered OTP
    inputs.forEach((input) => {
        enteredOtp += input.value.trim(); // Trim to avoid unwanted spaces
    });

    console.log("Entered OTP: ", enteredOtp);
    console.log("Stored OTP: ", storedOtp);

    if (enteredOtp === storedOtp) {
        alert("OTP verified successfully!");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Incorrect OTP. Try again.");
        
        // OPTIONAL: Regenerate OTP for testing (if desired)
        storedOtp = Math.floor(1000 + Math.random() * 9000).toString(); // Ensure OTP is a string
        localStorage.setItem("otp", storedOtp); // Update OTP in localStorage
        console.log("Your new OTP is: " + storedOtp);

        // Clear input fields and refocus on the first field
        inputs.forEach((input) => (input.value = ""));
        inputs[0].focus();
    }
});
