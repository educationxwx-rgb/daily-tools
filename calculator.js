let current = "";

function press(val) {
  current += val;
  document.getElementById("screen").innerText = current;
}

function calc() {
  try {
    current = eval(current).toString();
    document.getElementById("screen").innerText = current;
  } catch {
    document.getElementById("screen").innerText = "Error";
    current = "";
  }
}

function clearScreen() {
  current = "";
  document.getElementById("screen").innerText = "0";
}
