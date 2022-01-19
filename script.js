// Grab elements from DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// FUNCTIONS:

// Show Error:
const showError = (input, message) => {
  const formControl = input.parentElement; // grabs input's parent, which is form-control div
  formControl.className = 'form-control error'; // 'error' class is added to already existing 'from-control' class
  const small = formControl.querySelector('small'); // 'small' tag inside form-control div is selected
  small.innerText = message; // specified msg is used as the text
};

// Show Success:
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

// Is Vaild Email:
const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); // if the test is passed returns 'true', else 'false'
};

// Check Required:
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
};

// Get Field Name:
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  // First letter of each input's id is changed to upper case and from second letter all letters are concatenated to it.
};

// EVENT LISTENERS:
// Submit event listener on form:
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});
