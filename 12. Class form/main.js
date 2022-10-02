class Create {
  constructor() {}
  form() {
    let form = document.createElement("form");
    form.id = "form";
    document.body.append(form);
    return this;
  }
  createInputName() {
    createEl("text", "Введите Имя");
  }
  createInputEmail() {
    createEl("email", "Укажите почту");
  }
  createInputPhone() {
    createEl("tel", "Введите телефон");
  }
  createInputIsAdult() {
    createEl("checkbox", "Пс... парень, есть 18?");
  }
  createInputSelect(...arg) {
    createElemSelect(...arg);
  }
  title(text) {
    let title = document.createElement("div");
    title.innerText = `${text}`;
    title.id = "title";
    document.body.prepend(title);
  }
  button(text) {
    let button = document.createElement("button");
    button.innerText = `${text}`;
    document.body.append(button);
  }
  validation() {}
}

function createEl(type, text) {
  let div = document.createElement("div");
  div.innerHTML = `<span> ${text} </span>`;
  let input = document.createElement("input");
  input.type = type;
  switch (input.type) {
    case "checkbox":
      input.id = "checkbox";
      break;
    case "text":
      input.placeholder = "Enter your name...";
      input.id = "name";
      break;
    case "email":
      input.placeholder = "Enter your @mail...";
      input.id = "email";
      break;
    case "tel":
      input.placeholder = "Enter your phone number...";
      input.id = "tel";
      break;
  }
  console.log(input.placeholder);
  div.append(input);
  let form = document.getElementById("form");
  form.append(div);
}

function createElemSelect() {
  let div = document.createElement("div");
  let input = document.createElement("select");
  for (let i = 0; i < arguments.length; i++) {
    let option = document.createElement("option");
    option.innerText = arguments[i];
    input.append(option);
  }
  div.append(input);
  let form = document.getElementById("form");
  form.append(div);
}

function isValid(event) {
  const email_regexp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const name_regexp = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  let option = "";
  console.log(event);
  switch (this) {
    case email:
      option = email_regexp;
      break;
    case name:
      option = name_regexp;
      break;
  }
  if (this.value.match(option) || this.value == "") {
    // this.classList.add("isValid");
    console.log("yeah");
    this.classList.remove("isNotValid");
  } else {
    console.log("no");
    this.classList.add("isNotValid");
  }
}

let creater = new Create();
creater.title("Just See It!");
creater.form().createInputName();
creater.createInputEmail();
creater.createInputPhone();
creater.createInputIsAdult();
creater.createInputSelect(
  "Месяц Free-Trial",
  "Полугодовая подписка XL",
  "Годовая подписка XXL",
  "Перманентний доступ VIP"
);
creater.button("I'm in");

let email = document.getElementById("email");
let name = document.getElementById("name");
email.addEventListener("blur", isValid);
name.addEventListener("blur", isValid);
