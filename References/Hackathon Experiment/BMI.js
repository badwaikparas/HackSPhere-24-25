function calculateBMI() {
    // Get the input values
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    // Check if the inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Please enter valid values for weight and height.";
        return;
    }

    // Calculate BMI
    var bmi = weight / Math.pow(height / 100, 2);

    // Display the result
    document.getElementById('result').innerText = " BMI is: " + bmi.toFixed(2);
}