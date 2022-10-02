// /**Задание 1 */
// let pictures = [
//   (src = "./img/1.jpg"),
//   (src = "./img/2.jpg"),
//   (src = "./img/3.jpg"),
//   (src = "./img/4.jpg"),
//   (src = "./img/5.jpg"),
//   (src = "./img/6.webp"),
//   (src = "./img/7.jpg"),
//   (src = "./img/8.jpg"),
//   (src = "./img/9.jpg"),
//   (src = "./img/10.jpg"),
// ];

// function createDom() {
//   let div = document.createElement("div");
//   for (let i = 0; i < pictures.length; i++) {
//     let img = document.createElement("img");
//     img.src = pictures[i];
//     div.append(img);
//   }
//   document.body.append(div);
//   let style = document.createElement("style");
//   style.innerHTML = "img {width: 300px; height: 250px;}";
//   document.body.append(style);
// }
// createDom();

// /**Задание 2 */

// function createSelect() {
//   let select = document.createElement("select");
//   for (let i = 0; i < pictures.length; i++) {
//     let option = document.createElement("option");
//     option.value = "value" + (i + 1);
//     option.innerText = "Photo" + " " + (i + 1);
//     select.append(option);
//   }
//   document.body.append(select);
//   let style = document.createElement("style");
//   style.innerHTML =
//     "select {width: 200px; height: 50px; border-radius: 5px; background-color: rgb(255, 200, 97);}";
//   document.body.append(style);
// }
// createSelect();

// let arrselect = document.getElementsByTagName("select");
// select = arrselect[0];
// // console.log(select.length);
// let div = document.createElement("div");
// document.body.append(div);
// select.addEventListener("input", function () {
//   for (let i = 0; i < select.length; i++) {
//     if (select[i].selected) {
//       let img = document.createElement("img");
//       div.innerHTML = "";
//       img.src = pictures[i];

//       div.append(img);
//     }
//   }
// });

// /* Задание 3*/

// let news = [
//   {
//     title: "Title1",
//     description: "Description1",
//     publish_date: "publish_date1",
//     preview_img: "./img/1.jpg",
//   },
//   {
//     title: "Title2",
//     description: "Description2",
//     publish_date: "publish_date2",
//     preview_img: "./img/2.jpg",
//   },
//   {
//     title: "Title3",
//     description: "Description3",
//     publish_date: "publish_date3",
//     preview_img: "./img/3.jpg",
//   },
//   {
//     title: "Title4",
//     description: "Description4",
//     publish_date: "publish_date4",
//     preview_img: "./img/4.jpg",
//   },
//   {
//     title: "Title5",
//     description: "Description5",
//     publish_date: "publish_date5",
//     preview_img: "./img/5.jpg",
//   },
//   {
//     title: "Title6",
//     description: "Description6",
//     publish_date: "publish_date6",
//     preview_img: "./img/6.webp",
//   },
//   {
//     title: "Title7",
//     description: "Description7",
//     publish_date: "publish_date7",
//     preview_img: "./img/7.jpg",
//   },
//   {
//     title: "Title8",
//     description: "Description8",
//     publish_date: "publish_date8",
//     preview_img: "./img/8.jpg",
//   },
// ];
// let button = document.createElement("button");
// button.id = "button";
// button.innerText = "Show News +";
// console.log(button);
// let divNewsMain = document.createElement("div");
// divNewsMain.id = "divNewsMain";

// mainDiv = document.getElementById("divNewsMain");
// divNewsMain.append(button);
// document.body.append(divNewsMain);
// let styleNewsMain = document.createElement("style");
// styleNewsMain.innerHTML = "#divNewsMain {position: relative;}";

// let style = document.createElement("style");
// style.innerHTML =
//   "button {width: 300px; height: 50px; color: blue; background-color: yellow; border-radius: 10px; font-size: 24px; position: absolute; left: 40%;}";
// document.body.append(style);

// let i = 0;

// function showNews() {
//   let divNews = document.createElement("div");
//   divNews.id = "divNews";
//   let count = 0;
//   for (; i < news.length; i++) {
//     if (count < 4) {
//       let newsImg = document.createElement("img");
//       newsImg.src = news[i].preview_img;
//       divNews.append(newsImg);
//       let newsTitle = document.createElement("H2");
//       newsTitle.innerText = news[i].title;
//       divNews.append(newsTitle);
//       let newsDescription = document.createElement("div");
//       newsDescription.innerText = news[i].description;
//       divNews.append(newsDescription);
//       let newsPublish_date = document.createElement("div");
//       newsPublish_date.innerText = news[i].publish_date;
//       divNews.append(newsPublish_date);
//       count++;
//     } else {
//       break;
//     }
//   }
//   document.body.append(divNews);
// }
// button.addEventListener("click", showNews);

async function getData() {
  let response = await fetch(
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
  );
  let result = await response.json();
  console.log(result);
  console.log(result[4].author.login);
}
getData();
