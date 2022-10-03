let url = " http://localhost/api/dates/save";

function sendDates() {
  let date = new Date();
  let input = document.getElementById("calendar");
  let day = date.getDay() + 2;
  if (day < 10) day = "0" + day;
  let month = date.getMonth() + 1;
  if (month < 10) month = "0" + month;
  let year = date.getFullYear();
  let dateNow = `${year}-${month}-${day}`;
  input.value = dateNow;
  input.max = dateNow;
  let minMonth = date.getMonth();
  if (minMonth < 10) minMonth = "0" + minMonth;
  console.log(day);
  input.min = `${year}-${minMonth}-${day}`;
  console.log(minMonth);
  let maxMonth = date.getMonth() + 1;
  if (maxMonth < 10) maxMonth = "0" + maxMonth;
  input.max = `${year}-${maxMonth}-${day}`;
  console.log(input.max);
}
sendDates();

let input = document.getElementById("calendar");
let options = [];
let box = document.getElementById("box");

input.addEventListener("input", function () {
  let option = input.value;
  options.push(option);
  let newDate = document.createElement("span");
  newDate.classList.add("new_date");
  newDate.innerText = option;
  box.append(newDate);
  console.log(options);
});
let clean = document.getElementById("clean");
clean.addEventListener("click", function () {
  options = [];
});

let sendButton = document.getElementById("sub");
sendButton.addEventListener("click", function () {
  event.preventDefault();
  console.log(options);
  fetch(url, {
    method: "POST",
    body: JSON.stringify(options),
    headers: {
      "Content-Type": "application/json",
    },
  });
});
