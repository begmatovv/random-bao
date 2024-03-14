const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const modeLocal = localStorage.getItem("mode");
if (modeLocal) {
  body.classList.add("dark-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
}
const toggleModeBtn = () => {
  body.classList.toggle("dark-mode");
};

darkBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "dark-mode");
});
lightBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "");
});
