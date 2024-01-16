function calculateBMI() {
    // Get user input
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Check if input is valid
    if (weight && height) {
        // Calculate BMI
        var bmi = weight / (height * height);

        // Display result
        var resultElement = document.getElementById('result');
        resultElement.textContent = 'Your BMI is: ' + bmi.toFixed(2);

    } else {
        // Display error if input is not valid
        alert('Please enter valid weight and height.');
    }
}

