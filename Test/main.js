"use strict";
// let myName = "max";
// myName = "12.11.1994";
// console.log(typeof myName);
// let isSubscribed = false;
// console.log(typeof isSubscribed);
// let object = {};
// let array = [];
// console.log(typeof object);
// // console.log(typeof array);
// let age = {};
// console.log(typeof age);
// // let age2 = String(age);
// // let age2 = age + "";
// let age2 = Number(age);
// // let age2 = +age;
// // console.log(age2);
// let a = ;
// // let result = Boolean(a);
// let result = !!a;
// // console.log(result);
// let names = [
//   "vitya",
//   "petya",
//   "Vasya",
//   123,
//   [555],
//   ["test", [999]],
//   { color: "green" },
// ];
// console.log(names);
// console.log(names[3]);
// console.log(names[5][1][0]);
// console.log(names.length);
// let person = {
//   name: "max",
//   age: 20,
//   isMarried: false,
//   friends: names,
// };
// console.log(person.friends[0]);
// console.log(person.friends[5][1][0]);
// console.log(person.friends[6].color);
// person.name = "red";
// console.log(person.name);
// person.hear = "green";
// console.log(person);

// Home Work1
// let homeWork1 = {
//   best_score: 100,
//   last_scores: [100, 100, 100, 100, 100, 100],
//   avg_worldwide_score: 4810,
//   max_worldwide_score: 4810,
// };
// console.log(homeWork1.best_score);
// console.log(homeWork1.last_scores[2]);
// console.log(homeWork1.avg_worldwide_score);
// console.log(homeWork1.max_worldwide_score);
// homeWork1.newData = 200390;
// console.log(homeWork1.newData);
// homeWork1.best_score = "newtime " + 567;
// console.log(homeWork1.best_score);

// // homeWork2
// let homeWork2 = {
//   data: [
//     {
//       title: "level 1",
//       riddles: [
//         {
//           type: "riddle",
//           question: "Who ate the fish?",
//           hints: ["The mirror reveals everything."],
//           id: "628685822d14f3917fce30b5",
//         },
//         {
//           type: "riddle",
//           question: "Which of these cats lives in the street?",
//           hints: [
//             "A good owner takes steps to ensure that his pet is not lost.",
//           ],
//           id: "628685fa2d14f3917fce30b6",
//         },
//         {
//           type: "hidden_objects",
//           items: ["a heart", "a plastic card", "a ruler"],
//           hints: [
//             "It can be shattered.",
//             "What an interesting pattern this plate has!",
//             "A mouse wants to know her length.",
//           ],
//           id: "6286869b2d14f3917fce30b7",
//         },
//         {
//           type: "riddle",
//           question: "Find the smallest cat.",
//           hints: ["Nothing like a funny cat pic."],
//           id: "628686d62d14f3917fce30b8",
//         },
//         {
//           type: "riddle",
//           question: "Which of these cats was in a fight recently?",
//           hints: ["The wound is almost healed up."],
//           id: "628686eb2d14f3917fce30b9",
//         },
//         {
//           type: "riddle",
//           question: "How can you make the food spicier?",
//           hints: ["Nothing like a bottle of liquid heat."],
//           id: "6286871a2d14f3917fce30ba",
//         },
//         {
//           type: "hidden_words",
//           items: ["FOOD", "TRICK", "MEOW"],
//           hints: [
//             "The cat food box has it.",
//             "Look where all the cats are looking.",
//             "Check somewhere near the water.",
//           ],
//           id: "628687632d14f3917fce30bb",
//         },
//         {
//           type: "riddle",
//           question: "Where is a flower?",
//           hints: ["Some flowers have long stems."],
//           id: "62869b6f2d14f3917fce30be",
//         },
//       ],
//       custom_id: 1,
//       id: "627e2d752d14f3917fce3051",
//     },
//   ],
// };

// console.log(homeWork2);
// homeWork2.data[0].myobject = "something";
// console.log(homeWork2.data[0].myobject);
// homeWork2.data.newObject = true;
// console.log(homeWork2.data.newObject);
// console.log(homeWork2.data[0].title);
// console.log(homeWork2.data[0].riddles);
// console.log(homeWork2.data[0].custom_id);
// console.log(homeWork2.data[0].id);
// homeWork2.data[0].id = 2;
// console.log(homeWork2.data[0].id);
// console.log(homeWork2.data[0].riddles[0].question);
// console.log(homeWork2.data[0].riddles[2].hints[0]);
// homeWork2.data[0].riddles[2].hints[0] = "why I reading this?";
// console.log(homeWork2.data[0].riddles[2].hints[0]);
// homeWork2.data[0].riddles[3].arr = 145;
// console.log(homeWork2.data[0].riddles[3].arr);
// homeWork2.data[0].riddles[3].arr = [];
// console.log(homeWork2.data[0].riddles[3].arr);
// homeWork2.data[0].riddles[3].arr[0] = "point";
// console.log(homeWork2.data[0].riddles[3].arr[0]);
// homeWork2.data[0].riddles[3].arr = false;
// console.log(homeWork2.data[0].riddles[3].arr);
// homeWork2.data[0].riddles[3].arr = {};
// console.log(homeWork2.data[0].riddles[3].arr);
// homeWork2.data[0].riddles[3].arr.ram = 2;
// console.log(homeWork2.data[0].riddles[3].arr.ram);

// let history = {
//   name: "ghj",
//   age: 23,
//   history: "lkjhgf",
//   mySystem: 123,
// };
// let max = {
//   name: "fghjk",
//   age: 27,
//   history: [
//     {
//       date: "12345",
//       score: 467,
//       winner: "jhg",
//     },
//   ],
// };
// console.log(max);
// max.history[1] = history;
// console.log(max);
// console.log(history["mySystem"]);

// 1)
// let fullArr = ["apple", "orange", "lemon"];
// let emptyArr = [];
// for (let i = 0; i < fullArr.length; i++) {
//   emptyArr[i] = fullArr[i] + " " + i;
// }
// console.log(emptyArr);

// 2)
// let fullArr = ["apple", "orange", "lemon"];
// let emptyObject = {
//   city: "Warszaw",
//   popular: "very",
//   emptyArr: [],
// };
// for (let i = 0; i < fullArr.length; i++) {
//   emptyObject.emptyArr[i] = fullArr[i] + " " + i;
// }
// console.log(emptyObject);

// // // 3)
// let fullArr = ["apple", "orange", "lemon"];
// let emptyArr = [];
// for (let i = fullArr.length - 1, a = 0; i >= 0, a < fullArr.length; i--, a++) {
//   emptyArr.push(fullArr[i] + " " + a);
// }
// console.log(emptyArr);

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// let a = prompt("a", "a");
// let b = prompt("b", "b");

// alert(min(a, b));

// let year = 2;
// if (year < 2015) {
//   alert("Это слишком рано...");
// } else if (year > 2015) {
//   alert("Это поздновато");
// } else {
//   alert("Верно!");
// }

// if (year < 2000 || year < 1000 || year < 900) {
//   alert("second");
// }

// {
//   alert(123);
// }

// let myArray = [1, 5, 3, 6, 9, 2, 15, 26, 94, 67, 82, 45, 7, 62, 84, 12];
// console.log(myArray);
// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] % 2 == 0) {
//     myArray[i] = String(myArray[i]);
//   }
// }
// console.log(typeof myArray[3]);
// console.log(myArray);

// let myArray = [1, 5, 3, 6, 9, 2, 15, 26, 94, 67, 82, 45, 7, 62, 84, 12];
// console.log(myArray);
// myArray.sort((a, b) => a - b);
// console.log(myArray);

// let myArray = [1, 5, 3, 6, 9, 2, 15, 26, 94, 67, 82, 45, 7, 62, 84, 12];
// console.log(myArray);
// myArray.sort((a, b) => b - a);
// console.log(myArray);

// let letterArr = [
//   "і",
//   "у",
//   "а",
//   "ф",
//   "д",
//   "б",
//   "плдд",
//   "евмк",
//   "зсл",
//   "гтвв",
//   "цвє",
//   "їва",
//   "оій",
//   "йці",
// ];
// const collator = new Intl.Collator();
// letterArr.sort((a, b) => {
//   return collator.compare(a, b);
// });
// console.log(letterArr);

// let letterArr = [
//   "і",
//   "у",
//   "а",
//   "ф",
//   "д",
//   "б",
//   "плдд",
//   "евмк",
//   "зсл",
//   "гтвв",
//   "цвє",
//   "їва",
//   "оій",
//   "йці",
// ];
// const collator = new Intl.Collator();
// letterArr.sort((a, b) => {
//   return collator.compare(a, b);
// });
// console.log(letterArr);
// let alphabeth = {
//   a: 1,
//   е: 7,
//   є: 8,
//   и: 11,
//   і: 12,
//   ї: 13,
//   о: 19,
//   у: 24,
//   ю: 32,
//   я: 33,
// };
// for (let i = 0; i < letterArr.length; i++) {
//   if (letterArr[i] == alphabeth[i]) {
//     letterArr[i] = alphabeth.key;
//   }
// }

// for (let i = 0; i < letterArr.length; i++) {
//   letterArr[i] = letterArr[i].replace(
//     /а, е,/gi,
//     ($0) => alphabeth[$.toUpperCase()] || $0
//   );
// }

// console.log(letterArr);

// let ruSymbols = ["в", "а", "н", "у", "е"];
// let ruAlphabeth = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
//   .toLocaleLowerCase()
//   .split("");
// for (let i = 0; i < ruSymbols.length; i++) {
//   if (ruSymbols[i] === "а" || ruSymbols[i] === "е" || ruSymbols[i] === "у") {
//     let symbol = ruSymbols[i];
//     let index = null;
//     console.log(symbol);
//     for (let j = 0; j < ruAlphabeth.length; j++) {
//       if (ruAlphabeth[j] === symbol) {
//         index = j + 1;
//       }
//     }
//     console.log(index);
//     ruSymbols[i] = index;
//   }
//   console.log(ruSymbols);
// }

// let myObject = {
//   name: "Max",
//   lastName: "Omelchuk",
//   age: 27,
//   dog: "Tuzik",
// };
// console.log(myObject);
// let count = 0;
// for (let key in myObject) {
//   console.log(key);
//   count++;

//   if (typeof myObject[key] === "string") {
//     console.log(myObject[key]);
//     myObject[count] = myObject[key];
//     delete myObject[key];
//   }
// }
// console.log(myObject);

// let key = {
//   a: 2,
//   d: 3,
// };

// console.log(Object.keys(key));
// console.log(Object.values(key));
// for (let i = 0; i < Object.keys(key).length; i++) {}
// for (let i = 0; i < 8; i++) {}
// for (let i in {}) {};
// for (let i of []) {};

// let i = 0;
// let count = 0;
// while (i < 5) {
//   let j = 7;
//   count = 0;
//   if (i === 2 || i === 3) {
//     count++;
//   }
//   // console.log(i);
//   i++;
// }
// console.log(count);
// console.log(i);
// console.log(1234);

// let name1 = "Max";
// function showName(name) {
//   return `Hello ${name}`;
// }
// console.log(showName(name1));

// let testArray = ["Zero", "First", "Second", "Third"];
// let count = 0;
// function showIndex(index) {
//   console.log(index);
//   return testArray[index];
// }
// console.log(showIndex(1));

// let dayX = prompt("когда");
// let birth = Date.parse(dayX);
// function howOld(date) {
//   let nowTime = new Date();
//   let age = nowTime - date;
//   age = Math.floor(age / 1000 / 60 / 60 / 24 / 365.25);
//   console.log(age);
// }
// howOld(birth);

// let getdate = prompt("Введите дату");
// let date = Date.parse(getdate);
// let result;

// function getDateBoolean(date) {
//   let start = new Date("2000, 02, 02");
//   let end = new Date("2004, 04, 04");
//   return date > start && date < end;
// }
// console.log(getDateBoolean(date));

// let getdate = new Date("2000/02/04");
// function getDateDots(getdate) {
//   let date = getdate.toLocaleDateString();
//   return console.log(date);
// }
// getDateDots(getdate);

// function getDateDots(date) {
//   let splitDate = date.split("/");
//   let joinDate = splitDate.join("|");
//   return joinDate;
// }
// console.log(getDateDots("2000/02/04"));

// let date = new Date(2012, 3, 4, 7, 30);
// let zone = 4;
// function timeZone(date, zone) {
//   let dateStamp = date.getTime();
//   let newTime = dateStamp + 60 * zone * 60 * 1000;
//   let newTineConv = new Date(newTime);
//   return console.log(newTineConv);
// }
// timeZone(date, zone);
// timeZone(date, 2);

// console.log(
//   getPerson(function () {
//     let name = "Max1";
//     return name;
//   })
// );
// function getPerson(getName) {
//   let name = getName();
//   let age = 19;
//   return { name: name, age: age };
// }

// [1, 2, 3].forEach(function (value, index) {});

// const arr1 = [1, 2, 3, 4];
// const arr2 = arr1.reduce(function (acc, val) {
//   return acc + val;
// });
// console.log(arr2);

// let strArray = ["my", "name", "is", "Max"];
// function mapForEach(arr, fn) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(fn(arr[i]));
//     console.log(newArray[i]);
//   }
//   return newArray;
// }
// let lenArray = mapForEach(strArray, function (item) {
//   return item.length;
// });

// console.log(lenArray);

// console.log(this);

// // function sayHi() {
// //   alert("hi");
// // }
// let sayHi = () => {
//   console.log(this, "sayhi");
// };
// sayHi();
// function sayHi1() {
//   console.log(this, "hiiii\niiii");
// }
// sayHi1();

// let me = Symbol("231");
// console.log(me);
// let obj = {
//   name: "Max",
// };
// obj[me] = 1;
// console.log(obj[me]);
// let obj2 = Object.assign(obj);
// console.log(obj2);

// let person = {
//   name: "Maxim",
//   surname: "Omelchuk",
//   age: 27,
//   showPerson: function () {
//     return this.name + " " + this.surname;
//   },
//   showIfAge: function () {
//     if (this.age < 18) {
//       return "Oh my sweety baby";
//     }
//     return "Yeah boy!";
//   },
//   cars: [
//     {
//       name: "Ford Mustang",
//       purchase_date: 2009,
//       displacement: 204926,
//       price: 40000,
//     },
//     {
//       name: "Toyota Camry",
//       purchase_date: 2010,
//       displacement: 58350,
//       price: 35000,
//     },
//     {
//       name: "Mitsubishi Lancer",
//       purchase_date: 2005,
//       displacement: 459300,
//       price: 12000,
//     },
//     {
//       name: "Lamborgini Awentador",
//       purchase_date: 2017,
//       displacement: 63700,
//       price: 200000,
//     },
//     {
//       name: "Vaz 2101",
//       purchase_date: 2012,
//       displacement: 9758280,
//       price: 120,
//     },
//   ],
//   lastBoughtCar: function (a, b) {
//     person.cars.sort(function (a, b) {
//       return b.purchase_date - a.purchase_date;
//     });
//     return person.cars[0].name;
//   },
//   theUsefullCar: function (a, b) {
//     person.cars.sort(function (a, b) {
//       return b.displacement - a.displacement;
//     });
//     return person.cars[0].name;
//   },
//   theMajorCar: function () {
//     let major = person.lastBoughtCar() + " - " + person.theUsefullCar();
//     return major;
//   },
// };

// console.log(person.showPerson());
// console.log(person.showIfAge());
// console.log(person.lastBoughtCar());
// console.log(person.theUsefullCar());
// console.log(person.theMajorCar());

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// console.log(user);
// user.name = "Pete";
// delete user.name;
// console.log(user);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum = salaries[key] + sum;
// }
// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
//   newObj: { map: "is", job: 22, new2: { name: "Max" } },
// };
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu);
// console.log(menu);
// let menu2 = {};
// for (let key in menu) {
//   menu2[key] = menu[key];
// }
// console.log(menu2);
// let menu3 = Object.assign({}, menu2);
// console.log(menu3);

// var obj = Object.create(
//   { foo: 1 },
//   {
//     // foo является унаследованным свойством.
//     bar: {
//       value: 2, // bar является неперечисляемым свойством.
//     },
//     baz: {
//       value: 3,
//       enumerable: true, // baz является собственным перечисляемым свойством.
//     },
//   }
// );
// console.log(obj);
// var copy = Object.assign({}, obj);
// console.log(copy); // { baz: 3 }

/*в моем примере new2 об'ект копирует, а в примере с урока нет */

// function random(min, max) {
//   let num = min + Math.random() * (max - min);
//   return num.toFixed(0);
// }

// console.log(random(1, 5));
// console.log(random(1, 5));
// console.log(random(1, 5));

// console.log("\u{1F62D}");
// let b = "hi a new another man";
// let i = 0;
// let pos = 0;
// let word = "a";
// while (true) {
//   let position = b.indexOf(word, pos);
//   if (position == -1) break;
//   pos++;
// }
// console.log(pos);
// console.log(b.substr(2, 9));
// function newB() {
//   b = b[0].toUpperCase() + b.substring(1);
// }
// newB();
// console.log(b);

// function checkSpam(spam) {
//   spam = spam.toLowerCase();
//   if (spam.includes("oj", 0)) return true;
//   else {
//     return false;
//   }
// }
// console.log(checkSpam(b));

// let str = "Вот, что мне хотелось бы сказать на эту тему:";
// let str2 = "Вот, что";
// let maxLength = 15;
// function truncate(str, maxLength) {
//   let strLength = str.length - 1;
//   console.log(strLength);
//   if (str.length > maxLength) {
//     str = str.slice(0, maxLength);
//     return console.log(str + "...");
//   }
//   return console.log(str);
// }
// truncate(str, maxLength);

// let a = {
//   name: "Max",
//   apple: {},
// };
// if (a.apple.test?.test) {
//   alert(123);
// }
// console.log(location);
// location.href = "https://www.vk.com";
// // window.alert();
// localStorage.setItem("test", 123);
// console.log(localStorage.getItem("test"));
// localStorage.removeItem("test");
