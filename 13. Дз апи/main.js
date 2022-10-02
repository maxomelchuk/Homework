let url = "https://dev-new-app.brainwell.com/api/v1/profile/highest-ranked";
async function showCards() {
  responce = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: "62e90e25d39280ac7fabb505",
    }),
  });
  let responceJson = await responce.json();
  let data = responceJson.data;
  console.log(responceJson);
  let userCard = document.getElementById("userCard");
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    let avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = "./img/avatar.png";
    card.append(avatar);
    let key = document.createElement("div");
    key.innerText = "key: " + data[i].key;
    card.append(key);
    let name = document.createElement("div");
    name.innerText = "name: " + " " + data[i].name;
    card.append(name);
    let domain = document.createElement("div");
    domain.innerText = "domain: " + data[i].domain;
    card.append(domain);
    let highScore = document.createElement("div");
    highScore.innerText = "highScore: " + data[i].highScore;
    card.append(highScore);
    let level = document.createElement("div");
    level.innerText = "level: " + data[i].level;
    card.append(level);
    userCard.append(card);
  }
}
showCards();

let urlTaskTwo = "https://dev-new-app.brainwell.com/api/v1/games";
async function showData() {
  response = await fetch(urlTaskTwo, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: "62e90e25d39280ac7fabb505",
    }),
  });
  let result = await response.json();
  let res = JSON.stringify(result);
  localStorage.data = res;
}
showData();

let data = JSON.parse(localStorage.data);
console.log(data);
class User {
  constructor(title_internal, best_score, max_worldwide_score) {
    this.title_internal = title_internal;
    this.best_score = best_score;
    this.max_worldwide_score = max_worldwide_score;
  }
  static compare_best_score(userA, userB) {
    return userB.best_score - userA.best_score;
  }
  static compare_max(userA, userB) {
    return userB.max_worldwide_score - userA.max_worldwide_score;
  }
}

function showSort() {
  let usersData = data.data;
  console.log(usersData);
  let sortCard = [];
  for (let i = 0; i < usersData.length; i++) {
    let user = new User(
      usersData[i].title_internal,
      usersData[i].best_score,
      usersData[i].max_worldwide_score
    );
    sortCard.push(user);
  }

  return sortCard;
}
let sortCard = showSort();
console.log(sortCard);

let buttonBest = document.getElementById("show_best_score");
let buttonMax = document.getElementById("show_max_worldwide_score");

let list = document.getElementById("sortGamers");

function createList() {
  for (let i = 0; i < sortCard.length; i++) {
    let div = document.createElement("div");
    let name = document.createElement("span");
    name.innerText = sortCard[i].title_internal;
    div.append(name);
    let best = document.createElement("span");
    best.innerText = sortCard[i].best_score;
    div.append(best);
    let max = document.createElement("span");
    max.innerText = sortCard[i].max_worldwide_score;
    div.append(max);
    list.append(div);
  }
}

buttonBest.addEventListener("click", function () {
  sortCard.sort(User.compare_best_score);
  console.log(sortCard);
  list.innerHTML = "";
  createList();
});

buttonMax.addEventListener("click", function () {
  sortCard.sort(User.compare_max);
  console.log(sortCard);
  list.innerHTML = "";
  createList();
});
