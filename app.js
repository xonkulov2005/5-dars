document.getElementById("modeToggle").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  let modeIcon = this.querySelector("img");
  if (document.body.classList.contains("light-mode")) {
    modeIcon.src = "./images/moon.png";
  } else {
    modeIcon.src = "./images/sun.png";
  }
});
