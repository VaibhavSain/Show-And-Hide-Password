const inputBox = document.querySelector("#inputBox");
const eyeBtn = document.querySelector("#eyeIcon");

eyeBtn.addEventListener("click", () => {
  if (inputBox.type === "password") {
    inputBox.type = "text";
    eyeBtn.src = "eye-slash-solid-full.svg";
  } else {
    inputBox.type = "password";
    eyeBtn.src = "eye-solid-full.svg";
  }
});
