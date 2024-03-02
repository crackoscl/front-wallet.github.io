$(document).ready(function () {
  const hamBurger = document.querySelector(".toggle-btn");

  hamBurger.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand");
  });

  if (localStorage.getItem("saldo") === null) {
    localStorage.setItem("saldo", 0);
  }

  if (localStorage.getItem("transaciones") === null) {
    localStorage.setItem("transaciones", JSON.stringify([]));
  }

  $("#logout").click(function (){
    location.href = "index.html";
  })
});

