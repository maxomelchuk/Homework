let url = "https://dev-new-app.brainwell.com/api/v1/profile";
let url_update = "https://dev-new-app.brainwell.com/api/v1/profile/update";

let nameForm = document.getElementById("name");
let age = document.getElementById("age");
let birthDate = document.getElementById("birth_date");
let email = document.getElementById("email");
let form = document.getElementById("form");
let button = document.getElementById("button");
let options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
async function user() {
  response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: "632c2888d39280a36b23f5b5" }),
  });
  res = await response.json();
  console.log(res);
  nameForm.value = res.data.name;
  age.value = res.data.age;
  let date = new Date(res.data.birth_date).toLocaleString("ru", options);

  // birthDate.value = date;
  console.log(date);
  email.value = res.data.email;
}
user();
async function user_update(e) {
  fetch(url_update, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Maaaa",
      // name: nameForm.value,
      // age: age.value,
      birth_date: birthDate.value,
      // email: email.value,
      user_id: "632c2888d39280a36b23f5b5",
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
}
button.addEventListener("click", user_update);
throw new Error("Данные неполны: нет имени"); // (*)
