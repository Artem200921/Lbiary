// ______________________________________OverlayJS______________________________________
const button = document.querySelector(".hero__submit");

const itemW = document.getElementById("western_front_modal_open");
const itemH = document.getElementById("hobbit_modal_open");
const itemSh = document.getElementById("sherlock_modal_open");
const itemX = document.getElementById("xmas_carol_modal_open");
const itemJ = document.getElementById("j");
const itemS = document.getElementById("s");

button.addEventListener("click", () => {
  const wrap = document.getElementById("overlay");
  const inputSecond = document.getElementById("input-second").value;
  const input = document.getElementById("input").value;
  wrap.style.top = "261px";

  // Reset all items
  [itemW, itemH, itemSh, itemX, itemJ, itemS].forEach((item) =>
    item.classList.remove("active")
  );

  if (
    inputSecond === "j" ||
    inputSecond === "J. K. Rowling" ||
    inputSecond === "J"
  ) {
    itemJ.classList.add("active");
  } else if (
    inputSecond === "s" ||
    inputSecond === "Stephen King" ||
    inputSecond === "S"
  ) {
    itemS.classList.add("active");
  } else if (input === "w" || input === "Western front" || input === "W") {
    itemW.classList.add("active");
  } else if (input === "h" || input === "Hobbit" || input === "H") {
    itemH.classList.add("active");
  } else if (input === "sh" || input === "Sherlock" || input === "Sh") {
    itemSh.classList.add("active");
  } else if (input === "x" || input === "Xmas" || input === "X") {
    itemX.classList.add("active");
  } else {
    wrap.style.top = "-500px";
  }
});

// ______________________________________OverlayJS______________________________________;
function modalIsOpened(modal, backdrop, close) {
  modal.addEventListener("click", () => {
    const backDrop = document.querySelector(backdrop);
    const buttDrop = document.querySelector(close);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    backDrop.classList.add("show-backdrop");
    buttDrop.addEventListener("click", () => {
      body.style.overflow = "visible";
      backDrop.classList.remove("show-backdrop");
    });
  });
}

modalIsOpened(
  document.getElementById("western_front_modal_open"),
  ".western_front_backdrop",
  ".western_front_close"
);
modalIsOpened(
  document.getElementById("hobbit_modal_open"),
  ".hobbit_front_backdrop",
  ".hobbit_front_close"
);
modalIsOpened(
  document.getElementById("sherlock_modal_open"),
  ".sherlock_front_backdrop",
  ".sherlock_front_close"
);
modalIsOpened(
  document.getElementById("xmas_carol_modal_open"),
  ".xmas_front_backdrop",
  ".xmas_front_close"
);

//------------------------------ MEGA FOCUS--------------------------------------------

// let jkitem = document.querySelector(".jk_item");
// let skitem = document.querySelector(".sk_item");

// jkitem.addEventListener("mouseenter", () => {
// let jkrowling_booklist = document.querySelector(".jkrowling_booklist")

// });

// skitem.addEventListener("mouseenter", () => {
// let steven_king_booklist = document.querySelector(".steven_king_booklist")

// });
