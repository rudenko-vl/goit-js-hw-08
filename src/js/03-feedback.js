import { throttle } from 'throttle-debounce';
const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
const FORM_KEY = 'feedback-form-state';
const formObject = {
    email: '',
    message: '',
};
formRef.addEventListener('submit', onSubmitForm);
function onSubmitForm (ev) {
    ev.preventDefault();
    console.log(`email: ${ev.target.elements.email.value}`);
    console.log(`message: ${ev.target.elements.message.value}`);
    ev.target.reset();
    localStorage.removeItem(FORM_KEY);
};
formRef.addEventListener('input', throttle(500, onInputChange));
function onInputChange (ev) {
    formObject[ev.target.name] = ev.target.value;
    localStorage.setItem(FORM_KEY, JSON.stringify(formObject));
};
window.addEventListener('DOMContentLoaded', initForm);
function initForm() {
  const formFields = JSON.parse(localStorage.getItem(FORM_KEY));
  if (formFields) {
    formObject.email = formFields.email;
    formObject.message = formFields.message;
    emailRef.value = formFields.email;
    messageRef.value = formFields.message;
  }
};