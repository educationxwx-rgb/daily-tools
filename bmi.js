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
