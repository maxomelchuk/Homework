"use strict";
// function runSubmit(event) {
//   console.log(formItem.elements);
//   let localDate = JSON.stringify(formItem.elements);
//   localStorage.setItem("submit", localDate);
// }

// function loadData() {
//   console.log(JSON.parse(localStorage.getItem("submit")));
// }

// let formItem = document.getElementById("main_form");
// formItem.addEventListener("submit", runSubmit);

// loadData();

let mainform = document.getElementById("main_form");
console.log(mainform.nick.value);

function changeForm(event) {
  event.preventDefault();
  let valueForm = event.target.nick.value;
  console.log(valueForm);
  console.log(mainform.elements);
  localStorage.setItem("submit", valueForm);
  saveCheckbox();
}

mainform.addEventListener("submit", changeForm);

mainform.nick.value = localStorage.getItem("submit");

function saveCheckbox() {
  let checkbox = document.getElementsByName("gender");
  console.log(checkbox);
  for (let key of checkbox) {
    if (checkbox[key].attributes.checked) {
      localStorage.setItem("gender", true);
    }
  }
}

function loadCheckbox() {
  let checked = JSON.parse(localStorage.getItem("gender"));
  if (checked == true) {
    document.getElementsByName("gender").checked = true;
  }
}
