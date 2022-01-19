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

// EVENT LISTENERS:
// Submit event listener on form:
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // If no username is entered, corresponding error msg to be displayed, & border in red. Else, border to be shown in green:
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  // For email:
  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  // For password:
  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  // For password confirmation:
  if (password2.value === '') {
    showError(password2, 'Password is required');
  } else {
    showSuccess(password2);
  }
});
