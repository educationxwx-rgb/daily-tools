function age() {

  let year =
    Number(document.getElementById("year").value);

  if (!year) {

    document.getElementById("ageResult").innerText =
      "أدخل سنة الميلاد";

    return;
  }

  let currentYear =
    new Date().getFullYear();

  document.getElementById("ageResult").innerText =
    (currentYear - year) + " سنة";
}
