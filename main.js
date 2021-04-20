const emailInput = document.getElementById('email');
const submitBtn = document.querySelector('button');
const emailError = document.getElementById('error');
const subscribe = document.querySelector('.subscribe-inner');
const errorMsg = document.querySelector('span.error-msg');



submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!regEx.test(emailInput.value)) {
    emailError.style.display = 'block';
    errorMsg.style.display = 'block';
    subscribe.classList.add('error-check');
  } else {
    emailInput.value = '';
    subscribe.classList.add('success');
    subscribe.innerHTML = '<p>Your email has been submitted and will be notified once shop is open.</p>'
    // alert('Email has been submitted!');
  }
})

emailInput.addEventListener('keydown', (e) => {
  subscribe.classList.remove('error-check');
  emailError.style.display = 'none';
  errorMsg.style.display = 'none';
})