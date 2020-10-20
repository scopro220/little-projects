const button = document.querySelector(".container button");
const jokeText = document.querySelector(".container p");

button.addEventListener("click", getJoke);

document.addEventListener("DOMContentLoaded", getJoke);

async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObject = await jokeData.json();
  jokeText.innerText = jokeObject.joke;
}
