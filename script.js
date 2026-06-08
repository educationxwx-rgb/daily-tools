 let current = "";

/* إظهار أداة */
function showTool(id) {
  document.querySelectorAll(".tool").forEach(tool => {
    tool.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}

/* الحاسبة */
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

/* تحويل العملات */
function convert() {
  let value = Number(document.getElementById("usd").value);

  if (isNaN(value)) {
    document.getElementById("result").innerText = "أدخل قيمة صحيحة";
    return;
  }

  let rate = 10.2;

  document.getElementById("result").innerText =
    (value * rate).toFixed(2) + " درهم";
}

/* حساب العمر */
function age() {
  let year = Number(document.getElementById("year").value);

  if (!year) {
    document.getElementById("ageResult").innerText =
      "أدخل سنة الميلاد";
    return;
  }

  let currentYear = new Date().getFullYear();

  document.getElementById("ageResult").innerText =
    (currentYear - year) + " سنة";
}

/* مولد كلمة المرور */
function generate() {
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  let password = "";

  for (let i = 0; i < 12; i++) {
    password += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  document.getElementById("pass").innerText = password;
}

/* نسخ كلمة المرور */
function copyPassword() {
  let text = document.getElementById("pass").innerText;

  if (!text) {
    alert("قم بإنشاء كلمة مرور أولاً");
    return;
  }

  navigator.clipboard.writeText(text);
  alert("تم النسخ");
}

/* الرجوع للرئيسية */
function goHome() {
  document.querySelectorAll(".tool").forEach(tool => {
    tool.classList.add("hidden");
  });

  current = "";
  document.getElementById("screen").innerText = "0";
}


/* BMI */
function calculateBMI() {

  let weight =
    Number(document.getElementById("weight").value);

  let height =
    Number(document.getElementById("height").value);

  if (!weight || !height) {
    document.getElementById("bmiResult").innerText =
      "أدخل الوزن والطول";
    return;
  }

  let bmi = weight / (height * height);

  let status = "";

  if (bmi < 18.5) {
    status = "نقص الوزن";
  } else if (bmi < 25) {
    status = "وزن طبيعي";
  } else if (bmi < 30) {
    status = "زيادة في الوزن";
  } else {
    status = "سمنة";
  }

  document.getElementById("bmiResult").innerText =
    `BMI: ${bmi.toFixed(1)} - ${status}`;
}

 /* ⏰ Timer */

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