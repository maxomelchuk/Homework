let number = document.getElementById("number");
let form = document.getElementById("form");
let numberError = document.querySelector("#numberError");
let hasErrors = false;
form.addEventListener("submit", function (event) {
  if (hasErrors === false) {
    event.preventDefault();
    alert("Ошибка");
  } else {
    alert("Успех");
  }
});

number.onblur = function (event) {
  if (number.value > 0 && number.value < 100) {
    hasErrors = true;
    numberError.textContent = "";
  } else {
    numberError.className = "error";
    numberError.textContent = "Введите номер от 1 до 100";
    hasErrors = false;
  }
};
number.onfocus = function (event) {
  numberError.classList.remove("error");
  numberError.className = "visibility";
};

let size = document.getElementById("size");
let sizeError = document.querySelector("#sizeError");

size.onblur = function (event) {
  if (size.value > 4 && size.value < 501) {
    sizeError.textContent = "";
    hasErrors = true;
  } else {
    sizeError.textContent = "Введите число от 5 до 500";
    sizeError.className = "error";
    hasErrors = false;
  }
};
size.onfocus = function (event) {
  sizeError.classList.remove("error");
  sizeError.className = "visibility";
};

// let result = "";
// let newNumber = "12345678";
// let numbers = [];
// newNumber = newNumber.split("").reverse().join("");
// for (let i = 0; i < newNumber.length; i++) {
//   let value = newNumber[i];
//   result = result + value;
//   numbers.push(value);
//   if (numbers.length === 3) {
//     console.log(numbers);
//     result = result + " ";
//     numbers = [];
//   }
// }
// console.log(result.split("").reverse().join("").trim());

let result = "";
let newNumber = document.getElementById("cost");
let numbers = [];
newNumber.onblur = function costFormat(event) {
  let newNumberValue = newNumber.value
    .split("")
    .reverse()
    .join("")
    .replace(".", "");
  for (let i = 0; i < newNumberValue.length; i++) {
    let value = newNumberValue[i];
    // console.log(newNumberValue[i]);
    result = result + value;
    numbers.push(value);
    if (numbers.length === 3) {
      // console.log(numbers);
      result = result + " ";
      numbers = [];
      // console.log(newNumberValue[i]);
    }
  }
  console.log(result.split("").reverse().join("").trim());
  newNumber.value = result.split("").reverse().join("");
  numbers = [];
};

newNumber.onfocus = function () {
  result = "";
  newNumber.value = newNumber.value.split(" ").join("");
  let e = Number(newNumber.value);
  console.log(e);
};
let callback = document.getElementById("callback");
let checkbox = document.getElementById("checkbox");
checkbox.addEventListener("input", function () {
  if (checkbox.checked) {
    callback.classList.remove("see");
  } else {
    callback.classList.add("see");
  }
});
