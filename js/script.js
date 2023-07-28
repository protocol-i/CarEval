// Array of automobile makers with their models
const automobileMakers = [
    // Add 10 automobile makers here with their models
    {
        name: "Toyota",
        models: ["Corolla", "Camry", "RAV4", "Prius", "Highlander"],
    },
    {
        name: "Honda",
        models: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"],
    },
    {
        name: "Ford ",
        models: ["Mustang","Mustang EcoBoost", "Mustang GT", "Mustang GT Premium", "Mustang Mach 1", "Mustang Shelby GT350"],
    },
    {
        name: "BMW",
        models: ["320i", "330i", "340i", "M340i", "330e(Plug-in hybrid)"],
    },
    {
        name: "Tesla",
        models: ["Tesla Model S","Model S Long Range", "Model S Plaid", "Model S Plaid+", ],
    },
    {
        name: "Nissan Rogue",
        models: ["Rogue S", "Rogue SV", "Rogue SL", "Rogue Platinum", ],
    },
    {
        name: "Chevrolet",
        models: ["Chevrolet Corvette","Corvette Stingray", "Corvette Grand Sport", "Corvette ZO6", "Corvette ZR1", ],
    },
    {
        name: "Audi",
        models: ["Audi Q5","Q5 Premium", "Q5 Premium Plus", "Q5 Prestige", "SQ5", ],
    },
    {
        name: "Mercedes-Benz ",
        models: ["C 300", "C 300 4MATIC", " AMG C 43", "AMG C 63", "AMG C 63 S"],
    },
    {
        name: "Jeep Wrangler",
        models: ["Wrangler Sport", "Wrangler Sahara", "Wrangler Rubicon", "Wrangler willys", ],
    },
    // Add more automobile makers with their models here
];

// Function to populate car maker options
function populateCarMakers() {
    const carMakerSelect = document.getElementById('carMaker');
    for (const maker of automobileMakers) {
        const option = document.createElement('option');
        option.value = maker.name;
        option.textContent = maker.name;
        carMakerSelect.appendChild(option);
    }
}

// Function to populate car model options based on the selected maker
function populateCarModels(selectedMaker) {
    const carModelSelect = document.getElementById('carModel');
    carModelSelect.innerHTML = '<option value="">Select Model</option>';
    const maker = automobileMakers.find((maker) => maker.name === selectedMaker);
    if (maker) {
        for (const model of maker.models) {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            carModelSelect.appendChild(option);
        }
        carModelSelect.disabled = false;
    }
}
const carConditions = [];

function addToArrayList(checkbox) {
    if (checkbox.checked) {
        // Add the value to the array list if the checkbox is checked
        carConditions.push(checkbox.value);
    } else {
        // Remove the value from the array list if the checkbox is unchecked
        const index = carConditions.indexOf(checkbox.value);
        if (index > -1) {
            carConditions.splice(index, 1);
        }
    }

    // Update the output on the page
}

document.addEventListener('DOMContentLoaded', () => {
    populateCarMakers();
    // addToArrayList();
    document.getElementById('carMaker').addEventListener('change', (event) => {
        const selectedMaker = event.target.value;
        populateCarModels(selectedMaker);
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        // Form validation
        const fullName = document.getElementById('fullName').value;
        const refCode = document.getElementById('refCode').value;
        const email = document.getElementById('email').value;
        const carMaker = document.getElementById('carMaker').value;
        const carModel = document.getElementById('carModel').value;



        // Update the output on the page


        // Validate reference code
        // const refCodePattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        // const isValidRefCode = refCodePattern.test(refCode);

        // // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailPattern.test(email);

        if (!fullName || !refCode || !email || !isValidEmail || !carMaker || !carModel || !carConditions.length === 0) {
            alert('Please fill in all fields and make sure they are valid.');
        } else {
            const customerData = {
                fullName: fullName.trim().substring(0, 30),
                refCode: refCode,
                email: email,
                carMaker: carMaker,
                carModel: carModel,
                carConditions: carConditions,
            };

            // Navigate to the next page and pass the data
            localStorage.setItem('customerData', JSON.stringify(customerData));
            window.location.href = 'second_page.html';
            console.log(carConditions.join(', '))
        }
    });
})
