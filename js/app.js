// When first loading page, focus on name input field
const nameInput = document.getElementById('name');
nameInput.focus();

// When 'Other' is selecte in job role, create new input field
const jobTitle = document.getElementById('title');
jobTitle.addEventListener('change', (event) => {
  if (event.target.value === 'other') {
    const otherInput = document.createElement("INPUT");
    otherInput.setAttribute("type", "text");
    otherInput.setAttribute("id", "other-title");
    otherInput.setAttribute("placeholder", "Your Job Role");
    const fieldset = document.querySelector("fieldset");
    console.log(fieldset);
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
    totalCost += parseInt(event.target.nextSibling.textContent.slice(-3));
    totalAmount.innerHTML = totalCost;
  } else {
    target[0].disabled = false;
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

// If any of the following validation errors exist, prevent the user from submitting the form:
// Name field can't be blank.
// Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
// User must select at least one checkbox under the "Register for Activities" section of the form.
// If the selected payment option is "Credit Card," make sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted.
// Credit Card field should only accept a number between 13 and 16 digits.
// The Zip Code field should accept a 5-digit number.
// The CVV should only accept a number that is exactly 3 digits long.
// NOTE: Make sure your validation is only validating Credit Card info if Credit Card is the selected payment method.

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  if (nameInput.value === '') {
    //e.preventDefault();
    nameInput.style.border = "thick solid #0000FF";
    event.preventDefault();
  }
})
