// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。

// Q 1
// 要素への参照を取得
var q1text = document.getElementById("q1-text");
// コンソールにテキストを表示
console.log(q1text.innerText);

// Q 2
var q2text = document.getElementById("q2-text");
q2text.innerText = "変更しました";

// Q 3
var q3text = document.getElementById("q3-text");
q3text.style.color = "red";

// Q 4
var q4texts = document.getElementsByClassName("q4-text");
q4texts[0].style.color = "red";
q4texts[1].style.color = "blue";
q4texts[2].style.color = "green";

// Q 5
var q5texts = document.getElementsByClassName("q5-text");
q5texts[0].style.backgroundColor = "red";
q5texts[1].style.backgroundColor = "blue";
q5texts[2].style.backgroundColor = "green";

// Q 6
function q6text() {
  var q6text = document.getElementById("q6-text");
  q6text.style.color = "red";
}
var q6btn = document.getElementById("q6-text");
q6btn.onclick = q6text;

// Q 7
//target要素を指定
var q7text = document.getElementById("q7-text");

//マウスが要素上に入った時
q7text.addEventListener(
  "mouseover",
  () => {
    q7text.style.backgroundColor = "#000";
    q7text.style.color = "#fff";
  },
  false
);

// Q 8
//target要素を指定
var q8text = document.getElementById("q8-text");

//マウスが要素上に入った時
q8text.addEventListener(
  "mouseover",
  () => {
    q8text.style.backgroundColor = "red";
  },
  false
);

//マウスが要素上から離れた時
q8text.addEventListener(
  "mouseleave",
  () => {
    q8text.style.backgroundColor = "";
  },
  false
);

// Q 9
function q9btnFunc() {
  var q9input = document.getElementById("q9-input");
  var q9result = document.getElementById("q9-result");
  q9result.innerText = q9input.value;
}
var q9btn = document.getElementById("q9-btn");
q9btn.onclick = q9btnFunc;

// Q 10
function q10btnFunc() {
  var q10inputValue = document.getElementById("q10-input").value;
  var q10result = document.getElementById("q10-result");

  // 年齢が20歳未満の場合は表示内容を変更
  if (q10inputValue < 20) {
    q10result.innerText = "20歳未満の方の利用は禁止です。";
  } else {
    q10result.innerText = q10inputValue;
  }
}
var q10btn = document.getElementById("q10-btn");
q10btn.onclick = q10btnFunc;

// Q 11
function q11btnFunc() {
  var q11inputNameValue = document.getElementById("q11-input-name").value;
  var q11inputAgeValue = document.getElementById("q11-input-age").value;
  var q11resultName = document.getElementById("q11-result-name");
  var q11resultAge = document.getElementById("q11-result-age");

  // 年齢が20歳未満の場合は表示内容を変更
  if (q11inputAgeValue < 20) {
    q11resultAge.innerText = "20歳未満の方の利用は禁止です。";
  } else {
    q11resultAge.innerText = q11inputAgeValue;
  }

  // 名前が空欄の場合は表示内容を変更
  if (!q11inputNameValue) {
    q11resultName.innerText = "名前が空欄です";
    q11resultName.style.color = "red";
  } else {
    q11resultName.innerText = q11inputNameValue;
    q11resultName.style.color = "";
  }
}
var q11btn = document.getElementsByClassName("q11-btn")[0];
q11btn.onclick = q11btnFunc;

// Q 12
function btna_click() {
  var q12btn = document.getElementsByClassName("q12-btn")[0];
  var q12result = document.getElementsByClassName("q12-result")[0];

  var new_element = document.createElement("p");
  new_element.textContent = q12btn.innerText;

  // target要素内の末尾に要素を追加
  q12result.appendChild(new_element);
}
var q12btn = document.getElementsByClassName("q12-btn")[0];
q12btn.onclick = btna_click;

// Q 13
function q13btnFunc() {
  var q13box = document.getElementById("q13-box");
  var new_element = document.createElement("li");
  new_element.textContent = "リンゴ";
  q13box.prepend(new_element);
}
var q13btn = document.getElementsByClassName("q13-btn")[0];
q13btn.onclick = q13btnFunc;

// Q 14
function q14btnFunc() {
  var chicken = document.getElementById("chicken");
  //親要素内の子要素（子ノード）を削除
  chicken.remove();
}
var q14btn = document.getElementsByClassName("q14-btn")[0];
// q14btn.onclick = q14btnFunc;
q14btn.addEventListener("click", q14btnFunc);

// Q 15
function q15btnFunc(e) {
  var array = {
    Google: "https://google.com",
    YouTube: "https://youtube.com",
    Amazon: "https://amazon.com",
  };

  // リンクの作成
  var link = document.createElement("a");
  link.textContent = e.target.innerText;
  link.href = array[e.target.innerText];

  // 作成したリンクを文字列として挿入
  var new_element = document.createElement("p");
  new_element.innerText = "'" + link.outerHTML + "'";

  var q15linkList = document.getElementsByClassName("q15-link-list")[0];
  q15linkList.appendChild(new_element);
}
var q15btn = document.getElementsByClassName("q15-btn");
for (var i = 0; i < q15btn.length; i++) {
  //   q15btn[i].addEventListener("click", q15btnFunc);
  q15btn[i].onclick = q15btnFunc;
}
