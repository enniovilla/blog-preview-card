document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector("h1");
  let container = document.querySelector(".container");

  document.addEventListener("mouseover", function (e) {
    if (e.target === header) {
      header.style.color = "hsl(47, 88%, 63%)";
      header.style.cursor = "pointer";
      container.style.boxShadow = "10px 10px";
    } else {
      header.style.color = "";
      container.style.boxShadow = "";
    }
  });
});