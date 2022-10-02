let url =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

async function user(i) {
  let response = await fetch(url);

  let commits = await response.json();

  console.log(commits);

  let avatar = document.getElementById("avatar");
  avatar.src = commits[i].author.avatar_url;

  let name = document.getElementById("name");
  name.innerText = commits[i].commit.author.name;

  let date = document.getElementById("date");
  let dateFormat = new Date(commits[i].commit.author.date);
  dateFormat = dateFormat.toLocaleString("ru");
  date.innerText = dateFormat;

  let email = document.getElementById("email");
  email.innerText = commits[i].commit.author.email;

  console.log(commits[i].author.followers_url);

  let getFollowers = await fetch(commits[i].author.followers_url);
  let followersList = await getFollowers.json();
  console.log(followersList[i].avatar_url);
  console.log(followersList);
  followersListHtml = document.getElementsByClassName("followerImg");
  followersListNames = document.getElementsByClassName("followerNames");

  let getFollowing = await fetch(commits[i].author.subscriptions_url);
  let followingList = await getFollowing.json();
  console.log(followersList);
  followingListHtml = document.getElementsByClassName("followingImg");
  followingListNames = document.getElementsByClassName("followingNames");

  console.log(followersListHtml);
  for (let i = 0; i < followersListHtml.length; i++) {
    followersListHtml[i].src = followersList[i].avatar_url;
    followersListNames[i].append(followersList[i].login);
    followingListHtml[i].src = followersList[i + 6].avatar_url;
    followingListNames[i].append(followersList[i + 6].login);
  }

  let getOrgs = await fetch(commits[i].author.organizations_url);
  let orgsList = await getOrgs.json();
  console.log(orgsList);
  let org_inner = document.getElementById("org_inner");
  org_inner.className = "org_inner";
  for (let i = 0; i < orgsList.length; i++) {
    let divMain = document.createElement("div");
    divMain.className = "divMain";
    let divImg = document.createElement("div");
    let img = document.createElement("img");
    img.src = "./img/puzzle-pngrepo-com.png";
    img.className = "org_img";
    divImg.append(img);
    divImg.className = "divImg";
    let divName = document.createElement("div");
    divName.innerText = orgsList[i].login;
    divMain.append(divImg, divName);
    org_inner.append(divMain);
  }

  let getSub = await fetch(commits[i].author.subscriptions_url);
  let subList = await getSub.json();
  console.log(subList);
  let sub_inner = document.getElementById("sub_inner");
  sub_inner.className = "sub_inner";
  for (let i = 0; i < subList.length; i++) {
    let a = document.createElement("a");
    a.className = "a_sub";
    a.href = subList[i].homepage;
    a.innerText = subList[i].name;
    sub_inner.append(a);
  }
}
// user(9);
async function loginPass(event) {
  event.preventDefault();
  let login = document.getElementById("login");
  let response = await fetch(url);
  let commits = await response.json();
  console.log(commits);
  // let pass = document.getElementById("password");
  for (let i = 0; i < commits.length; i++) {
    let response = await fetch(url);
    let commits = await response.json();
    let num = commits[i].sha;
    if (login.value === num) {
      event.preventDefault();
      user(i);
      login.value = "";
    } else {
      // event.preventDefault();
      continue;
    }
  }
}
form.addEventListener("submit", loginPass);

let arrFollowers = document.getElementsByClassName("follower");
console.log(arrFollowers);

// Dave Mackey Ilya Kantor iliakan
// c990cda098f028acc00fb1e3fce4cdac150a08a1
// 0c6a4acd94e54f34e078de8856c06b96063c4d30
// 5f2b5a87130886f59d561f3b8bf3b88c5f4d6931
// 44dc8eb846d7b6b3044fcadfcb792dbbd4d85fa6
// 026b1c4c86b5431093546a6e2ae6acd0d3cb4050
// f15700d02c05f3666cf48c61449f78aed3522932
// 0f2d22c59502dbc00dc2082f779c653ee4339370
