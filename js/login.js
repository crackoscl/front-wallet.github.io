$("#login").submit(function (e) {
  e.preventDefault();
  const email = $("#inputEmail").val();
  const pass = $("#inputPassword").val();

  if (email === "glagos@hola.cl" && pass === "pikaxu") {
    location.href = "dashboard.html";
  } else {
    $("#inputEmail").val("");
    $("#inputPassword").val("");
    alertMensaje("Datos de login incorrectos!","danger",true);
  }
});

