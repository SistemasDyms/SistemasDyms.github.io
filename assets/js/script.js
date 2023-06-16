$(document).ready(function () {
  var contador = 1;

  $("#btn-menu").click(function () {
    if (contador == 1) {
      $("#menu").animate({
        left: "0",
      });
      contador = 0;
    } else {
      contador = 1;
      $("#menu").animate({
        left: "-100%",
      });
    }
  });
});

const typed = new Typed(".typed", {
  strings: ["Entusiasta", "Autodidacta", "Comprometido"],
  smartBackspace: true,
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  cursorChar: " |",
  contentType: "html",
});

let element = document.querySelector("h4");
let li = document.links[3];
let form = document.forms;
console.log(form);
