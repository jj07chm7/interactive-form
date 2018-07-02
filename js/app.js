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
const showTotal = document.createElement("p");
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
