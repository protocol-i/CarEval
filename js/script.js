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
        name: "Ford Mustang:",
        models: ["Mustang EcoBoost", "Mustang GT", "Mustang GT Premium", "Mustang Mach 1", "Mustang Shelby GT350"],
      },
      {
        name: "BMW 3 Series",
        models: ["320i", "330i", "340i", "M340i", "330e(Plug-in hybrid)"],
      },
      {
        name: "Tesla Model S",
        models: ["Model S Long Range", "Model S Plaid", "Model S Plaid+",],
      },
      {
        name: "Nissan Rogue",
        models: ["Rogue S", "Rogue SV", "Rogue SL", "Rogue Platinum",],
      },
      {
        name: "Chevrolet Corvette",
        models: ["Corvette Stingray", "Corvette Grand Sport", "Corvette ZO6", "Corvette ZR1",],
      },
      {
        name: "Audi Q5",
        models: ["Q5 Premium", "Q5 Premium Plus", "Q5 Prestige", "SQ5",],
      },
      {
        name: "Mercedes-Benz C-Class",
        models: ["C 300", "C 300 4MATIC", " AMG C 43", "AMG C 63", "AMG C 63 S"],
      },
      {
        name: "Jeep Wrangler",
        models: ["Wrangler Sport", "Wrangler Sahara", "Wrangler Rubicon", "Wrangler willys",],
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
  
  document.addEventListener('DOMContentLoaded', () => {
    populateCarMakers();
  
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
      const carConditions = [
        // Add selected car conditions based on checkboxes
      
    ];
  
      // Validate reference code
      const refCodePattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      const isValidRefCode = refCodePattern.test(refCode);
  
      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailPattern.test(email);
  
      if (!fullName || !refCode || !isValidRefCode || !email || !isValidEmail || !carMaker || !carModel || !carConditions.length === 0) {
        alert('Please fill in all fields and make sure they are valid.');
      } else {
        const customerData = {
          fullName: fullName.trim().substring(0, 30),
          refCode: refCode,
          email: email,
          carMaker: carMaker,
          carModel: carModel,
          carConditions: carConditions.join(', '),
        };
  
        // Navigate to the next page and pass the data
        localStorage.setItem('customerData', JSON.stringify(customerData));
        window.location.href = 'second_page.html';
      }
    });
  })
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
    summaryDiv.innerHTML = fullName;
    summaryDiv.innerHTML = refCode;
    summaryDiv.innerHTML = email ;
    summaryDiv.innerHTML = carMaker;
    summaryDiv.innerHTML = carModel;
  
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
    

  
