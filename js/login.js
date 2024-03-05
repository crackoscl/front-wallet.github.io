$("#login").submit(function (e) {
  e.preventDefault();
  const email = $("#inputEmail").val();
  const pass = $("#inputPassword").val();

  if (email === "glagos@hola.cl" && pass === "pikaxu") {
    location.href = "dashboard.html";
  } else {
    $("#inputEmail").val("");
    $("#inputPassword").val("");
    $("#errorform").fadeIn(1000);
    setTimeout(function () {
      $("#errorform").fadeOut(1000);
    }, 5000);
  }
});

