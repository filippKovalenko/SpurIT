let mainCollapsible = document.querySelector("main");
let collapsible = document.querySelector(".collapsible");
let buttonCollaps = document.querySelector(".collapsible__button");
let buttonVisible = document.querySelector(".collapsible__action--visible");
let buttonHidden = document.querySelector(".collapsible__action--hidden");
let contentCollaps = document.querySelector(".collapsible__content");
let paragraph = document.querySelector("p");

Element.prototype.styles = function (attrs) {
  Object.keys(attrs).forEach((attr) => {
    this.style[attr] = attrs[attr];
  });
};

collapsible.styles({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  marginTop: "100px",
});

buttonCollaps.styles({
  display: "flex",
  width: "200px",
  justifyContent: "space-around",
  alignItems: "center",
  border: "none",
  backgroundColor: "unset",
  padding: "0px",
});

contentCollaps.styles({
  display: "inline",
  width: "550px",
  height: "50px",
  textAlign: "center",
  backgroundColor: "#E5E5E5",
});

buttonVisible.styles({
  padding: "18px 36px",
  backgroundColor: "aquamarine",
  cursor: "pointer",
});

buttonHidden.styles({
  padding: "18px 30px",
  backgroundColor: "aqua",
  cursor: "pointer",
});

let animEnd = contentCollaps.animate(
  {
    opacity: [1, 0],
    height: ["50px", "0px"],
  },
  {
    duration: 250,
    easing: "ease-in",
  }
);

let animStart = contentCollaps.animate(
  {
    opacity: [0, 1],
    height: ["0px", "50px"],
  },
  {
    duration: 250,
    easing: "ease-in",
  }
);

animEnd.pause();
animStart.pause();

buttonVisible.style.display = "none";

buttonVisible.addEventListener("click", function () {
  if (collapsible) {
    (contentCollaps.style.display = "block"), animEnd.play();
    buttonVisible.style.display = "none";
    buttonHidden.style.display = "block";
  }
});

animEnd.addEventListener("finish", function () {
  contentCollaps.style.display = "none";
});

buttonHidden.addEventListener("click", function () {
  if (collapsible) {
    (contentCollaps.style.display = "block"), animStart.play();
    buttonVisible.style.display = "block";
    buttonHidden.style.display = "none";
  }
});
