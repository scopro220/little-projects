const form = document.querySelector("form");
const numberFact = document.querySelector(".number-fact");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = e.target.querySelector("input").value;
  const loadText = "Loading...";
  numberFact.innerText = loadText;
  const baseURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/";
  fetch(baseURL + number, {
    method: "GET",
    headers: {
      "x-requested-with": "text/plain",
    },
  })
    .then((res) => res.text())
    .then((text) => (numberFact.innerText = text));
});
