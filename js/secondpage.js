document.addEventListener('DOMContentLoaded', () => {
    // Get the customerData from local storage
    const customerDataString = localStorage.getItem('customerData');
    if (!customerDataString) {
        // If customerData is not available, navigate back to the first page
        window.location.href = 'index.html';
    }

    const customerData = JSON.parse(customerDataString);

    // Update the customer's full name to not exceed 30 characters
    const trimmedFullName = customerData.fullName.length > 30 ? customerData.fullName.substring(0, 30) + '...' : customerData.fullName;

    // Concatenate the selected car conditions into a single string
    const carConditionsString = customerData.carConditions.join(', ');

    // Generate the summary HTML
    const summaryHtml = `
<div class="summary-item"><strong>Full Name:</strong> ${trimmedFullName}</div>
<div class="summary-item"><strong>Email:</strong> ${customerData.email}</div>
<div class="summary-item"><strong>Reference Code:</strong> ${customerData.refCode}</div>
<div class="summary-item"><strong>Selected Car Maker:</strong> ${customerData.carMaker}</div>
<div class="summary-item"><strong>Selected Car Model:</strong> ${customerData.carModel}</div>
<div class="summary-item"><strong>Selected Car Conditions:</strong> ${carConditionsString}</div>
`;

    // Display the summary in the "summary" div on the second page
    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = summaryHtml;


    document.getElementById('submitButton').addEventListener('click', () => {
        // Convert the customerData to a JSON object
        const jsonData = {
            name: customerData.fullName,
            email: customerData.email,
            refcode: customerData.refCode,
            make: customerData.carMaker,
            model: customerData.carModel,
            conditions: customerData.carConditions,
        };

        // Log the JSON data to the console (you can also perform other actions with the JSON data here)
        console.log(jsonData);
        console.log(JSON.stringify(customerData));
    });
});