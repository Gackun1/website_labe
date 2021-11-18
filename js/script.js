const hamburger = () => {
  document.getElementById("line1").classList.toggle("line1_active");
  document.getElementById("line2").classList.toggle("line2_active");
  document.getElementById("line3").classList.toggle("line3_active");
  document.getElementById("header").classList.toggle("header--open");
  document
    .getElementById("hamburger_button")
    .classList.toggle("hamburger_button--open");
  document
    .getElementById("content-wrapper")
    .classList.toggle("content-wrapper--full");
};
document.getElementById("hamburger_button").addEventListener("click", () => {
  hamburger();
});

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.offsetWidth <= 480) {
    hamburger();
  }

  const loading = document.getElementById("loading");
  const loadingSvg = document.getElementById("loading-svg");
  new Vivus(
    "loading-svg",
    {
      start: "autostart",
      type: "delayed",
      duration: 150,
      animTimingFunction: Vivus.EASE,
    },
    () => {
      loading.classList.add("loading--loaded");
    }
  );
});
