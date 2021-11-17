document.addEventListener("DOMContentLoaded", () => {
  const hamburger = () => {
    document.getElementById("line1").classList.toggle("line1_active");
    document.getElementById("line2").classList.toggle("line2_active");
    document.getElementById("line3").classList.toggle("line3_active");
    document.getElementById("header").classList.toggle("header--open");
  };
  document.getElementById("hamburger_button").addEventListener("click", function () {
    hamburger();
  });
});
