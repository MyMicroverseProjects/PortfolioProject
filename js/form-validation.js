const myForm = document.body.querySelector('.contact-form');

function errorMessage(message) {
  const displayError = document.createElement('p');
  displayError.textContent = message;
  displayError.classList.add('formError');
  myForm.parentNode.append(displayError);

  // Remove the message after 3 seconds
  setTimeout(() => {
    displayError.remove();
  }, 3000);
}

function validate() {
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const inputEmail = myForm.querySelector('input[type="email"]');
  const emailContent = inputEmail.value.trim();

  if (emailContent === '') {
    errorMessage('Please, write your email');
    return false;
  }

  let containUpperCase = false;

  for (let i = 0; i < upperCaseLetters.length; i += 1) {
    if (emailContent.includes(upperCaseLetters[i])) {
      containUpperCase = true;
      break;
    }
  }

  if (containUpperCase) {
    errorMessage('Email should not contain UpperCase letters');
    return false;
  }

  return true;
}

myForm.addEventListener('submit', (event) => {
  // Prevent form submision
  event.preventDefault();
  const name = myForm.querySelector('input[type="text"]').value.trim();
  const email = myForm.querySelector('input[type="email"]').value.trim();
  const message = myForm.querySelector('textarea[name="message"]').value.trim();

  const userFormData = {};
  userFormData.name = name;
  userFormData.email = email;
  userFormData.message = message;

  localStorage.setItem('userFormData', JSON.stringify(userFormData));

  if (validate()) {
    myForm.submit();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // When the document loads, I acces the information from the localStorage to get
  // the object with the user information
  // If there is not info then instead of getting a null I changed with an empty object
  const userFormData = JSON.parse(localStorage.getItem('userFormData')) || {};

  // Once the object is retrieved, then I use its values to insert the them in the values
  // If the object is empty then instead of undefined I force the result to be an empty
  // string by using the OR operator
  myForm.querySelector('input[type="text"]').value = userFormData?.name || '';
  myForm.querySelector('input[type="email"]').value = userFormData?.email || '';
  myForm.querySelector('textarea[name="message"]').value = userFormData?.message || '';
});
