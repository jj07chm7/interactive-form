// When first loading page, focus on name input field
const nameInput = document.getElementById('name');
nameInput.focus();

// When 'Other' is selected in job role, create new input field
const jobTitle = document.getElementById('title');
jobTitle.addEventListener('change', (event) => {
  if (event.target.value === 'other') {
    const otherInput = document.createElement("INPUT");
    otherInput.setAttribute("type", "text");
    otherInput.setAttribute("id", "other-title");
    otherInput.setAttribute("placeholder", "Your Job Role");
    const fieldset = document.querySelector("fieldset");
    fieldset.appendChild(otherInput);
  }
});

// Select the t-shirt colors and create strings to represent each selection
const tshirtColors = document.getElementById('color');
let jsPuns = '';
let loveJs = '';
for (let i = 0; i < tshirtColors.length; i++) {
  i < 3 ? jsPuns += tshirtColors[i].outerHTML : loveJs += tshirtColors[i].outerHTML;
}
// Get the select element for the color options
const designSelection = document.getElementById('design');
// Disabled choosing "Select Theme"
designSelection.firstChild.nextSibling.setAttribute("disabled", "true");
// Event listener for design selection
designSelection.addEventListener('change', (event) => {
  tshirtColors.innerHTML = '';
  if (event.target.value === 'js puns') {
    tshirtColors.innerHTML = jsPuns;
  } else  if (event.target.value === 'heart js') {
    tshirtColors.innerHTML = loveJs;
  }
});

// Select activities class
const activities = document.querySelector(".activities");
// Get names of activies that overlap
const jsFrameworksName = 'js-frameworks';
const expressName = 'express';
const nodeName = 'node';
const jsLibsName = 'js-libs';
// Set cost of activities to 0
let totalCost = 0;
// Create total cost section
const showTotal = document.createElement("h4");
showTotal.innerHTML = "Total Cost: $";
activities.appendChild(showTotal);
const totalAmount = document.createElement("span");
showTotal.appendChild(totalAmount);
totalAmount.innerHTML = totalCost;
// Create function to handle toggling of overlapping Activities
function toggleDisabled(targetName, event) {
  const target = document.getElementsByName(targetName);
  if (event.target.checked === true) {
    target[0].disabled = true;
    // Add selected option to total cost
    totalCost += parseInt(event.target.nextSibling.textContent.slice(-3));
    totalAmount.innerHTML = totalCost;
  } else {
    target[0].disabled = false;
    // Subtract unselected item from total cost
    totalCost -= parseInt(event.target.nextSibling.textContent.slice(-3));
    totalAmount.innerHTML = totalCost;
  }
}
// Event listener for activities
activities.addEventListener('change', (event) => {
  let eventName = event.target.name;
  // Get the last three digits of label and convert to integer
  const cost = parseInt(event.target.nextSibling.textContent.slice(-3));
  // These two overlap. Handle toggling between the two
  if (eventName === jsFrameworksName || eventName === expressName) {
    if (eventName === jsFrameworksName) {
      toggleDisabled(expressName, event);
    } else {
      toggleDisabled(jsFrameworksName, event);
    }
  // These two overlap. Handle toggling between the two
  } else if (eventName === nodeName || eventName === jsLibsName) {
    if (eventName === jsLibsName) {
      toggleDisabled(nodeName, event);
    } else {
      toggleDisabled(jsLibsName, event);
    }
  // For everything else, handle adding/subtracting cost of activity
  // when checked/unchecked
  } else {
    if (event.target.checked) {
      totalCost += cost;
      totalAmount.innerHTML = totalCost;
    } else {
      totalCost -= cost;
      totalAmount.innerHTML = totalCost;
    }
  }
});

// Select payment section
const payment = document.getElementById('payment');
// Set default option to credit card
payment.value = "credit card";
// Display but prevent user from selecting "Select Payment Method"
payment.firstChild.nextSibling.setAttribute("disabled", "true");
// Select credit card option
const creditOption = document.getElementById("credit-card");
// Select paypal and bitcoin options
const otherPayOptions = document.querySelectorAll("p");
const paypalOption = otherPayOptions[0];
const bitcoinOption = otherPayOptions[1];
// Hide paypal and bitcoin by default
paypalOption.style.display = 'none';
bitcoinOption.style.display = 'none';
// Toggle between options and hide other other two other options
// when one is selected
payment.addEventListener("change", (event) => {
  if (event.target.value === 'paypal') {
    paypalOption.style.display = 'block';
    creditOption.style.display = 'none';
    bitcoinOption.style.display = 'none';
  } else if (event.target.value === 'bitcoin') {
    paypalOption.style.display = 'none';
    creditOption.style.display = 'none';
    bitcoinOption.style.display = 'block';
  } else if (event.target.value === 'credit card') {
    paypalOption.style.display = 'none';
    creditOption.style.display = 'block';
    bitcoinOption.style.display = 'none';
  }
});
// Select the form
const form = document.querySelector("form");
// Override browser email validation
form.setAttribute("novalidate", "true");
// Select elements that need validation
const email = document.getElementById("mail");
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const ccNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
// Get total number of checkboxes
const totalCheckboxes = checkboxes.length;
// Event listener for form
form.addEventListener("submit", (event) => {
  // Must have a name
  if (nameInput.value === '') {
    nameInput.style.border = "0.5px solid #FF0000";
    event.preventDefault();
  }
  // Need an email. Checking for '@' symbol
  if (email.value.indexOf('@') == -1) {
    email.style.border = "0.5px solid #FF0000";
    event.preventDefault();
  }
  // Checkbox validation
  let checked = 0;
  // Get count of checked boxes
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      checked += 1;
    }
  }
  // If no boxes checked, show error
  if (checked === 0) {
    // Insert h4 element with error message
    const errorMessage = document.createElement("h4");
    errorMessage.style.color = 'red';
    errorMessage.innerHTML = "You must select one activity.";
    showTotal.appendChild(errorMessage);
    event.preventDefault();
  }
  // Credit card validation
  if (payment.value === 'credit card') {
    // Credit card needs a value and must be at least 13 numbers and less than 16
    if (!ccNumber.value || ccNumber.value.length < 13 || ccNumber.value.length > 16) {
      ccNumber.style.border = "0.5px solid #FF0000";
      event.preventDefault();
    }
    // Zip code needs a a value and must be 5 characters
    if (!zipCode.value || zipCode.value.length !== 5) {
      zipCode.style.border = "0.5px solid #FF0000";
      event.preventDefault();
    }
    // CVV needs a value and be 3 characters
    if (!cvv.value || cvv.value.length !== 3) {
      cvv.style.border = "0.5px solid #FF0000";
      event.preventDefault();
    }
  }
});
