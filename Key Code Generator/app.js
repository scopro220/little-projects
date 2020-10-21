const displayKey = document.querySelector(".key h2");
const displayKeyCode = document.querySelector(".keyCode h2");
const displayKeyCodeCard = document.querySelector(".keyCode");
const overlay = document.querySelector(".overlay");

window.addEventListener("keydown", (e) => {
  overlay.classList.add("hide");
  displayKey.innerText = e.key;
  displayKeyCode.innerText = e.keyCode;
  if (e.keyCode === 32) {
    displayKey.innerText = "spacebar";
  }
});

displayKeyCodeCard.addEventListener("click", (e) => {
  const textArea = document.createElement("textarea");
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.value = displayKeyCodeCard.querySelector("h2").innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  displayKeyCodeCard.querySelector("p").innerText = "Copied";
  setTimeout(() => {
    displayKeyCodeCard.querySelector("p").innerText = "Click To Copy";
  }, 1000);
});
