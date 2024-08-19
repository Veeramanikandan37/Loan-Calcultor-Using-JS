document.getElementById('calculate').addEventListener('click', function() {
    // Get the values from the input fields
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const type = document.getElementById('type').value;

    let result = '';

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        result = 'Please enter valid positive numbers for all fields.';
    } else {
        if (type === 'simple') {
            // Calculate Simple Interest
            const simpleInterest = (principal * rate * time) / 100;
            const totalAmount = principal + simpleInterest;
            result = `Simple Interest: $${simpleInterest.toFixed(2)}<br>Total Amount: $${totalAmount.toFixed(2)}`;
        } else if (type === 'compound') {
            // Calculate Compound Interest
            const compoundAmount = principal * Math.pow((1 + rate / 100), time);
            const compoundInterest = compoundAmount - principal;
            result = `Compound Interest: $${compoundInterest.toFixed(2)}<br>Total Amount: $${compoundAmount.toFixed(2)}`;
        }
    }

    // Display the result
    document.getElementById('result').innerHTML = result;
});
