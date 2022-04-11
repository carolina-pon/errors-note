console.log("test");

// getElementById
const title1 = document.getElementById("title");
console.log(title1);

// querySelector
const title2 = document.querySelector("#title");
console.log(title2);

// HTMLのタグっぽいものがJSの変数として取得できている
// 取得してきたDOM要素をelementという☆

//createElement
const divEl = document.createElement("div");
const pEl = document.createElement("p");
// appendChildでElement配下に他のElementを作れる
divEl.appendChild(pEl);
console.log(divEl);

const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";

const div1El = document.querySelector(".container");
div1El.appendChild(buttonEl);