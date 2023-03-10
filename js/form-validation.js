const myForm = document.body.querySelector('.contact-form');

function validate() {
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const inputEmail = myForm.querySelector('input[type="email"]');
  const emailContent = inputEmail.value.trim();

  if (emailContent === '') {
    // errorMessage('Please, write your email');
    console.log('you should write your email');
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
    // errorMessage('Email should not contain UpperCase letters');
    console.log('no upper case!');
    return false;
  }

  return true;
}

myForm.addEventListener('submit', (event) => {
  // Prevent form submision
  event.preventDefault();

  console.log(validate());
  // if (validate()) {
  //   myForm.submit();
  // }
});