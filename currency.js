function convert() {

  let value =
    Number(document.getElementById("usd").value);

  if (isNaN(value) || value <= 0) {

    document.getElementById("result").innerText =
      "أدخل قيمة صحيحة";

    return;
  }

  let rate = 10.2;

  document.getElementById("result").innerText =
    (value * rate).toFixed(2) + " درهم";
}
