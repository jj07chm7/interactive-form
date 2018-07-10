// // When first loading page, focus on name input field
// const nameInput = document.getElementById('name');
// nameInput.focus();
//
// // Select other input box and hide it by default
// // when JavaScript is enabled
// const other = document.getElementById("other-title");
// other.style.display = 'none';
// // When 'Other' is selected in job role, show the input field
// const jobTitle = document.getElementById('title');
// jobTitle.addEventListener('change', (event) => {
//   if (event.target.value === 'other') {
//     other.style.display = 'block';
//   } else {
//     other.style.display = 'none';
//   }
// });
//
// // Select the t-shirt colors and create strings to represent each selection
// const tshirtColors = document.getElementById('color');
// let jsPuns = '';
// let loveJs = '';
// for (let i = 0; i < tshirtColors.length; i++) {
//   i < 3 ? jsPuns += tshirtColors[i].outerHTML : loveJs += tshirtColors[i].outerHTML;
// }
// // Hide tshirt colors
// tshirtColors.style.display = 'none';
// // Get the select element for the color options
// const designSelection = document.getElementById('design');
// // Disabled choosing "Select Theme"
// designSelection.firstChild.nextSibling.setAttribute("disabled", "true");
// // Event listener for design selection
// designSelection.addEventListener('change', (event) => {
//   tshirtColors.innerHTML = '';
//   if (event.target.value === 'js puns') {
//     // Show js puns options
//     tshirtColors.style.display = 'block';
//     tshirtColors.innerHTML = jsPuns;
//   } else  if (event.target.value === 'heart js') {
//     // Show heart js options
//     tshirtColors.style.display = 'block';
//     tshirtColors.innerHTML = loveJs;
//   }
// });
//
// // Select activities class
// const activities = document.querySelector(".activities");
// // Get names of activies that overlap
// const jsFrameworksName = 'js-frameworks';
// const expressName = 'express';
// const nodeName = 'node';
// const jsLibsName = 'js-libs';
// // Set cost of activities to 0
// let totalCost = 0;
// // Create total cost section
// const showTotal = document.createElement("h4");
// showTotal.innerHTML = "Total Cost: $";
// activities.appendChild(showTotal);
// const totalAmount = document.createElement("span");
// showTotal.appendChild(totalAmount);
// totalAmount.innerHTML = totalCost;
// // Create function to handle toggling of overlapping Activities
// function toggleDisabled(targetName, event) {
//   const target = document.getElementsByName(targetName);
//   if (event.target.checked === true) {
//     target[0].disabled = true;
//     // Add selected option to total cost
//     totalCost += parseInt(event.target.nextSibling.textContent.slice(-3));
//     totalAmount.innerHTML = totalCost;
//   } else {
//     target[0].disabled = false;
//     // Subtract unselected item from total cost
//     totalCost -= parseInt(event.target.nextSibling.textContent.slice(-3));
//     totalAmount.innerHTML = totalCost;
//   }
// }
// // Event listener for activities
// activities.addEventListener('change', (event) => {
//   let eventName = event.target.name;
//   // Get the last three digits of label and convert to integer
//   const cost = parseInt(event.target.nextSibling.textContent.slice(-3));
//   // These two overlap. Handle toggling between the two
//   if (eventName === jsFrameworksName || eventName === expressName) {
//     if (eventName === jsFrameworksName) {
//       toggleDisabled(expressName, event);
//     } else {
//       toggleDisabled(jsFrameworksName, event);
//     }
//   // These two overlap. Handle toggling between the two
//   } else if (eventName === nodeName || eventName === jsLibsName) {
//     if (eventName === jsLibsName) {
//       toggleDisabled(nodeName, event);
//     } else {
//       toggleDisabled(jsLibsName, event);
//     }
//   // For everything else, handle adding/subtracting cost of activity
//   // when checked/unchecked
//   } else {
//     if (event.target.checked) {
//       totalCost += cost;
//       totalAmount.innerHTML = totalCost;
//     } else {
//       totalCost -= cost;
//       totalAmount.innerHTML = totalCost;
//     }
//   }
// });
//
// // Select payment section
// const payment = document.getElementById('payment');
// // Set default option to credit card
// payment.value = "credit card";
// // Display but prevent user from selecting "Select Payment Method"
// payment.firstChild.nextSibling.setAttribute("disabled", "true");
// // Select credit card option
// const creditOption = document.getElementById("credit-card");
// // Select paypal and bitcoin options
// const otherPayOptions = document.querySelectorAll("p");
// const paypalOption = otherPayOptions[0];
// const bitcoinOption = otherPayOptions[1];
// // Hide paypal and bitcoin by default
// paypalOption.style.display = 'none';
// bitcoinOption.style.display = 'none';
// // Toggle between options and hide other other two other options
// // when one is selected
// payment.addEventListener("change", (event) => {
//   if (event.target.value === 'paypal') {
//     paypalOption.style.display = 'block';
//     creditOption.style.display = 'none';
//     bitcoinOption.style.display = 'none';
//   } else if (event.target.value === 'bitcoin') {
//     paypalOption.style.display = 'none';
//     creditOption.style.display = 'none';
//     bitcoinOption.style.display = 'block';
//   } else if (event.target.value === 'credit card') {
//     paypalOption.style.display = 'none';
//     creditOption.style.display = 'block';
//     bitcoinOption.style.display = 'none';
//   }
// });
// // Select the form
// const form = document.querySelector("form");
// // Override browser email validation
// form.setAttribute("novalidate", "true");
// // form.setAttribute("id", "formElement");
// // Select elements that need validation
// const email = document.getElementById("mail");
// //const jobRole = document.getElementById('title');
// //console.log(jobRole.value);
// const checkboxes = document.querySelectorAll('input[type=checkbox]');
// const ccNumber = document.getElementById("cc-num");
// const zipCode = document.getElementById("zip");
// const cvv = document.getElementById("cvv");
// // Get total number of checkboxes
// const totalCheckboxes = checkboxes.length;
//
// function errorAction(element) {
//   event.preventDefault();
//   element.style.border = "0.5px solid #FF0000";
//   errorPresent = true;
//   console.log(String(element));
// }
//
// form.addEventListener("submit", function(event) {
//   if (nameInput.value === '') {
//     errorAction(nameInput);
//   }
//   if (email.value === '') {
//     errorAction(email);
//   }
//   if (jobTitle.value === 'other') {
//      errorAction(other);
//    }
//
//   const checked = $('input:checkbox:checked').length;
//   if (!checked) {
//     console.log('err');
//   }
//
//   if (ccNumber.value === '') {
//     errorAction(ccNumber);
//   }
//   if (zipCode.value === '') {
//     errorAction(zipCode);
//   }
//   if (cvv.value === '') {
//     errorAction(cvv);
//   }
//
//   if (errorPresent) {
//     event.preventDefault();
//     button.disabled = true;
//     console.log("Can't submit because of errors!");
//   }
// });
//
// form.addEventListener("change", function() {
//   if (errorPresent !== false) {
//     console.log(errorPresent);
//     console.log("no errors!");
//     button.disabled = false;
//   }
// });
//
// // email.addEventListener("focus", function(event) {
// //   if (email.value === '') {
// //     email.style.border = "0.5px solid #FF0000";
// //   }
// // })
//
// // Function to check for numbers in name value
// function nameCheck(name) {
//   let numPresent = false;
//   for (let i = 0; i < name.length; i++) {
//     if (!isNaN(name[i])) {
//       numPresent = true;
//       return numPresent;
//     }
//   }
// }
//
// // Function to check for non-numbers in zip code or cvv
// function numCheck(num) {
//   let charPresent = false;
//   for (let i = 0; i < num.length; i++) {
//     if (isNaN(num[i])) {
//       charPresent = true;
//       return charPresent;
//     }
//   }
// }
//
// // Name validation using regex
// // Used the following post on stackoverflow to get regex:
// // https://stackoverflow.com/a/14088769
// // https://stackoverflow.com/a/42021703
// function validateName(name) {
//   const regex = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
//   if (regex.test(name)) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
//
// //object.addEventListener("keyup", myScript);
//
// let errorPresent = true;
//
// nameInput.addEventListener("change", function(event) {
//   if (!validateName(nameInput.value)) {
//     errorPresent =  true;
//     nameInput.style.border = "0.5px solid #FF0000";
//   } else {
//     errorPresent =  false;
//     nameInput.style.border = '';
//   }
// });
//
// email.addEventListener("change", (event) => {
//   //Need an email. Checking for '@' symbol and .com at the end
//   if (email.value.substring(email.value.length - 4) !== ".com" || email.value.indexOf('@') === -1) {
//     errorPresent = true;
//     email.style.border = "0.5px solid #FF0000";
//   } else {
//     console.log("changed");
//     errorPresent =  false;
//     email.style.border = '';
//   }
// })
//
// const button = document.querySelector("button");
// // button.addEventListener("click", function(event) {
// //    if (errorPresent) {
// //     console.log('errorPresent');
// //     button.setAttribute("disabled", true);
// //   } else {
// //     console.log('no error');
// //     button.setAttribute("disabled", false);
// //   }
// // });
//
//
//
//
//
// // let errorPresent = false;
// // // Event listener for form
// // form.addEventListener("submit", (event) => {
// //   // Must have a name and name can't contain non-letters
// //   if (nameInput.value === '' || !validateName(nameInput.value)) {
// //     event.preventDefault();
// //     nameInput.style.border = "0.5px solid #FF0000";
// //     errorPresent = true;
// //     //disableElement("button");
// //   }
// //   // Need an email. Checking for '@' symbol and .com at the end
// //   if (email.value === '' || email.value.substring(email.value.length - 4) !== ".com" || email.value.indexOf('@') === -1) {
// //     event.preventDefault();
// //     email.style.border = "0.5px solid #FF0000";
// //     errorPresent = true;
// //     //disableElement("button");
// //   }
// //   // Checkbox validation
// //   let checked = 0;
// //   // Get count of checked boxes
// //   for (let i = 0; i < checkboxes.length; i++) {
// //     if (checkboxes[i].checked === true) {
// //       checked += 1;
// //     }
// //   }
// //   // If no boxes checked, show error
// //   if (checked === 0) {
// //     // Insert h4 element with error message
// //     const errorMessage = document.createElement("h4");
// //     event.preventDefault();
// //     errorMessage.style.color = 'red';
// //     errorMessage.innerHTML = "You must select one activity.";
// //     showTotal.appendChild(errorMessage);
// //     errorPresent = true;
// //   }
// //   // Credit card validation
// //   if (payment.value === 'credit card') {
// //     // Credit card needs a value and must be at least 13 numbers and less than 16
// //     if (ccNumber.value === '' || ccNumber.value.length < 13 || ccNumber.value.length > 16) {
// //       event.preventDefault();
// //       ccNumber.style.border = "0.5px solid #FF0000";
// //       errorPresent = true;
// //     }
// //     // Zip code needs a a value and must be 5 numbers
// //     if (zipCode.value === '' || zipCode.value.length !== 5 || numCheck(zipCode.value)) {
// //       event.preventDefault();
// //       zipCode.style.border = "0.5px solid #FF0000";
// //       errorPresent = true;
// //     }
// //     // CVV needs a value and be 3 numbers
// //     if (cvv.value === '' || cvv.value.length !== 3 || numCheck(cvv.value)) {
// //       event.preventDefault();
// //       cvv.style.border = "0.5px solid #FF0000";
// //       errorPresent = true;
// //     }
// //   }
// // });
// // // Prevent user from being able to click button to submit form with errors
//
// // function errorAction(element) {
// //   event.preventDefault();
// //   element.style.border = "0.5px solid #FF0000";
// //   errorPresent = true;
// //   console.log(String(element));
// // }
// //
// // form.addEventListener("submit", function(event) {
// //   if (nameInput.value === '') {
// //     errorAction(nameInput);
// //   }
// //   if (email.value === '') {
// //     errorAction(email);
// //   }
// //   if (jobTitle.value === 'other') {
// //      errorAction(other);
// //    }
// //
// //   const checked = $('input:checkbox:checked').length;
// //   if (!checked) {
// //     console.log('err');
// //   }
// //
// //   if (ccNumber.value === '') {
// //     errorAction(ccNumber);
// //   }
// //   if (zipCode.value === '') {
// //     errorAction(zipCode);
// //   }
// //   if (cvv.value === '') {
// //     errorAction(cvv);
// //   }
// //
// //   if (errorPresent) {
// //     event.preventDefault();
// //     button.disabled = true;
// //     console.log("Can't submit because of errors!");
// //   }
// // });
// //
// // form.addEventListener("change", function() {
// //   if (errorPresent !== false) {
// //     console.log(errorPresent);
// //     console.log("no errors!");
// //     button.disabled = false;
// //   }
// // });
// //
// // // email.addEventListener("focus", function(event) {
// // //   if (email.value === '') {
// // //     email.style.border = "0.5px solid #FF0000";
// // //   }
// // // })
// //
// // // Function to check for numbers in name value
// // function nameCheck(name) {
// //   let numPresent = false;
// //   for (let i = 0; i < name.length; i++) {
// //     if (!isNaN(name[i])) {
// //       numPresent = true;
// //       return numPresent;
// //     }
// //   }
// // }
// //
// // // Function to check for non-numbers in zip code or cvv
// // function numCheck(num) {
// //   let charPresent = false;
// //   for (let i = 0; i < num.length; i++) {
// //     if (isNaN(num[i])) {
// //       charPresent = true;
// //       return charPresent;
// //     }
// //   }
// // }
// //
// // // Name validation using regex
// // // Used the following post on stackoverflow to get regex:
// // // https://stackoverflow.com/a/14088769
// // // https://stackoverflow.com/a/42021703
// // function validateName(name) {
// //   const regex = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
// //   if (regex.test(name)) {
// //     return true;
// //   }
// //   else {
// //     return false;
// //   }
// // }
// //
// // //object.addEventListener("keyup", myScript);
// //
// // let errorPresent = true;
// //
// // nameInput.addEventListener("change", function(event) {
// //   if (!validateName(nameInput.value)) {
// //     errorPresent =  true;
// //     nameInput.style.border = "0.5px solid #FF0000";
// //   } else {
// //     errorPresent =  false;
// //     nameInput.style.border = '';
// //   }
// // });
// //
// // email.addEventListener("change", (event) => {
// //   //Need an email. Checking for '@' symbol and .com at the end
// //   if (email.value.substring(email.value.length - 4) !== ".com" || email.value.indexOf('@') === -1) {
// //     errorPresent = true;
// //     email.style.border = "0.5px solid #FF0000";
// //   } else {
// //     console.log("changed");
// //     errorPresent =  false;
// //     email.style.border = '';
// //   }
// // })
// //
// // const button = document.querySelector("button");
// // // button.addEventListener("click", function(event) {
// // //    if (errorPresent) {
// // //     console.log('errorPresent');
// // //     button.setAttribute("disabled", true);
// // //   } else {
// // //     console.log('no error');
// // //     button.setAttribute("disabled", false);
// // //   }
// // // });
// //
// //
// //
// //
// //
// // // let errorPresent = false;
// // // // Event listener for form
// // // form.addEventListener("submit", (event) => {
// // //   // Must have a name and name can't contain non-letters
// // //   if (nameInput.value === '' || !validateName(nameInput.value)) {
// // //     event.preventDefault();
// // //     nameInput.style.border = "0.5px solid #FF0000";
// // //     errorPresent = true;
// // //     //disableElement("button");
// // //   }
// // //   // Need an email. Checking for '@' symbol and .com at the end
// // //   if (email.value === '' || email.value.substring(email.value.length - 4) !== ".com" || email.value.indexOf('@') === -1) {
// // //     event.preventDefault();
// // //     email.style.border = "0.5px solid #FF0000";
// // //     errorPresent = true;
// // //     //disableElement("button");
// // //   }
// // //   // Checkbox validation
// // //   let checked = 0;
// // //   // Get count of checked boxes
// // //   for (let i = 0; i < checkboxes.length; i++) {
// // //     if (checkboxes[i].checked === true) {
// // //       checked += 1;
// // //     }
// // //   }
// // //   // If no boxes checked, show error
// // //   if (checked === 0) {
// // //     // Insert h4 element with error message
// // //     const errorMessage = document.createElement("h4");
// // //     event.preventDefault();
// // //     errorMessage.style.color = 'red';
// // //     errorMessage.innerHTML = "You must select one activity.";
// // //     showTotal.appendChild(errorMessage);
// // //     errorPresent = true;
// // //   }
// // //   // Credit card validation
// // //   if (payment.value === 'credit card') {
// // //     // Credit card needs a value and must be at least 13 numbers and less than 16
// // //     if (ccNumber.value === '' || ccNumber.value.length < 13 || ccNumber.value.length > 16) {
// // //       event.preventDefault();
// // //       ccNumber.style.border = "0.5px solid #FF0000";
// // //       errorPresent = true;
// // //     }
// // //     // Zip code needs a a value and must be 5 numbers
// // //     if (zipCode.value === '' || zipCode.value.length !== 5 || numCheck(zipCode.value)) {
// // //       event.preventDefault();
// // //       zipCode.style.border = "0.5px solid #FF0000";
// // //       errorPresent = true;
// // //     }
// // //     // CVV needs a value and be 3 numbers
// // //     if (cvv.value === '' || cvv.value.length !== 3 || numCheck(cvv.value)) {
// // //       event.preventDefault();
// // //       cvv.style.border = "0.5px solid #FF0000";
// // //       errorPresent = true;
// // //     }
// // //   }
// // // });
// // // // Prevent user from being able to click button to submit form with errors

// $('form').submit(function(e) {
//   var $name = $(nameInput).val();
//   if ($name == '') {
//     e.preventDefault();
//     console.log("STOP");
//     $("#errors").css("display", "block");
//     $("#errors").text("Enter a name!");
//   }
// })
