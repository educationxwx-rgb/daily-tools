let timer;
let remaining = 0;

function startTimer() {

  if (remaining <= 0) {
    remaining =
      Number(document.getElementById("seconds").value);
  }

  if (!remaining) {
    alert("أدخل عدد الثواني");
    return;
  }

  clearInterval(timer);

  timer = setInterval(() => {

    document.getElementById("timerResult").innerText =
      remaining + " ثانية";

    remaining--;

    if (remaining < 0) {

      clearInterval(timer);

      document.getElementById("timerResult").innerText =
        "⏰ انتهى الوقت";

      alert("انتهى الوقت!");
    }

  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}
