function generate() {

  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  let password = "";

  for (let i = 0; i < 12; i++) {

    password += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  document.getElementById("pass").innerText =
    password;
}

function copyPassword() {

  let text =
    document.getElementById("pass").innerText;

  if (!text) {

    alert("قم بإنشاء كلمة مرور أولاً");
    return;
  }

  navigator.clipboard.writeText(text);

  alert("تم النسخ");
}
