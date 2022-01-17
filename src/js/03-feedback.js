const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

// populate the fields from storage after reload the page
populateInputs();

const formData = {};
// input data to storage
function onFormInput(evt) {
  evt.preventDefault();
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

// to send form
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('send the form');
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// populate the fields from storage
function populateInputs() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    console.log(savedMessage);
    refs.input.value = savedMessage.email;
    refs.textarea.value = savedMessage.message;
  }
}

// const form = document.querySelector(".feedback-form");

// console.log(localStorage)

// form.addEventListener("input", onFormInput)
// // formRef.addEventListener("submit", onFormSubmit)
// fillOnFormInput ()
// const formData = {};
// // input data to storage
// function onFormInput(evt) {
//     evt.preventDefault();

//       formData[evt.target.name] = evt.target.value;
//       localStorage.setItem("feedback-form-state", JSON.stringify(formData));
//       console.log(formData);
//     }

//     function fillOnFormInput () {
// const dataInStorage = localStorage.getItem("feedback-form-state");
// // if (dataInStorage.value !== "") {
//     JSON.parse(dataInStorage);

// console.log(JSON.parse(dataInStorage))
//  const    dataInStorage[email] =  formData.value
// }
// }

// const valueToStorage =  {email: evt.currentTarget, message: evt.currentTarget};

// localStorage.remove("feedback-form-state");
// console.log(evt.value);
