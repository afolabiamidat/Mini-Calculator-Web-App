// Functions with two parameters for calculations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero";
    }
    return num1 / num2;
}

// Main calculation function
function performCalculation(operation) {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers";
        resultElement.style.color = "#f5576c";
        return;
    }
    
    let result;
    
    // Call appropriate function based on operation
    switch(operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operation";
    }
    
    // Display result
    if (typeof result === 'string') {
        resultElement.style.color = "#f5576c";
    } else {
        resultElement.style.color = "#667eea";
        result = result.toFixed(2);
    }
    
    resultElement.textContent = result;
}

// Allow Enter key to trigger calculation
document.getElementById('num1')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('num2').focus();
    }
});

document.getElementById('num2')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performCalculation('add');
    }
});

