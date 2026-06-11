 let screen = document.getElementById("screen");
let expression = "";

function press(value) {
  expression += value;
  screen.innerText = expression;
}

function calc() {
  try {
    expression = eval(expression);
    screen.innerText = expression;
  } catch {
    screen.innerText = "خطأ";
  }
}

function clearScreen() {
  expression = "";
  screen.innerText = "0";
}
