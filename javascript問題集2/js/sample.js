//ここにjsを書いていきます

// Q 1
let q1btn = document.getElementById("js-click-btn");
q1btn.onclick = function () {
  q1btn.classList.add("large-btn");
};

// Q 2
let q2btn = document.getElementById("js-hover-btn");

//マウスが要素上に入った時
q2btn.addEventListener(
  "mouseover",
  () => {
    q2btn.classList.add("opacity");
  },
  false
);

//マウスが要素上から離れた時
q2btn.addEventListener(
  "mouseleave",
  () => {
    q2btn.classList.remove("opacity");
  },
  false
);

// Q 3
let q3target = document.getElementById("js-target-element");
let q3btn_show = document.getElementById("js-show-btn");
q3btn_show.onclick = function () {
  q3target.classList.remove("is-hidden");
};

let q3btn_hide = document.getElementById("js-hide-btn");
q3btn_hide.onclick = function () {
  q3target.classList.add("is-hidden");
};

// Q 4
let q4btn_add = document.getElementById("js-add-btn");
q4btn_add.onclick = function () {
  let q4target = document.getElementById("js-add-target");
  let new_element = document.createElement("p");
  new_element.textContent = "テキストを追加";
  q4target.prepend(new_element);
};

// Q 5
let q5btn = document.getElementsByClassName("js-toggle")[0];
q5btn.onclick = function () {
  let q5target = document.getElementsByClassName("toggle-menu")[0];
  q5target.classList.toggle("is-show");
};

// Q 6
let q6btn = document.getElementById("toggle");
q6btn.onclick = function () {
  q6btn.classList.toggle("is-open");

  let q6target = document.getElementsByClassName("drower")[0];
  q6target.classList.toggle("is-open");
};

// Q 7
let q7btn = document.getElementsByClassName("js-scroll")[0];
q7btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Q 8
let q8btn_show = document.getElementsByClassName("js-modal")[0];
let q8target = document.getElementsByClassName("modal-content")[0];
let q8target_2 = document.getElementById("modal-bg");

q8btn_show.onclick = function () {
  q8target.classList.add("is-show");
  q8target_2.classList.add("is-show");
};

let q8btn_closes = document.getElementsByClassName("js-modal-close");
for (let q8btn_close of q8btn_closes) {
  q8btn_close.onclick = function () {
    q8target.classList.remove("is-show");
    q8target_2.classList.remove("is-show");
  };
}

// Q 9
let tabArray = document.getElementsByClassName("tab");
for (let i = 0; i < tabArray.length; i++) {
  tabArray[i].onclick = function () {
    // クリックしたタブが非アクティブの場合
    if (!tabArray[i].classList.contains("active")) {
      // アクティブだったタブからクラス削除
      let activeArray = document.getElementsByClassName("active");
      for (let i = activeArray.length - 1; i >= 0; i--) {
        // 配列の先頭からクラス削除すると、[0]削除時に[1]が[0]にスライドして不具合が起きる
        activeArray[i].classList.remove("active");
      }

      // 表示するタブを指定
      let targetId = "tab0" + (i + 1);
      let target = document.getElementById(targetId);

      // アクティブクラスを付与
      tabArray[i].classList.add("active");
      target.classList.add("active");
    }
  };
}

// Q 10
let prev = document.getElementsByClassName("prev-slider")[0];
let next = document.getElementsByClassName("next-slider")[0];

let sliderwidth = document.getElementsByClassName("slide")[0];
let width = sliderwidth.clientWidth;

let sliderlist = document.getElementsByClassName("slide-wrapper")[0];
let sliderlist_item = document.getElementsByClassName("slide");

let counter = 0;

next.addEventListener("click", function () {
  prev.style.display = "block";
  sliderlist.style.transition = ".3s";
  counter++;
  sliderlist.style.transform = "translateX(" + -width * counter + "px)";
});

sliderlist.addEventListener("transitionend", function () {
  if (counter == sliderlist_item.length - 1) {
    sliderlist.style.transition = "none";
    next.style.display = "none";
  }
});

prev.addEventListener("click", function () {
  next.style.display = "block";
  sliderlist.style.transition = ".3s";
  counter--;
  sliderlist.style.transform = "translateX(" + -width * counter + "px)";

  sliderlist.addEventListener("transitionend", function () {
    if (counter == sliderlist_item.length - sliderlist_item.length) {
      sliderlist.style.transition = "none";
      prev.style.display = "none";
    }
  });
});
