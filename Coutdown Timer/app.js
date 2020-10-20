const timer = document.querySelector("h1");
let timerSecond = 10;

displayTime(timerSecond);

const countdown = setInterval(() => {
  timerSecond--;
  displayTime(timerSecond);
  if (timerSecond < 0 || timerSecond < 1) {
    endTime();
    clearInterval(countdown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timer.innerText = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function endTime() {
  timer.innerText = "Time's up";
}
