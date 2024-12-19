'use strict';

const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInputData);
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function reloadPage() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Fill please all fields!');
  }
  console.log({ email: email.value, message: message.value });

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  formData = {};
}
