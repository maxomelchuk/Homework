let url = "https://dev-new-app.brainwell.com/api/v1/version/";
let input = document.getElementById("input");
let showInfo = document.getElementById("info");
let env = document.getElementById("env");
let old = document.getElementById("old");
let newV = document.getElementById("new");
let btn = document.getElementById("btn");

async function getVersion() {
  let ver = input.value;
  let response = await fetch(url + ver);
  let readResp = await response.json();
  console.log(readResp);
  env.innerText = "Env: " + readResp.env;
  old.innerText = "Old Server: " + readResp.old_server;
  newV.innerText = "New Server: " + readResp.new_server;
}

btn.addEventListener("click", getVersion);

// class User {
//   constructor(firstName, lastName, birth) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birth = birth;
//   }
//   getName() {
//     console.log(this.firstName + " " + this.lastName);
//   }
//   getAge() {
//     let strYear = Date.parse(this.birth);
//     let now = new Date();
//     now = Date.parse(now);
//     let age = now - strYear;
//     let ageF = Math.floor(age * 1000e-21 * 60 * 60 * 24 * 365.25);
//     console.log(ageF);
//   }
//   setFirstName(newName) {
//     this.firstName = newName;
//     console.log(this.firstName);
//   }
// }
// let Max = new User("Max", "Omelchuk", "1994");
// Max.getName();
// Max.getAge();
// Max.setFirstName("Vasya");

class Person {
  eyes = null;
  walk() {
    alert("Walk");
  }
}
class Max extends Person {}
class Artiom extends Person {
  run() {
    alert("run");
  }
}
let max = new Max();
let artiom = new Artiom();
max.run();
